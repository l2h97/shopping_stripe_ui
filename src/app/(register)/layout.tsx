import { LayoutRegister } from "@/Layouts/LayoutRegister/LayoutRegister";
import { Theme } from "@/providers/Theme";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";

export default function RegisterLayout({
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
            <LayoutRegister>{children}</LayoutRegister>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
