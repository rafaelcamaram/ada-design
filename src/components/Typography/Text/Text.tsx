import React, { ReactNode } from "react";
import View from "components/View";
import { getFontFamilyStyle } from "theme";
import { Props as ViewProps } from "types/View";

type Props = {
  children?: ReactNode;
  onClick?: Function;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
} & ViewProps;

const fontFamilyName = getFontFamilyStyle("ui");

const Text: React.FC<Props> = ({
  as = "span",
  onClick,
  children,
  href,
  ...rest
}: Props) => {
  return (
    <View
      as={as}
      fontFamily={fontFamilyName}
      fontSize={14}
      href={href}
      cursor={href || onClick ? "pointer" : "default"}
      onClick={onClick}
      {...rest}
    >
      {children}
    </View>
  );
};

export default Text;
