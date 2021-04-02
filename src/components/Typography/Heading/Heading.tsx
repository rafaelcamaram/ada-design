import React from "react";
import { getHeadingStyle } from "theme";
import { Props as ViewProps } from "types/View";
import View from "components/View";
import { ColorType } from "types/css";

export type Props = {
  size: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color?: ColorType;
} & ViewProps;

// TODO: DEV - Adding A11y to Heading
const Heading: React.FC<Props> = ({
  size = 500,
  color,
  children,
  ...restProps
}) => {
  const headingStyle = getHeadingStyle(size, color);

  return (
    <View as="h2" marginBottom={0} {...headingStyle} {...restProps}>
      {children}
    </View>
  );
};

export default Heading;
