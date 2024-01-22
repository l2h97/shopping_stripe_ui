import { Container } from "./HeaderHome.styles";
import { HeaderSearchBox } from "./SearchBoxHeader/SearchBoxHeader";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { Logo } from "@/components/Logo/Logo";

export const HeaderHome = () => {
  return (
    <Container>
      <Logo />
      <HeaderSearchBox />
      <ProfileHeader />
    </Container>
  );
};
