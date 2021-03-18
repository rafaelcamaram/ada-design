import React from "react";

import Text from "components/Typography/Text";
import { ViewElementProps } from "types/css";
import Flex from "components/Flex";

type BadgeVariants = "default" | "circle";

type Props = {
  variant?: BadgeVariants;
  text?: string;
  color?: string;
  textColor?: string;
  onClick?: () => void;
} & ViewElementProps;

const onHoverStyle = {
  transition: "filter 0.2s linear",
  "&:hover": {
    filter: "brightness(1.2)",
  },
} as const;

const Badge: React.FC<Props> = ({
  variant = "default",
  text = "",
  color = "#E1E5EA",
  textColor = "#fff",
  onClick,
  ...rest
}) => {
  return (
    <Flex
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
      customStyle={onClick && onHoverStyle}
      {...rest}
    >
      <Text
        fontSize={11}
        textTransform="uppercase"
        fontWeight="bold"
        color={textColor}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default Badge;