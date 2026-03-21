import { type NextRequest, NextResponse } from "next/server";
import { CompleteMultipartUploadCommand } from "@aws-sdk/client-s3";
import { auth } from "~/server/better-auth";
import { getR2Client, getR2BucketName, getR2PublicUrl } from "~/server/r2";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({ headers: req.headers });
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as {
    key: string;
    uploadId: string;
    parts: Array<{ ETag: string; PartNumber: number }>;
  };

  const { key, uploadId, parts } = body;

  if (!key || !uploadId || !parts?.length) {
    return NextResponse.json(
      { error: "Missing required fields: key, uploadId, parts" },
      { status: 400 },
    );
  }

  const client = getR2Client();
  const command = new CompleteMultipartUploadCommand({
    Bucket: getR2BucketName(),
    Key: key,
    UploadId: uploadId,
    MultipartUpload: {
      Parts: parts.map((part) => ({
        ETag: part.ETag,
        PartNumber: part.PartNumber,
      })),
    },
  });

  await client.send(command);

  return NextResponse.json({ url: getR2PublicUrl(key) });
}
