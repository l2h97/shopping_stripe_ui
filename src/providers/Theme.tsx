"use client";

import { lightModeTheme } from "@/themes/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={lightModeTheme}>{children}</ThemeProvider>;
};
