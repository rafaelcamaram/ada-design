import React from "react";

import Text from "../Typography/Text";
import Label from "../Typography/Label";
import withAccessibilityErrors from "../../hoc/withAccessibilityErrors";
import View from "../View";

export type Props = {
  id: string;
  isRequired?: boolean;
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
  isRequired,
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
    <View display="flex" flexDirection="column" alignItems="flex-start">
      {!hiddingLabel && (
        <Label
          forwardedAs="label"
          htmlFor={id}
          shouldVisuallyHideLabel={label && shouldVisuallyHideLabel}
        >
          {label} {isRequired && "*"}
        </Label>
      )}
      <Text
        id={id}
        as="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-required={isRequired && true}
        aria-labelledby={shouldUseAriaLabelledBy ? labelledBy : undefined}
        aria-label={shouldUseAriaLabel ? label : undefined}
      />
    </View>
  );
};

export default withAccessibilityErrors<Props>(TextInput, "TextInput");
