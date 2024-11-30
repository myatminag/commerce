export type AppConfig = {
  ENV: {
    type: "production" | "development";
  };
  PORT: number;
  ACCESS_TOKEN_KEY: string;
  ACCESS_TOKEN_EXPIRES_IN: string;
  REFRESH_TOKEN_KEY: string;
  REFRESH_TOKEN_EXPIRES_IN: string;
  S3_ACCESS_KEY: string;
  S3_SECRET_ACCESS_KEY: string;
  S3_REGION: string;
  S3_BUCKET_NAME: string;
};
