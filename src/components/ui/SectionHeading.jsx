import React from "react";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({ eyebrow, children, description, dark = false, className = "" }) {
  return (
    <div className={"section-heading " + (dark ? "" : "light") + " " + className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      {children}
      {description && <p className="section-lede">{description}</p>}
    </div>
  );
}
