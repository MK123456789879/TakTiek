"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";

export function HomeMidImage() {
  const t = useTranslations("home.how_we_work");

  return (
    <section className="pb-16 md:pb-20">
      <Container>
        <div className="relative aspect-[4/3] w-full rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-md)]">
          <Image
            src="/images/home/img2.png"
            alt={t("image_alt")}
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
