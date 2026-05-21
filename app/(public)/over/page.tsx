import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/content/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Over TakTiek" };

export default async function OverPage() {
  const t = await getTranslations("about");

  return (
    <>
      <Hero eyebrow={t("hero.eyebrow")} title={t("hero.title")} />
      <Section>
        <Container className="max-w-3xl space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">{t("story.heading")}</h2>
            <p className="text-ink-soft whitespace-pre-line">{t("story.body")}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">{t("doelstelling.heading")}</h2>
            <p className="text-ink-soft mb-4">{t("doelstelling.body")}</p>
            <ul className="list-disc pl-6 space-y-2 text-ink-soft">
              {(t.raw("doelstelling.points") as string[]).map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
      {/* PLACEHOLDER: vervangen vóór livegang. Bron: Unsplash */}
      <Section background="white">
        <Container>
          <div className="relative aspect-video rounded-[var(--radius-lg)] overflow-hidden">
            <Image
              src="/images/placeholder/over-atmosphere-01.svg"
              alt="Sfeerbeeld van spelmateriaal op tafel"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="max-w-3xl space-y-8">
          <div className="p-8 rounded-[var(--radius-lg)] bg-coral/10 border border-coral/20">
            <h2 className="font-display text-2xl font-bold mb-4">{t("not_for.heading")}</h2>
            <p className="text-ink-soft mb-4">{t("not_for.body")}</p>
            <ul className="list-disc pl-6 space-y-2 text-ink-soft">
              {(t.raw("not_for.items") as string[]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">{t("organization.heading")}</h2>
            <p className="text-ink-soft whitespace-pre-line">{t("organization.body")}</p>
          </div>
          <Button href="/team" variant="secondary">
            {t("cta_team")}
          </Button>
        </Container>
      </Section>
    </>
  );
}
