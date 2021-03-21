import React from "react";

import { Props as ViewProps } from "types/View";
import Flex from "components/Flex";
import Badge from "components/Badge";

type Props = {
  data?: string[];
} & ViewProps;

const BadgeList: React.FC<Props> = ({ data = [], ...rest }) => {
  return (
    <Flex flexWrap="wrap" paddingTop={15} {...rest}>
      {data.map((tag) => {
        return (
          <Badge
            key={tag}
            text={tag}
            textColor="#738598"
            textWeight="normal"
            border="1px solid rgba(115, 133, 152, 0.20)"
            color="transparent"
            marginRight={5}
            marginBottom={5}
          />
        );
      })}
    </Flex>
  );
};

export default BadgeList;
