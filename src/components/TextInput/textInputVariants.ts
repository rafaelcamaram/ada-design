import { useMemo } from "react";
import { getFontFamilyStyle } from "theme";
import useTheme from "theme/useTheme";
import {
  BoxSizingValue,
  CrossAxisFlexDefaultValue,
  FlexDirectionValue,
  UnitValue,
  ViewElementProps,
} from "types/css";

const fontFamilyName = getFontFamilyStyle("ui");

const getVariantStyles = ({
  width,
  height,
  isDisabled,
  isInvalid,
  hiddingLabel,
}) => {
  const { colors } = useTheme();
  const { palette, text } = colors;

  const defaultTextInputProps = useMemo(() => {
    return {
      container: {
        width: "fit-content",
        flexDirection: "column" as FlexDirectionValue,
        alignItems: "flex-start" as CrossAxisFlexDefaultValue,
      },
      textInput: {
        width: undefined,
        height: 32,
        fontFamily: fontFamilyName,
        fontSize: 14,
        lineHeight: "16px",
        color: text.textDefault,
        boxSizing: "border-box" as BoxSizingValue,
        backgroundColor: palette.white,
        border: "0px solid transparent",
        borderRadius: "3px",
        paddingX: 12,
        marginTop: 0,
        boxShadow:
          "rgb(67 90 111 / 30%) 0px 0px 0px 1px inset, rgb(67 90 111 / 14%) 0px 1px 2px inset",
      },
    };
  }, [colors]);

  return {
    container: {
      ...defaultTextInputProps.container,
      ...(width && { width }),
    },
    textInput: {
      ...defaultTextInputProps.textInput,
      ...(width && { width }),
      ...(height && { height }),
      ...(isDisabled && {
        backgroundColor: palette.darkWhite,
      }),
      ...(isInvalid && { border: `1px solid ${palette.red}` }),
      ...(!hiddingLabel && { marginTop: 8 }),
    },
  };
};

type UseVariantStyleParams = {
  width: UnitValue;
  height: UnitValue;
  isDisabled: boolean;
  isInvalid: boolean;
  hiddingLabel: boolean;
};

export const useVariantStyle = ({
  width,
  height,
  isDisabled,
  isInvalid,
  hiddingLabel,
}: UseVariantStyleParams): {
  textInput: Partial<ViewElementProps>;
  container: Partial<ViewElementProps>;
} => {
  const { textInput, container } = getVariantStyles({
    width,
    height,
    isDisabled,
    isInvalid,
    hiddingLabel,
  });

  return {
    textInput,
    container,
  };
};
