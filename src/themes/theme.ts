import { NextFont } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const lightModeTheme = {
  colors: {
    border: {
      borderSecondary: "#D3D3D3",
      borderPrimary: "#ed7161",
    },
    background: {
      bgPrimary: "#ffc0cb",
    },
    text: {
      textSecondary: "#E84833",
      textPrimary: "#252525",
      textTertiary: "#F5F5F5",
    },
    utilities: {
      notificationPrimary: "#FF0000",
      overlayPrimary: "#00000080",
    },
  },
  fontFamily: {
    inter,
  },
  zIndex: {
    modelOverLay: 2000,
    mainPage: 1000,
    header: 1500,
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
