import React from "react";
import Text from "components/Typography/Text";
import Label from "components/Typography/Label";
import withAccessibilityErrors from "hoc/withAccessibilityErrors";
import { getFontFamilyStyle } from "theme";
import Flex from "components/Flex";
import { Props as ViewProps } from "types/View";

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
} & ViewProps;

const fontFamilyName = getFontFamilyStyle("ui");

// TODO: Add a way to customize styling from props
// TODO: Add a pattern for spacing
// TODO: Add a pattern for colors
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
  ...rest
}: Props) => {
  const hiddingLabel = !label || shouldHideLabel;
  const shouldUseAriaLabel = hiddingLabel && !labelledBy;
  const shouldUseAriaLabelledBy = hiddingLabel && labelledBy;

  return (
    <Flex
      width="fit-content"
      flexDirection="column"
      alignItems="flex-start"
      marginY="8px"
      {...rest}
    >
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
        onChange={onChange}
        aria-required={isRequired && true}
        aria-labelledby={shouldUseAriaLabelledBy ? labelledBy : undefined}
        aria-label={shouldUseAriaLabel ? label : undefined}
        fontFamily={fontFamilyName}
        fontSize="14px"
        color="#060F19"
        width="100%"
        minWidth="200px"
        boxSizing="border-box"
        backgroundColor="white"
        borderColor="#F1F3F5"
        borderWidth="1px"
        borderRadius="15px"
        borderStyle="solid"
        paddingX="19px"
        paddingY="22px"
        marginTop="8px"
      />
    </Flex>
  );
};

export default withAccessibilityErrors<Props>(TextInput);
