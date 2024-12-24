export type AppConfig = {
  ENV: {
    type: "production" | "development";
  };
  PORT: number;

  ACCESS_TOKEN_KEY: string;
  ACCESS_TOKEN_EXPIRES_IN: string;
  REFRESH_TOKEN_KEY: string;
  REFRESH_TOKEN_EXPIRES_IN: string;

  AWS_CLOUDFRONT_URL: string;
  AWS_CLOUDFRONT_PRIVATE_KEY: string;
  AWS_CLOUDFRONT_KEY_PAIR_ID: string;

  S3_ACCESS_KEY: string;
  S3_SECRET_ACCESS_KEY: string;
  S3_REGION: string;
  S3_BUCKET_NAME: string;

  REDIS_HOST: string;
  REDIS_PORT: string;
  REDIS_TTL: string;
  REDIS_USERNAME: string;
  REDIS_PASSWORD: string;
};
