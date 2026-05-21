"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/content/Eyebrow";
import { cn } from "@/lib/utils";

export function HowWeWorkSection() {
  const t = useTranslations("home.how_we_work");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <Section background="cream">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Eyebrow color="purple">{t("eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{t("heading")}</h2>
            <p className="text-ink-soft leading-relaxed">{t("intro")}</p>
          </div>
          <ul className="list-none m-0 p-0 space-y-8">
            {items.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <div
                  className={cn(
                    "w-2 h-2 rounded-full shrink-0 mt-2",
                    i === 0 ? "bg-teal" : i === 1 ? "bg-coral" : "bg-lime"
                  )}
                />
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-ink-soft text-sm leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
