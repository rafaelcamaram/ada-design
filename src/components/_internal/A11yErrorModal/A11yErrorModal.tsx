import React from "react";

import Badge from "components/Badge";
import Divisor from "components/Divisor";
import Flex from "components/Flex";
import Heading from "components/Typography/Heading";
import Link from "components/Typography/Link";
import Text from "components/Typography/Text";
import View from "components/View";
import Modal from "components/Modal";

type Props = {
  issue: any;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const A11yErrorModal: React.FC<Props> = ({ issue, isOpen, setIsOpen }) => {
  if (!issue) return null;

  return (
    <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} variant="trail">
      <View position="relative">
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
                setIsOpen(true);
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
      </View>
    </Modal>
  );
};

export default A11yErrorModal;
