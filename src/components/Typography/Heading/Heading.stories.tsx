import ADADesignProvider from "components/ADADesignProvider";
import React from "react";
import Heading from "./Heading";

export default {
  title: "Typography/Heading",
  component: Heading,
};

// TODO: DEV - Add support for a11y to Heading and Texts
export const Default = (): React.ReactNode => (
  <ADADesignProvider isEnabled={true}>
    <Heading size={100}>Heading Content</Heading>
    <Heading size={200}>Heading Content</Heading>
    <Heading size={300}>Heading Content</Heading>
    <Heading size={400}>Heading Content</Heading>
    <Heading size={500}>Heading Content</Heading>
    <Heading size={600}>Heading Content</Heading>
    <Heading size={700}>Heading Content</Heading>
    <Heading size={800}>Heading Content</Heading>
    <Heading size={900}>Heading Content</Heading>
  </ADADesignProvider>
);
