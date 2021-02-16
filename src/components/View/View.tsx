import React from "react";
import styled from "styled-components";
import { ViewElementProps } from "../../types/css";
import { cssValue } from "../../utils/styles";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
} & ViewElementProps;

const View: React.FC<Props> = ({ as = "div", children, ...rest }) => {
  return (
    <ViewElement as={as} {...rest}>
      {children}
    </ViewElement>
  );
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

  border: ${({ border }) => border};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-bottom-color: ${({ borderBottomColor }) => borderBottomColor};
  border-bottom-left-radius: ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius && cssValue(borderBottomLeftRadius)};
  border-bottom-right-radius: ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius && cssValue(borderBottomRightRadius)};
  border-bottom-style: ${({ borderBottomStyle }) => borderBottomStyle};
  border-bottom-width: ${({ borderBottomWidth }) =>
    borderBottomWidth && cssValue(borderBottomWidth)};
  border-color: ${({ borderColor }) => borderColor};
`;

export default View;
