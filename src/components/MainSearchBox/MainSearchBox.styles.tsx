"use client";

import styled from "styled-components";
import { ButtonCustom } from "../Customs/Button.custom";
import { InputCustom } from "../Customs/Input.custom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

export const SearchBoxInput = styled(InputCustom)`
  height: 40px;
  width: 60%;

  border-radius: 24px;
  padding: 7px 36px;
  border: 1px solid ${(props) => props.theme.colors.redBackground};
`;

export const SearchIconWrapper = styled(ButtonCustom)`
  position: absolute;
  top: 7px;
  left: 7px;
  height: 26px;
`;
