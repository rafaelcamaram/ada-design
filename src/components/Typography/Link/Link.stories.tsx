import React from "react";
import Link from "./Link";

export default {
  title: "Typography/Link",
  component: Link,
};

export const Default = (): React.ReactNode => (
  <Link as="a" href="https://google.com/">
    Link Example
  </Link>
);
