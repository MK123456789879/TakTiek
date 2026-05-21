import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/content/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TrustItem } from "@/components/content/TrustItem";

export const metadata = { title: "Vertrouwen" };

export default async function VertrouwenPage() {
  const t = await getTranslations("vertrouwen");
  const principles = t.raw("principles") as { title: string; body: string }[];

  return (
    <>
      <Hero eyebrow={t("hero.eyebrow")} title={t("hero.title")}>
        <p className="text-ink-soft text-lg mt-6">{t("intro")}</p>
      </Hero>
      <Section>
        <Container className="max-w-2xl">
          <ul className="list-none m-0 p-0">
            {principles.map((p, i) => (
              <TrustItem key={p.title} title={p.title} body={p.body} index={i} />
            ))}
          </ul>
        </Container>
      </Section>
      <Section background="purple">
        <Container className="max-w-3xl space-y-8">
          <p className="text-ink-soft">
            {t("difference")}{" "}
            <Link href="/privacyverklaring" className="text-purple font-semibold hover:underline">
              privacyverklaring
            </Link>
            .
          </p>
          <div>
            <h2 className="font-display text-xl font-bold mb-3">{t("incident.heading")}</h2>
            <p className="text-ink-soft">{t("incident.body")}</p>
          </div>
          <p>
            <a href="mailto:peergrouptaktiek@gmail.com" className="text-purple font-semibold hover:underline">
              {t("contact")}
            </a>
          </p>
        </Container>
      </Section>
    </>
  );
}
