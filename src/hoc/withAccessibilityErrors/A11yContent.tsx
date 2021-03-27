import React, { memo } from "react";

import View from "components/View";
import Badge from "components/Badge";
import A11yErrorModal from "components/_internal/A11yErrorModal";
import A11yTooltipError, {
  ErrorContent,
} from "components/_internal/A11yTooltipError";
import { getColorByImpact } from "utils/styles";
import styled from "styled-components";

const DEFAULT_ERROR_BORDER = "1px dashed #E30000";
const DEFAULT_SUCCESS_BORDER = "1px dashed #65BF3B";
const DEFAULT_INCOMPLETE_BORDER = "1px dashed rgb(238, 153, 19)";
const DEFAULT_ERROR_POSITION = "relative";

// TODO: ESLINT - Next line
// eslint-disable-next-line react/display-name
const A11yContent = memo(
  ({
    data: {
      componentId,
      passes,
      incomplete,
      violations,
      isDetailedModalVisible,
      setIsDetailedModalVisible,
      hasNoViolationsOrIncomplete,
      firstIncompleteIssue,
      firstViolation,
      Component,
    },
  }: {
    // TODO: ESLINT - Next line
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
  }) => {
    return (
      <View key={componentId}>
        <A11yErrorModal
          passes={passes}
          incomplete={incomplete}
          violations={violations}
          isOpen={isDetailedModalVisible}
          setIsOpen={setIsDetailedModalVisible}
        />

        <View
          id={componentId}
          width="auto"
          border={
            hasNoViolationsOrIncomplete
              ? DEFAULT_SUCCESS_BORDER
              : !firstIncompleteIssue
              ? DEFAULT_ERROR_BORDER
              : DEFAULT_INCOMPLETE_BORDER
          }
          position={DEFAULT_ERROR_POSITION}
          borderRadius="6px"
        >
          <AccessibilityPopoverError>
            <Badge
              variant="circle"
              text="*"
              color={getColorByImpact(
                firstViolation?.impact || firstIncompleteIssue?.impact,
              )}
              onClick={() => setIsDetailedModalVisible(true)}
            />
            <A11yTooltipError
              issue={violations?.[0]}
              setIsModalOpen={setIsDetailedModalVisible}
            />
          </AccessibilityPopoverError>
          {Component}
        </View>
      </View>
    );
  },
);

const AccessibilityPopoverError = styled(View)`
  position: absolute;
  top: -7px;
  right: -7px;
  z-index: 1000;

  ${ErrorContent} {
    display: none;
  }

  &:hover {
    ${ErrorContent} {
      display: flex;
    }
  }
`;

export default A11yContent;
