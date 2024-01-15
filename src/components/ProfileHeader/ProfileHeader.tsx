import { CartContainer } from "../CartContainer/CartContainer";
import { CartIcon } from "../Icons/Cart.icon";
import { ProfileIcon } from "../Icons/Profile.icon";
import { ProfileContainer } from "../ProfileContainer/ProfileContainer";
import { Wrapper } from "./ProfileHeader.styles";

export const ProfileHeader = () => {
  return (
    <Wrapper>
      <CartContainer width="40px" />
      <ProfileContainer width="40px" />
    </Wrapper>
  );
};
