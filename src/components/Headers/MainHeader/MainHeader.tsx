import { Logo } from "../../Logo/Logo";
import { HeaderSearchBox } from "../../SearchBox/HeaderSearchBox/HeaderSearchBox";
import { ProfileHeader } from "../../Profile/ProfileHeader/ProfileHeader";
import { Wrapper } from "./MainHeader.styles";

export const MainHeader = () => {
  return (
    <Wrapper>
      <Logo />
      <HeaderSearchBox />
      <ProfileHeader />
    </Wrapper>
  );
};
