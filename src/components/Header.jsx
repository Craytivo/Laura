import React from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "./Button";

export function Header({ open, onToggle, onNavigate, onBook, brazilian }) {
  return (
    <header className="nav">
      <button className="wordmark" onClick={() => onNavigate("home")} aria-label="RU Sugaring home">
        <strong>RU</strong><span>SUGARING</span>
      </button>
      <div className={open ? "nav-links open" : "nav-links"}>
        <div className="nav-mobile-meta"><span>RU SUGARING</span><small>EDMONTON · PRIVATE STUDIO</small></div>
        <nav aria-label="Primary navigation">
          <button onClick={() => onNavigate("services")}>Services</button>
          <button onClick={() => onNavigate("why")}>Why sugaring</button>
          <button onClick={() => onNavigate("loyalty")}>Loyalty</button>
          <button onClick={() => onNavigate("faq")}>FAQ</button>
          <Button className="nav-book" onClick={onBook}>Book now <ArrowRight size={15}/></Button>
        </nav>
        <div className="nav-mobile-book"><span>{brazilian.price} · {brazilian.name}</span><Button onClick={onBook}>Book your appointment <ArrowRight size={15}/></Button></div>
      </div>
      <button className="menu" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="site-navigation" onClick={onToggle}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
