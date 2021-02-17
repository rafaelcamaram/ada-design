import React from "react";

import Text from "../Typography/Text";

export type Props = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <Text
      as="input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></Text>
  );
};

export default TextInput;
