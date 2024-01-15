import Link from "next/link";
import { MainLogoIcon } from "../Icons/MainLogo.icon";
import { BrandLogo, BrandName, Wrapper } from "./MainLogo.styles";

export const MainLogo = () => {
  return (
    <>
      <Wrapper>
        <Link href="/" passHref={true} legacyBehavior>
          <BrandLogo>
            <MainLogoIcon width="26px" height="26px" />
            <BrandName>HBakery</BrandName>
          </BrandLogo>
        </Link>
      </Wrapper>
    </>
  );
};
