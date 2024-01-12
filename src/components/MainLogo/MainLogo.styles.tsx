"use client";

import styled from "styled-components";

export const Wrapper = styled.div``;

export const BrandLogo = styled.a`
  height: 40px;
  width: 136px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${(props) => props.theme.colors.redBackground};
  border-radius: 16px;
  padding: 0 8px;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.redText};
  }
`;

export const BrandName = styled.p`
  font-weight: 900;
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors.redText};
  line-height: 26px;
`;
