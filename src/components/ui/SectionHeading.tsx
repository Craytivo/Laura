import React from "react";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  dark?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, children, description, dark = false, className = "" }: SectionHeadingProps): React.ReactElement {
  return (
    <div className={"section-heading " + (dark ? "" : "light") + " " + className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      {children}
      {description && <p className="section-lede">{description}</p>}
    </div>
  );
}
