import React from "react";
import "./Page.css";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wrapper for eacth page in the app
 */
export function Page({ children, className }: ModalProps) {
  return <div className={`page ${className || ""}`}>{children}</div>;
}
