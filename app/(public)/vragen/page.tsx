import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/content/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FaqAccordion } from "@/components/content/FaqAccordion";

export const metadata = { title: "Vragen" };

export default async function VragenPage() {
  const t = await getTranslations("faq");
  const categories = t.raw("categories") as {
    name: string;
    items: { q: string; a: string }[];
  }[];

  return (
    <>
      <Hero eyebrow={t("hero.eyebrow")} title={t("hero.title")} />
      <Section>
        <Container className="max-w-3xl">
          <FaqAccordion categories={categories} cta={t("cta")} />
        </Container>
      </Section>
    </>
  );
}
