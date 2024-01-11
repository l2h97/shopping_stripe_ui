import { SearchIcon } from "../Icons/SeachIcon";
import {
  SearchBoxInput,
  SearchIconWrapper,
  Wrapper,
} from "./MainSearchBox.styles";

export const MainSearchBox = () => {
  return (
    <Wrapper>
      <SearchBoxInput />
      <SearchIconWrapper width="26px" height="26px" />
    </Wrapper>
  );
};
