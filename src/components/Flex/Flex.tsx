import View from "components/View";
import React from "react";
import { Props as ViewProps } from "types/View";

type Props = Omit<ViewProps, "display">;

const Flex: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View display="flex" {...props}>
      {children}
    </View>
  );
};

export default Flex;
