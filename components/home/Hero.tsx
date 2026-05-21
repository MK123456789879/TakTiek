"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/content/Eyebrow";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6">
              {t("title_before")}
              <span className="text-coral">{t("title_accent")}</span>
            </h1>
            <p className="text-ink-soft text-lg mb-8 max-w-lg">{t("subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/aanmelden"
                className="bg-coral text-white font-semibold rounded-full px-6 py-3 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-coral)] hover:-translate-y-0.5 transition"
              >
                {t("cta_primary")}
              </Link>
              <Link
                href="/aanpak"
                className="text-ink font-semibold underline underline-offset-4 decoration-2 hover:text-purple"
              >
                {t("cta_secondary")}
              </Link>
            </div>
          </div>
          <div className="relative h-[320px] md:h-[400px]" aria-hidden="true">
            <div className="absolute top-8 left-8 w-24 h-24 rounded-3xl bg-teal/30 rotate-12" />
            <div className="absolute top-20 right-12 w-32 h-32 rounded-full bg-lime/40" />
            <div className="absolute bottom-16 left-16 w-20 h-20 rounded-2xl bg-coral/25 -rotate-6" />
            <div className="absolute bottom-8 right-8 w-28 h-28 rounded-3xl bg-purple/20 rotate-45" />
            <div className="absolute top-12 right-24 bg-white rounded-2xl px-4 py-3 shadow-[var(--shadow-md)] text-sm font-medium max-w-[160px]">
              {t("quote1")}
            </div>
            <div className="absolute top-1/2 left-4 bg-white rounded-2xl px-4 py-3 shadow-[var(--shadow-md)] text-sm font-medium max-w-[180px] -translate-y-1/2">
              {t("quote2")}
            </div>
            <div className="absolute bottom-24 right-20 bg-white rounded-2xl px-4 py-3 shadow-[var(--shadow-md)] text-sm font-medium max-w-[170px]">
              {t("quote3")}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
