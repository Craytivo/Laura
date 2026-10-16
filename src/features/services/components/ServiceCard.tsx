import React from "react";
import type { Service } from "../../../types";

export function ServiceCard({ service, index, selected, onSelect }: { service: Service; index: number; selected: Service | null; onSelect: (service: Service) => void }): React.ReactElement {
  const isSelected = selected?.id === service.id;

  return (
    <article className={["service-card", service.featured ? "featured" : "", isSelected ? "selected" : ""].filter(Boolean).join(" ")}>
      <button className="service-select-area" type="button" onClick={() => onSelect(service)} aria-expanded={isSelected} aria-label={(isSelected ? "Collapse details for " : "View details for ") + service.name}>
        <div className="service-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
        <div className="service-main">
          <div className="service-title"><h3>{service.name}</h3><strong>{service.price}</strong></div>
          <div className="service-duration">{service.duration}</div>
          <p>{service.description}</p>
          {isSelected && <div className="service-expanded"><p>Selected - continue to booking when you're ready.</p></div>}
        </div>
      </button>
      <div className="service-meta">
        {service.badge && <span className="popular">{service.badge}</span>}
        <span className="service-select" aria-hidden="true">{isSelected ? "Selected" : "Details"}</span>
      </div>
    </article>
  );
}
