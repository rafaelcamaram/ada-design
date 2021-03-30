import { DefaultTheme } from "styled-components";
import getHeadingDataset, { HeadingObject } from "./typography/headings";
import fontFamilies from "./typography/fontFamilies";
import COLORS from "./colors";
import { ColorType } from "types/css";

const getThemeProperty = (dataset, key) => {
  if (Object.prototype.hasOwnProperty.call(dataset, key)) {
    return dataset[key];
  }
};

export const getHeadingStyle = (
  size: number,
  textColor: ColorType,
): HeadingObject => {
  if (!size) return null;
  const headings = getHeadingDataset(textColor);

  return getThemeProperty(headings, size);
};

export const getFontFamilyStyle = (variant: string): string => {
  if (!variant) return null;

  return getThemeProperty(fontFamilies, variant);
};

export const defaultTheme: DefaultTheme = {
  fontSize: {
    xsmall: 11,
    small: 12,
    regular: 14,
    medium: 16,
    large: 20,
    xlarge: 24,
    xxlarge: 28,
    xxxlarge: 36,
  },
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
    all: COLORS,
  },
};
