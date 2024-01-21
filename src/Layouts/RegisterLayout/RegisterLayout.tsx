import { ReactNode } from "react";
import {
  ContentContainer,
  HeaderContainer,
  MainContainer,
} from "../MainLayout/MainLayout.styles";
import { RegisterHeader } from "@/components/Headers/HeaderRegister/HeaderRegister";

export const RegisterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MainContainer>
      <HeaderContainer>
        <RegisterHeader />
      </HeaderContainer>
      <ContentContainer>{children}</ContentContainer>
    </MainContainer>
  );
};
