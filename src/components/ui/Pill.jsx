import React from "react";

export function Pill({ children, variant = "outline", className = "" }) {
  return <span className={"pill pill--" + variant + " " + className}>{children}</span>;
}
