"use client";

import Image from "next/image";
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
              {t("title")}
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
                href="/over"
                className="text-ink font-semibold underline underline-offset-4 decoration-2 hover:text-purple"
              >
                {t("cta_secondary")}
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] max-h-[500px] w-full rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-md)]">
            <Image
              src="/images/home/img1.png"
              alt={t("image_alt")}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
