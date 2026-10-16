import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/Button";
import { ResponsiveImage } from "../../../components/ui/ResponsiveImage";
import { SectionIndex } from "../../../components/ui/SectionIndex";
export function SignatureService({image,service,business,onBook}){
 return <section id="signature" className="signature" data-reveal><SectionIndex number="02" label="SIGNATURE"/><div className="signature-image"><ResponsiveImage image={image} className="real-image signature-photo" loading="lazy" sizes="(max-width: 800px) 100vw, 50vw"/></div>
  <div className="signature-copy"><div className="signature-kicker"><span>{business.signature.kicker}</span><span>{business.signature.label.toUpperCase()}</span></div><p className="eyebrow">{service.name.toUpperCase()}</p><h2>Smooth,<br/><em>made personal.</em></h2>
   <div className="signature-price"><strong>{service.price}</strong><span>{service.duration.toUpperCase()}</span></div><div className="signature-experience">{business.experience.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div><p className="signature-tagline">{business.tagline}</p>
   <div className="signature-details">{business.signature.details.map(detail=><span key={detail}>{detail.toUpperCase()}</span>)}</div><Button onClick={onBook}>Book {service.name} <ArrowRight size={17}/></Button>
  </div></section>;
}
