import colors from "theme/colors";

export type ButtonVariantType = "primary" | "secondary" | "default";

const defaultButtonProps = {
  paddingY: 16,
  paddingX: 32,
  cursor: "pointer",
};

const VariantStyles = {
  default: {
    ...defaultButtonProps,
  },
  primary: {
    ...defaultButtonProps,
    backgroundColor: colors.primary,
    color: "white",
    borderRadius: 15,
    border: `1px solid ${colors.primary}`,
    boxShadow: `0px 0px 8px 4px ${colors.primary}40`,
  },
};

export const getVariantStyle = (variant: ButtonVariantType) => {
  if (!variant) return null;

  return VariantStyles[variant] || VariantStyles.default;
};
