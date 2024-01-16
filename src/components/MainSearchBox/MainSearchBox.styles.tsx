"use client";

import styled from "styled-components";
import { ButtonCustom } from "../Customs/Button.custom";
import { InputCustom } from "../Customs/Input.custom";

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 2px;
`;

export const SearchBoxInput = styled(InputCustom)<{ $isFocus?: boolean }>`
  height: 40px;
  width: 60%;

  padding: ${(props) => (props.$isFocus ? "7px 16px" : "7px 36px")};
  border: 1px solid ${(props) => props.theme.colors.border.borderPrimary};
  border-radius: 24px;
  transition: padding 0.2s linear;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.border.borderPrimary};
  }
`;

export const SearchIconWrapper = styled(ButtonCustom)<{ $isFocus?: boolean }>`
  visibility: ${(props) => (props.$isFocus ? "hidden" : "visible")};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.$isFocus ? "-7px" : "7px")};
  height: 26px;
  transition: all 0.2s linear;
`;
