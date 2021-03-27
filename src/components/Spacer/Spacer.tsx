import React from "react";

import View from "components/View";
import { Props as ViewProps } from "types/View";

export type Props = ViewProps;

const Spacer: React.FC<Props> = (props) => {
  return <View flexGrow={1} flexShrink={1} flexBasis="auto" {...props} />;
};

export default Spacer;
