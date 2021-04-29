import React from "react";
import styled from "styled-components";
import Button from "./Button";
import View from "components/View";
import ADADesignProvider from "components/ADADesignProvider";
import Flex from "components/Flex";
import Heading from "components/Typography/Heading";

export default {
  title: "Core/Button",
  component: Button,
};

const VARIANT_LIST = ["default", "primary", "simple", "icon"] as const;
const INTENT_LIST = ["default", "success", "warning", "danger"] as const;
const SIZE_LIST = [20, 24, 28, 32, 36, 40, 44, 48, 52, 56] as const;

const renderForAllIntents = (renderComponent) => {
  return INTENT_LIST.map((intent, index) => {
    return renderComponent({ intention: intent }, index);
  });
};

export const Default = (): React.ReactNode => (
  <>
    <ADADesignProvider isEnabled={false}>
      {VARIANT_LIST.map((variant, variantIndex) => {
        return (
          <View key={variantIndex}>
            <Heading size={500} textTransform="capitalize" marginBottom={8}>
              {`${variant} variant style`}
            </Heading>
            <Flex key={variantIndex} marginBottom={18}>
              {renderForAllIntents((props, index) => {
                return (
                  <View key={index} marginRight={10}>
                    <Button
                      variant={variant}
                      onClick={() => alert("Default Button Handler")}
                      textTransform="capitalize"
                      icon={variant === "icon" ? "FiCornerLeftDown" : undefined}
                      {...props}
                    >
                      {`${props.intention} Button`}
                    </Button>
                  </View>
                );
              })}
            </Flex>
          </View>
        );
      })}

      <Heading size={500} marginBottom={8}>
        Size Variations
      </Heading>
      <Flex marginBottom={18} flexWrap="wrap">
        {SIZE_LIST.map((size, sizeIndex) => {
          return (
            <View key={sizeIndex} marginRight={10}>
              <Button
                size={size}
                variant="primary"
                onClick={() => alert("Default Button Handler")}
                textTransform="capitalize"
                marginBottom={6}
              >
                {size} Size Button
              </Button>
            </View>
          );
        })}
      </Flex>

      <Heading size={500} marginBottom={8}>
        Custom Styles
      </Heading>
      <Flex marginBottom={18}>
        <View marginRight={10}>
          <Button
            className="my-awesome-button"
            size={32}
            variant="primary"
            intention="default"
            onClick={() => {}}
            margin={10}
            width="100%"
          >
            Button with props
          </Button>
        </View>
        <View marginRight={10}>
          <StyledButton
            size={32}
            variant="primary"
            intention="default"
            onClick={() => {}}
          >
            Button with styled-components
          </StyledButton>
        </View>
      </Flex>
    </ADADesignProvider>
  </>
);

const StyledButton = styled(Button)`
  width: 100%;
  margin: 10px;
  background: #6d1818;

  &:hover {
    background: #289e9e;
  }
`;
