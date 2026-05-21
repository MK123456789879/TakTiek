"use client";

import { useState } from "react";

type Section = { id: string; heading: string; body: string };

export function PrivacyContent({
  sections,
  tocLabel,
}: {
  sections: Section[];
  tocLabel: string;
}) {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden mb-8">
        <button
          type="button"
          className="w-full text-left font-semibold px-4 py-3 border rounded-[var(--radius-md)]"
          onClick={() => setTocOpen(!tocOpen)}
        >
          {tocLabel} {tocOpen ? "−" : "+"}
        </button>
        {tocOpen && (
          <nav className="mt-2 p-4 border rounded-[var(--radius-md)] bg-white space-y-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="block text-sm text-purple hover:underline">
                {s.heading}
              </a>
            ))}
          </nav>
        )}
      </div>
      <div className="grid lg:grid-cols-[240px_1fr] gap-12">
        <nav className="hidden lg:block sticky top-24 self-start space-y-2">
          <p className="text-xs font-semibold uppercase text-ink-muted mb-4">{tocLabel}</p>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="block text-sm text-ink-soft hover:text-purple py-1">
              {s.heading}
            </a>
          ))}
        </nav>
        <div className="space-y-12 max-w-3xl">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="font-display text-2xl font-bold mb-4">{s.heading}</h2>
              <p className="text-ink-soft whitespace-pre-line leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
