import React, { createContext, useContext, useEffect, useState } from "react";
import { AxeResults } from "axe-core";

import { v4 as getId } from "uuid";
import View from "components/View";

import A11yContent from "./A11yContent";

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

export type AccessibilityProps = {
  shouldDisableA11y?: boolean;
  shouldShowSuccess?: boolean;
  shouldShowIncomplete?: boolean;
};

const withAccessibilityErrors = <T,>(Component) => {
  // TODO: Next line
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
      <A11yContent
        data={{
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
          props,
        }}
      />
    );
  };
};

export default withAccessibilityErrors;
