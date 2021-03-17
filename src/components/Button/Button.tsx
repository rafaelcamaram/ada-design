import React, { MouseEventHandler } from "react";
import withAccessibilityErrors from "../../hoc/withAccessibilityErrors";
import colors from "../../theme/colors";
import fontFamilies from "../../theme/typography/fontFamilies";
import { ViewElementProps } from "../../types/css";
import View from "../View";

type ButtonVariantType = "primary" | "secondary" | "default";

type Props = {
  onClick?: MouseEventHandler;
  type?: string;
  variant?: ButtonVariantType;
} & ViewElementProps;

const defaultButtonProps: Partial<ViewElementProps> = {
  paddingY: 16,
  width: "100%",
  cursor: "pointer",
};

// TODO: Apply hover styles pattern
const VariantStyles = {
  default: {
    ...defaultButtonProps,
  },
  primary: {
    ...defaultButtonProps,
    backgroundColor: "#0D65C2",
    color: "white",
    borderRadius: 15,
    border: "1px solid #0D65C2",
    boxShadow: "0px 0px 8px 4px rgba(1,105,251,0.25)",
  },
};

export const getVariantStyle = (variant: ButtonVariantType) => {
  if (!variant) return null;

  return VariantStyles[variant] || VariantStyles.default;
};

const Button: React.FC<Props> = ({
  type,
  variant,
  onClick,
  children,
  ...rest
}) => {
  const variantStyle = getVariantStyle(variant);

  return (
    <View as="button" type={type} onClick={onClick} {...variantStyle} {...rest}>
      {children}
    </View>
  );
};

export default withAccessibilityErrors<Props>(Button);
