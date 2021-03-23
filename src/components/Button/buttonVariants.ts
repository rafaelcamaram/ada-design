import colors from "theme/colors";
import { Json } from "types/global";

export type ButtonVariantType = "primary" | "secondary" | "default";
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

const VariantStyles = {
  default: {
    ...defaultButtonProps,
    color: "rgb(66, 90, 112)",
    backgroundColor: "white",
    backgroundImage: "linear-gradient(rgb(255, 255, 255), rgb(244, 245, 247))",
    intentionStyle: {
      default: {
        color: "rgb(66, 90, 112)",
      },
      success: {
        color: "rgb(0, 120, 63)",
      },
      warning: {
        color: "rgb(149, 89, 31)",
      },
      danger: {
        color: "rgb(191, 14, 9)",
      },
    },
  },
  primary: {
    ...defaultButtonProps,
    color: "white",
    borderRadius: 15,
    border: `2px solid #00000030`,
    intentionStyle: {
      default: {
        background: "linear-gradient(rgb(7, 136, 222), rgb(17, 106, 184))",
        color: "white",
      },
      success: {
        background: "linear-gradient(rgb(35, 194, 119), rgb(57, 157, 108))",
        color: "white",
      },
      warning: {
        background: "linear-gradient(rgb(238, 153, 19), rgb(217, 130, 43))",
        color: "white",
      },
      danger: {
        background: "linear-gradient(rgb(236, 76, 71), rgb(214, 69, 64))",
        color: "white",
      },
    },
  },
  simple: {
    ...defaultButtonProps,
    backgroundColor: "white",
    transition: "all 0.1s linear",
    intentionStyle: {
      default: {
        color: "rgb(66, 90, 112)",
      },
      success: {
        color: "rgb(0, 120, 63)",
      },
      warning: {
        color: "rgb(149, 89, 31)",
      },
      danger: {
        color: "rgb(191, 14, 9)",
      },
    },
  },
} as const;

const IntentionStyle = {
  default: {
    color: "rgb(66, 90, 112)",
  },
  success: {
    color: "rgb(0, 120, 63)",
  },
  warning: {
    color: "rgb(149, 89, 31)",
  },
  danger: {
    color: "rgb(191, 14, 9)",
  },
} as const;

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

const FontSizeBySize = {
  default: "14px",
  20: "12px",
  24: "12px",
  28: "12px",
  32: "12px",
  40: "14px",
  44: "14px",
  48: "16px",
  52: "16px",
  56: "16px",
} as const;

const getTextStyleAndSpacing = (size: ButtonSizeType) => {
  const fontSize = FontSizeBySize[size] || FontSizeBySize.default;
  const paddingStyle = PaddingBySize[size] || PaddingBySize.default;
  return {
    fontSize: fontSize,
    minHeight: size || 32,
    ...paddingStyle,
  };
};
export const getVariantStyle = (
  variant: ButtonVariantType,
  intention: ButtonIntentionType,
  size: ButtonSizeType,
): Json => {
  const { intentionStyle: variantIntentionStyle, ...styleProperties } =
    VariantStyles[variant] || VariantStyles.default;

  const selectedIntentionStyle =
    variantIntentionStyle[intention] ||
    variantIntentionStyle.default ||
    IntentionStyle.default;

  return {
    ...styleProperties,
    ...selectedIntentionStyle,
    ...getTextStyleAndSpacing(size),
  };
};
