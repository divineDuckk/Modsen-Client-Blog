import { FC, useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  onClose: () => void;
  children: JSX.Element;
}

export const Modal: FC<PortalProps> = ({ children, onClose }) => {
  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full z-20 flex justify-center items-center bg-dark"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl z-30 flex w-2/3 h-2/4"
        onClick={handleContainerClick}
      >
        <>{children}</>
      </div>
    </div>,
    document.body!,
  );
};
