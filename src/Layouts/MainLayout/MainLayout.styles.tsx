"use client";

import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  z-index: ${(props) => props.theme.zIndex.mainPage};
  width: 100%;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: ${(props) => props.theme.zIndex.header};
  width: 100%;
  border-bottom: 1px solid
    ${(props) => props.theme.colors.border.borderSecondary};
`;

export const ContentContainer = styled.div`
  padding: 57px 16px;
  width: 100%;
  max-width: ${(props) => props.theme.screens.laptop};
  height: auto;
  margin: 0 auto;
`;
