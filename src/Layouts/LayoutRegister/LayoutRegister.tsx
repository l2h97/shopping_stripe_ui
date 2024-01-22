import { ReactNode } from "react";
import {
  ContentContainer,
  HeaderContainer,
  MainContainer,
} from "../LayoutMain/LayoutMain.styles";
import { RegisterHeader } from "@/components/Headers/HeaderRegister/HeaderRegister";

export const LayoutRegister = ({ children }: { children: ReactNode }) => {
  return (
    <MainContainer>
      <HeaderContainer>
        <RegisterHeader />
      </HeaderContainer>
      <ContentContainer>{children}</ContentContainer>
    </MainContainer>
  );
};
