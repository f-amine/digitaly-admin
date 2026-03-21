import { NextRequest, NextResponse } from "next/server";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { auth } from "~/server/better-auth";
import { getR2Client, getR2BucketName } from "~/server/r2";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({ headers: req.headers });
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as {
    key: string;
  };

  const { key } = body;

  if (!key) {
    return NextResponse.json(
      { error: "Missing required field: key" },
      { status: 400 },
    );
  }

  const client = getR2Client();
  const command = new DeleteObjectCommand({
    Bucket: getR2BucketName(),
    Key: key,
  });

  await client.send(command);

  return NextResponse.json({ success: true });
}
