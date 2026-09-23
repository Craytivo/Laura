import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function SignatureService({ image, service, onBook }) {
  return (
    <section className="signature" data-reveal>
      <div className="signature-image"><img className="real-image signature-photo" src={image.src} alt={image.alt} loading="lazy" decoding="async" /></div>
      <div className="signature-copy">
        <div className="signature-kicker"><span>01</span><span>THE RU SIGNATURE</span></div>
        <p className="eyebrow">{service.name.toUpperCase()}</p>
        <h2>Smooth,<br /><em>made personal.</em></h2>
        <div className="signature-price"><strong>{service.price}</strong><span>{service.duration.toUpperCase()}</span></div>
        <p>A private, one-on-one {service.name} appointment designed around comfort, care, and beautifully smooth results.</p>
        <div className="signature-details"><span>PRIVATE STUDIO</span><span>EDMONTON</span><span>ONLINE BOOKING</span></div>
        <Button onClick={onBook}>Book {service.name} <ArrowRight size={17}/></Button>
      </div>
    </section>
  );
}
