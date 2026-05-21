import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/content/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Onze aanpak" };

export default async function AanpakPage() {
  const t = await getTranslations("approach");

  return (
    <>
      <Hero eyebrow={t("hero.eyebrow")} title={t("hero.title")} />
      <Section>
        <Container className="max-w-3xl space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">{t("rhythm.heading")}</h2>
            <p className="text-ink-soft whitespace-pre-line">{t("rhythm.body")}</p>
          </div>
        </Container>
      </Section>
      {/* PLACEHOLDER: vervangen vóór livegang. Bron: Unsplash */}
      <Section background="white">
        <Container>
          <div className="relative aspect-video rounded-[var(--radius-lg)] overflow-hidden max-w-3xl mx-auto">
            <Image
              src="/images/placeholder/approach-location-01.svg"
              alt="Ruimte in het Keenterhart"
              fill
              className="object-cover"
              sizes="800px"
            />
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="max-w-3xl space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">{t("theme.heading")}</h2>
            <p className="text-ink-soft whitespace-pre-line">{t("theme.body")}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">{t("method.heading")}</h2>
            <p className="text-ink-soft whitespace-pre-line mb-4">{t("method.body")}</p>
            <ul className="list-disc pl-6 space-y-2 text-ink-soft">
              {(t.raw("method.items") as string[]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
      {/* PLACEHOLDER: vervangen vóór livegang. Bron: Unsplash */}
      <Section background="cream">
        <Container>
          <div className="relative aspect-video rounded-[var(--radius-lg)] overflow-hidden max-w-3xl mx-auto">
            <Image
              src="/images/placeholder/approach-session-01.svg"
              alt="Handen die met spelmateriaal werken"
              fill
              className="object-cover"
              sizes="800px"
            />
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="max-w-3xl">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">{t("location.heading")}</h2>
            <p className="text-ink-soft whitespace-pre-line mb-8">{t("location.body")}</p>
            <Button href="/aanmelden">{t("cta")}</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
