import { Cart } from "../../ButtonCart/ButtonCart";
import { CartIcon } from "../../Icons/Cart.icon";
import { ProfileIcon } from "../../Icons/Profile.icon";
import { Profile } from "../Profile";
import { Wrapper } from "./ProfileHeader.styles";

export const ProfileHeader = () => {
  return (
    <Wrapper>
      <Cart width="40px" />
      <Profile width="40px" />
    </Wrapper>
  );
};
