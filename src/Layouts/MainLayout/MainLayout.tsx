import { ReactNode } from "react";
import { MainHeader } from "../../components/MainHeader/MainHeader";
import {
  ContentContainer,
  HeaderContainer,
  MainContainer,
} from "./MainLayout.styles";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MainContainer>
      <HeaderContainer>
        <MainHeader />
      </HeaderContainer>
      <ContentContainer>{children}</ContentContainer>
    </MainContainer>
  );
};
