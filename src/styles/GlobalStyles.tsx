"use client";

import { createGlobalStyle, css } from "styled-components";

const styles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;

    font-size: ${(props) => props.theme.fontSize.m};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const GlobalStyles = createGlobalStyle`${styles}`;
