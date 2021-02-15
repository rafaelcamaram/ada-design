import React from "react";
import styled from "styled-components";
import { ViewElementProps } from "../../types/css";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
} & ViewElementProps;

const View: React.FC<Props> = ({ as = "div", children }) => {
  return <ViewElement as={as}>{children}</ViewElement>;
};

// align-items doesnt contain auto
const ViewElement = styled.div<ViewElementProps>`
  display: ${({ display }) => display || "block"};
  align-content: ${({ alignContent }) => alignContent || "stretch"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  align-self: ${({ alignSelf }) => alignSelf || "auto"};
`;

export default View;
