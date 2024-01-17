"use client";

import { useTheme } from "styled-components";
import { CountContainer, Container } from "./Cart.styles";
import { CartIcon } from "../Icons/Cart.icon";

type IProps = {
  width?: string;
  count?: number;
};

export const Cart = (props: IProps) => {
  const { width, count } = props;
  const theme = useTheme();

  return (
    <Container width={width}>
      {count ? <CountContainer>{count}</CountContainer> : <></>}
      <CartIcon
        width="100%"
        height="100%"
        color={theme.colors.border.borderPrimary}
      />
    </Container>
  );
};