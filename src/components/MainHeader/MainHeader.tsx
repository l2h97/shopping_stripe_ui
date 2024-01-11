import { MainLogo } from "../MainLogo/MainLogo";
import { MainSearchBox } from "../MainSearchBox/MainSearchBox";
import { Wrapper } from "./MainHeader.styles";

export const MainHeader = () => {
  return (
    <>
      <Wrapper>
        <MainLogo />
        <MainSearchBox />
        <div
          style={{
            width: "100%",
            height: "40px",
            backgroundColor: "ActiveBorder",
          }}
        ></div>
      </Wrapper>
    </>
  );
};
