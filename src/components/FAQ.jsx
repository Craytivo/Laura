import React from "react";
import { SectionHeading } from "./ui/SectionHeading";

export function FAQ({items}){
  return (
    <section id="faq" className="section faq" data-reveal>
      <SectionHeading eyebrow="Good to know">
        <h2>Your questions,<br/><em>answered.</em></h2>
      </SectionHeading>
      <div className="faq-list">
        {items.map(([q,a])=>(
          <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>
        ))}
      </div>
    </section>
  );
}
