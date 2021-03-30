import Flex from "components/Flex";
import React from "react";
import Badge from "./Badge";
import Heading from "components/Typography/Heading/Heading";

export default {
  title: "Core/Badge",
  component: Badge,
};

export const DefaultVariant = (): React.ReactNode => {
  return (
    <Flex flexDirection="column">
      <Heading size={600}>Default Variant</Heading>

      <Badge text="Badge" />
      <Badge textColor="#000" text="Badge with custom text color" />
      <Badge color="rgba(255, 68, 0, 0.5)" text="Badge with custom color" />
      <Badge
        color="#0D65C2"
        text="Badge with click handler"
        onClick={() => alert("Badge with click handler")}
      />
    </Flex>
  );
};

export const CircleVariant = (): React.ReactNode => {
  return (
    <Flex flexDirection="column">
      <Heading size={600}>Circle Variant</Heading>
      <Badge text="1" variant="circle" color="rgba(255, 68, 0, 0.5)" />
      <Badge text="10" variant="circle" textColor="lochmara" />
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
