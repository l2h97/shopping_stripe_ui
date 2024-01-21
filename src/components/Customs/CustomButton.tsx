import React, { ReactNode } from "react";
import styled from "styled-components";

export interface IPropsCustom {
  children: ReactNode;
  className?: string;
}

interface ICustomButtonProps
  extends IPropsCustom,
    Omit<React.ComponentPropsWithoutRef<"button">, "children"> {}

export const CustomButton = (props: ICustomButtonProps) => {
  return (
    <ButtonStyle className={props.className} {...props}>
      {props.children}
    </ButtonStyle>
  );
};

export const ButtonStyle = styled.button``;
