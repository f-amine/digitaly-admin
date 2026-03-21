import { NextRequest, NextResponse } from "next/server";
import { UploadPartCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { auth } from "~/server/better-auth";
import { getR2Client, getR2BucketName } from "~/server/r2";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({ headers: req.headers });
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as {
    key: string;
    uploadId: string;
    partNumber: number;
  };

  const { key, uploadId, partNumber } = body;

  if (!key || !uploadId || !partNumber) {
    return NextResponse.json(
      { error: "Missing required fields: key, uploadId, partNumber" },
      { status: 400 },
    );
  }

  const client = getR2Client();
  const command = new UploadPartCommand({
    Bucket: getR2BucketName(),
    Key: key,
    UploadId: uploadId,
    PartNumber: partNumber,
  });

  const presignedUrl = await getSignedUrl(client, command, {
    expiresIn: 3600,
  });

  return NextResponse.json({ presignedUrl });
}
