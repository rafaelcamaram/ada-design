import React, { MouseEventHandler } from "react";
import View from "../View";

type Props = {
  onClick: MouseEventHandler;
  text: string;
};

const Button: React.FC<Props> = ({ text, onClick }: Props) => {
  return (
    <View as="button" onClick={onClick}>
      {text}
    </View>
  );
};

export default Button;
