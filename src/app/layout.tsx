import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StyledComponentsRegistry } from "@/pkgs/StyledComponentsRegistry";
import { MainHeader } from "@/components/MainHeader/MainHeader";

export const metadata: Metadata = {
  title: "Land draw",
  description: "Land draw",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <MainHeader />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
