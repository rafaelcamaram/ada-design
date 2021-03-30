import React from "react";
import { FiSearch } from "react-icons/fi";
import Text from "components/Typography/Text";
import Label from "components/Typography/Label";
import withAccessibilityErrors from "hoc/withAccessibilityErrors";
import Flex from "components/Flex";
import { Props as ViewProps } from "types/View";
import { UnitValue } from "types/css";
import { useVariantStyle } from "./searchInputVariants";
import styled from "styled-components";

export type Props = {
  id: string;
  placeholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  width?: UnitValue;
  height?: UnitValue;
  iconColor?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shouldHideLabel?: boolean;
  shouldVisuallyHideLabel?: boolean;
  labelledBy?: string;
} & ViewProps;

// TODO: DOC - Add to docs saying that you can customize the SearchInput using nested selector (input and label)
// TODO: DOC - Add it to docs
// TODO: DEV - Add hint/error property
const SearchInput: React.FC<Props> = ({
  id,
  isDisabled,
  isInvalid,
  width,
  height,
  iconColor,
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
    searchInput: searchInputStyle,
    container: containerStyle,
    icon: iconStyle,
  } = useVariantStyle({
    width,
    height,
    isDisabled,
    isInvalid,
    hiddingLabel,
    iconColor,
  });

  console.log({ searchInputStyle });

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
      <Flex position="relative">
        <Flex
          width={32}
          height={searchInputStyle.height}
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top={searchInputStyle.marginTop}
          left={0}
        >
          <StyledFiSearchIcon {...iconStyle} />
        </Flex>
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
          {...searchInputStyle}
        />
      </Flex>
    </Flex>
  );
};

const StyledFiSearchIcon = styled(FiSearch)<{ color: string | undefined }>`
  color: ${({ color, theme }) => color || theme.colors.text.textDefault};
`;

export default withAccessibilityErrors<Props>(SearchInput);
