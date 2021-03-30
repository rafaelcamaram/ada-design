import styled, { css } from "styled-components";
import { ViewElementProps } from "types/css";

import Text from "components/Typography/Text";
import { getFontFamilyStyle } from "theme";

export type Props = {
  shouldVisuallyHideLabel?: boolean;
  htmlFor?: string;
} & ViewElementProps;

const fontFamilyName = getFontFamilyStyle("ui");

// TODO: Add a pattern for fontSize
// TODO: Fix issue on storybook | Cannot read property 'text' of undefined
const Label = styled(Text).attrs(({ theme }) => {
  return {
    color: theme.colors?.text.textDefault,
    fontSize: 14,
    fontFamily: fontFamilyName,
  };
})<Props>`
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
