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
    <Button
      variant="primary"
      onClick={() => alert("Primary Button with custom hover Handle")}
      customStyle={{
        "&:hover": {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      Primary Button with custom hover
    </Button>
    <Button
      isFullWidth
      variant="primary"
      onClick={() => alert("Primary Button Handler")}
    >
      Full Width Primary Button
    </Button>
  </>
);
