import React from "react";
import type { WhyFeature } from "../../../types";
import { SectionHeading } from "../../../components/ui/SectionHeading";

interface WhySugaringProps { features: readonly WhyFeature[]; story: readonly string[]; }

export function WhySugaring({ features, story }: WhySugaringProps): React.ReactElement {
  return (
    <section id="why" className="dark-section why-section" data-reveal>
      <SectionHeading eyebrow="My why" dark><h2>My why.<br /><em>With care.</em></h2></SectionHeading>
      <div className="why-story">
        <div className="why-story-heading"><span>PERSONAL NOTE</span><h3>Living with HS<br /><em>changed how I care.</em></h3></div>
        <div className="why-story-copy">{story.map((paragraph, index) => <p className={index === story.length - 1 ? "why-story-note" : ""} key={paragraph}>{paragraph}</p>)}</div>
      </div>
      <div className="feature-grid">{features.map((feature, index) => <div key={feature.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{feature.title}</h3><p>{feature.description}</p></div>)}</div>
    </section>
  );
}
