import Link from "next/link";
import { MainLogoIcon } from "../Icons/MainLogo.icon";
import { BrandLogo, BrandName, Container } from "./Logo.styles";

export const Logo = () => {
  return (
    <>
      <Container>
        <Link href="/" passHref={true} legacyBehavior>
          <BrandLogo>
            <MainLogoIcon width="26px" height="26px" />
            <BrandName>HBakery</BrandName>
          </BrandLogo>
        </Link>
      </Container>
    </>
  );
};
