import React from "react";
import Heading from "./Heading";

export default {
  title: "Heading",
  component: Heading,
};

export const Default = (): React.ReactNode => (
  <>
    <Heading size={100}>Heading Content</Heading>
    <Heading size={200}>Heading Content</Heading>
    <Heading size={300}>Heading Content</Heading>
    <Heading size={400}>Heading Content</Heading>
    <Heading size={500}>Heading Content</Heading>
    <Heading size={600}>Heading Content</Heading>
    <Heading size={700}>Heading Content</Heading>
    <Heading size={800}>Heading Content</Heading>
    <Heading size={900}>Heading Content</Heading>
  </>
);