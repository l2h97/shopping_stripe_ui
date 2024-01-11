import type { Metadata } from "next";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { MainLayout } from "@/Layouts/MainLayout";
import { Theme } from "@/providers/Theme";

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
          <Theme>
            <GlobalStyles />
            <MainLayout>{children}</MainLayout>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
