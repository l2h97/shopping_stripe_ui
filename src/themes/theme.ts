import { NextFont } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

type Theme = {
  colors: Record<string, string>;
  fontFamily: Record<string, NextFont>;
  fontSize: Record<string, string>;
  screens: Record<string, string>;
};

export const lightModeTheme: Theme = {
  colors: {
    redBackground: "#ffc0cb",
    redText: "#ed7161",
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
