import { ButtonCart } from "@/components/ButtonCart/ButtonCart";
import { Container } from "./ProfileHeader.styles";
import { ButtonProfile } from "@/components/ButtonProfile/ButtonProfile";

export const ProfileHeader = () => {
  return (
    <Container>
      <ButtonCart width="40px" />
      <ButtonProfile width="40px" />
    </Container>
  );
};
