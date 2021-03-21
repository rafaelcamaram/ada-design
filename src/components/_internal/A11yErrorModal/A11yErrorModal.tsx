import React, { useMemo, useState } from "react";

import Divisor from "components/Divisor";
import Flex from "components/Flex";
import Text from "components/Typography/Text";
import Modal from "components/Modal";
import StatusPill from "../StatusPill";
import ToggleSection from "components/ToggleSection";
import A11yErrorModalItemHeader from "./A11yErrorModalItemHeader";
import A11yErrorModalTabs from "./A11yErrorModalTabs";
import Link from "components/Typography/Link";
import Badge from "components/Badge";
import BadgeList from "components/BadgeList";
import { getColorByImpact } from "utils/styles";

type Props = {
  passes: any;
  incomplete: any;
  violations: any;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const customModalStyle = {
  content: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
} as const;

const A11yErrorModal: React.FC<Props> = ({
  passes,
  incomplete,
  violations,
  isOpen,
  setIsOpen,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const data = useMemo(() => {
    const dataByIndex = {
      0: violations,
      1: passes,
      2: incomplete,
    };

    return dataByIndex[selectedIndex] || [];
  }, [selectedIndex]);

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => setIsOpen(false)}
      variant="trail"
      customModalStyle={customModalStyle}
    >
      {isOpen && (
        <>
          <A11yErrorModalTabs
            passes={passes}
            incomplete={incomplete}
            violations={violations}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />

          <Flex maxHeight={400} padding={32} paddingTop={16} overflowY="scroll">
            {data.length === 0 ? (
              <Text>No records available</Text>
            ) : (
              <Flex width="100%" flexDirection="column">
                {data.map((record, index) => {
                  return (
                    <ToggleSection
                      key={`${selectedIndex}-${index}`}
                      width="100%"
                      headerComponent={() => (
                        <A11yErrorModalItemHeader record={record} />
                      )}
                    >
                      {({ isCollapsed, setIsCollapsed }) => {
                        if (isCollapsed) return null;

                        console.log({ record });
                        const { impact, any: anyList } = record.nodes[0];
                        return (
                          <Flex
                            flexDirection="row"
                            backgroundColor="#F7F9FC"
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
                                <Badge
                                  text={impact || "Success"}
                                  color={getColorByImpact(impact)}
                                />
                                <Link
                                  as="a"
                                  target="_blank"
                                  href={record.helpUrl}
                                  marginRight={10}
                                  marginLeft={16}
                                >
                                  External Resources
                                </Link>
                                <Link
                                  onClick={() => {
                                    setIsCollapsed(true);
                                  }}
                                >
                                  Close Details
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
                            <BadgeList data={record.tags} />
                          </Flex>
                        );
                      }}
                    </ToggleSection>
                  );
                })}
              </Flex>
            )}
          </Flex>
        </>
      )}
    </Modal>
  );
};

export default A11yErrorModal;
