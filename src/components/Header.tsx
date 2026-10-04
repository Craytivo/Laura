import React from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import type { Service, SiteConfig } from "../types";
import { Button } from "./Button";

interface HeaderProps {
  open: boolean;
  onToggle: () => void;
  onNavigate: (id: string) => void;
  onBook: () => void;
  business: SiteConfig;
  service: Service;
}

export function Header({ open, onToggle, onNavigate, onBook, business, service }: HeaderProps): React.ReactElement {
  return (
    <header className="nav">
      <button className="wordmark" type="button" onClick={() => onNavigate("home")} aria-label={business.name + " home"}>
        <strong>{business.shortName}</strong><span>SUGARING</span>
      </button>
      <div id="site-navigation" className={open ? "nav-links open" : "nav-links"}>
        <div className="nav-mobile-meta">
          <span>{business.name.toUpperCase()}</span>
          <small>{business.studioLabel.toUpperCase()}</small>
        </div>
        <nav aria-label="Primary navigation">
          {business.nav.map(item => (
            <button key={item.id} type="button" onClick={() => onNavigate(item.id)}>{item.label}</button>
          ))}
          <Button className="nav-book" onClick={onBook}>Book appointment <ArrowRight size={15} /></Button>
        </nav>
        <div className="nav-mobile-book">
          <span>{service.price} · {service.name}</span>
          <Button onClick={onBook}>Book your appointment <ArrowRight size={15} /></Button>
        </div>
      </div>
      <button className="menu" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="site-navigation" onClick={onToggle}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
