import { getTranslations } from "next-intl/server";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default async function ComingSoonPage() {
  const t = await getTranslations("coming_soon");

  return (
    <SiteShell>
      <section className="py-24">
        <Container className="text-center max-w-lg mx-auto">
          <h1 className="font-display text-3xl font-bold mb-4">{t("title")}</h1>
          <p className="text-ink-soft mb-8">{t("body")}</p>
          <Button href="/">{t("cta")}</Button>
        </Container>
      </section>
    </SiteShell>
  );
}
