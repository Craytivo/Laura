import React from "react";
import { ArrowUpRight, Instagram } from "lucide-react";
import type { SiteConfig } from "../../../types";

interface FooterProps { business: SiteConfig; onNavigate: (id: string) => void; }

export function Footer({ business, onNavigate }: FooterProps): React.ReactElement {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-intro">
          <p className="footer-kicker">RU SUGARING / EDMONTON</p>
          <div className="footer-brand">{business.shortName}<span>SUGARING</span></div>
          <h2>Soft skin.<br /><em>Sweet confidence.</em></h2>
          <p className="footer-description">{business.footer}</p>
        </div>

        <div className="footer-column footer-contact" aria-label="Contact information">
          <p className="footer-label">Contact</p>
          <a href="tel:+14319967399">+1 431-996-7399 <ArrowUpRight size={14} aria-hidden="true" /></a>
          <a href="mailto:mazvita99@hotmail.com">mazvita99@hotmail.com <ArrowUpRight size={14} aria-hidden="true" /></a>
          <span>Edgemont, Edmonton, Canada</span>
        </div>

        <div className="footer-column footer-hours">
          <p className="footer-label">Hours</p>
          <span>Monday–Friday</span>
          <strong>4:00–7:00 PM</strong>
          <span>Saturday–Sunday</span>
          <strong>9:00 AM–6:00 PM</strong>
        </div>

        <div className="footer-column footer-links">
          <p className="footer-label">Explore</p>
          <button type="button" onClick={() => onNavigate("services")}>Services</button>
          <button type="button" onClick={() => onNavigate("faq")}>FAQ</button>
          <button type="button" onClick={() => onNavigate("book")}>Book</button>
          <a className="footer-instagram" href="https://www.instagram.com/rusugaring/" target="_blank" rel="noopener noreferrer" aria-label="Follow RU Sugaring on Instagram">
            <Instagram size={15} aria-hidden="true" />
            <span>@rusugaring</span>
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} {business.name}</small>
        <span>Private studio · By appointment</span>
        <button type="button" onClick={() => onNavigate("home")}>Back to top <ArrowUpRight size={14} aria-hidden="true" /></button>
      </div>
    </footer>
  );
}
