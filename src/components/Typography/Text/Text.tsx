import React from "react";
import View from "components/View";
import { getFontFamilyStyle } from "theme";
import { Props as ViewProps } from "types/View";
import { useVariantStyle } from "./textVariants";

export type Props = {
  disabled?: boolean;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  size?: 300 | 400 | 500 | 600;
} & ViewProps;

const fontFamilyName = getFontFamilyStyle("ui");

// TODO: Update docs with new size props and etc
const Text: React.FC<Props> = ({
  as = "span",
  onClick,
  children,
  href,
  size = 300,
  ...rest
}: Props) => {
  const { text: textStyle } = useVariantStyle({ size });

  return (
    <View
      as={as}
      fontFamily={fontFamilyName}
      fontSize={14}
      href={href}
      cursor={href || onClick ? "pointer" : "default"}
      onClick={onClick}
      {...textStyle}
      {...rest}
    >
      {children}
    </View>
  );
};

export default Text;
