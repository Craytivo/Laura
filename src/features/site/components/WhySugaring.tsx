import React from "react";
import type { WhyFeature } from "../../../types";
import { SectionHeading } from "../../../components/ui/SectionHeading";

interface WhySugaringProps { features: readonly WhyFeature[]; }

export function WhySugaring({ features }: WhySugaringProps): React.ReactElement {
  return (
    <section id="why" className="dark-section" data-reveal>
      <SectionHeading eyebrow="Why Sugaring" dark><h2>A gentler approach<br />to hair removal.</h2></SectionHeading>
      <div className="feature-grid">{features.map((feature, index) => <div key={feature.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{feature.title}</h3><p>{feature.description}</p></div>)}</div>
    </section>
  );
}