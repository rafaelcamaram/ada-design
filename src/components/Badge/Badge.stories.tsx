import Flex from "components/Flex";
import React from "react";
import Text from "components/Typography/Text";
import Badge from "./Badge";

export default {
  title: "Core/Badge",
  component: Badge,
};

export const Default = (): React.ReactNode => {
  return (
    <Flex flexDirection="column">
      <Badge text="Badge" />
      <Badge textColor="#000" text="Badge with custom text color" />
      <Badge color="rgba(255, 68, 0, 0.5)" text="Badge with custom color" />
      <Badge
        color="#0D65C2"
        text="Badge with click handler"
        onClick={() => alert("Badge with click handler")}
      />

      <Text>Pills</Text>
      <Badge text="1" variant="circle" color="rgba(255, 68, 0, 0.5)" />
      <Badge text="10" variant="circle" color="#0D65C2" />
      <Badge text="100" variant="circle" color="#0FA530" />
      <Badge
        text="1000"
        variant="circle"
        color="#FF4400"
        onClick={() => alert("Badge with click handler")}
      />
    </Flex>
  );
};
