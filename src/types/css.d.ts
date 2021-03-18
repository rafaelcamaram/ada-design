import { ReactNode } from "react";

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

export type FontStyleValue = "normal" | "italic" | "oblique";

export type FontVariantValue = "normal" | "small-caps";

export type FontWeightValue =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "normal"
  | "bold"
  | "lighter";

export type PositionValue = "static" | "relative" | "absolute" | "fixed";

export type ZIndexValue = "auto" | number;

export type TextAlignValue = "left" | "right" | "center" | "justify";

export type TextDecorationValue = "none" | "underline";

export type TextOverflowValue = "clip" | "ellipsis";

export type TextTransformValue =
  | "none"
  | "capitalize"
  | "uppercase"
  | "lowercase";

export type OverflowValue = "hidden" | "visible" | "scroll" | "auto";

export type CursorValue =
  | "default"
  | "auto"
  | "pointer"
  | "move"
  | "crosshair"
  | "text"
  | "wait"
  | "help-resize"
  | "ne-resize"
  | "nw-resize"
  | "n-resize"
  | "se-resize"
  | "s-resize"
  | "w-resize";

export type BoxSizingValue = "content-box" | "border-box";

export type ClearValue = "none" | "left" | "right" | "both";

export type FloatValue = "none" | "left" | "right";

export type TransitionTimingFunctionValue =
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "linear"
  | "step-start"
  | "step-end"
  | string;

export type VisibilityValue =
  | "visible"
  | "hidden"
  | "collapse"
  | "initial"
  | "inherit";

export type WordWrapValue = "normal" | "break-word" | "initial" | "inherit";

export type WhiiteSpaceValue =
  | "normal"
  | "nowrap"
  | "pre"
  | "pre-wrap"
  | "pre-line";

export type LineHeightValue = "normal" | string;

export type LetterSpacingValue = "normal" | string;

export type OutlineStyleValue =
  | "none"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "unset";

export type ViewElementProps = {
  children?: ReactNode;

  width?: UnitValue;
  height?: UnitValue;

  maxWidth?: UnitValue;
  minWidth?: UnitValue;
  maxHeight?: UnitValue;
  minHeight?: UnitValue;

  padding?: UnitValue;
  paddingBottom?: UnitValue;
  paddingLeft?: UnitValue;
  paddingRight?: UnitValue;
  paddingTop?: UnitValue;
  paddingX?: UnitValue;
  paddingY?: UnitValue;

  margin?: UnitValue;
  marginBottom?: UnitValue;
  marginLeft?: UnitValue;
  marginRight?: UnitValue;
  marginTop?: UnitValue;
  marginX?: UnitValue;
  marginY?: UnitValue;

  boxSizing?: BoxSizingValue;
  display?: string;
  clear?: ClearValue;
  float?: FloatValue;

  filter?: string;
  backdropFilter?: string;

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

  font?: string;
  fontFamily?: string;
  fontSize?: UnitValue;
  fontStyle?: FontStyleValue;
  fontVariant?: FontVariantValue;
  fontWeight?: FontWeightValue;
  textAlign?: TextAlignValue;
  textDecoration?: TextDecorationValue;
  textOverflow?: TextOverflowValue;
  textShadow?: string;
  textTransform?: TextTransformValue;
  color?: string;
  letterSpacing?: LetterSpacingValue;
  lineHeight?: LineHeightValue;
  wordWrap?: WordWrapValue;
  whiteSpace?: WhiiteSpaceValue;

  boxShadow?: string;

  position?: PositionValue;
  top?: UnitValue;
  bottom?: UnitValue;
  left?: UnitValue;
  right?: UnitValue;
  zIndex?: ZIndexValue;

  transform?: "none" | string;
  transformOrigin?: string;

  transition?: string;
  transitionDelay?: string;
  transitionDuration?: string;
  transitionProperty?: string;
  transitionTimingFunction?: TransitionTimingFunctionValue;

  overflow?: OverflowValue;
  overflowX?: OverflowValue;
  overflowY?: OverflowValue;

  visibility?: VisibilityValue;

  outline?: string;
  outlineColor?: string;
  outlineStyle?: OutlineStyleValue;
  outlineWidth?: UnitValue;

  opacity?: number;
  cursor?: CursorValue;
  order?: number;
};
