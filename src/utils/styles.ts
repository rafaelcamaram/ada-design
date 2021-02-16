export const cssValue = (value: string | number): string => {
  if (!value) return undefined;

  if (typeof value === "string") {
    return value;
  }

  return `${value}px`;
};
