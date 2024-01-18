import { Theme } from "@/providers/Theme";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>Register layout</p>
      {children}
    </>
  );
  // return (
  //   <html lang="en">
  //     <body suppressHydrationWarning={true}>
  //       <StyledComponentsRegistry>
  //         <Theme>
  //           <GlobalStyles />
  //           {/* <MainLayout>{children}</MainLayout> */}
  //           <p>Root layout</p>
  //           {children}
  //         </Theme>
  //       </StyledComponentsRegistry>
  //     </body>
  //   </html>
  // );
}
