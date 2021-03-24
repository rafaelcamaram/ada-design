import React from "react";
import styled from "styled-components";

import Text from "components/Typography/Text";
import { Props as ViewProps } from "types/View";

type Props = {
  onClick?: () => void;
  href?: string;
} & ViewProps;

const Link: React.FC<Props> = ({ onClick, href, children, ...rest }) => {
  return (
    <StyledLink
      forwardedAs="a"
      color="#738598"
      marginRight={5}
      fontSize={12}
      textDecoration="none"
      onClick={onClick}
      href={href}
      {...rest}
    >
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Text)`
  &:hover {
    text-decoration: underline;
  }
`;

export default Link;
