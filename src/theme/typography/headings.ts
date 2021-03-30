import fontFamilies from "./fontFamilies";
import { ViewElementProps } from "types/css";
import useTheme from "theme/useTheme";
import { getColor } from "utils/styles";

export type HeadingObject = Partial<ViewElementProps>;

// TODO: Fix return type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function getHeadingDataset(textColor) {
  const { fontSize } = useTheme();

  return {
    "900": {
      fontSize: fontSize.xxxlarge,
      fontWeight: 500,
      lineHeight: "40px",
      letterSpacing: "-0.2px",
      fontFamily: fontFamilies.display,
      color: getColor(textColor),
    },
    "800": {
      fontSize: fontSize.xxlarge,
      fontWeight: 500,
      lineHeight: "32px",
      letterSpacing: "-0.2px",
      fontFamily: fontFamilies.display,
      color: getColor(textColor),
    },
    "700": {
      fontSize: fontSize.xlarge,
      fontWeight: 500,
      lineHeight: "28px",
      letterSpacing: "-0.07px",
      fontFamily: fontFamilies.display,
      color: getColor(textColor),
    },
    "600": {
      fontSize: fontSize.large,
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "-0.07px",
      fontFamily: fontFamilies.display,
      color: getColor(textColor),
    },
    "500": {
      fontSize: fontSize.medium,
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "-0.05px",
      fontFamily: fontFamilies.ui,
      color: getColor(textColor),
    },
    "400": {
      fontSize: fontSize.regular,
      fontWeight: 600,
      lineHeight: "20px",
      letterSpacing: "-0.05px",
      fontFamily: fontFamilies.ui,
      color: getColor(textColor),
    },
    "300": {
      fontSize: fontSize.small,
      fontWeight: 600,
      lineHeight: "16px",
      letterSpacing: "0",
      fontFamily: fontFamilies.ui,
      color: getColor(textColor),
    },
    "200": {
      fontSize: fontSize.small,
      fontWeight: 600,
      lineHeight: "16px",
      letterSpacing: "0",
      fontFamily: fontFamilies.ui,
      color: getColor(textColor),
    },
    "100": {
      fontSize: fontSize.xsmall,
      fontWeight: 400,
      textTransform: "uppercase",
      lineHeight: "16px",
      letterSpacing: "0.6px",
      fontFamily: fontFamilies.ui,
      color: getColor(textColor),
    },
  };
}
