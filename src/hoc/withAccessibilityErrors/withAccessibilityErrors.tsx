import React, { useMemo } from "react";
import styled from "styled-components";
import View from "../../components/View";
import Text from "../../components/Typography/Text";
import { Props as TextInputProps } from "../../components/TextInput/TextInput";

import isDev from "../../utils/isDev";
import validateTextInput from "./validateTextInput";

const DEFAULT_ERROR_BORDER = "1px dashed red";
const DEFAULT_ERROR_POSITION = "relative";

const VALIDATIONS = {
  TextInput: (validationProps) =>
    validateTextInput(validationProps as TextInputProps),
};
// eslint-disable-next-line
const withAccessibilityErrors = <T,>(Component, componentType: string) => {
  // eslint-disable-next-line
  return (props: T) => {
    if (!isDev()) {
      return <Component {...props} />;
    }

    const { error, hasError } = useMemo(() => {
      const validationProps = props as unknown;
      const validation = VALIDATIONS[componentType];

      return validation ? validation(validationProps) : {};
    }, [componentType, props]);

    if (!hasError) {
      return <Component {...props} />;
    }

    return (
      <View
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
