import { ReactNode } from "react";
import { MainContainer } from "../MainLayout/MainLayout.styles";

export const RegisterLayout = ({ children }: { children: ReactNode }) => {
  return <MainContainer>{children}</MainContainer>;
};
