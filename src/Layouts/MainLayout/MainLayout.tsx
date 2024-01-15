import { ReactNode } from "react";
import { MainHeader } from "../../components/MainHeader/MainHeader";
import { HeaderContainer, MainContainer } from "./MainLayout.styles";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MainContainer>
      <HeaderContainer>
        <MainHeader />
      </HeaderContainer>
      {children}
    </MainContainer>
  );
};
