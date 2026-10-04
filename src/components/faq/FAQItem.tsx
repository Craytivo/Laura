import React from "react";
import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps): React.ReactElement {
  return (
    <details className="faq-item">
      <summary>
        <span>{question}</span>
        <Plus className="faq-plus" size={18} aria-hidden="true" />
      </summary>
      <p>{answer}</p>
    </details>
  );
}
