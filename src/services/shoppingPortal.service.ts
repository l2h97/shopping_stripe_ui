import { RegisterData } from "@/components/Forms/FormRegister/RegisterForm";
import { configuration } from "@/config/configuration";
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

export const register = async (data: RegisterData) => {
  const url = "/api/v1/auth/register";

  try {
    const response = await spsInstance().post(url, data);

    // if
    return response;
  } catch (error) {
    console.log("error::", error);
  }
};
