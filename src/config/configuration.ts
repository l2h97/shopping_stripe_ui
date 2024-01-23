import { IConfig } from "./config.interface";

export const configuration = (): IConfig => {
  return {
    appEnv: process.env.NODE_ENV || "development",
    appPort: Number(process.env.APP_PORT) || 3000,

    baseUrl: process.env.BASE_URL || "http://localhost:3001",
    spsUrl: process.env.SPS_URL || "http://localhost:3000",
    encryptionPublicKey:
      process.env.ENCRYPTION_PUBLIC_KEY ||
      "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvjVM+UBeAo7vn9sJC1OKjIUROCQ8r9k4e3A1OAvNfluGeQn1+dKFrUdCjIXrS2V0FaA76B+5axS5GLGisuS52trq4d6JcEhCR1wio0LryHqh6pHCPadMRIbqjH9btDYTcaNzHXB7DOs3dqmtUKEXAnXch2urTnw/k7hn/nAco8mV8wYTyKUUBVb0VjM+1mO5yuNIkDpUdWLkgJHkX9QMrrmoB1ur2JcvxaB8CUqLDO2tog6xT/7ZUP3iSZCNPd75KafMfDzqyc9tvIt2fbqVuEGCACUXGCTMz7EBa8IzHtAA4cFSUInqc2HoAww/wpyMlTC+9oRneqLOQ9/ozfOyEwIDAQAB\n-----END PUBLIC KEY-----",
  };
};
