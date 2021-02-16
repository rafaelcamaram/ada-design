export type FlexDefaultValues =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "space-between"
  | "space-around";

export type FlexDefaultValuesTwo =
  | "flex-start"
  | "flex-end"
  | "center"
  | "auto"
  | "baseline"
  | "stretch";

type BlendMode =
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

export type ViewElementProps = {
  display?: string;
  alignContent?: FlexDefaultValues;
  alignItems?: FlexDefaultValuesTwo;
  alignSelf?: FlexDefaultValuesTwo;
  mixBlendMode?: BlendMode;
  background?: string;
  backgroundClip?: "border-box" | "padding-box" | "content-box";
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundOrigin?: "border-box" | "padding-box" | "content-box";
  backgroundPosition?: string;
  backgroundRepeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
  backgroundSize?: string;
};
