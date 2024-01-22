import { IConfig } from "./config.interface";

export const configuration = (): IConfig => {
  return {
    appEnv: process.env.NODE_ENV || "development",
    appPort: Number(process.env.APP_PORT) || 3000,

    baseUrl: process.env.BASE_URL || "http://localhost:3001",
    spsUrl: process.env.SPS_URL || "http://localhost:3000",
  };
};
