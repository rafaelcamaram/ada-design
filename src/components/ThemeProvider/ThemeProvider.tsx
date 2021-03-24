import React, { useMemo } from "react";

import { defaultTheme } from "theme";
import View from "components/View";
import { ThemeProviderContext } from "hoc/withThemeProvider/withThemeProvider";
import { ThemeType } from "theme/theme";
import { mergeDeep } from "utils/deepMerge";

type Props = {
  value: Partial<ThemeType>;
};

const ThemeProvider: React.FC<Props> = ({ children, value }) => {
  const currentValue = useMemo(() => {
    return mergeDeep(defaultTheme, value);
  }, [defaultTheme, value]);

  return (
    <ThemeProviderContext.Provider value={currentValue}>
      <View>{children}</View>
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
