import React from "react";
import styled from "styled-components";

import Text from "components/Typography/Text";
import { ColorType, FontWeightValue } from "types/css";
import Flex from "components/Flex";
import { Props as ViewProps } from "types/View";

export type BadgeVariants = "default" | "circle";

export type Props = {
  variant?: BadgeVariants;
  text?: string;
  border?: string;
  color?: ColorType;
  textColor?: ColorType;
  textWeight?: FontWeightValue;
  onClick?: () => void;
} & ViewProps;

// TODO: DOC - Update docs in order to show that's possible to use colors names
const Badge: React.FC<Props> = ({
  variant = "default",
  text = "",
  border = "transparent",
  color = "#E1E5EA",
  textColor = "#fff",
  textWeight = "bold",
  onClick,
  ...rest
}) => {
  return (
    <StyledBadgeContainer
      width="fit-content"
      height={15}
      paddingY={variant === "default" && 5}
      paddingX={variant === "default" ? 10 : 5}
      backgroundColor={color}
      borderRadius={15}
      onClick={onClick}
      cursor={onClick ? "pointer" : "default"}
      justifyContent="center"
      alignItems="center"
      border={border}
      {...rest}
    >
      <Text
        fontSize={11}
        textTransform="uppercase"
        fontWeight={textWeight}
        color={textColor}
      >
        {text}
      </Text>
    </StyledBadgeContainer>
  );
};

const StyledBadgeContainer = styled(Flex)`
  transition: filter 0.2s linear;

  &:hover {
    filter: brightness(1.2);
  }
`;

export default Badge;
