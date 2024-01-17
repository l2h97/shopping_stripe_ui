"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.screens.laptop};
  margin: 0 auto;
  height: 56px;
  padding: 0 16px;
  display: flex;
  gap: 5px;

  & > :nth-child(1) {
    flex: 1 1 20%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  & > :nth-child(2) {
    flex: 1 1 60%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  & > :nth-child(3) {
    flex: 1 1 20%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
