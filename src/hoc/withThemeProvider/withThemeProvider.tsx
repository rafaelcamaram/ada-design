import React, { createContext, useContext } from "react";
import { defaultTheme } from "theme";

type ThemeProviderProps = {
  shouldDisableA11y?: boolean;
};

export const ThemeProviderContext = createContext(defaultTheme);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withThemeProvider = <T,>(Component) => {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return function ComponentWithThemeProvider({
    ...props
  }: T & ThemeProviderProps) {
    const themeProviderContext = useContext(ThemeProviderContext);

    return <Component {...props} {...themeProviderContext} />;
  };
};
