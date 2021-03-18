import React, { createContext, useContext, useEffect, useState } from "react";
import { AxeResults } from "axe-core";

import styled from "styled-components";
import { v4 as getId } from "uuid";
import View from "components/View";
import Text from "components/Typography/Text";
import Modal from "components/Modal";
import isDev from "utils/isDev";
import Flex from "components/Flex";
import Button from "components/Button";

const DEFAULT_ERROR_BORDER = "1px dashed #E30000";
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
    const [isDetailedModalVisible, setIsDetailedModalVisible] = useState(false);
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
      return (
        <View id={componentId}>
          <Component {...props} />
        </View>
      );
    }
    const errors = withAccessibilityResult?.violations;
    console.log({ errors });

    const firstIssue = withAccessibilityResult?.violations[0];
    return (
      <>
        <Modal
          isOpen={true}
          closeModal={() => setIsDetailedModalVisible(false)}
          variant="trail"
        >
          <View position="relative">
            <Text
              width="fit-content"
              paddingY={5}
              paddingX={10}
              backgroundColor="rgba(255, 68, 0, 0.5)"
              borderRadius={15}
              color="white"
              fontWeight="bold"
              fontSize={11}
              textTransform="uppercase"
            >
              {firstIssue.impact}
            </Text>
            <Text width={250} fontWeight="bold" color="#060F19" fontSize={14}>
              {firstIssue.description}
            </Text>
            <Text color="#060F19" fontSize={14} marginTop={5} marginBottom={10}>
              {firstIssue.help}
            </Text>
            <Flex flexDirection="row" marginY={10}>
              <Text
                as="a"
                target="_blank"
                href={firstIssue.helpUrl}
                marginRight={10}
                color="#738598"
                fontSize={12}
                textDecoration="none"
                customStyle={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                More info
              </Text>
              <Flex flexDirection="row">
                <Text
                  color="#738598"
                  marginRight={5}
                  fontSize={12}
                  textDecoration="none"
                  customStyle={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  onClick={() => {
                    setIsDetailedModalVisible(true);
                  }}
                >
                  Open details
                </Text>
                <Flex
                  width="fit-content"
                  minWidth={18}
                  height={18}
                  borderRadius={18}
                  backgroundColor="#E1E5EA"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text fontSize={11} color="#738598" textAlign="center">
                    {firstIssue.nodes[0].any.length}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              flexWrap="wrap"
              borderTop="1px solid rgba(115, 133, 152, 0.20)"
              paddingTop={15}
            >
              {firstIssue.tags.map((tag) => {
                return (
                  <View
                    key={tag}
                    width="fit-content"
                    paddingX={8}
                    paddingY={4}
                    marginRight={5}
                    marginBottom={5}
                    border="1px solid rgba(115, 133, 152, 0.20)"
                    borderRadius={16}
                  >
                    <Text fontSize={11} color="#738598">
                      {tag}
                    </Text>
                  </View>
                );
              })}
            </Flex>
          </View>
        </Modal>

        <View
          id={componentId}
          width="fit-content"
          border={DEFAULT_ERROR_BORDER}
          position={DEFAULT_ERROR_POSITION}
          borderRadius="6px"
        >
          <AccessibilityPopoverError>
            <Flex
              backgroundColor="red"
              color="white"
              width={15}
              height={15}
              borderRadius={15}
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
            >
              <Text height={13}>*</Text>
            </Flex>
            <ErrorContent>
              <Text
                width="fit-content"
                paddingY={5}
                paddingX={10}
                backgroundColor="rgba(255, 68, 0, 0.5)"
                borderRadius={15}
                color="white"
                fontWeight="bold"
                fontSize={11}
                textTransform="uppercase"
                position="absolute"
                top={15}
                right={15}
              >
                {firstIssue.impact}
              </Text>
              <Text width={250} fontWeight="bold" color="#060F19" fontSize={14}>
                {firstIssue.description}
              </Text>
              <Text
                color="#060F19"
                fontSize={14}
                marginTop={5}
                marginBottom={10}
              >
                {firstIssue.help}
              </Text>
              <Flex flexDirection="row" marginY={10}>
                <Text
                  as="a"
                  target="_blank"
                  href={firstIssue.helpUrl}
                  marginRight={10}
                  color="#738598"
                  fontSize={12}
                  textDecoration="none"
                  customStyle={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  More info
                </Text>
                <Flex flexDirection="row">
                  <Text
                    color="#738598"
                    marginRight={5}
                    fontSize={12}
                    textDecoration="none"
                    customStyle={{
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => {
                      setIsDetailedModalVisible(true);
                    }}
                  >
                    Open details
                  </Text>
                  <Flex
                    width="fit-content"
                    minWidth={18}
                    height={18}
                    borderRadius={18}
                    backgroundColor="#E1E5EA"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text fontSize={11} color="#738598" textAlign="center">
                      {firstIssue.nodes[0].any.length}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                flexWrap="wrap"
                borderTop="1px solid rgba(115, 133, 152, 0.20)"
                paddingTop={15}
              >
                {firstIssue.tags.map((tag) => {
                  return (
                    <View
                      key={tag}
                      width="fit-content"
                      paddingX={8}
                      paddingY={4}
                      marginRight={5}
                      marginBottom={5}
                      border="1px solid rgba(115, 133, 152, 0.20)"
                      borderRadius={16}
                    >
                      <Text fontSize={11} color="#738598">
                        {tag}
                      </Text>
                    </View>
                  );
                })}
              </Flex>
            </ErrorContent>
          </AccessibilityPopoverError>
          <Component {...props} />
        </View>
      </>
    );
  };
};

const ErrorContent = styled(View)`
  width: 320px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px dashed #ff0000;
  border-radius: 8px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.4);
  padding: 15px;
`;

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
