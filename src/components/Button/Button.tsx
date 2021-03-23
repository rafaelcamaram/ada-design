import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import withAccessibilityErrors from "hoc/withAccessibilityErrors";
import { Props as ViewProps } from "types/View";
import View from "components/View";
import {
  ButtonVariantType,
  ButtonIntentionType,
  ButtonSizeType,
  getVariantStyle,
} from "./buttonVariants";

type Props = {
  size?: ButtonSizeType;
  isFullWidth?: boolean;
  onClick?: MouseEventHandler;
  type?: string;
  variant?: ButtonVariantType;
  intention?: ButtonIntentionType;
} & ViewProps;

const Button: React.FC<Props> = ({
  type,
  variant,
  intention,
  onClick,
  children,
  size,
  ...rest
}) => {
  const variantStyle = getVariantStyle(variant, intention, size);

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
    filter: brightness(0.95);
  }
`;

export default withAccessibilityErrors<Props>(Button);
