import React from "react";
import Button from "./Button";

export default {
  title: "Core/Button",
  component: Button,
};

export const Default = (): React.ReactNode => (
  <>
    <Button variant="default" onClick={() => alert("Default Button Handler")}>
      Default Button
    </Button>
    <Button variant="primary" onClick={() => alert("Primary Button Handler")}>
      Primary Button
    </Button>
  </>
);
