import { NextFont } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const lightModeTheme = {
  colors: {
    border: {
      borderGray: "#D3D3D3",
      borderRed: "#ed7161",
    },
    background: {
      bgPink: "#ffc0cb",
    },
    text: {
      textRed: "#E84833",
      textBlack: "#252525",
      textWhite: "#F5F5F5",
      textBlue: "#0000ff",
    },
    utilities: {
      notificationRed: "#FF0000",
      overlayGray: "#00000080",
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
    phone: "580px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1440px",
    TV: "2560px",
  },
};
