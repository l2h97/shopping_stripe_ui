import Link from "next/link";
import { LogoIcon } from "../Icons/Logo.icon";
import { BrandLogo, BrandName, Container } from "./Logo.styles";

export const Logo = () => {
  return (
    <>
      <Container>
        <Link href="/" passHref={true} legacyBehavior>
          <BrandLogo>
            <LogoIcon width="26px" height="26px" />
            <BrandName>HBakery</BrandName>
          </BrandLogo>
        </Link>
      </Container>
    </>
  );
};
