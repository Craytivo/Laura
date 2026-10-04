import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./Button";
import { SectionHeading } from "./ui/SectionHeading";
import { ServiceCard } from "./services/ServiceCard";

export function Services({ services, selected, onSelect, bookingUrl }) {
  return (
    <section id="services" className="section services" data-reveal>
      <SectionHeading eyebrow="Service Menu" description="Choose your service, then book your time directly through RU's Acuity schedule.">
        <h2>Pick your<br/><em>smooth.</em></h2>
      </SectionHeading>
      <div className="service-list">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} selected={selected} onSelect={onSelect}/>
        ))}
      </div>
      <div className="service-book-row">
        {selected ? (
          <Button as="a" href={bookingUrl} target="_blank" rel="noopener noreferrer">
            Book {selected.name} <ArrowUpRight size={15}/>
          </Button>
        ) : (
          <span>SELECT A SERVICE TO BEGIN</span>
        )}
      </div>
      <div className="service-note"><span>TAKE YOUR TIME</span><em>Every appointment is personal.</em></div>
    </section>
  );
}
