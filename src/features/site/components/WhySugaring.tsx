import React from "react";
import type { WhyFeature } from "../../../types";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { SectionIndex } from "../../../components/ui/SectionIndex";

interface WhySugaringProps { features: readonly WhyFeature[]; story: readonly string[]; }

export function WhySugaring({ features, story }: WhySugaringProps): React.ReactElement {
  return (
    <section id="why" className="dark-section why-section" data-reveal><SectionIndex number="03" label="MY WHY" />
      <SectionHeading eyebrow="A personal approach" dark><h2>My why.<br /><em>With care.</em></h2></SectionHeading>
      <div className="why-story">
        <div className="why-story-heading"><span>PERSONAL NOTE</span><h3>Living with HS<br /><em>changed how I care.</em></h3></div>
        <div className="why-story-copy">
          <div className="why-story-paragraphs">{story.slice(0, -1).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          <p className="why-story-note">{story[story.length - 1]}</p>
        </div>
      </div>
      <div className="feature-grid">{features.map((feature, index) => <div key={feature.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{feature.title}</h3><p>{feature.description}</p></div>)}</div>
    </section>
  );
}
