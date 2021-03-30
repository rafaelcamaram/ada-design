import React, { useMemo } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from "styled-components";

import { defaultTheme } from "theme";
import View from "components/View";
import { mergeDeep } from "utils/deepMerge";

export type Props = {
  value?: Partial<DefaultTheme>;
};

const ThemeProvider: React.FC<Props> = ({ children, value = {} }) => {
  const currentValue = useMemo(() => {
    return mergeDeep(defaultTheme, value);
  }, [defaultTheme, value]);

  return (
    <StyledThemeProvider theme={currentValue}>
      <View>{children}</View>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
