import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}
`
