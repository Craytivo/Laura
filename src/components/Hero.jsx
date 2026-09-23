import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "./Button";

export function Hero({ image, service, onBook, onNavigate }) {
  return (
    <section id="home" className="hero" data-reveal>
      <div className="hero-copy">
        <p className="eyebrow">EDMONTON · HOME-BASED SUGARING</p>
        <h1>Smooth skin.<br /><em>Simple.</em></h1>
        <p className="hero-text">A private sugaring studio in Edmonton focused on comfortable appointments, thoughtful service, and beautifully smooth results.</p>
        <div className="hero-offer"><strong>{service.price}</strong><span>{service.name} · {service.duration}</span></div>
        <div className="hero-actions">
          <Button onClick={onBook}>Book your {service.name} <ArrowRight size={17}/></Button>
          <button className="text-button" onClick={() => onNavigate("services")}>View all services</button>
        </div>
        <div className="hero-trust"><span><Check size={13}/> Private studio</span><span><Check size={13}/> Clear pricing</span><span><Check size={13}/> Online booking</span></div>
      </div>
      <div className="hero-art">
        <div className="hero-art-index">01 <span>THE STUDIO</span></div>
        <div className="hero-art-frame">
          <img className="real-image hero-photo" src={image.src} alt={image.alt} fetchPriority="high" loading="eager" decoding="async" />
          <div className="hero-image-label">RU SUGARING · EDMONTON</div>
        </div>
        <div className="hero-art-note">PRIVATE / PERSONAL / EDMONTON</div>
      </div>
    </section>
  );
}
