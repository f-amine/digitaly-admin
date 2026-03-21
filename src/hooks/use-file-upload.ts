"use client";

import { useState, useRef, useCallback } from "react";

interface UseFileUploadOptions {
  productId: string;
  onComplete?: (result: { key: string; url: string }) => void;
  onError?: (error: Error) => void;
  chunkSize?: number;
  concurrency?: number;
}

interface UploadState {
  status: "idle" | "uploading" | "complete" | "error";
  progress: number;
  fileName: string | null;
  error: string | null;
}

const DEFAULT_CHUNK_SIZE = 10 * 1024 * 1024; // 10MB
const DEFAULT_CONCURRENCY = 3;

export function useFileUpload(options: UseFileUploadOptions) {
  const {
    productId,
    onComplete,
    onError,
    chunkSize = DEFAULT_CHUNK_SIZE,
    concurrency = DEFAULT_CONCURRENCY,
  } = options;

  const [state, setState] = useState<UploadState>({
    status: "idle",
    progress: 0,
    fileName: null,
    error: null,
  });

  const abortControllerRef = useRef<AbortController | null>(null);
  const uploadMetaRef = useRef<{ key: string; uploadId: string } | null>(null);

  const upload = useCallback(
    async (file: File) => {
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      setState({
        status: "uploading",
        progress: 0,
        fileName: file.name,
        error: null,
      });

      try {
        // 1. Initiate multipart upload
        const initRes = await fetch("/api/upload/initiate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            filename: file.name,
            contentType: file.type || "application/octet-stream",
            productId,
          }),
          signal: abortController.signal,
        });

        if (!initRes.ok) {
          throw new Error("Failed to initiate upload");
        }

        const { uploadId, key } = (await initRes.json()) as {
          uploadId: string;
          key: string;
        };
        uploadMetaRef.current = { key, uploadId };

        // 2. Slice file into chunks
        const totalParts = Math.ceil(file.size / chunkSize);
        const completedParts: Array<{ ETag: string; PartNumber: number }> = [];
        let completedCount = 0;

        // 3. Upload chunks with concurrency control
        const uploadPart = async (partNumber: number) => {
          if (abortController.signal.aborted) return;

          const start = (partNumber - 1) * chunkSize;
          const end = Math.min(start + chunkSize, file.size);
          const chunk = file.slice(start, end);

          // Get presigned URL
          const presignRes = await fetch("/api/upload/presign", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key, uploadId, partNumber }),
            signal: abortController.signal,
          });

          if (!presignRes.ok) {
            throw new Error(`Failed to get presigned URL for part ${partNumber}`);
          }

          const { presignedUrl } = (await presignRes.json()) as {
            presignedUrl: string;
          };

          // Upload chunk to presigned URL
          const uploadRes = await fetch(presignedUrl, {
            method: "PUT",
            body: chunk,
            signal: abortController.signal,
          });

          if (!uploadRes.ok) {
            throw new Error(`Failed to upload part ${partNumber}`);
          }

          const etag = uploadRes.headers.get("ETag");
          if (!etag) {
            throw new Error(`No ETag returned for part ${partNumber}`);
          }

          completedParts.push({ ETag: etag, PartNumber: partNumber });
          completedCount++;

          setState((prev) => ({
            ...prev,
            progress: Math.round((completedCount / totalParts) * 100),
          }));
        };

        // Process parts with concurrency limit
        const partNumbers = Array.from(
          { length: totalParts },
          (_, i) => i + 1,
        );
        const executing: Promise<void>[] = [];

        for (const partNumber of partNumbers) {
          if (abortController.signal.aborted) break;

          const p = uploadPart(partNumber).then(() => {
            void executing.splice(executing.indexOf(p), 1);
          });
          executing.push(p);

          if (executing.length >= concurrency) {
            await Promise.race(executing);
          }
        }

        await Promise.all(executing);

        if (abortController.signal.aborted) return;

        // 4. Complete multipart upload
        const sortedParts = completedParts.sort(
          (a, b) => a.PartNumber - b.PartNumber,
        );

        const completeRes = await fetch("/api/upload/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key, uploadId, parts: sortedParts }),
          signal: abortController.signal,
        });

        if (!completeRes.ok) {
          throw new Error("Failed to complete upload");
        }

        const { url } = (await completeRes.json()) as { url: string };

        setState({
          status: "complete",
          progress: 100,
          fileName: file.name,
          error: null,
        });

        uploadMetaRef.current = null;
        onComplete?.({ key, url });
      } catch (err) {
        if (abortController.signal.aborted) return;

        const error =
          err instanceof Error ? err : new Error("Upload failed");

        setState({
          status: "error",
          progress: 0,
          fileName: file.name,
          error: error.message,
        });

        onError?.(error);
      }
    },
    [productId, chunkSize, concurrency, onComplete, onError],
  );

  const abort = useCallback(async () => {
    // Abort in-progress fetches
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;

    // Clean up R2 multipart upload
    const meta = uploadMetaRef.current;
    if (meta) {
      try {
        await fetch("/api/upload/abort", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key: meta.key, uploadId: meta.uploadId }),
        });
      } catch {
        // Best effort cleanup
      }
      uploadMetaRef.current = null;
    }

    setState({
      status: "idle",
      progress: 0,
      fileName: null,
      error: null,
    });
  }, []);

  return { upload, abort, state };
}
