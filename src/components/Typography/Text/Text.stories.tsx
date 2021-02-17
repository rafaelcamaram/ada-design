import React from "react";
import Text from "./";

export default {
  title: "Text",
  component: Text,
};

export const Default = (): React.ReactNode => (
  <>
    <Text>Paragraph</Text>
    <Text as="p">Paragraph</Text>
    <Text as="span">Span</Text>
    <Text as="h1">Heading 1</Text>
    <Text as="h2">Heading 2</Text>
    <Text as="h3">Heading 3</Text>
  </>
);
export const Paragraph = (): React.ReactNode => <Text as="p">Paragraph</Text>;
export const Span = (): React.ReactNode => <Text as="span">Span</Text>;
export const Heading1 = (): React.ReactNode => <Text as="h1">Heading 1</Text>;
export const Heading2 = (): React.ReactNode => <Text as="h2">Heading 2</Text>;
export const Heading3 = (): React.ReactNode => <Text as="h3">Heading 3</Text>;
