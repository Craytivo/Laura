import React from "react";

export function ServiceCard({ service, index, selected, onSelect, bookingUrl }) {
  const isSelected = selected?.id === service.id;
  const label = (isSelected ? "Collapse " : "View ") + service.name;

  return (
    <article className={"service-card " + (service.featured ? "featured " : "") + (isSelected ? "selected" : "")}>
      <button className="service-select-area" type="button" onClick={() => onSelect(service)} aria-expanded={isSelected} aria-label={label}>
        <div className="service-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
        <div className="service-main">
          <div className="service-title"><h3>{service.name}</h3><strong>{service.price}</strong></div>
          <p>{service.description}</p>
          <small>{service.duration}</small>
          <div className="service-expanded" aria-hidden={!isSelected}>
            {isSelected && <p>Selected — continue to booking when you're ready.</p>}
          </div>
        </div>
      </button>
      <div className="service-meta">
        {service.badge && <span className="popular">{service.badge}</span>}
        <span className="service-select">{isSelected ? "Selected" : "View"}</span>
        <a className="service-book-link button button-dark" href={bookingUrl} target="_blank" rel="noopener noreferrer">
          Book
        </a>
      </div>
    </article>
  );
}
