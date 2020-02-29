import React from "react";
import "./Button.css";

/**
 * Generic component to represent loading state
 */
export function Button({ label, onClick }) {
  return (
    <button type="button" className={`button`} onClick={onClick}>
      {label}
    </button>
  );
}
