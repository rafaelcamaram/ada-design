import React from "react";
import Text from "./";

export default {
  title: "Typography/Text",
  component: Text,
};

export const Default = (): React.ReactNode => (
  <>
    <Text as="p" size={300}>
      Text 300
    </Text>
    <Text as="p" size={400}>
      Text 400 (Default)
    </Text>
    <Text as="p" size={500}>
      Text 500
    </Text>
    <Text as="p" size={600}>
      Text 600
    </Text>
  </>
);
