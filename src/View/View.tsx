import React from "react";
import styled from "styled-components";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
};

const View: React.FC<Props> = ({ as = "div", children }) => {
  return <ViewElement as={as}>{children}</ViewElement>;
};

const ViewElement = styled.div``;

export default View;
