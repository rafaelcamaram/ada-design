import View from "components/View";
import React from "react";
import { ColorType } from "types/css";
import { Props as ViewProps } from "types/View";
import { getColor } from "utils/styles";

export type Props = {
  color?: ColorType;
  height?: number;
} & ViewProps;

const Divisor: React.FC<Props> = ({
  color = "rgba(115, 133, 152, 0.20)",
  height = 1,
  ...rest
}) => {
  return (
    <View
      width="100%"
      height={1}
      borderTop={`${height}px solid ${getColor(color)}`}
      {...rest}
    />
  );
};

export default Divisor;
