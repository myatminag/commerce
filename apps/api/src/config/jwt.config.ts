import { registerAs } from "@nestjs/config";

export default registerAs("jwt", () => ({
  secret: process.env.ACCESS_TOKEN_KEY,
  accessTokenTtl: process.env.ACCESS_TOKEN_TTL,
  refreshTokenTtl: process.env.REFRESH_TOKEN_TTL,
}));
