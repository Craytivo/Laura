import React from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "./Button";
export function Header({open,onToggle,onNavigate,onBook,business,service}){
 return <header className="nav">
  <button className="wordmark" onClick={()=>onNavigate("home")} aria-label={business.name+" home"}><strong>{business.shortName}</strong><span>SUGARING</span></button>
  <div id="site-navigation" className={open?"nav-links open":"nav-links"}>
   <div className="nav-mobile-meta"><span>{business.name.toUpperCase()}</span><small>{business.studioLabel.toUpperCase()}</small></div>
   <nav aria-label="Primary navigation">{business.nav.map(label=><button key={label} onClick={()=>onNavigate(label.toLowerCase().split(" ")[0])}>{label}</button>)}<Button className="nav-book" onClick={onBook}>Book now <ArrowRight size={15}/></Button></nav>
   <div className="nav-mobile-book"><span>{service.price} · {service.name}</span><Button onClick={onBook}>Book your appointment <ArrowRight size={15}/></Button></div>
  </div>
  <button className="menu" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} aria-controls="site-navigation" onClick={onToggle}>{open?<X/>:<Menu/>}</button>
 </header>;
}
