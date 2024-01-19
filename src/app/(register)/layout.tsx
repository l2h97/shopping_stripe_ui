import { RegisterLayout } from "@/Layouts/RegisterLayout/RegisterLayout";
import { Theme } from "@/providers/Theme";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";

export default function Register({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <Theme>
            <GlobalStyles />
            <RegisterLayout>{children}</RegisterLayout>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
