import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import withAccessibilityErrors from "../../hoc/withAccessibilityErrors";
import colors from "../../theme/colors";
import { ViewElementProps } from "../../types/css";
import View from "../View";

type ButtonVariantType = "primary" | "secondary" | "default";

type Props = {
  onClick?: MouseEventHandler;
  type?: string;
  variant?: ButtonVariantType;
  customStyle?: string | object;
} & ViewElementProps;

const defaultButtonProps = {
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

const Button: React.FC<Props> = ({
  type,
  variant,
  onClick,
  children,
  ...rest
}) => {
  const variantStyle = getVariantStyle(variant);

  return (
    <StyledButtonView
      forwardedAs="button"
      type={type}
      onClick={() => console.log("Button click")}
      {...variantStyle}
      {...rest}
    >
      {children}
    </StyledButtonView>
  );
};

const StyledButtonView = styled(View)`
  transition: all 0.2s linear;

  :hover {
    filter: brightness(0.9);
  }
`;

export default withAccessibilityErrors<Props>(Button);
