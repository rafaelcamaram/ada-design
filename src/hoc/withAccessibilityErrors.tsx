import React, { useMemo } from "react";
import styled from "styled-components";
import View from "../components/View";
import Text from "../components/Typography/Text";
import { PositionValue } from "../types/css";

const DEFAULT_ERROR_BORDER = "1px dashed red";
const DEFAULT_ERROR_POSITION = "relative";

const validateTextInput = (props) => {
  const shouldDisplayError = !props.labelledBy && !props.label;

  if (!shouldDisplayError) {
    return {
      hasError: false,
    };
  }

  return {
    hasError: true,
    border: DEFAULT_ERROR_BORDER,
    position: DEFAULT_ERROR_POSITION,
    error:
      "Property 'labelledBy' or 'label' are missing in the TextInput component",
  };
};

// eslint-disable-next-line
const withAccessibilityErrors = <T,>(Component, componentType: string) => {
  // eslint-disable-next-line
  return (props: T) => {
    const { error, border, position, hasError } = useMemo(() => {
      switch (componentType) {
        case "TextInput":
          return validateTextInput(props);
        default:
          break;
      }
    }, [componentType, props]);

    if (!hasError) {
      return <Component {...props} />;
    }

    return (
      <View border={border} position={position as PositionValue}>
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
            <Text>{error}</Text>
          </ErrorContent>
        </AccessibilityPopoverError>
        <Component {...props} />
      </View>
    );
  };
};

const ErrorContent = styled(View)`
  width: 200px;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background-color: rgba(255, 0, 0, 0.3);
  border: 1px dashed red;
  padding: 15px;
`;

const AccessibilityPopoverError = styled(View)`
  position: absolute;
  top: -7px;
  right: -7px;
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
