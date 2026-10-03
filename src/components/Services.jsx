import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./Button";

const BOOKING_URL="https://rusugar.as.me/schedule/36a17782?utm_source=website&utm_medium=website&utm_content=book_now";

export function Services({ services, selected, onSelect }) {
  return <section id="services" className="section services" data-reveal>
   <div className="section-heading light"><p className="eyebrow">SERVICE MENU</p><h2>Pick your<br /><em>smooth.</em></h2><p className="section-lede">Choose the service that fits you best, then book directly through RU's Acuity schedule.</p></div>
   <div className="service-list">{services.map((service,i)=>
    <div className={selected?.id===service.id ? "service-card featured selected" : service.featured ? "service-card featured" : "service-card"} key={service.id}>
     <button className="service-select-area" type="button" onClick={()=>onSelect(service)} aria-label={`View ${service.name}`}>
      <div className="service-number">{String(i+1).padStart(2,"0")}</div>
      <div className="service-main"><div className="service-title"><h3>{service.name}</h3><strong>{service.price}</strong></div><p>{service.description}</p><small>{service.duration}</small></div>
     </button>
     <div className="service-meta">{service.badge && <span className="popular">{service.badge}</span>}<Button as="a" href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="service-book-link">Book <ArrowUpRight size={14}/></Button></div>
    </div>)}
   </div>
   <div className="service-note"><span>TAKE YOUR TIME</span><em>Every appointment is personal.</em></div>
  </section>;
}