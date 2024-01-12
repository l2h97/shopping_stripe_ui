import { lightModeTheme } from "@/themes/theme";
import "styled-components";

type CustomTheme = typeof lightModeTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
