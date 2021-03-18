import React, { ReactNode } from "react";
import View from "components/View";
import { getFontFamilyStyle } from "theme";
import { Props as ViewProps } from "types/View";

type Props = {
  href?: string;
  target?: string;
  children?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
} & ViewProps;

const fontFamilyName = getFontFamilyStyle("ui");

const Text: React.FC<Props> = ({ as = "span", children, ...rest }: Props) => {
  return (
    <View as={as} fontFamily={fontFamilyName} {...rest}>
      {children}
    </View>
  );
};

export default Text;
