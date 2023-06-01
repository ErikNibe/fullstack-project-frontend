import { createPortal } from "react-dom";
import { ModalBackground } from "./styles";
import { ReactNode, useEffect, useRef } from "react";

interface iModalProps {
  children: ReactNode;
  toggleModal: () => void;
}

export const Modal = ({ children, toggleModal }: iModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  });

  return createPortal(
    <ModalBackground>
      <div ref={ref}>{children}</div>
    </ModalBackground>,
    document.body
  );
};
