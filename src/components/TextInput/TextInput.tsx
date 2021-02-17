import React from "react";

import Text from "../Typography/Text";
import Label from "../Typography/Label";

export type Props = {
  id: string;
  label: string;
  placeholder?: string;
  shouldHideLabel?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<Props> = ({
  id,
  label,
  shouldHideLabel = false,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <>
      <Label
        as="label"
        htmlFor={id}
        shouldHideLabel={!label || shouldHideLabel}
      >
        {label}
      </Label>
      <Text
        id={id}
        as="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TextInput;
