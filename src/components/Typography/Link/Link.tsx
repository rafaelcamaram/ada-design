import React from "react";
import styled from "styled-components";

import Text from "components/Typography/Text";
import { Props as ViewProps } from "types/View";

export type Props = {
  onClick?: () => void;
  href?: string;
} & ViewProps;

const Link: React.FC<Props> = ({
  onClick,
  href,
  children,
  color = "#738598",
  ...rest
}) => {
  return (
    <StyledLink
      forwardedAs="a"
      onClick={onClick}
      href={href}
      color={color}
      {...rest}
    >
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Text)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Link;
