import React from "react";

export function Eyebrow({ children, className = "" }) {
  return <p className={"eyebrow " + className}>{children}</p>;
}
