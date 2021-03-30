import styled, { css } from "styled-components";
import { ViewElementProps } from "types/css";

import Text from "components/Typography/Text";

export type Props = {
  shouldVisuallyHideLabel?: boolean;
  htmlFor?: string;
} & ViewElementProps;

// TODO: Add a pattern for fontSize
// TODO: Fix issue on storybook | Cannot read property 'text' of undefined
const Label = styled(Text)<Props>`
  ${({ shouldVisuallyHideLabel }) =>
    shouldVisuallyHideLabel &&
    css`
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      height: 1px;
      width: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
    `}
`;

export default Label;
