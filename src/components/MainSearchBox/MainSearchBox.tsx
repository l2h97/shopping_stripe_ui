"use client";

import { useCallback, useState } from "react";
import { SearchIcon } from "../Icons/SearchIcon";
import {
  SearchBoxInput,
  SearchIconWrapper,
  Wrapper,
} from "./MainSearchBox.styles";

export const MainSearchBox = () => {
  const [isFocus, setFocus] = useState<boolean>(false);

  const updateFocusHandler = () => {
    setFocus((prev) => !prev);
  };

  return (
    <Wrapper>
      <SearchBoxInput
        placeholder="Search products"
        onFocus={updateFocusHandler}
      />
      <SearchIconWrapper>
        <SearchIcon width="100%" height="100%" />
      </SearchIconWrapper>
    </Wrapper>
  );
};
