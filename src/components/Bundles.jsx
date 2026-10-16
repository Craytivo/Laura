import React from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { BundleCard } from "./bundles/BundleCard";
import { SectionIndex } from "./ui/SectionIndex";

export function Bundles({ bundles, bookingUrl }) {
  return (
    <section id="bundles" className="bundles section" data-reveal><SectionIndex number="06" label="BUNDLES" />
      <div className="bundle-intro">
        <SectionHeading eyebrow="Pair and save">
          <h2>More smooth.<br /><em>More value.</em></h2>
        </SectionHeading>
        <p>Pair popular services and save on the combined appointment.</p>
      </div>
      <div className="bundle-list">
        {bundles.map(bundle => <BundleCard key={bundle.id} bundle={bundle} bookingUrl={bookingUrl} />)}
      </div>
    </section>
  );
}
