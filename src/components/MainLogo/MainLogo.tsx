import Link from "next/link";
import { MainLogoIcon } from "../Icons/MainLogoIcon";
import { BrandLogo, Wrapper } from "./MainLogo.styled";

export const MainLogo = () => {
  return (
    <>
      <Link href="/" passHref={true} legacyBehavior>
        <Wrapper>
          <MainLogoIcon width="26px" height="26px" />
          <BrandLogo>HBakery</BrandLogo>
        </Wrapper>
      </Link>
    </>
  );
};
