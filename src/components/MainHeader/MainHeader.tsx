import { MainLogo } from "../MainLogo/MainLogo";
import { MainSearchBox } from "../MainSearchBox/MainSearchBox";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import { Wrapper } from "./MainHeader.styles";

export const MainHeader = () => {
  return (
    <Wrapper>
      <MainLogo />
      <MainSearchBox />
      <ProfileHeader />
    </Wrapper>
  );
};
