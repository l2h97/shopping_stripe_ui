import { Logo } from "../../Logo/Logo";
import { HeaderSearchBox } from "../../SearchBox/HeaderSearchBox/HeaderSearchBox";
import { ProfileHeader } from "../../Profile/ProfileHeader/ProfileHeader";
import { Container } from "./HeaderHome.styles";

export const HeaderHome = () => {
  return (
    <Container>
      <Logo />
      <HeaderSearchBox />
      <ProfileHeader />
    </Container>
  );
};
