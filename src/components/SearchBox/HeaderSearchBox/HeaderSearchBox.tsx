"use client";

import { useCallback, useState } from "react";
import { SearchIcon } from "../../Icons/Search.icon";
import {
  SearchBoxInput,
  SearchIconWrapper,
  Container,
} from "./HeaderSearchBox.styles";
import { useTheme } from "styled-components";

export const HeaderSearchBox = () => {
  const theme = useTheme();
  const [isFocus, setFocus] = useState<boolean>(false);

  const updateFocusHandler = useCallback(() => {
    setFocus((prev) => !prev);
  }, [setFocus]);

  return (
    <Container>
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
          color={theme.colors.border.borderPrimary}
        />
      </SearchIconWrapper>
    </Container>
  );
};
