import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/content/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PrivacyContent } from "@/components/content/PrivacyContent";

export const metadata = { title: "Privacyverklaring" };

export default async function PrivacyPage() {
  const t = await getTranslations("privacy");
  const sections = t.raw("sections") as { id: string; heading: string; body: string }[];

  return (
    <>
      <Hero eyebrow={t("hero.eyebrow")} title={t("hero.title")}>
        <p className="text-ink-muted text-sm mt-4">{t("hero.last_updated")}</p>
        <p className="text-ink-soft mt-4">{t("intro")}</p>
      </Hero>
      <Section>
        <Container>
          <PrivacyContent sections={sections} tocLabel={t("toc")} />
        </Container>
      </Section>
    </>
  );
}
