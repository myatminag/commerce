import { AppConfig } from "./type";

export default (): AppConfig => ({
  ENV: {
    type: "development",
  },
  PORT: parseInt(process.env.PORT),

  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY,
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,

  AWS_CLOUDFRONT_URL: process.env.AWS_CLOUDFRONT_URL,
  AWS_CLOUDFRONT_PRIVATE_KEY: process.env.AWS_CLOUDFRONT_PRIVATE_KEY,
  AWS_CLOUDFRONT_KEY_PAIR_ID: process.env.AWS_CLOUDFRONT_KEY_PAIR_ID,

  S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
  S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
  S3_REGION: process.env.S3_REGION,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,

  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_TTL: process.env.REDIS_TTL,
  REDIS_USERNAME: process.env.REDIS_USERNAME,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
});
