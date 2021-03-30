import { useMemo } from "react";
import { getFontFamilyStyle } from "theme";
import useTheme from "theme/useTheme";
import {
  BoxSizingValue,
  CrossAxisFlexDefaultValue,
  FlexDirectionValue,
  ViewElementProps,
} from "types/css";
import { Color } from "utils/styles";

const fontFamilyName = getFontFamilyStyle("ui");

const getVariantStyles = ({
  width,
  height,
  isDisabled,
  isInvalid,
  hiddingLabel,
  iconColor,
}) => {
  const { colors } = useTheme();
  const { palette, text } = colors;

  const defaultTextInputProps = useMemo(() => {
    return {
      container: {
        // width: "fit-content", // Do we need this?
        flexDirection: "column" as FlexDirectionValue,
        alignItems: "flex-start" as CrossAxisFlexDefaultValue,
      },
      searchInput: {
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
        paddingX: 32,
        marginTop: 0,
        boxShadow:
          "rgb(67 90 111 / 30%) 0px 0px 0px 1px inset, rgb(67 90 111 / 14%) 0px 1px 2px inset",
      },
    };
  }, [colors]);

  return {
    icon: {
      ...(iconColor && { color: iconColor }),
      ...(isInvalid && { color: palette.red }),
    },
    container: {
      ...defaultTextInputProps.container,
      ...(width && { width }),
    },
    searchInput: {
      ...defaultTextInputProps.searchInput,
      ...(width && { width }),
      ...(height && { height }),
      ...(isDisabled && {
        backgroundColor: Color(palette.white).darken(0.05),
      }),
      ...(isInvalid && { border: `1px solid ${palette.red}` }),
      ...(!hiddingLabel && { marginTop: 8 }),
    },
  };
};

// TODO: DEV - Set correct type
export const useVariantStyle: any = ({
  width,
  height,
  isDisabled,
  isInvalid,
  hiddingLabel,
  iconColor,
}): {
  searchInput: Partial<ViewElementProps>;
  container: Partial<ViewElementProps>;
  icon: Partial<ViewElementProps>;
} => {
  const { searchInput, container, icon } = getVariantStyles({
    width,
    height,
    isDisabled,
    isInvalid,
    hiddingLabel,
    iconColor,
  });

  return {
    searchInput,
    container,
    icon,
  };
};
