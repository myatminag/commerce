import { registerAs } from "@nestjs/config";

export default registerAs("settings", () => ({
  SETTING_ID: process.env.SETTING_ID,
}));
