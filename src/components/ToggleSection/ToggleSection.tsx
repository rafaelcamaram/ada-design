import React, { useState } from "react";
import styled from "styled-components";

import Flex from "components/Flex";
import Text from "components/Typography/Text";
import { Props as ViewProps } from "types/View";

export type Props = {
  headerComponent?: (
    isCollapsed: boolean,
    isToggleDisabled: boolean,
  ) => React.ReactNode;
  children?: (props) => React.ReactNode;
  isToggleDisabled?: boolean;
} & ViewProps;

const ToggleSection: React.FC<Props> = ({
  isToggleDisabled = false,
  headerComponent = (isCollapsed) => (
    <Flex>Header - Action: {isCollapsed ? "Show" : "Hide"}</Flex>
  ),
  children = ({ isCollapsed }) => (
    <Text>
      This is the toggle section content. Current collapse value:{" "}
      {isCollapsed ? "Collapsed" : "Expanded"}
    </Text>
  ),
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <Header onClick={() => !isToggleDisabled && setIsCollapsed(!isCollapsed)}>
        {headerComponent(isCollapsed, isToggleDisabled)}
      </Header>
      {children({ isCollapsed, setIsCollapsed, isToggleDisabled })}
    </>
  );
};

export const Header = styled(Flex)`
  cursor: pointer;
`;

export default ToggleSection;
