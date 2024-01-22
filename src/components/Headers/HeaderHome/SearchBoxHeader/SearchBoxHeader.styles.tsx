"use client";

import { CustomButton } from "@/components/Customs/CustomButton";
import { CustomInput } from "@/components/Customs/Input.custom";
import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 2px;
`;

export const SearchBoxInput = styled(CustomInput)<{ $isFocus?: boolean }>`
  height: 40px;
  width: 60%;

  padding: ${(props) => (props.$isFocus ? "7px 16px" : "7px 36px")};
  border: 1px solid ${(props) => props.theme.colors.border.borderRed};
  border-radius: 24px;
  transition: padding 0.2s linear;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.border.borderRed};
  }
`;

export const SearchIconWrapper = styled(CustomButton)<{ $isFocus?: boolean }>`
  visibility: ${(props) => (props.$isFocus ? "hidden" : "visible")};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.$isFocus ? "-7px" : "7px")};
  height: 26px;
  transition: all 0.2s linear;
`;
