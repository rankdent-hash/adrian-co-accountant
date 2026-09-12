"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export type Faq = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  items: Faq[];
};

export function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category.category}>
          <h3 className="eyebrow mb-4">{category.category}</h3>
          <div className="divide-y divide-line rounded-lg border border-line bg-paper">
            {category.items.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FaqItem({ question, answer }: Faq) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${question.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <div>
      <h4>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-ink hover:text-gold"
        >
          {question}
          <Icon
            name="chevron-down"
            className={`h-5 w-5 shrink-0 text-gold transition-transform duration-200 ease-soft ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h4>
      <div id={panelId} role="region" hidden={!open} className="px-6 pb-5 text-sm leading-relaxed text-slate">
        {answer}
      </div>
    </div>
  );
}
