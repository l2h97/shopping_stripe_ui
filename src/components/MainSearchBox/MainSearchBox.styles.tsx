"use client";

import styled from "styled-components";
import { SearchIcon } from "../Icons/SeachIcon";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

export const SearchBoxInput = styled.input`
  height: 40px;
  width: 60%;
`;

export const SearchIconWrapper = styled(SearchIcon)`
  position: absolute;
  top: 0;
  left: 0;
`;
