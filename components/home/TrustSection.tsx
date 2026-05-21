"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/content/Eyebrow";
import { TrustItem } from "@/components/content/TrustItem";

export function TrustSection() {
  const t = useTranslations("home.trust");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <Section id="trust" background="cream">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Eyebrow color="purple">{t("eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{t("heading")}</h2>
            <p className="text-ink-soft mb-4">{t("body1")}</p>
            <p className="text-ink-soft mb-6">{t("body2")}</p>
            <Link href="/privacyverklaring" className="text-purple font-semibold hover:underline">
              {t("link")}
            </Link>
          </div>
          <ul className="list-none m-0 p-0">
            {items.map((item, i) => (
              <TrustItem key={item.title} title={item.title} body={item.body} index={i} />
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
