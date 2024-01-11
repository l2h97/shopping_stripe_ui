"use client";

import { createGlobalStyle, css } from "styled-components";

const styles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  *[hidden] {
    display: none;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    line-height: 1;
    font-size: ${(props) => props.theme.fontSize.m};
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  menu,
  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const GlobalStyles = createGlobalStyle`${styles}`;
