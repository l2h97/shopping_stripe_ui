"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.screens.laptop};
  margin: 0 auto;
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 5px;

  & > :nth-child(1) {
    flex: 1 1 20%;
  }

  & > :nth-child(2) {
    flex: 1 1 60%;
  }

  & > :nth-child(3) {
    flex: 1 1 20%;
  }
`;
