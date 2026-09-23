import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./Button";
export function Loyalty({ service,onSelect }){return <section id="loyalty" className="loyalty" data-reveal><div className="loyalty-icon"><Sparkles size={26}/></div><p className="eyebrow">RU LOYALTY</p><h2>Come back.<br /><em>Save more.</em></h2><p>Complete 5 sessions with RU Sugaring and receive 10% off your services.</p><Button variant="light" onClick={()=>onSelect(service)}>Start with a {service.name} <ArrowRight size={17}/></Button></section>}
