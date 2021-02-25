import React from "react";
import Button from "./Button";

export default {
  title: "Core/Button",
  component: Button,
};

export const Default = (): React.ReactNode => (
  <Button onClick={() => alert("teste")} text="Hey" />
);
