import { ReactNode } from "react";
import { MainHeader } from "../components/MainHeader/MainHeader";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};
