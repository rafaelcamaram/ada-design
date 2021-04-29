import React from "react";
import { Props as ViewProps } from "types/View";
import Text from "components/Typography/Text";
import Flex from "components/Flex";
import View from "components/View";
import Heading from "components/Typography/Heading";
import Divisor from "components/Divisor";

type Props = {
  headerContent?: string | React.ReactNode;
  footerContent?: string | React.ReactNode;
  hideFooterDivisor?: boolean;
  hideHeaderDivisor?: boolean;
} & ViewProps;

const Card: React.FC<Props> = ({
  children,
  padding = "15px 20px",
  boxShadow = "0 3px 4px 0 #ececec",
  backgroundColor = "white",
  overflow = "hidden",
  borderRadius = "4px",
  flexDirection = "column",
  justifyContent = "space-between",
  headerContent,
  footerContent,
  hideFooterDivisor = false,
  hideHeaderDivisor = false,
  ...props
}) => {
  return (
    <Flex
      boxShadow={boxShadow}
      backgroundColor={backgroundColor}
      overflow={overflow}
      borderRadius={borderRadius}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      {...props}
    >
      {headerContent ? (
        <Flex padding={padding}>
          {typeof headerContent === "string" ? (
            <Heading size={600}>{headerContent}</Heading>
          ) : (
            headerContent
          )}
        </Flex>
      ) : null}

      {!hideHeaderDivisor && headerContent ? (
        <Divisor color="#ededed" marginBottom={8} />
      ) : null}

      <View padding={padding}>
        {typeof children === "string" ? <Text>{children}</Text> : children}
      </View>

      {!hideFooterDivisor && footerContent ? (
        <Divisor color="#ededed" marginTop={8} />
      ) : null}

      {footerContent ? (
        <Flex padding={padding}>
          {typeof footerContent === "string" ? (
            <Text>{footerContent}</Text>
          ) : (
            footerContent
          )}
        </Flex>
      ) : null}
    </Flex>
  );
};

export default Card;
