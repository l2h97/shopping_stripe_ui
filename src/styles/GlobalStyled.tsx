"use client";

import { createGlobalStyle, css } from "styled-components";

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const GlobalStyled = createGlobalStyle`
  ${styles}
`;
