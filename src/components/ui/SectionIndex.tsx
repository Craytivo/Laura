import React from "react";

interface SectionIndexProps { number: string; }

export function SectionIndex({ number }: SectionIndexProps): React.ReactElement {
  return <span className="section-index" aria-hidden="true">{number}</span>;
}
