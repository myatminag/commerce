import { registerAs } from "@nestjs/config";

export default registerAs("auth", () => ({
  secret: process.env.USER_ACCESS_TOKEN_KEY,
  adminSecret: process.env.ADMIN_ACCESS_TOKEN_KEY,
  accessTokenTtl: Number(process.env.ACCESS_TOKEN_TTL),
  refreshTokenTtl: Number(process.env.REFRESH_TOKEN_TTL),
  resetTokenTtl: Number(process.env.RESET_TOKEN_TTL),
}));
