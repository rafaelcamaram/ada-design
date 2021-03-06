import useTheme from "theme/useTheme";
import { ColorType } from "types/css";

type ValueType = string | number;

export const cssValue = (value: ValueType): string => {
  if (value === undefined || value === null) return undefined;

  if (typeof value === "string") {
    return value;
  }

  return `${value}px`;
};

const COLOR_BY_IMPACT = {
  minor: "rgba(255, 68, 0, 0.2)",
  moderate: "rgba(255, 130, 0, 0.4)",
  serious: "rgba(255, 68, 0, 0.6)",
  critical: "rgba(255, 0, 0, 0.8)",
  success: "rgba(101, 191, 59, 0.5)",
  incomplete: "rgb(238, 153, 19, 0.8)",
} as const;

export const getColorByImpact = (
  impact: string,
  isIncompleteIssue?: boolean,
): string => {
  if (isIncompleteIssue) return COLOR_BY_IMPACT.incomplete;
  return COLOR_BY_IMPACT[impact] || COLOR_BY_IMPACT.success;
};

export const getColor = (textColor: ColorType): string => {
  const { colors } = useTheme();

  if (!colors) return;

  return textColor && colors.all[textColor as string]
    ? colors.all[textColor as string]
    : textColor || colors.text.textDefault;
};
