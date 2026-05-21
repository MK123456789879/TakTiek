import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ChildProfileForm } from "@/components/portal/ChildProfileForm";

export const metadata = { title: "Mijn kind" };

export default async function MijnKindPage() {
  const t = await getTranslations("portal.child");

  return (
    <Section>
      <Container>
        <h1 className="font-display text-3xl font-bold mb-2">{t("heading")}</h1>
        <p className="text-ink-soft mb-8">{t("intro")}</p>
        <ChildProfileForm />
      </Container>
    </Section>
  );
}
