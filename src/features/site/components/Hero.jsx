import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Card, CardBody } from "@heroui/react";
import { Button } from "../../../components/ui/Button";
import { Pill } from "../../../components/ui/Pill";
import { Eyebrow } from "../../../components/ui/Eyebrow";
import { ResponsiveImage } from "../../../components/ui/ResponsiveImage";

export function Hero({ image, service, business, onBook, onNavigate }) {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <img className="ru-monogram ru-monogram-hero" src="/images/ru-monogram.svg" alt="" aria-hidden="true" />
        <div className="hero-kicker">
          <span className="hero-kicker-number">01</span>
          <Pill>Private Studio</Pill>
          <span>EDMONTON</span>
        </div>
        <Eyebrow>{business.heroEyebrow}</Eyebrow>
        <h1>Smooth skin.<br /><em>Simple.</em></h1>
        <p className="hero-text">{business.description}</p>
        <Card className="hero-offer" shadow="none">
          <CardBody className="hero-offer-body">
            <div className="hero-offer-price"><strong>{service.price}</strong><span>starting at</span></div>
            <div className="hero-offer-service"><b>{service.name}</b><span>{service.duration} · signature service</span></div>
          </CardBody>
        </Card>
        <div className="hero-actions">
          <Button onClick={onBook}>Book your {service.name} <ArrowRight size={17} /></Button>
          <button className="text-button" type="button" onClick={() => onNavigate("services")}>Explore services <ArrowRight size={14} /></button>
        </div>
        <div className="hero-trust" aria-label="RU Sugaring trust points">
          {business.trust.map(item => <span key={item}><Check size={13} /> {item}</span>)}
        </div>
        <button className="hero-scroll" type="button" onClick={() => onNavigate("services")} aria-label="Scroll to services"><span>DISCOVER RU</span><i aria-hidden="true" /></button>
      </div>
      <div className="hero-art">
        <div className="hero-art-frame">
          <ResponsiveImage image={image} className="hero-photo" loading="eager" fetchPriority="high" sizes="(max-width: 800px) 100vw, 42vw" />
          <div className="hero-art-wash" aria-hidden="true" />
          <div className="hero-art-inner">
            <div className="hero-art-copy"><span>THE RU EXPERIENCE</span><strong>Private.<br /><em>Personal.</em></strong><small>EDMONTON</small></div>
            <div className="hero-art-orbit" aria-hidden="true"><span>RU</span></div>
          </div>
        </div>
        <div className="hero-art-note">SUGARING / PRIVATE / PERSONAL</div>
      </div>
    </section>
  );
}
