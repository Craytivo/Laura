import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../../../components/Button";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function Services({ services, selected, onSelect, bookingUrl }) {
  const categories = [...new Set(services.map(service => service.category))];

  return (
    <section id="services" className="section services" data-reveal data-story-section>
      <span className="section-marker" aria-hidden="true">03 / SERVICE MENU</span>
      <SectionHeading eyebrow="Choose your service" description="Select a service, then book your time directly through RU's Acuity schedule."><h2>Pick your<br/><em>smooth.</em></h2></SectionHeading>
      <div className="service-list">
        {categories.map((category, categoryIndex) => (
          <div className="service-category" key={category}>
            <div className="service-category-heading"><span>{String(categoryIndex + 1).padStart(2, "0")}</span><h3>{category}</h3></div>
            {services.filter(service => service.category === category).map(service => <ServiceCard key={service.id} service={service} index={services.indexOf(service)} selected={selected} onSelect={onSelect} />)}
          </div>
        ))}
      </div>
      <div className={"service-book-row" + (selected ? " has-selection" : "")}>
        {selected ? <><div className="service-selection-summary"><span>Selected service</span><strong>{selected.name}</strong><small>{selected.price} - {selected.duration}</small></div><Button as="a" href={bookingUrl} target="_blank" rel="noopener noreferrer">Book {selected.name} <ArrowUpRight size={15}/></Button></> : <span>SELECT A SERVICE TO BEGIN</span>}
      </div>
      <div className="service-note"><span>TAKE YOUR TIME</span><em>Every appointment is personal.</em></div>
    </section>
  );
}
