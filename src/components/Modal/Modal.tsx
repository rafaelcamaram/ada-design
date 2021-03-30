import React from "react";

import View from "components/View";
import Portal from "components/Portal";

import { useVariantStyle, ModalStyle, ModalVariantType } from "./modalVariants";
export type { ModalVariantType, ModalStyle } from "./modalVariants";

export type Props = {
  isOpen?: boolean;
  closeModal?: () => void;
  variant?: ModalVariantType;
  customModalStyle?: Partial<ModalStyle>;
};

const Modal: React.FC<Props> = ({
  isOpen = false,
  closeModal,
  customModalStyle = {} as Partial<ModalStyle>,
  variant = "default" as ModalVariantType,
  children,
}) => {
  if (!isOpen) return null;

  const { container: containerStyle, content: contentStyle } = useVariantStyle(
    variant,
  );

  const {
    container: customContainerStyle,
    content: customContentStyle,
  } = customModalStyle;

  return (
    <Portal>
      <View {...containerStyle} {...customContainerStyle} onClick={closeModal}>
        <View
          {...contentStyle}
          {...customContentStyle}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </View>
      </View>
    </Portal>
  );
};
export default Modal;
