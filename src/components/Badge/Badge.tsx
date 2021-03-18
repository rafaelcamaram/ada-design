import React from "react";

import Text from "components/Typography/Text";
import { ViewElementProps } from "types/css";

type Props = {
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
  text = "",
  color = "#E1E5EA",
  textColor = "#fff",
  onClick,
  ...rest
}) => {
  return (
    <Text
      width="fit-content"
      paddingY={5}
      paddingX={10}
      backgroundColor={color}
      borderRadius={15}
      color={textColor}
      fontWeight="bold"
      fontSize={11}
      textTransform="uppercase"
      onClick={onClick}
      cursor={onClick ? "pointer" : "default"}
      customStyle={onClick && onHoverStyle}
      {...rest}
    >
      {text}
    </Text>
  );
};

export default Badge;
