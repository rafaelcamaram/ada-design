import View from "components/View";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { useVariantStyle, ModalStyle, ModalVariantType } from "./modalVariants";

export { ModalVariantType, ModalStyle } from "./modalVariants";

const ModalPortal = ({ children }) => {
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    if (typeof document !== `undefined`) {
      const rootContainer = document.getElementById("root");

      if (rootContainer) {
        setModalRoot(rootContainer);
      } else {
        setModalRoot(document.getElementsByTagName("body")[0]);
      }
    }
  }, []);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(children, modalRoot);
};

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
