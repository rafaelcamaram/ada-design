import React from "react";

import Text from "../Typography/Text";
import Label from "../Typography/Label";

export type Props = {
  id: string;
  label: string;
  placeholder?: string;
  shouldHideLabel?: boolean;
  shouldVisuallyHideLabel?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<Props> = ({
  id,
  label,
  shouldHideLabel = false,
  shouldVisuallyHideLabel = false,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <>
      <Label
        as="label"
        htmlFor={id}
        shouldVisuallyHideLabel={label && shouldVisuallyHideLabel}
        shouldHideLabel={label && shouldHideLabel}
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
