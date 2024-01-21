import styled from "styled-components";
import { IPropsCustom } from "./CustomButton";
import { ComponentPropsWithoutRef } from "react";

interface ICustomInputProps
  extends Omit<IPropsCustom, "children">,
    Omit<ComponentPropsWithoutRef<"input">, "children"> {}

export const CustomInput = (props: ICustomInputProps) => {
  return <InputStyle className={props.className} {...props} />;
};

export const InputStyle = styled.input``;
