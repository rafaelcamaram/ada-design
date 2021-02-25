import React from "react";
import Text from "./";

export default {
  title: "Typography/Text",
  component: Text,
};

export const Default = (): React.ReactNode => (
  <>
    <Text as="p">Paragraph</Text>
    <Text as="span">Span</Text>
  </>
);
