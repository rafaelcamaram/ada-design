import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

import Divisor from "components/Divisor";
import Flex from "components/Flex";
import Heading from "components/Typography/Heading";
import Text from "components/Typography/Text";
import View from "components/View";
import Modal from "components/Modal";
import StatusPill from "../StatusPill";

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

const TAB_CATEGORIES = [
  { label: "Violations", color: "#FF4400" },
  { label: "Passes", color: "#65BF3B" },
  { label: "Incomplete", color: "#E69D01" },
] as const;

const A11yErrorModal: React.FC<Props> = ({
  passes,
  incomplete,
  violations,
  isOpen,
  setIsOpen,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getLengthByIndex = useCallback((index) => {
    const lengthByIndex = {
      0: violations.length,
      1: passes.length,
      2: incomplete.length,
    };
    return lengthByIndex[index] || 0;
  }, []);

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
          <Flex backgroundColor="#F7F9FC" alignItems="center" paddingX={32}>
            {TAB_CATEGORIES.map((category, index) => {
              const isSelected = selectedIndex === index;

              return (
                <StyledTabItem
                  key={index}
                  fontWeight="bold"
                  color={category.color}
                  paddingRight={16}
                  paddingLeft={16}
                  marginLeft={index === 0 ? -16 : 0}
                  borderBottom={`2px solid ${
                    isSelected ? "#0D65C2" : "transparent"
                  }`}
                  paddingY={16}
                  cursor="pointer"
                  onClick={() => setSelectedIndex(index)}
                  isSelected={isSelected}
                >
                  {getLengthByIndex(index)} {category.label}
                </StyledTabItem>
              );
            })}
          </Flex>

          <Flex maxHeight={400} padding={32} paddingTop={16} overflowY="scroll">
            {data.length === 0 ? (
              <Text>No records available</Text>
            ) : (
              <Flex width="100%" flexDirection="column">
                {data.map((record, index) => {
                  return (
                    <View key={index} width="100%">
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
                })}
              </Flex>
            )}
          </Flex>
        </>
      )}
    </Modal>
  );
};

const StyledTabItem = styled(Text)<{ isSelected: boolean }>`
  transition: border-bottom 0.2s linear;

  &:hover {
    background-color: "#F2F2F2";
    border-bottom: ${({ isSelected }) =>
      isSelected ? "2px solid #0D65C2" : "2px solid #DFDFDF"};
  }
`;

export default A11yErrorModal;
