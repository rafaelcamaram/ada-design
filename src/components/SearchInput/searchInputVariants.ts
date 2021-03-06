import { useMemo } from "react";
import { getFontFamilyStyle } from "theme";
import useTheme from "theme/useTheme";
import {
  BoxSizingValue,
  ColorType,
  CrossAxisFlexDefaultValue,
  FlexDirectionValue,
  UnitValue,
  ViewElementProps,
} from "types/css";
import { getColor } from "utils/styles";

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
      ...(iconColor && { color: getColor(iconColor) }),
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
  iconColor: ColorType;
};

export const useVariantStyle = ({
  width,
  height,
  isDisabled,
  isInvalid,
  hiddingLabel,
  iconColor,
}: UseVariantStyleParams): {
  searchInput: Partial<ViewElementProps>;
  container: Partial<ViewElementProps>;
  icon: Partial<ViewElementProps> & { color: string };
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
