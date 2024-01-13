"use client";

import styled from "styled-components";
import { ButtonCustom } from "../Customs/Button.custom";
import { InputCustom } from "../Customs/Input.custom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  /* border-radius: 24px; */
`;

export const SearchBoxInput = styled(InputCustom)<{ $isFocus?: boolean }>`
  height: 40px;
  width: 60%;

  padding: ${(props) => (props.$isFocus ? "7px 16px" : "7px 36px")};
  border: 1px solid ${(props) => props.theme.colors.redBackground};
  border-radius: 24px;
  transition: all 0.3s ease-out;
`;

export const SearchIconWrapper = styled(ButtonCustom)<{ $isFocus?: boolean }>`
  visibility: ${(props) => (props.$isFocus ? "hidden" : "visible")};
  position: absolute;
  top: 7px;
  left: ${(props) => (props.$isFocus ? "-30px" : "7px")};
  height: 26px;
  transition: all 0.3s ease-out;
`;
