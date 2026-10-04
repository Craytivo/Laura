import React from "react";
import { ArrowRight } from "lucide-react";
import type { Service } from "../types";

interface MobileBookingBarProps {
  selected: Service | null;
  fallback: Service;
  onBook: () => void;
}

export function MobileBookingBar({ selected, fallback, onBook }: MobileBookingBarProps): React.ReactElement {
  const service = selected ?? fallback;
  return (
    <div className="mobile-booking-bar">
      <div className="mobile-booking-copy">
        <span>{service.name} · Signature</span>
        <strong>{service.price} · {service.duration}</strong>
        <small>Private · Online booking</small>
      </div>
      <button type="button" aria-label={"Book a " + service.name + " appointment"} onClick={onBook}>
        Book now <ArrowRight size={16} />
      </button>
    </div>
  );
}
