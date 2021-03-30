import React from "react";
import Text from "components/Typography/Text";
import Label from "components/Typography/Label";
import withAccessibilityErrors from "hoc/withAccessibilityErrors";
import Flex from "components/Flex";
import { Props as ViewProps } from "types/View";
import { UnitValue } from "types/css";
import { useVariantStyle } from "./textInputVariants";

export type Props = {
  id: string;
  placeholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  width?: UnitValue;
  height?: UnitValue;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shouldHideLabel?: boolean;
  shouldVisuallyHideLabel?: boolean;
  labelledBy?: string;
} & ViewProps;

// TODO: DEV - Add hint/error property
const TextInput: React.FC<Props> = ({
  id,
  isDisabled,
  isInvalid,
  width,
  height,
  isRequired,
  placeholder,
  value,
  onChange,
  label,
  shouldHideLabel = false,
  shouldVisuallyHideLabel = false,
  labelledBy,
  ...rest
}: Props) => {
  const hiddingLabel = !label || shouldHideLabel;
  const shouldUseAriaLabel = hiddingLabel && !labelledBy;
  const shouldUseAriaLabelledBy = hiddingLabel && labelledBy;
  const {
    textInput: textInputStyle,
    container: containerStyle,
  } = useVariantStyle({
    width,
    height,
    isDisabled,
    isInvalid,
    hiddingLabel,
  });

  return (
    <Flex {...containerStyle} {...rest}>
      {!hiddingLabel && (
        <Label
          forwardedAs="label"
          htmlFor={id}
          shouldVisuallyHideLabel={label && shouldVisuallyHideLabel}
        >
          {label} {isRequired && label ? "*" : null}
        </Label>
      )}
      <Text
        id={id}
        as="input"
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        onChange={!isDisabled && onChange}
        aria-required={isRequired && true}
        aria-labelledby={shouldUseAriaLabelledBy ? labelledBy : undefined}
        aria-label={shouldUseAriaLabel ? label : undefined}
        {...textInputStyle}
      />
    </Flex>
  );
};

export default withAccessibilityErrors<Props>(TextInput);
