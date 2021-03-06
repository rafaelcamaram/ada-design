import React from "react";

import Flex from "components/Flex";
import Text from "components/Typography/Text";
import Divisor from "components/Divisor";
import Badge from "components/Badge";
import Link from "components/Typography/Link";
import BadgeList from "components/BadgeList";

import { getColorByImpact } from "utils/styles";

import StatusPill from "../StatusPill";
import useTheme from "theme/useTheme";

type Props = {
  record: any;
  setIsCollapsed: (value: boolean) => void;
};

const A11yErrorModalItemContent: React.FC<Props> = ({ record }) => {
  const {
    colors: { palette },
  } = useTheme();
  const { helpUrl, tags, nodes } = record;
  const { impact, any: anyList } = nodes[0];

  return (
    <Flex
      flexDirection="row"
      backgroundColor={palette.darkWhite}
      marginX={-32}
      marginTop={-6}
      marginBottom={6}
      paddingX={32}
      paddingY={12}
      boxSizing="border-box"
      flexWrap="wrap"
    >
      <Flex flexDirection="column" marginY={10}>
        <Flex alignItems="center" marginBottom={12}>
          <Badge text={impact || "Success"} color={getColorByImpact(impact)} />
          <Link target="_blank" href={helpUrl} marginRight={21} marginLeft={16}>
            External Resources
          </Link>
          <Link
            target="_blank"
            href="https://adadesign.io/docs/components/a11y-context-provider"
          >
            Component Reference
          </Link>
        </Flex>
        {impact && (
          <Text marginBottom={6}>
            Fix one of the following in order to solve it:
          </Text>
        )}
        {impact &&
          anyList.map((item, index) => {
            return (
              <Flex key={index} alignItems="center">
                <StatusPill impact={item.impact} />

                <Text marginLeft={6}>{item.message}</Text>
              </Flex>
            );
          })}
      </Flex>
      <Divisor />
      <BadgeList data={tags} />
    </Flex>
  );
};

export default A11yErrorModalItemContent;
