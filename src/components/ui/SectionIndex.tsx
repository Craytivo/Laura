import React from "react";

interface SectionIndexProps { number: string; label?: string; }

export function SectionIndex({ number, label }: SectionIndexProps): React.ReactElement {
  return <span className="section-index" aria-hidden="true"><strong>{number}</strong>{label && <span className="section-index-label"> / {label}</span>}</span>;
}
