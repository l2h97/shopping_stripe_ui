import { ReactNode } from "react";
import {
  ContentContainer,
  HeaderContainer,
  MainContainer,
} from "./LayoutMain.styles";
import { HeaderHome } from "@/components/Headers/HeaderHome/HeaderHome";

export const LayoutMain = ({ children }: { children: ReactNode }) => {
  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderHome />
      </HeaderContainer>
      <ContentContainer>{children}</ContentContainer>
    </MainContainer>
  );
};
