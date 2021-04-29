import useTheme from "theme/useTheme";
import { Json } from "types/global";

export type ButtonVariantType = "primary" | "secondary" | "icon" | "default";
export type ButtonIntentionType = "default" | "success" | "warning" | "danger";
export type ButtonSizeType = 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56;

const defaultButtonProps = {
  appearance: "none",
  verticalAlign: "middle",
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
  borderRadius: "3px",
  fontSize: "16px",
  fontWeight: 400,
  textAlign: "center",
  padding: "0 20px",
  height: "36px",
  linehHeight: "34px",
  transition: "background .3s ease,transform .3s ease,color .2s ease",
};

const getLinearGradient = (color) => {
  return color;
};

const getVariantStyles = () => {
  const {
    colors: { buttons, palette },
  } = useTheme();

  const { intentions } = buttons;
  return {
    default: {
      ...defaultButtonProps,
      intentionStyle: {
        default: {
          color: intentions.textDefault,
        },
        success: {
          color: intentions.textSuccess,
        },
        warning: {
          color: intentions.textWarning,
        },
        danger: {
          color: intentions.textDanger,
        },
      },
    },
    primary: {
      ...defaultButtonProps,
      intentionStyle: {
        default: {
          background: getLinearGradient(intentions.backgroundDefault),
          color: palette.white,
        },
        success: {
          background: getLinearGradient(intentions.backgroundSuccess),
          color: palette.white,
        },
        warning: {
          background: getLinearGradient(intentions.backgroundWarning),
          color: palette.white,
        },
        danger: {
          background: getLinearGradient(intentions.backgroundDanger),
          color: palette.white,
        },
      },
    },
    simple: {
      ...defaultButtonProps,
      backgroundColor: palette.white,
      transition: "all 0.1s linear",
      intentionStyle: {
        default: {
          color: intentions.backgroundDefault,
        },
        success: {
          color: intentions.backgroundSuccess,
        },
        warning: {
          color: intentions.backgroundWarning,
        },
        danger: {
          color: intentions.backgroundDanger,
        },
      },
    },
    icon: {
      ...defaultButtonProps,
      intentionStyle: {
        default: {
          background: getLinearGradient(intentions.backgroundDefault),
          color: palette.white,
        },
        success: {
          background: getLinearGradient(intentions.backgroundSuccess),
          color: palette.white,
        },
        warning: {
          background: getLinearGradient(intentions.backgroundWarning),
          color: palette.white,
        },
        danger: {
          background: getLinearGradient(intentions.backgroundDanger),
          color: palette.white,
        },
      },
    },
  };
};

const smallPadding = {
  paddingX: 16,
} as const;

const mediumPadding = {
  paddingX: 24,
} as const;

const largePadding = {
  paddingX: 28,
} as const;

const PaddingBySize = {
  default: smallPadding,
  20: smallPadding,
  24: smallPadding,
  28: smallPadding,
  32: smallPadding,
  40: mediumPadding,
  44: mediumPadding,
  48: largePadding,
  52: largePadding,
  56: largePadding,
} as const;

const getFontSizeBySize = (size) => {
  const { fontSize } = useTheme();
  const dataset = {
    default: fontSize.regular,
    20: fontSize.small,
    24: fontSize.small,
    28: fontSize.small,
    32: fontSize.small,
    40: fontSize.regular,
    44: fontSize.regular,
    48: fontSize.medium,
    52: fontSize.medium,
    56: fontSize.medium,
  };

  return dataset[size] || dataset.default;
};

const useTextStyleAndSpacing = (size: ButtonSizeType) => {
  const fontSize = getFontSizeBySize(size);
  const paddingStyle = PaddingBySize[size] || PaddingBySize.default;
  return {
    fontSize: fontSize,
    minHeight: size || 32,
    ...paddingStyle,
  };
};

export const useVariantStyle = (
  variant: ButtonVariantType,
  intention: ButtonIntentionType,
  size: ButtonSizeType,
): Json => {
  const variantStyles = getVariantStyles();
  const { intentionStyle: variantIntentionStyle, ...styleProperties } =
    variantStyles[variant] || variantStyles.default;

  return {
    ...useTextStyleAndSpacing(size),
    ...styleProperties,
    ...(variantIntentionStyle[intention] || variantIntentionStyle.default),
  };
};
