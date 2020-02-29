import React from "react";
import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

/**
 * Modal component that renders children. Clicking on overlay will close the dialog.
 */
export function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="modal">
      <div className="overlay" onClick={onClose} />
      <div className="content">{children}</div>
    </div>
  );
}

/**
 * Wrapper for modal buttons to have consistent layout for modal actions. Use only within Modal.
 */
export function ModalButtons({ children }) {
  return <div className="buttons">{children}</div>;
}
