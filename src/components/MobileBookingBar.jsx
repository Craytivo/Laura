import React from "react";
import { ArrowRight } from "lucide-react";
export function MobileBookingBar({ selected, fallback, onBook }){const service=selected||fallback;return <div className="mobile-booking-bar"><div><span>{service.name} · Signature</span><strong>{service.price} · {service.duration}</strong></div><button aria-label={`Book a ${service.name} appointment`} onClick={onBook}>Book <ArrowRight size={16}/></button></div>}
