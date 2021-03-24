import React, { createContext, useContext, useEffect, useState } from "react";
import { AxeResults } from "axe-core";

import styled from "styled-components";
import { v4 as getId } from "uuid";
import View from "components/View";
import Badge from "components/Badge";
import A11yErrorModal from "components/_internal/A11yErrorModal";
import A11yTooltipError, {
  ErrorContent,
} from "components/_internal/A11yTooltipError";
import { getColorByImpact } from "utils/styles";

const DEFAULT_ERROR_BORDER = "1px dashed #E30000";
const DEFAULT_SUCCESS_BORDER = "1px dashed #65BF3B";
const DEFAULT_INCOMPLETE_BORDER = "1px dashed rgb(238, 153, 19)";
const DEFAULT_ERROR_POSITION = "relative";

const initialValue = {
  queue: undefined,
  addTask: (componentId, successCallback) => successCallback(componentId),
  popNextTaskAndRun: () => {},
  isEnabled: false,
};

const A11yContext = createContext(initialValue);

A11yContext.displayName = "A11yContext";

export { A11yContext };

type AccessibilityProps = {
  shouldDisableA11y?: boolean;
};

const withAccessibilityErrors = <T,>(Component) => {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return function ComponentWithA11y({
    shouldDisableA11y,
    ...props
  }: T & AccessibilityProps) {
    const a11yContext = useContext(A11yContext);
    const [isDetailedModalVisible, setIsDetailedModalVisible] = useState(false);
    const [withAccessibilityResult, setWithAccessibilityResult] = useState<
      Pick<AxeResults, "violations" | "passes" | "incomplete">
    >();
    const shouldEnableAccessibility =
      !shouldDisableA11y && a11yContext.isEnabled && a11yContext.queue;
    const componentId = getId();

    useEffect(() => {
      if (shouldEnableAccessibility) {
        a11yContext.addTask(componentId, (result: AxeResults) => {
          setWithAccessibilityResult({
            violations: result.violations,
            passes: result.passes,
            incomplete: result.incomplete,
          });
        });
      }
    }, []);

    if (!shouldEnableAccessibility) {
      return <Component {...props} />;
    }

    if (!withAccessibilityResult) {
      return (
        <View id={componentId}>
          <Component {...props} />
        </View>
      );
    }

    const { violations, incomplete } = withAccessibilityResult || {};

    const firstValidIssue = violations?.[0];
    const firstIncompleteIssue = incomplete?.[0];

    return (
      <>
        <A11yErrorModal
          passes={withAccessibilityResult.passes}
          incomplete={withAccessibilityResult.incomplete}
          violations={withAccessibilityResult.violations}
          isOpen={isDetailedModalVisible}
          setIsOpen={setIsDetailedModalVisible}
        />

        <View
          id={componentId}
          width="fit-content"
          border={
            !firstValidIssue && !firstIncompleteIssue
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
                firstValidIssue?.impact || firstIncompleteIssue?.impact,
              )}
              onClick={() => setIsDetailedModalVisible(true)}
            />
            <A11yTooltipError
              issue={withAccessibilityResult.violations?.[0]}
              setIsModalOpen={setIsDetailedModalVisible}
            />
          </AccessibilityPopoverError>
          <Component {...props} />
        </View>
      </>
    );
  };
};

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

export default withAccessibilityErrors;
