import React from "react";
import { ArrowRight } from "lucide-react";
import type { Service } from "../types";
import type { StorySectionId } from "../hooks/useScrollStory";

interface MobileBookingBarProps {
  selected: Service | null;
  fallback: Service;
  activeSection: StorySectionId;
  onBook: () => void;
}

export function MobileBookingBar({ selected, fallback, activeSection, onBook }: MobileBookingBarProps): React.ReactElement {
  const service = selected ?? fallback;
  const action = selected
    ? `Book ${service.name}`
    : activeSection === "services"
      ? "Choose a service"
      : activeSection === "faq"
        ? "Book your appointment"
        : "Book now";

  return (
    <div className={`mobile-booking-bar ${selected ? "has-selection" : ""}`}>
      <div className="mobile-booking-copy">
        <span>{selected ? service.name : activeSection === "services" ? "Choose your service" : "RU Sugaring · Edmonton"}</span>
        <strong>{selected ? `${service.price} · ${service.duration}` : "Private · One-on-one"}</strong>
        <small>{selected ? "Online booking · Acuity" : "Private studio · Online booking"}</small>
      </div>
      <button type="button" aria-label={`${action} appointment`} onClick={onBook}>
        {action} <ArrowRight size={16} />
      </button>
    </div>
  );
}
