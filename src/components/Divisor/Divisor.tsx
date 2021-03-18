import View from "components/View";
import React from "react";
import { ViewElementProps } from "types/css";

type Props = {
  color?: string;
  height?: number;
} & ViewElementProps;

const Divisor: React.FC<Props> = ({
  color = "rgba(115, 133, 152, 0.20)",
  height = 1,
  ...rest
}) => {
  return (
    <View
      width="100%"
      height={1}
      borderTop={`${height}px solid ${color}`}
      {...rest}
    />
  );
};

export default Divisor;
