import headings, { HeadingObject } from "./typography/headings";
import fontFamilies from "./typography/fontFamilies";
import { ThemeType } from "./themeTypes";

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

export const COLORS = {
  white: "#ffffff",
  black: "#000000",
  agitatedBlue: "rgb(66, 90, 112)",
  lochmara: "#0679C6",
  funGreen: "rgb(0, 120, 63)",
  jewel: "#168350",
  rope: "rgb(149, 89, 31)",
  gamboge: "rgb(238, 153, 19)",
  milanoRed: "rgb(191, 14, 9)",
  alizarinCrimson: "#E71F18",
};

export const defaultTheme: ThemeType = {
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
