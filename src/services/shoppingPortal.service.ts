import { RegisterData } from "@/components/Forms/FormRegister/RegisterForm";
import { configuration } from "@/config/configuration";
import { encryptPassword } from "@/utilities/encryptPassword";
import axios from "axios";

export const spsInstance = () => {
  const config = configuration();
  const baseUrl = config.spsUrl;
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 60000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export const register = (data: RegisterData) => {
  const config = configuration();
  const url = "/api/v1/auth/register";

  const body = {
    email: data.email,
    fullName: data.fullName,
    passwordHashed:
      encryptPassword(data.password, config.encryptionPublicKey) || "",
  };
  console.log("🚀 ~ register ~ body:", body.passwordHashed);

  // try {
  //   const response = await spsInstance().post(url, data);

  //   // if
  //   return response;
  // } catch (error) {
  //   console.log("error::", error);
  // }
};
