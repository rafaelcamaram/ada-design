import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { defaultTheme } from "theme";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useTheme() {
  const theme = useContext(ThemeContext);
  return theme || defaultTheme;
}
