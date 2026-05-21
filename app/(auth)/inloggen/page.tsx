"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function InloggenPage() {
  const t = useTranslations("portal.login");
  const router = useRouter();

  return (
    <SiteShell navVariant="minimal" footerVariant="short">
      <section className="py-16 md:py-24">
        <Container className="max-w-md mx-auto">
          <div className="bg-white rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-md)] border border-[var(--tt-border)]">
            <h1 className="font-display text-2xl font-bold mb-2">{t("heading")}</h1>
            <p className="text-ink-soft text-sm mb-8">{t("intro")}</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">{t("email_label")}</label>
                <input type="email" className="w-full px-4 py-3 border rounded-[var(--radius-sm)]" disabled />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t("password_label")}</label>
                <input type="password" className="w-full px-4 py-3 border rounded-[var(--radius-sm)]" disabled />
              </div>
              <button type="submit" className="w-full py-3 bg-ink/20 text-ink-muted rounded-full cursor-not-allowed" disabled>
                {t("login_btn")}
              </button>
            </form>
            <p className="text-center text-ink-muted text-sm my-4">{t("or")}</p>
            <button type="button" className="w-full py-3 border rounded-full text-ink-soft cursor-not-allowed" disabled>
              {t("google_btn")}
            </button>
            <p className="mt-4 text-center">
              <Link href="/coming-soon" className="text-sm text-purple hover:underline">
                {t("forgot")}
              </Link>
            </p>
            <div className="mt-8 pt-8 border-t border-[var(--tt-border)]">
              <button
                type="button"
                onClick={() => router.push("/portal")}
                className="w-full py-3 bg-coral text-white font-semibold rounded-full hover:opacity-90 transition"
              >
                {t("demo_btn")}
              </button>
            </div>
            <p className="text-xs text-ink-muted mt-6 text-center">{t("privacy_note")}</p>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
