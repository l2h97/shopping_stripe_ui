import type { Metadata } from "next";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { LayoutMain } from "@/Layouts/LayoutMain/LayoutMain";
import { Theme } from "@/providers/Theme";

export const metadata: Metadata = {
  title: "H Bakery",
  description: "H bakery store",
};

export default function HomeLayout({
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
            <LayoutMain>{children}</LayoutMain>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
