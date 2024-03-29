"use client";

import styled from "styled-components";

export const Container = styled.div``;

export const BrandLogo = styled.a`
  height: 40px;
  width: 136px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${(props) => props.theme.colors.background.bgPink};
  border-radius: 16px;
  padding: 0 8px;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.border.borderRed};
  }

  @media (max-width: ${(props) => props.theme.screens.phone}) {
    width: 40px;
    border-radius: 50%;
  }
`;

export const BrandName = styled.p`
  font-weight: 900;
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors.text.textRed};
  line-height: 26px;

  @media (max-width: ${(props) => props.theme.screens.phone}) {
    display: none;
  }
`;
