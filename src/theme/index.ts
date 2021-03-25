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

export const defaultTheme: ThemeType = {
  buttons: {
    intentions: {
      textDefault: "rgb(66, 90, 112)",
      backgroundDefault: "#0679C6",
      textSuccess: "rgb(0, 120, 63)",
      backgroundSuccess: "#168350",
      textWarning: "rgb(149, 89, 31)",
      backgroundWarning: "rgb(238, 153, 19)",
      textDanger: "rgb(191, 14, 9)",
      backgroundDanger: "#E71F18",
    },
  },
  colors: {
    palette: {
      white: "#ffffff",
      black: "#000000",
    },
  },
};
