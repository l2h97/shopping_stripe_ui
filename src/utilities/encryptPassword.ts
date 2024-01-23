import JSEncrypt from "jsencrypt";

export const encryptPassword = (password: string, publicKey: string) => {
  const crypto = new JSEncrypt();
  crypto.setPublicKey(publicKey);
  return crypto.encrypt(password);
};
