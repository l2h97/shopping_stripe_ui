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

  const updateFocusHandler = useCallback(() => {
    setFocus((prev) => !prev);
  }, []);

  console.log("isFocus::", isFocus);

  return (
    <Wrapper>
      <SearchBoxInput
        placeholder="Search products"
        onBlur={updateFocusHandler}
        onFocus={updateFocusHandler}
        $isFocus={isFocus}
      />
      <SearchIconWrapper $isFocus={isFocus}>
        <SearchIcon width="100%" height="100%" />
      </SearchIconWrapper>
      <TestCo />
    </Wrapper>
  );
};

const TestCo = () => {
  console.log("here");
  return <></>;
};
