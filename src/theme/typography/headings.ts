import COLORS from "theme/colors";
import fontFamilies from "./fontFamilies";
import { ViewElementProps } from "types/css";

export type HeadingObject = Partial<ViewElementProps>;

export default {
  "900": {
    fontSize: "35px",
    fontWeight: 500,
    lineHeight: "40px",
    letterSpacing: "-0.2px",
    fontFamily: fontFamilies.display,
    color: COLORS.agitatedBlue,
  },
  "800": {
    fontSize: "29px",
    fontWeight: 500,
    lineHeight: "32px",
    letterSpacing: "-0.2px",
    fontFamily: fontFamilies.display,
    color: COLORS.agitatedBlue,
  },
  "700": {
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: "-0.07px",
    fontFamily: fontFamilies.display,
    color: COLORS.agitatedBlue,
  },
  "600": {
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "-0.07px",
    fontFamily: fontFamilies.display,
    color: COLORS.agitatedBlue,
  },
  "500": {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "-0.05px",
    fontFamily: fontFamilies.ui,
    color: COLORS.agitatedBlue,
  },
  "400": {
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "-0.05px",
    fontFamily: fontFamilies.ui,
    color: COLORS.agitatedBlue,
  },
  "300": {
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "16px",
    letterSpacing: "0",
    fontFamily: fontFamilies.ui,
    color: COLORS.agitatedBlue,
  },
  "200": {
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "16px",
    letterSpacing: "0",
    fontFamily: fontFamilies.ui,
    color: COLORS.agitatedBlue,
  },
  "100": {
    fontSize: "11px",
    fontWeight: 400,
    textTransform: "uppercase",
    lineHeight: "16px",
    letterSpacing: "0.6px",
    fontFamily: fontFamilies.ui,
    color: COLORS.agitatedBlue,
  },
};
