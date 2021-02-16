export type MainAxisFlexDefault =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "space-between"
  | "space-around";

export type CrossAxisFlexDefault =
  | "flex-start"
  | "flex-end"
  | "center"
  | "auto"
  | "baseline"
  | "stretch";

export type BlendMode =
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

export type BorderStyle =
  | "none"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove";

export type UnitValue = string | number;

export type ViewElementProps = {
  display?: string;
  alignContent?: MainAxisFlexDefault;
  alignItems?: CrossAxisFlexDefault;
  alignSelf?: CrossAxisFlexDefault;
  mixBlendMode?: BlendMode;

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
  borderStyle?: BorderStyle;

  borderBottom?: string;
  borderBottomColor?: string;
  borderBottomLeftRadius?: UnitValue;
  borderBottomRightRadius?: UnitValue;
  borderBottomStyle?: BorderStyle;
  borderBottomWidth?: UnitValue;

  borderLeft?: string;
  borderLeftColor?: string;
  borderLeftStyle?: BorderStyle;
  borderLeftWidth?: UnitValue;

  borderRight?: string;
  borderRightColor?: string;
  borderRightStyle?: BorderStyle;
  borderRightWidth?: UnitValue;

  borderTop?: string;
  borderTopColor?: string;
  borderTopLeftRadius?: UnitValue;
  borderTopRightRadius?: UnitValue;
  borderTopStyle?: BorderStyle;
  borderTopWidth?: UnitValue;
};
