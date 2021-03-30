import React from "react";
import Button from "components/Button";
import View from "components/View";
import ADADesignProvider from "components/ADADesignProvider";
import Flex from "components/Flex";
import Heading from "components/Typography/Heading";
import ThemeProvider from "components/ThemeProvider";

export default {
  title: "Core/ThemeProvider",
  component: ThemeProvider,
};

const VARIANT_LIST = ["default", "primary", "simple"] as const;
const INTENT_LIST = ["default", "success", "warning", "danger"] as const;

const renderForAllIntents = (renderComponent) => {
  return INTENT_LIST.map((intent, index) => {
    return renderComponent({ intention: intent }, index);
  });
};

const renderContent = () => {
  return VARIANT_LIST.map((variant, variantIndex) => {
    return (
      <>
        <Heading size={500} textTransform="capitalize" marginBottom={8}>
          {variant} variant style
        </Heading>
        <Flex key={variantIndex} marginBottom={18}>
          {renderForAllIntents((props, index) => {
            return (
              <View key={index} marginRight={10}>
                <Button
                  variant={variant}
                  onClick={() => alert("Default Button Handler")}
                  textTransform="capitalize"
                  {...props}
                >
                  {props.intention} Button
                </Button>
              </View>
            );
          })}
        </Flex>
      </>
    );
  });
};
export const DefaultWithCustomTheme = (): React.ReactNode => (
  <ADADesignProvider isEnabled={true}>
    <Heading size={800} textTransform="capitalize" marginBottom={8}>
      With the default theme properties
    </Heading>
    {renderContent()}

    <Heading
      size={800}
      textTransform="capitalize"
      marginBottom={8}
      marginTop={32}
    >
      With the custom theme properties set by user
    </Heading>
    <ThemeProvider
      value={{
        colors: {
          buttons: {
            intentions: {
              backgroundDefault: "cyan",
              textDefault: "gray",
              textSuccess: "pink",
              textWarning: "yellow",
              textDanger: "purple",
            },
          },
          palette: {
            white: "#fff",
          },
        },
      }}
    >
      {renderContent()}
    </ThemeProvider>
  </ADADesignProvider>
);
