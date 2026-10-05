import React from "react";
import type { StorySectionId } from "../hooks/useScrollStory";

const SECTIONS: readonly { id: StorySectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "signature", label: "Signature" },
  { id: "why", label: "Why sugaring" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "bundles", label: "Bundles" },
  { id: "faq", label: "FAQ" },
  { id: "book", label: "Book" }
];

interface SectionProgressProps {
  activeSection: StorySectionId;
  onNavigate: (id: string) => void;
}

export function SectionProgress({ activeSection, onNavigate }: SectionProgressProps): React.ReactElement {
  const index = Math.max(0, SECTIONS.findIndex(section => section.id === activeSection));

  return (
    <div className="section-progress" aria-label="Page progress">
      <button type="button" className="section-progress-mark" onClick={() => onNavigate("home")} aria-label="Back to top">RU</button>
      <div className="section-progress-track" aria-hidden="true">
        {SECTIONS.map((section, sectionIndex) => (
          <button
            key={section.id}
            type="button"
            className={section.id === activeSection ? "is-active" : ""}
            aria-label={`Go to ${section.label}`}
            aria-current={section.id === activeSection ? "step" : undefined}
            onClick={() => onNavigate(section.id)}
          >
            <span />
          </button>
        ))}
      </div>
      <span className="section-progress-count">{String(index + 1).padStart(2, "0")} / 08</span>
    </div>
  );
}
