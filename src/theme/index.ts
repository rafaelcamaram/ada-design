import { DefaultTheme } from "styled-components";
import headings, { HeadingObject } from "./typography/headings";
import fontFamilies from "./typography/fontFamilies";
import COLORS from "./colors";

const getThemeProperty = (dataset, key) => {
  if (Object.prototype.hasOwnProperty.call(dataset, key)) {
    return dataset[key];
  }
};

export const getHeadingStyle = (size: number): HeadingObject => {
  if (!size) return null;

  return getThemeProperty(headings, size);
};

export const getFontFamilyStyle = (variant: string): string => {
  if (!variant) return null;

  return getThemeProperty(fontFamilies, variant);
};

export const defaultTheme: DefaultTheme = {
  colors: {
    buttons: {
      intentions: {
        textDefault: COLORS.agitatedBlue,
        backgroundDefault: COLORS.lochmara,
        textSuccess: COLORS.funGreen,
        backgroundSuccess: COLORS.jewel,
        textWarning: COLORS.rope,
        backgroundWarning: COLORS.gamboge,
        textDanger: COLORS.milanoRed,
        backgroundDanger: COLORS.alizarinCrimson,
      },
    },
    text: {
      textDefault: COLORS.agitatedBlue,
    },
    palette: {
      white: COLORS.white,
      black: COLORS.black,
      red: COLORS.milanoRed,
    },
  },
};
