"use client";

import { memo, useCallback, useState } from "react";
import { SearchIcon } from "../Icons/SearchIcon";
import {
  SearchBoxInput,
  SearchIconWrapper,
  Wrapper,
} from "./MainSearchBox.styles";
import { useTheme } from "styled-components";

export const MainSearchBox = () => {
  const theme = useTheme();
  const [isFocus, setFocus] = useState<boolean>(false);

  // const updateFocusHandler = useCallback(() => {
  //   setFocus((prev) => !prev);
  // }, [isFocus]);

  const updateFocusHandler = () => {
    setFocus((prev) => !prev);
  };

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
        <SearchIcon
          width="100%"
          height="100%"
          color={theme.colors.borderPrimary}
        />
      </SearchIconWrapper>
      <TestCo />
    </Wrapper>
  );
};

const TestCo = () => {
  console.log("TestCo::re-render::");
  return <></>;
};
