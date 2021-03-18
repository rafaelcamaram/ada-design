import Flex from "components/Flex";
import React from "react";
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
    </Flex>
  );
};
