import { useMemo } from "react";
import { getFontFamilyStyle } from "theme";
import useTheme from "theme/useTheme";

const fontFamilyName = getFontFamilyStyle("ui");

const TEXT_STYLE_BY_SIZE = {
  300: {
    fontSize: 12,
    lineHeight: "16px",
    letterSpacing: 0,
  },
  400: {
    fontSize: 14,
    lineHeight: "20px",
    letterSpacing: -0.05,
  },
  500: {
    fontSize: 16,
    lineHeight: "20px",
    letterSpacing: -0.05,
  },
  600: {
    fontSize: 20,
    lineHeight: "14px",
    letterSpacing: -0.07,
  },
} as const;

const getVariantStyles = ({ size }) => {
  const { colors } = useTheme();
  const { text } = colors;

  const defaultTextVariants = useMemo(() => {
    return {
      text: {
        fontFamily: fontFamilyName,
        fontWeight: 400,
        fontSize: 14,
        color: text.textDefault,
      },
    };
  }, [colors]);

  return {
    text: {
      ...defaultTextVariants.text,
      ...(size && TEXT_STYLE_BY_SIZE[size]),
    },
  };
};

// TODO: Set correct type
export const useVariantStyle: any = ({ size }) => {
  const { text } = getVariantStyles({ size });

  return {
    text,
  };
};
