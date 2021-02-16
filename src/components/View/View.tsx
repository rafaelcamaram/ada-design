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
  flex: ${({ flex }) => flex};
  flex-flow: ${({ flexFlow }) => flexFlow};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-wrap: ${({ flexWrap }) => flexWrap};

  justify-content: ${({ justifyContent }) => justifyContent};
  justify-items: ${({ justifyItems }) => justifyItems};
  justify-self: ${({ justifySelf }) => justifySelf};

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
  border-width: ${({ borderWidth }) => borderWidth};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-style: ${({ borderStyle }) => borderStyle};

  border-bottom: ${({ borderBottom }) => borderBottom};
  border-bottom-color: ${({ borderBottomColor }) => borderBottomColor};
  border-bottom-left-radius: ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius && cssValue(borderBottomLeftRadius)};
  border-bottom-right-radius: ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius && cssValue(borderBottomRightRadius)};
  border-bottom-style: ${({ borderBottomStyle }) => borderBottomStyle};
  border-bottom-width: ${({ borderBottomWidth }) =>
    borderBottomWidth && cssValue(borderBottomWidth)};

  border-left: ${({ borderLeft }) => borderLeft};
  border-left-color: ${({ borderLeftColor }) => borderLeftColor};
  border-left-style: ${({ borderLeftStyle }) => borderLeftStyle};
  border-left-width: ${({ borderLeftWidth }) =>
    borderLeftWidth && cssValue(borderLeftWidth)};

  border-right: ${({ borderRight }) => borderRight};
  border-right-color: ${({ borderRightColor }) => borderRightColor};
  border-right-style: ${({ borderRightStyle }) => borderRightStyle};
  border-right-width: ${({ borderRightWidth }) =>
    borderRightWidth && cssValue(borderRightWidth)};

  border-top: ${({ borderTop }) => borderTop};
  border-top-color: ${({ borderTopColor }) => borderTopColor};
  border-top-left-radius: ${({ borderTopLeftRadius }) =>
    borderTopLeftRadius && cssValue(borderTopLeftRadius)};
  border-top-right-radius: ${({ borderTopRightRadius }) =>
    borderTopRightRadius && cssValue(borderTopRightRadius)};
  border-top-style: ${({ borderTopStyle }) => borderTopStyle};
  border-top-width: ${({ borderTopWidth }) =>
    borderTopWidth && cssValue(borderTopWidth)};
`;

export default View;
