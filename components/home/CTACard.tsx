"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function CTACard() {
  const t = useTranslations("home.cta_block");
  const tImage = useTranslations("home.how_we_work");

  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-[minmax(0,280px)_1fr] gap-8 lg:gap-10 items-center">
          <div className="relative aspect-[4/3] w-full max-w-[280px] mx-auto lg:mx-0 rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-md)]">
            <Image
              src="/images/home/img2.png"
              alt={tImage("image_alt")}
              fill
              sizes="(max-width: 1024px) 280px, 280px"
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-purple text-white p-10 md:p-14 min-w-0">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-8 left-1/3 w-32 h-32 rounded-full bg-coral/30" />
            <div className="relative z-10 max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{t("heading")}</h2>
              <p className="text-white/85 mb-8">{t("body")}</p>
              <Link
                href="/aanmelden"
                className="inline-block bg-coral text-white font-semibold rounded-full px-8 py-3 shadow-[var(--shadow-coral)] hover:-translate-y-0.5 transition"
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
