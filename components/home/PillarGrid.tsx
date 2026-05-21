"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/content/Eyebrow";
import { PillarCard } from "./PillarCard";

export function PillarGrid() {
  const t = useTranslations("home.pillars");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <Section background="white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Eyebrow color="coral" className="text-center">
            {t("eyebrow")}
          </Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{t("heading")}</h2>
          <p className="text-ink-soft">{t("subheading")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <PillarCard
              key={item.title}
              num={String(i + 1).padStart(2, "0")}
              title={item.title}
              body={item.body}
              index={i}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
