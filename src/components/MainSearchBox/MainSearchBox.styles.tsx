"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

export const SearchBoxInput = styled.input`
  height: 40px;
  width: 60%;

  border-radius: 24px;
  padding: 7px 36px;
`;

export const SearchIconWrapper = styled.button`
  position: absolute;
  top: 7px;
  left: 7px;
  height: 26px;
`;
