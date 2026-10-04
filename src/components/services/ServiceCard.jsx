import React from "react";

export function ServiceCard({ service, index, selected, onSelect }) {
  const isSelected = selected?.id === service.id;
  return (
    <article className={"service-card " + (service.featured ? "featured " : "") + (isSelected ? "selected" : "")}>
      <button className="service-select-area" type="button" onClick={() => onSelect(service)} aria-expanded={isSelected}>
        <div className="service-number">{String(index + 1).padStart(2, "0")}</div>
        <div className="service-main">
          <div className="service-title"><h3>{service.name}</h3><strong>{service.price}</strong></div>
          <p>{service.description}</p>
          <small>{service.duration}</small>
          {isSelected && <p className="service-expanded-copy">Selected service.</p>}
        </div>
      </button>
    </article>
  );
}
