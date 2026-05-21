"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";

export function PracticalStrip() {
  const t = useTranslations("home.practical_strip");
  const items = t.raw("items") as { label: string; value: string }[];

  return (
    <section className="bg-teal/10 py-12 border-y border-[var(--tt-border)]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.label}>
              <div className="text-xs font-semibold uppercase tracking-wide text-teal mb-1">
                {item.label}
              </div>
              <div className="font-display font-semibold text-lg text-ink">{item.value}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
