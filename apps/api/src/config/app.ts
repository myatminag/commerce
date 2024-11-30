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
  S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
  S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
  S3_REGION: process.env.S3_REGION,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
});
