import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./Button";
export function Loyalty({service,loyalty,onSelect}){return <section id="loyalty" className="loyalty" data-reveal><div className="loyalty-icon"><Sparkles size={26}/></div><p className="eyebrow">RU LOYALTY</p><h2>{loyalty.heading[0]}<br/><em>{loyalty.heading[1]}</em></h2><p>{loyalty.body}</p><Button variant="light" onClick={()=>onSelect(service)}>Start with a {service.name} <ArrowRight size={17}/></Button></section>}
