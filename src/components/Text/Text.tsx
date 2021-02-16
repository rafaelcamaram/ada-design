import React from "react";
import { ViewElementProps } from "../../types/css";

import View from "../View";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
} & ViewElementProps;

const Text: React.FC<Props> = ({ as = "span", children, ...rest }) => {
  return (
    <View as={as} {...rest}>
      {children}
    </View>
  );
};

export default Text;
