import React from "react";
import styled from "styled-components";
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
    <StyledButton
      variant="primary"
      onClick={() => alert("Primary Button with custom hover Handle")}
      backgroundHover="green"
    >
      Primary Button with custom hover
    </StyledButton>
    <Button
      isFullWidth
      variant="primary"
      onClick={() => alert("Primary Button Handler")}
    >
      Full Width Primary Button
    </Button>
  </>
);

const StyledButton = styled(Button)<{ backgroundHover: string }>`
  &:hover {
    background-color: ${({ backgroundHover }) => backgroundHover};
  }
`;
