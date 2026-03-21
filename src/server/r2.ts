import { S3Client } from "@aws-sdk/client-s3";
import { env } from "~/env";

export function getR2Client() {
  if (!env.R2_ACCOUNT_ID || !env.R2_ACCESS_KEY_ID || !env.R2_SECRET_ACCESS_KEY) {
    throw new Error("R2 credentials not configured");
  }

  return new S3Client({
    region: "auto",
    endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: env.R2_ACCESS_KEY_ID,
      secretAccessKey: env.R2_SECRET_ACCESS_KEY,
    },
  });
}

export function getR2BucketName() {
  return env.R2_BUCKET_NAME;
}

export function getR2PublicUrl(key: string) {
  if (env.R2_PUBLIC_URL) {
    return `${env.R2_PUBLIC_URL}/${key}`;
  }
  return key;
}
