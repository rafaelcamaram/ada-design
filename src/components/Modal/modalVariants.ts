import colors from "theme/colors";
import { ViewElementProps } from "types/css";

export type ModalVariantType = "default" | "trail";

export type ModalStyle = {
  container: Partial<ViewElementProps>;
  content: Partial<ViewElementProps>;
};

const defaultModalContainerProps: Partial<ViewElementProps> = {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: colors.blackWithoutOpacity30,
  backdropFilter: "blur(2px)",
  zIndex: 2000,
} as const;

const defaultModalContentProps: Partial<ViewElementProps> = {
  backgroundColor: colors.white,
};

const VariantStyles: {
  [prop: string]: ModalStyle;
} = {
  default: {
    container: {
      ...defaultModalContainerProps,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      ...defaultModalContentProps,
      padding: 32,
      borderRadius: 8,
    },
  },
  trail: {
    container: {
      ...defaultModalContainerProps,
      display: "flex",
      alignItems: "flex-end",
    },
    content: {
      ...defaultModalContentProps,
      width: "100%",
      padding: 32,
      paddingBottom: 0,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      overflow: "hidden",
    },
  },
};

export const getVariantStyle = (variant: ModalVariantType): ModalStyle => {
  if (!variant) return null;

  return VariantStyles[variant] || VariantStyles.default;
};
