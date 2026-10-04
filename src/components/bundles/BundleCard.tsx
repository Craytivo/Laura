import React from "react";
import { ArrowUpRight } from "lucide-react";
import type { Bundle } from "../../types";

interface BundleCardProps {
  bundle: Bundle;
  bookingUrl: string;
}

export function BundleCard({ bundle, bookingUrl }: BundleCardProps): React.ReactElement {
  return (
    <article className="bundle-card">
      <div className="bundle-copy">
        <span className="bundle-label">BUNDLE</span>
        <h3>{bundle.name}</h3>
        <p>{bundle.description}</p>
      </div>
      <div className="bundle-price">
        <div><strong>{bundle.price}</strong><span>{bundle.duration}</span></div>
        <a className="bundle-book-link" href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label={"Book " + bundle.name}>
          Book <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}
