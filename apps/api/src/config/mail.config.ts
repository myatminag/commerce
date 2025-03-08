import { registerAs } from "@nestjs/config";

export default registerAs("mail", () => ({
  HOST: process.env.MAIL_HOST,
  PORT: Number(process.env.MAIL_PORT),
  SECURE: Boolean(process.env.SECURE),
  USER: process.env.MAIL_USER,
  PASSWORD: process.env.MAIL_PASSWORD,
  FROM: process.env.FROM,
}));
