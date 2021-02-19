import React from "react";

import Text from "../Typography/Text";
import Label from "../Typography/Label";
import withAccessibilityErrors from "../../hoc/withAccessibilityErrors";

export type Props = {
  id: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shouldHideLabel?: boolean;
  shouldVisuallyHideLabel?: boolean;
  labelledBy?: string;
};

const TextInput: React.FC<Props> = ({
  id,
  placeholder,
  value,
  onChange,
  label,
  shouldHideLabel = false,
  shouldVisuallyHideLabel = false,
  labelledBy,
}: Props) => {
  const hiddingLabel = (labelledBy || label) && shouldHideLabel;
  const shouldUseAriaLabel = hiddingLabel && !labelledBy;
  const shouldUseAriaLabelledBy = hiddingLabel && labelledBy;

  return (
    <>
      {!hiddingLabel && (
        <Label
          as="label"
          htmlFor={id}
          shouldVisuallyHideLabel={label && shouldVisuallyHideLabel}
        >
          {label}
        </Label>
      )}
      <Text
        id={id}
        as="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-labelledby={shouldUseAriaLabelledBy ? labelledBy : undefined}
        aria-label={shouldUseAriaLabel ? label : undefined}
      />
    </>
  );
};

export default withAccessibilityErrors<Props>(TextInput, "TextInput");
