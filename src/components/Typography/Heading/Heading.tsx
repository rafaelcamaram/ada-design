import React, { memo } from "react";
import { getHeadingStyle } from "theme";
import { Props as ViewProps } from "types/View";
import View from "components/View";

type Props = {
  size: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
} & ViewProps;

const Heading: React.FC<Props> = ({ size = 500, children, ...restProps }) => {
  const headingStyle = getHeadingStyle(size);

  return (
    <View as="h2" marginBottom={0} {...headingStyle} {...restProps}>
      {children}
    </View>
  );
};

export default memo(Heading);
