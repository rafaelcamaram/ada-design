export type MainAxisFlexDefaultValue =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "space-between"
  | "space-around";

export type CrossAxisFlexDefaultValue =
  | "flex-start"
  | "flex-end"
  | "center"
  | "auto"
  | "baseline"
  | "stretch";

export type BlendModeValue =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

export type BorderStyleValue =
  | "none"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove";

export type UnitValue = string | number;

export type FlexDirectionValue =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

export type FlexWrapValue = "nowrap" | "wrap" | "wrap-reverse";

export type ViewElementProps = {
  display?: string;

  flex?: string;
  flexFlow?: string;
  flexBasis?: string;
  flexDirection?: FlexDirectionValue;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: FlexWrapValue;

  justifyContent?: MainAxisFlexDefaultValue;
  justifyItems?: CrossAxisFlexDefaultValue;
  justifySelf?: CrossAxisFlexDefaultValue;

  alignContent?: MainAxisFlexDefaultValue;
  alignItems?: CrossAxisFlexDefaultValue;
  alignSelf?: CrossAxisFlexDefaultValue;
  mixBlendMode?: BlendModeValue;

  background?: string;
  backgroundClip?: "border-box" | "padding-box" | "content-box";
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundOrigin?: "border-box" | "padding-box" | "content-box";
  backgroundPosition?: string;
  backgroundRepeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
  backgroundSize?: string;

  border?: string;
  borderWidth?: UnitValue;
  borderColor?: string;
  borderRadius?: UnitValue;
  borderStyle?: BorderStyleValue;

  borderBottom?: string;
  borderBottomColor?: string;
  borderBottomLeftRadius?: UnitValue;
  borderBottomRightRadius?: UnitValue;
  borderBottomStyle?: BorderStyleValue;
  borderBottomWidth?: UnitValue;

  borderLeft?: string;
  borderLeftColor?: string;
  borderLeftStyle?: BorderStyleValue;
  borderLeftWidth?: UnitValue;

  borderRight?: string;
  borderRightColor?: string;
  borderRightStyle?: BorderStyleValue;
  borderRightWidth?: UnitValue;

  borderTop?: string;
  borderTopColor?: string;
  borderTopLeftRadius?: UnitValue;
  borderTopRightRadius?: UnitValue;
  borderTopStyle?: BorderStyleValue;
  borderTopWidth?: UnitValue;
};
