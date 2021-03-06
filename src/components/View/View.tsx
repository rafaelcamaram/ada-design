import React, { memo } from "react";
import styled from "styled-components";
import { cssValue, getColor } from "utils/styles";
import { Props } from "types/View";
import { ViewElementProps } from "types/css";

const View: React.FC<Props> = ({
  id,
  as = "div",
  children,
  onClick,
  className,
  color,
  backgroundColor,
  ...rest
}) => {
  return (
    <ViewElement
      id={id}
      as={as as never}
      className={className}
      onClick={onClick}
      {...(color && { color: getColor(color) })}
      {...(backgroundColor && { backgroundColor: getColor(backgroundColor) })}
      {...rest}
    >
      {children as never}
    </ViewElement>
  );
};

// TODO: DEV - align-items doesnt contain auto
const ViewElement = styled.div<ViewElementProps>`
  width: ${({ width }) => cssValue(width)};
  height: ${({ height }) => cssValue(height)};

  max-width: ${({ maxWidth }) => cssValue(maxWidth)};
  min-width: ${({ minWidth }) => cssValue(minWidth)};
  max-height: ${({ maxHeight }) => cssValue(maxHeight)};
  min-height: ${({ minHeight }) => cssValue(minHeight)};

  padding: ${({ padding }) => cssValue(padding)};
  padding-bottom: ${({ paddingBottom, paddingY }) =>
    cssValue(paddingY || paddingBottom)};
  padding-left: ${({ paddingLeft, paddingX }) =>
    cssValue(paddingX || paddingLeft)};
  padding-right: ${({ paddingRight, paddingX }) =>
    cssValue(paddingX || paddingRight)};
  padding-top: ${({ paddingTop, paddingY }) =>
    cssValue(paddingY || paddingTop)};

  margin: ${({ margin }) => cssValue(margin)};
  margin-bottom: ${({ marginBottom, marginY }) =>
    cssValue(marginY || marginBottom)};
  margin-left: ${({ marginLeft, marginX }) => cssValue(marginX || marginLeft)};
  margin-right: ${({ marginRight, marginX }) =>
    cssValue(marginX || marginRight)};
  margin-top: ${({ marginTop, marginY }) => cssValue(marginY || marginTop)};

  box-sizing: ${({ boxSizing }) => boxSizing};
  clear: ${({ clear }) => clear};
  float: ${({ float }) => float};

  filter: ${({ filter }) => filter};
  backdrop-filter: ${({ backdropFilter }) => backdropFilter};

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

  position: ${({ position }) => position};
  top: ${({ top }) => cssValue(top)};
  bottom: ${({ bottom }) => cssValue(bottom)};
  left: ${({ left }) => cssValue(left)};
  right: ${({ right }) => cssValue(right)};
  z-index: ${({ zIndex }) => zIndex};

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
  border-width: ${({ borderWidth }) => cssValue(borderWidth)};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => cssValue(borderRadius)};
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

  font: ${({ font }) => font};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize && cssValue(fontSize)};
  font-style: ${({ fontStyle }) => fontStyle};
  font-variant: ${({ fontVariant }) => fontVariant};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-overflow: ${({ textOverflow }) => textOverflow};
  text-shadow: ${({ textShadow }) => textShadow};
  text-transform: ${({ textTransform }) => textTransform};
  color: ${({ color }) => color};
  letter-spacing: ${({ letterSpacing }) => cssValue(letterSpacing)};
  line-height: ${({ lineHeight }) => cssValue(lineHeight)};

  box-shadow: ${({ boxShadow }) => boxShadow};

  transform: ${({ transform }) => transform};
  transform-origin: ${({ transformOrigin }) => transformOrigin};

  transition: ${({ transition }) => transition};
  transition-delay: ${({ transitionDelay }) => transitionDelay};
  transition-duration: ${({ transitionDuration }) => transitionDuration};
  transition-property: ${({ transitionProperty }) => transitionProperty};
  transition-timing-function: ${({ transitionTimingFunction }) =>
    transitionTimingFunction};
  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};

  visibility: ${({ visibility }) => visibility};
  vertical-align: ${({ verticalAlign }) => verticalAlign};

  order: ${({ order }) => order};

  outline: ${({ outline }) => outline};
  outline-color: ${({ outlineColor }) => outlineColor};
  outline-style: ${({ outlineStyle }) => outlineStyle};
  outline-width: ${({ outlineWidth }) => outlineWidth};

  opacity: ${({ opacity }) => opacity};
  cursor: ${({ cursor }) => cursor};
`;

export default memo(View);
