import React, { ReactNode } from "react";
import { ViewElementProps } from "../../../types/css";
import View from "../../View";

type Props = {
  as?: string;
  children?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
} & ViewElementProps;

const Text: React.FC<Props> = ({ as = "span", children, ...rest }: Props) => {
  return (
    <View as={as} {...rest}>
      {children}
    </View>
  );
};

export default Text;
