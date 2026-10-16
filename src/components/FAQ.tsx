import React from "react";
import type { FAQItem as FAQItemData } from "../types";
import { SectionHeading } from "./ui/SectionHeading";
import { FAQItem } from "./faq/FAQItem";
import { SectionIndex } from "./ui/SectionIndex";

interface FAQProps {
  items: readonly FAQItemData[];
}

export function FAQ({ items }: FAQProps): React.ReactElement {
  return (
    <section id="faq" className="section faq" data-reveal><SectionIndex number="07" label="GOOD TO KNOW" />
      <SectionHeading eyebrow="Before your visit" description="A few thoughtful details before your private appointment.">
        <h2>Your questions,<br /><em>answered.</em></h2>
      </SectionHeading>
      <div className="faq-list">
        {items.map(item => (
          <FAQItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}
