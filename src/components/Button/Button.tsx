import React, { MouseEventHandler } from "react";
import { ViewElementProps } from "../../types/css";
import View from "../View";

type Props = {
  onClick?: MouseEventHandler;
  type?: string;
} & ViewElementProps;

const Button: React.FC<Props> = ({ type, onClick, children }) => {
  return (
    <View as="button" type={type} onClick={onClick}>
      {children}
    </View>
  );
};

export default Button;
