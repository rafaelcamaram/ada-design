import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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

// TODO: Working on TextInputs variations in order to provide a better design and customizations;
// TODO: Add all the colors inside ThemeProvider -- including text ones;
// TODO: Maybe add button styles to ThemeProvider as well
const withAccessibilityErrors = <T,>(Component) => {
  // TODO: ESLINT - Next line
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return function ComponentWithA11y({
    shouldDisableA11y: shouldDisableA11yComponent = false,
    shouldShowSuccess: shouldShowSuccessComponent,
    shouldShowIncomplete: shouldShowIncompleteComponent,
    ...props
  }: T & AccessibilityProps) {
    const componentId = useRef(getId());
    const a11yContext = useContext(A11yContext);
    const [isDetailedModalVisible, setIsDetailedModalVisible] = useState(false);
    const [withAccessibilityResult, setWithAccessibilityResult] = useState<
      Pick<AxeResults, "violations" | "passes" | "incomplete">
    >();
    const {
      shouldShowIncomplete: shouldShowIncompleteContext,
      shouldShowSuccess: shouldShowSuccessContext,
    } = a11yContext;

    const shouldEnableAccessibility =
      !shouldDisableA11yComponent && a11yContext.isEnabled && a11yContext.queue;

    const MemoizedComponent = useMemo(() => {
      return <Component {...props} />;
    }, [JSON.stringify(props)]);

    useEffect(() => {
      // This useEffect should be called every time that Component receives different props
      // TODO: Verify if it's running two time instead of 1 when updating in run time
      if (shouldEnableAccessibility) {
        a11yContext.addTask(componentId.current, (result: AxeResults) => {
          setWithAccessibilityResult({
            violations: result.violations,
            passes: result.passes,
            incomplete: result.incomplete,
          });
        });
      }
      // TODO: JSON.stringify should be a temporary solution since we can not be sure how deep the props will be
      // Ref: https://twitter.com/dan_abramov/status/1104414469629898754?lang=en
    }, [JSON.stringify(props)]);

    if (!shouldEnableAccessibility) {
      return MemoizedComponent;
    }

    if (!withAccessibilityResult) {
      return <View id={componentId.current}>{MemoizedComponent}</View>;
    }

    const { violations, incomplete, passes } = withAccessibilityResult || {};

    const firstViolation = violations?.[0];
    const firstIncompleteIssue = incomplete?.[0];
    const hasNoViolationsOrIncomplete =
      !firstViolation && !firstIncompleteIssue;

    if (
      (hasNoViolationsOrIncomplete &&
        !(shouldShowSuccessComponent ?? shouldShowSuccessContext)) ||
      (!firstViolation &&
        firstIncompleteIssue &&
        !(shouldShowIncompleteComponent ?? shouldShowIncompleteContext))
    ) {
      return <View id={componentId.current}>{MemoizedComponent}</View>;
    }

    return (
      <A11yContent
        data={{
          componentId: componentId.current,
          passes,
          incomplete,
          violations,
          isDetailedModalVisible,
          setIsDetailedModalVisible,
          hasNoViolationsOrIncomplete,
          firstIncompleteIssue,
          firstViolation,
          Component: MemoizedComponent,
          props,
        }}
      />
    );
  };
};

export default withAccessibilityErrors;
