import Flex from "components/Flex";
import React from "react";
import Divisor from "./Divisor";

export default {
  title: "Core/Divisor",
  component: Divisor,
};

export const Default = (): React.ReactNode => {
  return (
    <Flex flexDirection="column">
      <Divisor />
      <Divisor height={3} marginY={10} />
      <Divisor color="jewel" />
    </Flex>
  );
};
