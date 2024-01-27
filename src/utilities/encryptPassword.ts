import { constants, publicEncrypt } from "crypto";

export const encryptPassword = (password: string, publicKey: string) => {
  return publicEncrypt(
    { key: publicKey, padding: constants.RSA_PKCS1_OAEP_PADDING },
    Buffer.from(password, "utf-8"),
  ).toString("base64");
};
