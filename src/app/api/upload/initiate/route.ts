import { NextRequest, NextResponse } from "next/server";
import { CreateMultipartUploadCommand } from "@aws-sdk/client-s3";
import { auth } from "~/server/better-auth";
import { getR2Client, getR2BucketName } from "~/server/r2";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({ headers: req.headers });
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as {
    filename: string;
    contentType: string;
    productId: string;
  };

  const { filename, contentType, productId } = body;

  if (!filename || !contentType || !productId) {
    return NextResponse.json(
      { error: "Missing required fields: filename, contentType, productId" },
      { status: 400 },
    );
  }

  const sanitized = filename
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/_{2,}/g, "_");
  const key = `products/${productId}/${Date.now()}-${sanitized}`;

  const client = getR2Client();
  const command = new CreateMultipartUploadCommand({
    Bucket: getR2BucketName(),
    Key: key,
    ContentType: contentType,
  });

  const response = await client.send(command);

  return NextResponse.json({
    uploadId: response.UploadId,
    key,
  });
}
