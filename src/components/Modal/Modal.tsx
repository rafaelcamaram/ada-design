import View from "components/View";
import React from "react";
import ReactDOM from "react-dom";

import { getVariantStyle, ModalStyle, ModalVariantType } from "./modalVariants";

const modalRoot = document.getElementById("root");

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(children, modalRoot);
};

type Props = {
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

  const { container: containerStyle, content: contentStyle } = getVariantStyle(
    variant,
  );

  const {
    container: customContainerStyle,
    content: customContentStyle,
  } = customModalStyle;

  return (
    <ModalPortal>
      <View {...containerStyle} {...customContainerStyle} onClick={closeModal}>
        <View
          {...contentStyle}
          {...customContentStyle}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </View>
      </View>
    </ModalPortal>
  );
};
export default Modal;
