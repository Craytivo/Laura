import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Card, CardBody } from "@heroui/react";
import { Button } from "./Button";
import { Pill } from "./ui/Pill";
import { Eyebrow } from "./ui/Eyebrow";

export function Hero({image,service,business,onBook,onNavigate}){
 return <section id="home" className="hero">
  <div className="hero-copy">
   <div className="hero-monogram" aria-hidden="true">RU</div>
   <div className="hero-kicker"><Pill>Private Studio</Pill><span>EDMONTON · SUGARING</span></div>
   <Eyebrow>{business.heroEyebrow}</Eyebrow>
   <h1>Smooth skin.<br/><em>Simple.</em></h1>
   <p className="hero-text">{business.description}</p>
   <Card className="hero-offer" shadow="none">
    <CardBody className="hero-offer-body">
     <div className="hero-offer-price"><strong>{service.price}</strong><span>Starting with</span></div>
     <div className="hero-offer-service"><b>{service.name}</b><span>{service.duration}</span></div>
     <Button onClick={onBook} className="hero-offer-button">Book <ArrowRight size={15}/></Button>
    </CardBody>
   </Card>
   <div className="hero-actions">
    <Button onClick={onBook}>Book your {service.name} <ArrowRight size={17}/></Button>
    <button className="text-button" onClick={()=>onNavigate("services")}>View all services <ArrowRight size={14}/></button>
   </div>
   <div className="hero-trust" aria-label="RU Sugaring trust points">
    {business.trust.map(item=><span key={item}><Check size={14}/> {item}</span>)}
   </div>
  </div>
  <div className="hero-art" aria-hidden="true">
   <div className="hero-art-frame"><div className="hero-art-inner">
     <div className="hero-art-copy"><span>THE RU EXPERIENCE</span><strong>Private.<br/><em>Personal.</em></strong><small>EDMONTON</small></div>
     <div className="hero-art-orbit"><span>RU</span></div>
   </div></div>
   <div className="hero-art-note">SUGARING / PRIVATE / PERSONAL</div>
  </div>
 </section>;
}
