import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/content/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TeamMemberCard } from "@/components/content/TeamMemberCard";

export const metadata = { title: "Het team" };

export default async function TeamPage() {
  const t = await getTranslations("team");
  const members = t.raw("members") as {
    name: string;
    role: string;
    bio: string;
    image: string;
    color: "teal" | "coral" | "lime" | "purple";
  }[];

  return (
    <>
      <Hero eyebrow={t("hero.eyebrow")} title={t("hero.title")}>
        <p className="text-ink-soft text-lg mt-6">{t("hero.intro")}</p>
      </Hero>
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
          <p className="text-center text-ink-soft mt-12 max-w-xl mx-auto">{t("footer_note")}</p>
        </Container>
      </Section>
    </>
  );
}
