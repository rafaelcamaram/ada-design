import React, { MouseEventHandler } from "react";
import * as Icons from "react-icons/fi";
import styled from "styled-components";
import withAccessibilityErrors from "hoc/withAccessibilityErrors";
import { Props as ViewProps } from "types/View";
import View from "components/View";
import {
  ButtonVariantType,
  ButtonIntentionType,
  ButtonSizeType,
  useVariantStyle,
} from "./buttonVariants";
import Spacer from "components/Spacer";

export type Props = {
  size?: ButtonSizeType;
  isFullWidth?: boolean;
  onClick?: MouseEventHandler;
  type?: string;
  variant?: ButtonVariantType;
  intention?: ButtonIntentionType;
  icon?: keyof typeof Icons;
} & ViewProps;

// TODO: Add support for icons
const Button: React.FC<Props> = ({
  type,
  variant,
  intention,
  onClick,
  children,
  size,
  icon,
  ...rest
}) => {
  const variantStyle = useVariantStyle(variant, intention, size);
  const Icon = icon ? Icons[icon] : null;

  return (
    <StyledButtonView
      forwardedAs="button"
      type={type}
      onClick={onClick}
      {...variantStyle}
      {...rest}
    >
      {children}
      {icon && (
        <>
          <Spacer marginRight={children ? 10 : 0} />
          <Icon />
        </>
      )}
    </StyledButtonView>
  );
};

const StyledButtonView = styled(View)<{ isFullWidth: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  width: ${({ isFullWidth }) => isFullWidth && "100%"};

  :hover {
    filter: brightness(0.95);
  }
`;

export default withAccessibilityErrors<Props>(Button);
