import { registerAs } from "@nestjs/config";

export default registerAs("s3", () => ({
  AWS_CLOUDFRONT_URL: process.env.AWS_CLOUDFRONT_URL,
  AWS_CLOUDFRONT_PRIVATE_KEY: process.env.AWS_CLOUDFRONT_PRIVATE_KEY,
  AWS_CLOUDFRONT_KEY_PAIR_ID: process.env.AWS_CLOUDFRONT_KEY_PAIR_ID,
  S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
  S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
  S3_REGION: process.env.S3_REGION,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
}));
