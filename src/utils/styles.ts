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
  moderate: "rgba(255, 68, 0, 0.4)",
  serious: "rgba(255, 68, 0, 0.6)",
  critical: "rgba(255, 68, 0, 0.8)",
  success: "rgba(101, 191, 59, 0.5)",
  incomplete: "rgb(238, 153, 19)",
} as const;

export const getColorByImpact = (impact) => {
  return COLOR_BY_IMPACT[impact] || COLOR_BY_IMPACT.success;
};
