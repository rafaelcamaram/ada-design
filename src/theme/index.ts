import headings, { HeadingObject } from "./typography/headings";
import fontFamilies from "./typography/fontFamilies";

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
