import { NextFont } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const lightModeTheme = {
  colors: {
    bgPrimary: "#ffc0cb",
    borderPrimary: "#ed7161",
    textSecondary: "#E84833",
    textPrimary: "#252525",
    notificationPrimary: "#FF0000",
    textTertiary: "#F5F5F5",
  },
  fontFamily: {
    inter,
  },
  fontSize: {
    s: "12px",
    ms: "14px",
    m: "16px",
    xl: "22px",
  },
  screens: {
    laptop: "1024px",
    laptopL: "1440px",
    "4K": "2560px",
  },
};
