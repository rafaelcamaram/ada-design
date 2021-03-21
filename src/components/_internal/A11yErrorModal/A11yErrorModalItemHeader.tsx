import React from "react";

import Flex from "components/Flex";
import Heading from "components/Typography/Heading";
import Text from "components/Typography/Text";
import View from "components/View";
import StatusPill from "../StatusPill";
import Divisor from "components/Divisor";

type Props = {
  record: any;
};

const A11yErrorModalItemHeader: React.FC<Props> = ({ record }) => {
  return (
    <View width="100%" cursor="pointer">
      <Flex alignItems="center">
        <StatusPill impact={record.impact} />
        <Flex flexDirection="column" marginLeft={12}>
          <Heading size={400} marginTop={0}>
            {record.description}
          </Heading>

          <Text color="#060F19" marginBottom={6}>
            {record.help}
          </Text>
        </Flex>
      </Flex>

      <Divisor marginY={6} />
    </View>
  );
};

export default A11yErrorModalItemHeader;
