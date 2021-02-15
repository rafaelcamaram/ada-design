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

export type ViewElementProps = {
  display?: string;
  alignContent?: FlexDefaultValues;
  alignItems?: FlexDefaultValuesTwo;
  alignSelf?: FlexDefaultValuesTwo;
};
