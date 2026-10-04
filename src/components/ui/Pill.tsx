import React from "react";

interface PillProps {
  children: React.ReactNode;
  variant?: "outline" | "dark" | "selected";
  className?: string;
}

export function Pill({ children, variant = "outline", className = "" }: PillProps): React.ReactElement {
  return <span className={"pill pill--" + variant + " " + className}>{children}</span>;
}
