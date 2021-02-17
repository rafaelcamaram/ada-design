import styled, { css } from "styled-components";
import { ViewElementProps } from "../../../types/css";

import View from "../../View";

export type Props = {
  shouldHideLabel?: boolean;
  htmlFor?: string;
} & ViewElementProps;

const Label = styled(View)<Props>`
  ${({ shouldHideLabel }) =>
    shouldHideLabel &&
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
