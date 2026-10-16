import React from "react";
import { Instagram } from "lucide-react";
import type { SiteConfig } from "../../../types";

interface FooterProps { business: SiteConfig; onNavigate: (id: string) => void; }

export function Footer({ business, onNavigate }: FooterProps): React.ReactElement {
  return (
    <footer>
      <div className="footer-brand">{business.shortName}<span>SUGARING</span></div>
      <p>{business.footer}</p>
      <div className="footer-contact" aria-label="Contact information">
        <a href="tel:+14319967399">+1 431-996-7399</a>
        <a href="mailto:mazvita99@hotmail.com">mazvita99@hotmail.com</a>
        <span>Edgemont, Edmonton, Canada</span>
        <span>Monday–Friday, 4:00–7:00 PM</span>
        <span>Saturday–Sunday, 9:00 AM–6:00 PM</span>
      </div>
      <div className="footer-links">
        <button type="button" onClick={() => onNavigate("services")}>Services</button>
        <button type="button" onClick={() => onNavigate("faq")}>FAQ</button>
        <button type="button" onClick={() => onNavigate("book")}>Book</button>
        <a className="footer-instagram" href="https://www.instagram.com/rusugaring/" target="_blank" rel="noopener noreferrer" aria-label="Follow RU Sugaring on Instagram">
          <Instagram size={15} aria-hidden="true" />
          <span>@rusugaring</span>
        </a>
      </div>
      <small>© {new Date().getFullYear()} {business.name}</small>
    </footer>
  );
}
