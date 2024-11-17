import { AppConfig } from "./type";

export default (): AppConfig => ({
  ENV: {
    type: "development",
  },
  PORT: parseInt(process.env.PORT),
});
