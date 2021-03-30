import React, { useCallback } from "react";
import styled from "styled-components";

import Flex from "components/Flex";
import Text from "components/Typography/Text";
import useTheme from "theme/useTheme";

type Props = {
  violations: any;
  passes: any;
  incomplete: any;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

const TAB_CATEGORIES = [
  { label: "Violations", color: "#FF4400" },
  { label: "Passes", color: "#65BF3B" },
  { label: "Incomplete", color: "#E69D01" },
] as const;

const A11yErrorModalTabs: React.FC<Props> = ({
  violations,
  passes,
  incomplete,
  selectedIndex,
  setSelectedIndex,
}) => {
  const {
    colors: { palette, all },
  } = useTheme();
  const getLengthByIndex = useCallback((index) => {
    const lengthByIndex = {
      0: violations.length,
      1: passes.length,
      2: incomplete.length,
    };
    return lengthByIndex[index] || 0;
  }, []);

  return (
    <Flex backgroundColor={palette.darkWhite} alignItems="center" paddingX={32}>
      {TAB_CATEGORIES.map((category, index) => {
        const isSelected = selectedIndex === index;

        return (
          <StyledTabItem
            key={index}
            isSelected={isSelected}
            fontWeight="bold"
            color={category.color}
            paddingRight={16}
            paddingLeft={16}
            marginLeft={index === 0 ? -16 : 0}
            paddingY={16}
            cursor="pointer"
            onClick={() => setSelectedIndex(index)}
            borderBottom={`2px solid ${
              isSelected ? all["lochmara"] : "transparent"
            }`}
          >
            {getLengthByIndex(index)} {category.label}
          </StyledTabItem>
        );
      })}
    </Flex>
  );
};

const StyledTabItem = styled(Text)<{ isSelected: boolean }>`
  transition: border-bottom 0.2s linear;

  &:hover {
    background-color: "#F2F2F2";
    border-bottom: ${({ isSelected, theme }) =>
      isSelected
        ? `2px solid ${theme.colors.all["lochmara"]}`
        : "2px solid #DFDFDF"};
  }
`;
export default A11yErrorModalTabs;
