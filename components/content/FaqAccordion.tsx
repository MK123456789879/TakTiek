"use client";

import { useState } from "react";
import Link from "next/link";

type FaqCategory = { name: string; items: { q: string; a: string }[] };

export function FaqAccordion({
  categories,
  cta,
}: {
  categories: FaqCategory[];
  cta: string;
}) {
  const [openKey, setOpenKey] = useState<string | null>("0-0");

  return (
    <>
      {categories.map((cat, ci) => (
        <div key={cat.name} className="mb-10">
          <h2 className="font-display text-xl font-bold text-purple mb-4">{cat.name}</h2>
          <div className="space-y-2">
            {cat.items.map((item, ii) => {
              const key = `${ci}-${ii}`;
              const isOpen = openKey === key;
              return (
                <div
                  key={key}
                  className="border border-[var(--tt-border)] rounded-[var(--radius-md)] overflow-hidden bg-white"
                >
                  <button
                    type="button"
                    className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center gap-4 hover:bg-cream/50"
                    aria-expanded={isOpen}
                    onClick={() => setOpenKey(isOpen ? null : key)}
                  >
                    {item.q}
                    <span className="text-purple shrink-0">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 text-ink-soft text-sm leading-relaxed border-t border-[var(--tt-border)] pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <p className="mt-8">
        <Link href="mailto:peergrouptaktiek@gmail.com" className="text-purple font-semibold hover:underline">
          {cta}
        </Link>
      </p>
    </>
  );
}
