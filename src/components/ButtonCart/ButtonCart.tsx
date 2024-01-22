"use client";

import { useTheme } from "styled-components";
import { CountContainer, Container } from "./ButtonCart.styles";
import { CartIcon } from "../Icons/Cart.icon";

type IProps = {
  width?: string;
  count?: number;
};

export const ButtonCart = (props: IProps) => {
  const { width, count } = props;
  const theme = useTheme();

  return (
    <Container width={width}>
      {count ? <CountContainer>{count}</CountContainer> : <></>}
      <CartIcon
        width="100%"
        height="100%"
        color={theme.colors.border.borderRed}
      />
    </Container>
  );
};
