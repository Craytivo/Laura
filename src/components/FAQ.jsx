import React from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { FAQItem } from "./faq/FAQItem";

export function FAQ({ items }) {
  return (
    <section id="faq" className="section faq" data-reveal>
      <SectionHeading eyebrow="Good to know">
        <h2>Your questions,<br /><em>answered.</em></h2>
      </SectionHeading>
      <div className="faq-list">
        {items.map(([question, answer]) => <FAQItem key={question} question={question} answer={answer} />)}
      </div>
    </section>
  );
}
