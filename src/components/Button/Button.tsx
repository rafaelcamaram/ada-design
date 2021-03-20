import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import withAccessibilityErrors from "hoc/withAccessibilityErrors";
import { Props as ViewProps } from "types/View";
import View from "components/View";
import { ButtonVariantType, getVariantStyle } from "./buttonVariants";

type Props = {
  isFullWidth?: boolean;
  onClick?: MouseEventHandler;
  type?: string;
  variant?: ButtonVariantType;
  customStyle?: string | Record<string, unknown>;
} & ViewProps;

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
      onClick={onClick}
      {...variantStyle}
      {...rest}
    >
      {children}
    </StyledButtonView>
  );
};

const StyledButtonView = styled(View)<{ isFullWidth: boolean }>`
  transition: all 0.2s linear;
  width: ${({ isFullWidth }) => isFullWidth && "100%"};

  :hover {
    filter: brightness(0.9);
  }
`;

export default withAccessibilityErrors<Props>(Button);
