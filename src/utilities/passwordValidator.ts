import { matches } from "validator";

export const passwordValidator = (password: string): boolean => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^\s])[A-Za-z\d~!@#$%^\s]{8,16}$/g;

  return matches(password, regex);
};
