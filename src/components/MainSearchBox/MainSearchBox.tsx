import { SearchIcon } from "../Icons/SearchIcon";
import {
  SearchBoxInput,
  SearchIconWrapper,
  Wrapper,
} from "./MainSearchBox.styles";

export const MainSearchBox = () => {
  return (
    <Wrapper>
      <SearchBoxInput />
      <SearchIconWrapper>
        <SearchIcon width="100%" height="100%" />
      </SearchIconWrapper>
    </Wrapper>
  );
};
