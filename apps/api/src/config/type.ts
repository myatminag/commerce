export type AppConfig = {
  ENV: {
    type: "production" | "development";
  };

  PORT: number;

  ACCESS_TOKEN_KEY: string;
  ACCESS_TOKEN_EXPIRES_IN: string;
  REFRESH_TOKEN_KEY: string;
  REFRESH_TOKEN_EXPIRES_IN: string;
};
