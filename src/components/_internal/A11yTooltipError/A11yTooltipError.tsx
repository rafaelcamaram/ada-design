import React from "react";

import Badge from "components/Badge";
import Divisor from "components/Divisor";
import Flex from "components/Flex";
import Heading from "components/Typography/Heading";
import Link from "components/Typography/Link";
import Text from "components/Typography/Text";
import View from "components/View";
import styled from "styled-components";

type Props = {
  issue: any;
  setIsModalOpen: (value: boolean) => void;
};

const A11yTooltipError: React.FC<Props> = ({ issue, setIsModalOpen }) => {
  if (!issue) return null;

  return (
    <ErrorContent>
      <Badge text={issue.impact} color="rgba(255, 68, 0, 0.5)" />
      <Heading size={400} width={250}>
        {issue.description}
      </Heading>
      <Text color="#060F19" marginTop={5} marginBottom={10}>
        {issue.help}
      </Text>
      <Flex flexDirection="row" marginY={10}>
        <Link as="a" target="_blank" href={issue.helpUrl} marginRight={10}>
          More info
        </Link>
        <Flex flexDirection="row">
          <Link
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Open details
          </Link>
          <Badge
            variant="circle"
            text={`${issue.nodes[0].any.length}`}
            textColor="#738598"
          />
        </Flex>
      </Flex>
      <Divisor />
      <Flex flexWrap="wrap" paddingTop={15}>
        {issue.tags.map((tag) => {
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
    </ErrorContent>
  );
};

export const ErrorContent = styled(View)`
  width: 320px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px dashed #ff0000;
  border-radius: 8px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.4);
  padding: 15px;
`;

export default A11yTooltipError;