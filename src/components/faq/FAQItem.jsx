import React from "react";
import { Plus } from "lucide-react";

export function FAQItem({ question, answer }) {
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
