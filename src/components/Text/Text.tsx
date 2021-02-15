import React from "react";

import View from "../View";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
};

const Text: React.FC<Props> = ({ as = "span", children }) => {
  return <View as={as}>{children}</View>;
};

export default Text;
