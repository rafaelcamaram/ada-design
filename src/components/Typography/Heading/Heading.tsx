import React, { memo } from "react";
import { getHeadingStyle } from "../../../theme";
import { ViewElementProps } from "../../../types/css";
import View from "../../View";

type Props = {
  size: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
} & ViewElementProps;

const Heading: React.FC<Props> = ({ size = 500, children, ...restProps }) => {
  const headingStyle = getHeadingStyle(size);

  return (
    <View as="h2" marginBottom={0} {...headingStyle} {...restProps}>
      {children}
    </View>
  );
};

export default memo(Heading);
