import styled from "styled-components";
import { IPropsCustom } from "./Button.custom";
import { ComponentPropsWithoutRef } from "react";

interface IInputCustomProps
  extends Omit<IPropsCustom, "children">,
    Omit<ComponentPropsWithoutRef<"input">, "children"> {}

export const InputCustom = (props: IInputCustomProps) => {
  return <InputStyle className={props.className} {...props} />;
};

export const InputStyle = styled.input``;
