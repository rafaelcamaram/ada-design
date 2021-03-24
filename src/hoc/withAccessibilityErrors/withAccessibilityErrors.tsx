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
  shouldShowIncomplete: true,
  shouldShowSuccess: true,
};

const A11yContext = createContext(initialValue);

A11yContext.displayName = "A11yContext";

export { A11yContext };

type AccessibilityProps = {
  shouldDisableA11y?: boolean;
  shouldShowSuccess?: boolean;
  shouldShowIncomplete?: boolean;
};

// TODO: Add a way to ignore incomplete warnings?
const withAccessibilityErrors = <T,>(Component) => {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return function ComponentWithA11y({
    shouldDisableA11y: shouldDisableA11yComponent = false,
    shouldShowSuccess: shouldShowSuccessComponent,
    shouldShowIncomplete: shouldShowIncompleteComponent,
    ...props
  }: T & AccessibilityProps) {
    const [isDetailedModalVisible, setIsDetailedModalVisible] = useState(false);
    const [withAccessibilityResult, setWithAccessibilityResult] = useState<
      Pick<AxeResults, "violations" | "passes" | "incomplete">
    >();
    const a11yContext = useContext(A11yContext);
    const {
      shouldShowIncomplete: shouldShowIncompleteContext,
      shouldShowSuccess: shouldShowSuccessContext,
    } = a11yContext;

    const shouldShowSuccess =
      shouldShowSuccessComponent ?? shouldShowSuccessContext;
    const shouldShowIncomplete =
      shouldShowIncompleteComponent ?? shouldShowIncompleteContext;

    const shouldEnableAccessibility =
      !shouldDisableA11yComponent && a11yContext.isEnabled && a11yContext.queue;
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

    const { violations, incomplete, passes } = withAccessibilityResult || {};

    const firstViolation = violations?.[0];
    const firstIncompleteIssue = incomplete?.[0];
    const hasNoViolationsOrIncomplete =
      !firstViolation && !firstIncompleteIssue;

    if (
      (hasNoViolationsOrIncomplete && !shouldShowSuccess) ||
      (!firstViolation && firstIncompleteIssue && !shouldShowIncomplete)
    ) {
      return (
        <View id={componentId}>
          <Component {...props} />
        </View>
      );
    }

    return (
      <>
        <A11yErrorModal
          passes={passes}
          incomplete={incomplete}
          violations={violations}
          isOpen={isDetailedModalVisible}
          setIsOpen={setIsDetailedModalVisible}
        />

        <View
          id={componentId}
          width="fit-content"
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
