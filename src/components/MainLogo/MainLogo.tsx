import Link from "next/link";
import { MainLogoIcon } from "../Icons/MainLogoIcon";
import { BrandLogo, BrandName, Wrapper } from "./MainLogo.styles";

export const MainLogo = () => {
  console.log("MainLogo:re-render");
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
