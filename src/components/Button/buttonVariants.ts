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
  color: "rgb(66, 90, 112)",
  borderRadius: "16px",
};

const getLinearGradient = (color, factor) => {
  // TODO: DEV - Figure out a way to use gradients without messing with ADA analysis
  //   return `linear-gradient(${color}, ${color}30)`;
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
      backgroundColor: "transparent",
      // backgroundImage: getLinearGradient(palette.white, 0.05),
      border: `1px solid ${palette.black}30`,
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
      borderRadius: 15,
      border: `2px solid ${palette.black}30`,
      intentionStyle: {
        default: {
          background: getLinearGradient(intentions.backgroundDefault, 0.2),
          color: palette.white,
        },
        success: {
          background: getLinearGradient(intentions.backgroundSuccess, 0.2),
          color: palette.white,
        },
        warning: {
          background: getLinearGradient(intentions.backgroundWarning, 0.2),
          color: palette.white,
        },
        danger: {
          background: getLinearGradient(intentions.backgroundDanger, 0.2),
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
        // TODO: DEV - Simple Warning variation with A11y contrast issue with white background (Default)
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
      borderRadius: "6px",
      border: `2px solid ${palette.black}30`,
      paddingX: 10,
      paddingY: 0,
      intentionStyle: {
        default: {
          background: getLinearGradient(intentions.backgroundDefault, 0.2),
          color: palette.white,
        },
        success: {
          background: getLinearGradient(intentions.backgroundSuccess, 0.2),
          color: palette.white,
        },
        warning: {
          background: getLinearGradient(intentions.backgroundWarning, 0.2),
          color: palette.white,
        },
        danger: {
          background: getLinearGradient(intentions.backgroundDanger, 0.2),
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
  paddingX: 16,
} as const;

const largePadding = {
  paddingX: 16,
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
