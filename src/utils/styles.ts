type ValueType = string | number;

export const cssValue = (value: ValueType): string => {
  if (value === undefined || value === null) return undefined;

  if (typeof value === "string") {
    return value;
  }

  return `${value}px`;
};
