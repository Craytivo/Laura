import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "./Button";
import { ResponsiveImage } from "./ResponsiveImage";
export function Hero({image,service,business,onBook,onNavigate}){
 return <section id="home" className="hero" data-reveal><div className="hero-copy">
  <p className="eyebrow">{business.heroEyebrow.toUpperCase()}</p><h1>Smooth skin.<br/><em>Simple.</em></h1><p className="hero-text">{business.description}</p>
  <div className="hero-offer"><strong>{service.price}</strong><span>{service.name} · {service.duration}</span></div>
  <div className="hero-actions"><Button onClick={onBook}>Book your {service.name} <ArrowRight size={17}/></Button><button className="text-button" onClick={()=>onNavigate("services")}>View all services</button></div>
  <div className="hero-trust">{business.trust.map(item=><span key={item}><Check size={13}/> {item}</span>)}</div>
 </div><div className="hero-art"><div className="hero-art-index">01 <span>THE STUDIO</span></div><div className="hero-art-frame"><ResponsiveImage image={image} className="real-image hero-photo" fetchPriority="high" loading="eager" sizes="(max-width: 800px) 100vw, 50vw"/><div className="hero-image-label">RU SUGARING · EDMONTON</div></div><div className="hero-art-note">PRIVATE / PERSONAL / EDMONTON</div></div>
 </section>;
}
