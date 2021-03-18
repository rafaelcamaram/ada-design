import React from "react";

import Text from "components/Typography/Text";
import { Props as ViewProps } from "types/View";

type Props = {
  onClick?: () => void;
  href?: string;
} & ViewProps;

const Link: React.FC<Props> = ({ onClick, href, children, ...rest }) => {
  return (
    <Text
      color="#738598"
      marginRight={5}
      fontSize={12}
      textDecoration="none"
      onClick={onClick}
      href={href}
      customStyle={{
        "&:hover": {
          textDecoration: "underline",
        },
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Link;
