import React from "react";
import type { SiteConfig } from "../types";

interface FooterProps {
  business: SiteConfig;
  onNavigate: (id: string) => void;
}

export function Footer({ business, onNavigate }: FooterProps): React.ReactElement {
  return (
    <footer>
      <div className="footer-brand">{business.shortName}<span>SUGARING</span></div>
      <p>{business.footer}</p>
      <div className="footer-links">
        <button type="button" onClick={() => onNavigate("services")}>Services</button>
        <button type="button" onClick={() => onNavigate("faq")}>FAQ</button>
        <button type="button" onClick={() => onNavigate("book")}>Book</button>
      </div>
      <small>© {new Date().getFullYear()} {business.name}</small>
    </footer>
  );
}
