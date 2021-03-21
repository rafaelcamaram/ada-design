import React from "react";
import BadgeList from "./";

export default {
  title: "Core/BadgeList",
  component: BadgeList,
};

export const Default = (): React.ReactNode => {
  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return <BadgeList data={data} />;
};
