import React, { useCallback, useMemo, useState } from "react";

import Badge from "components/Badge";
import Divisor from "components/Divisor";
import Flex from "components/Flex";
import Heading from "components/Typography/Heading";
import Link from "components/Typography/Link";
import Text from "components/Typography/Text";
import View from "components/View";
import Modal from "components/Modal";

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
      <Flex backgroundColor="#F7F9FC" alignItems="center" paddingX={32}>
        {TAB_CATEGORIES.map((category, index) => {
          const isSelected = selectedIndex === index;

          const customStyle = {
            transition: "border-bottom 0.2s linear",
            "&:hover": {
              backgroundColor: "#F2F2F2",
              borderBottom: isSelected
                ? "2px solid #0D65C2"
                : "2px solid #DFDFDF",
            },
          };

          return (
            <Text
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
              customStyle={customStyle}
              onClick={() => setSelectedIndex(index)}
            >
              {getLengthByIndex(index)} {category.label}
            </Text>
          );
        })}
      </Flex>

      <Flex padding={32}>
        {data.length === 0 ? null : (
          <View>
            <Badge text={data[0].impact} color="rgba(255, 68, 0, 0.5)" />
            <Heading size={400} width={250}>
              {data[0].description}
            </Heading>
            <Text color="#060F19" marginTop={5} marginBottom={10}>
              {data[0].help}
            </Text>
            <Flex flexDirection="row" marginY={10}>
              <Link
                as="a"
                target="_blank"
                href={data[0].helpUrl}
                marginRight={10}
              >
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
                  text={`${data[0].nodes[0].any.length}`}
                  textColor="#738598"
                />
              </Flex>
            </Flex>
            <Divisor marginTop={15} />
            <Flex flexWrap="wrap" paddingTop={15}>
              {data[0].tags.map((tag) => {
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
        )}
      </Flex>
    </Modal>
  );
};

export default A11yErrorModal;
