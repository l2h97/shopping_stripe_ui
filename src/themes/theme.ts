import { NextFont } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const lightModeTheme = {
  colors: {
    redBackground: "#ffc0cb",
    redText: "#ed7161",
    blackText: "#252525",
  },
  fontFamily: {
    inter,
  },
  fontSize: {
    m: "16px",
    xl: "22px",
  },
  screens: {
    laptop: "1024px",
    laptopL: "1440px",
    "4K": "2560px",
  },
};
