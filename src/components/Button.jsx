import React from "react";

export function Button({ children, variant="dark", className="", onClick, type="button", disabled=false, ...props }) {
  return (
    <button
      type={type}
      className={`button button-${variant} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
