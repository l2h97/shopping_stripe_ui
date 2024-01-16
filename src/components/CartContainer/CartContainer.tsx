"use client";

import { useTheme } from "styled-components";
import { CountContainer, Wrapper } from "./CartContainer.styles";
import { CartIcon } from "../Icons/Cart.icon";

type IProps = {
  width?: string;
  count?: number;
};

export const CartContainer = (props: IProps) => {
  const { width, count } = props;
  const theme = useTheme();

  return (
    <Wrapper width={width}>
      {count ? <CountContainer>{count}</CountContainer> : <></>}
      <CartIcon
        width="100%"
        height="100%"
        color={theme.colors.border.borderPrimary}
      />
    </Wrapper>
  );
};
