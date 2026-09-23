import React from "react";
import { ChevronRight } from "lucide-react";

export function Services({ services, selected, onSelect }) {
  return <section id="services" className="section services" data-reveal><div className="section-heading light"><p className="eyebrow">SERVICE MENU</p><h2>Pick your<br /><em>smooth.</em></h2><p className="section-lede">Not sure where to start? {services[0].name} is our featured service. Select any service to see it in your booking summary.</p></div><div className="service-list">{services.map((service,i)=><button className={selected?.id===service.id ? "service-card featured selected" : service.featured ? "service-card featured" : "service-card"} key={service.id} onClick={()=>onSelect(service)}><div className="service-number">{String(i+1).padStart(2,"0")}</div><div className="service-main"><div className="service-title"><h3>{service.name}</h3><strong>{service.price}</strong></div><p>{service.description}</p><small>{service.duration}</small></div>{service.badge&&<span className="popular">{service.badge}</span>}<ChevronRight className="service-arrow" size={19}/></button>)}</div></section>;
}
