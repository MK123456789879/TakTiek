import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/content/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SignupForm } from "@/components/signup/SignupForm";

export const metadata = { title: "Aanmelden" };

export default async function AanmeldenPage() {
  const t = await getTranslations("signup");

  return (
    <>
      <Hero eyebrow={t("hero.eyebrow")} title={t("hero.title")}>
        <p className="text-ink-soft text-lg mt-6">{t("hero.intro")}</p>
      </Hero>
      <Section>
        <Container>
          <div className="mb-8 p-4 rounded-[var(--radius-md)] bg-teal/10 border border-teal/20 text-sm text-ink-soft max-w-2xl">
            {t("privacy_bar")}{" "}
            <Link href="/vertrouwen" className="text-purple font-semibold hover:underline">
              {t("privacy_link")}
            </Link>
          </div>
          <SignupForm />
        </Container>
      </Section>
    </>
  );
}
