import { type NextRequest, NextResponse } from "next/server";
import { AbortMultipartUploadCommand } from "@aws-sdk/client-s3";
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
  };

  const { key, uploadId } = body;

  if (!key || !uploadId) {
    return NextResponse.json(
      { error: "Missing required fields: key, uploadId" },
      { status: 400 },
    );
  }

  const client = getR2Client();
  const command = new AbortMultipartUploadCommand({
    Bucket: getR2BucketName(),
    Key: key,
    UploadId: uploadId,
  });

  await client.send(command);

  return NextResponse.json({ success: true });
}
