import { ThemeProviderContext } from "hoc/withThemeProvider/withThemeProvider";
import { useContext } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useTheme = () => {
  return useContext(ThemeProviderContext);
};

export default useTheme;
