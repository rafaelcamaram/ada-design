import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal: React.FC = ({ children }) => {
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

  return createPortal(children, modalRoot);
};

export default Portal;
