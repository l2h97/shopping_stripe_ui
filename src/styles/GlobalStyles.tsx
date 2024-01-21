"use client";

import { createGlobalStyle, css } from "styled-components";

const styles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    line-height: 1;
    font-size: ${(props) => props.theme.fontSize.m};
    color: ${(props) => props.theme.colors.text.textBlack};
  }

  a {
    color: inherit;
    text-decoration: none;

    &:visited {
      color: ${(props) => props.theme.colors.text.textBlue};
      text-decoration: underline;
    }
  }

  input {
    font-size: inherit;
    color: inherit;
  }

  button {
    background-color: transparent;
  }
`;

export const GlobalStyles = createGlobalStyle`${styles}`;
