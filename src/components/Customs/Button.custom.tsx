import React, { ReactNode } from "react";
import styled from "styled-components";

export interface IPropsCustom {
  children: ReactNode;
  className?: string;
}

interface IButtonCustomProps
  extends IPropsCustom,
    Omit<React.ComponentPropsWithoutRef<"button">, "children"> {}

export const ButtonCustom = (props: IButtonCustomProps) => {
  return (
    <ButtonStyle className={props.className} {...props}>
      {props.children}
    </ButtonStyle>
  );
};

export const ButtonStyle = styled.button``;
