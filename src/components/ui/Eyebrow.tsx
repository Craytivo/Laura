import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps): React.ReactElement {
  return <p className={"eyebrow " + className}>{children}</p>;
}
