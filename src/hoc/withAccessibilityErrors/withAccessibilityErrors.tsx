import React, { createContext, useContext, useEffect, useState } from "react";
import { AxeResults } from "axe-core";

import styled from "styled-components";
import { v4 as getId } from "uuid";
import View from "components/View";
import isDev from "utils/isDev";
import Badge from "components/Badge";
import A11yErrorModal from "components/_internal/A11yErrorModal";
import A11yTooltipError, {
  ErrorContent,
} from "components/_internal/A11yTooltipError";

const DEFAULT_ERROR_BORDER = "1px dashed #E30000";
const DEFAULT_ERROR_POSITION = "relative";

const initialValue = {
  queue: undefined,
  addTask: (componentId, successCallback) => successCallback(componentId),
  popNextTaskAndRun: () => {},
};

export const A11yContext = createContext(initialValue);

const withAccessibilityErrors = <T,>(Component) => {
  return (props: T) => {
    const a11yContext = useContext(A11yContext);
    const [isDetailedModalVisible, setIsDetailedModalVisible] = useState(false);
    const [withAccessibilityResult, setWithAccessibilityResult] = useState<
      Pick<AxeResults, "violations">
    >();
    const shouldEnableAccessibility = isDev() && a11yContext.queue;
    const componentId = getId();

    useEffect(() => {
      if (shouldEnableAccessibility) {
        a11yContext.addTask(componentId, (result: AxeResults) => {
          setWithAccessibilityResult({
            violations: result.violations,
          });
        });
      }
    }, []);

    if (!shouldEnableAccessibility) {
      return <Component {...props} />;
    }

    if (
      !withAccessibilityResult ||
      withAccessibilityResult?.violations?.length === 0
    ) {
      return (
        <View id={componentId}>
          <Component {...props} />
        </View>
      );
    }

    const firstIssue = withAccessibilityResult?.violations[0];

    return (
      <>
        <A11yErrorModal
          issue={firstIssue}
          isOpen={isDetailedModalVisible}
          setIsOpen={setIsDetailedModalVisible}
        />

        <View
          id={componentId}
          width="fit-content"
          border={DEFAULT_ERROR_BORDER}
          position={DEFAULT_ERROR_POSITION}
          borderRadius="6px"
        >
          <AccessibilityPopoverError>
            <Badge
              variant="circle"
              text="*"
              color="red"
              onClick={() => setIsDetailedModalVisible(true)}
            />
            <A11yTooltipError
              issue={firstIssue}
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
