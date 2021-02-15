import React, { MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler;
  text: string;
};

const Button: React.FC<Props> = ({ text, onClick }: Props) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
