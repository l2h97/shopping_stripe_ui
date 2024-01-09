import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";
import { MainHeader } from "@/components/MainHeader/MainHeader";
import { GlobalStyles } from "@/styles/GlobalStyles";

export const metadata: Metadata = {
  title: "H Bakery",
  description: "H bakery store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <MainHeader />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
