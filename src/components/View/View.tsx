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
  display: ${({ display }) => display};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};

  mix-blend-mode: ${({ mixBlendMode }) => mixBlendMode};

  background: ${({ background }) => background};
  background-clip: ${({ backgroundClip }) => backgroundClip};
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-origin: ${({ backgroundOrigin }) => backgroundOrigin};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat};
  background-size: ${({ backgroundSize }) => backgroundSize};
`;

export default View;
