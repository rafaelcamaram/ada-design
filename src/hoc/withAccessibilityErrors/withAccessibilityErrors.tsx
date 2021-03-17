import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import axe, { AxeResults } from "axe-core";

import styled from "styled-components";
import { v4 as getId } from "uuid";
import View from "../../components/View";
import Text from "../../components/Typography/Text";
import isDev from "../../utils/isDev";

const DEFAULT_ERROR_BORDER = "1px dashed red";
const DEFAULT_ERROR_POSITION = "relative";

const initialValue = {
  queue: undefined,
  addTask: (componentId, successCallback) => successCallback(componentId),
  popNextTaskAndRun: () => {},
};

export const A11yContext = createContext(initialValue);

// eslint-disable-next-line
const withAccessibilityErrors = <T,>(Component) => {
  // eslint-disable-next-line
  return (props: T) => {
    const a11yContext = useContext(A11yContext);
    console.log({ a11yContext });
    const [withAccessibilityResult, setWithAccessibilityResult] = useState<
      Pick<AxeResults, "violations">
    >();
    const shouldEnableAccessibility = isDev() && a11yContext.queue;
    const componentId = getId();

    console.log({ withAccessibilityResult });
    useEffect(() => {
      if (shouldEnableAccessibility) {
        /* Add a new task to the queue with the correct callback in order to set the UI error */
        a11yContext.addTask(componentId, (result: AxeResults) => {
          console.log("bla");
          console.log({ result });
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
      // TODO: Verify if we need it and why it's not working without it
      return (
        <View id={componentId}>
          <Component {...props} />
        </View>
      );
    }
    const errors = withAccessibilityResult?.violations;
    console.log({ errors });

    return (
      <View
        id={componentId}
        width="fit-content"
        border={DEFAULT_ERROR_BORDER}
        position={DEFAULT_ERROR_POSITION}
      >
        <AccessibilityPopoverError>
          <View
            backgroundColor="red"
            color="white"
            width={15}
            height={15}
            borderRadius={15}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text height={13}>*</Text>
          </View>
          <ErrorContent>
            <Text fontWeight="bold">
              ID: {componentId}
              {withAccessibilityResult?.violations?.map((item, index) => {
                return <p key={index}>{item.help}</p>;
              })}
            </Text>
            <Text>{withAccessibilityResult?.violations?.[0].description}</Text>
          </ErrorContent>
        </AccessibilityPopoverError>
        <Component {...props} />
      </View>
    );
  };
};

const ErrorContent = styled(View)`
  width: 200px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 9999;
  background-color: rgba(255, 0, 0, 0.3);
  border: 1px dashed red;
  padding: 15px;
`;

const AccessibilityPopoverError = styled(View)`
  position: absolute;
  top: -7px;
  right: -7px;
  z-index: 9999;
  cursor: pointer;

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
