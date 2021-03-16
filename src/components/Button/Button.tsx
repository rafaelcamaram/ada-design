import React, { MouseEventHandler } from "react";
import withAccessibilityErrors from "../../hoc/withAccessibilityErrors";
import { ViewElementProps } from "../../types/css";
import View from "../View";

type Props = {
  onClick?: MouseEventHandler;
  type?: string;
} & ViewElementProps;

const Button: React.FC<Props> = ({ type, onClick, children, ...rest }) => {
  return (
    <View as="button" type={type} onClick={onClick} {...rest}>
      {children}
    </View>
  );
};

export default withAccessibilityErrors<Props>(Button);
