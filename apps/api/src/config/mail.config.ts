import { registerAs } from "@nestjs/config";

export default registerAs("mail", () => ({
  HOST: process.env.HOST,
  PORT: Number(process.env.MAIL_PORT),
  SECURE: Boolean(process.env.SECURE),
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  FROM: process.env.FROM,
}));
