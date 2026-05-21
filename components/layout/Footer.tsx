"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/Logo";
import { Container } from "./Container";

type FooterProps = {
  variant?: "full" | "short";
};

export function Footer({ variant = "full" }: FooterProps) {
  const t = useTranslations("global.footer");
  const nav = useTranslations("global.nav");

  return (
    <footer className="bg-ink text-white/90">
      <Container className="py-14">
        {variant === "full" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Logo className="brightness-0 invert opacity-90" height={32} />
              <p className="mt-4 text-sm text-white/70 max-w-xs">{t("tagline")}</p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-3">{t("site_heading")}</h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/over" className="text-white/70 hover:text-white">{nav("about")}</Link>
                <Link href="/team" className="text-white/70 hover:text-white">{nav("team")}</Link>
                <Link href="/aanpak" className="text-white/70 hover:text-white">{nav("approach")}</Link>
                <Link href="/vragen" className="text-white/70 hover:text-white">{nav("faq")}</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-3">{t("privacy_heading")}</h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/vertrouwen" className="text-white/70 hover:text-white">{t("trust_link")}</Link>
                <Link href="/privacyverklaring" className="text-white/70 hover:text-white">{t("privacy_link")}</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-3">{t("contact_heading")}</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="mailto:peergrouptaktiek@gmail.com" className="text-white/70 hover:text-white">
                  {t("contact_email")}
                </a>
                <a
                  href="https://www.facebook.com/groups/taktiek"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  {t("contact_fb")}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 text-sm text-white/70">
            <Link href="/vertrouwen" className="hover:text-white">{t("trust_link")}</Link>
            <Link href="/privacyverklaring" className="hover:text-white">{t("privacy_link")}</Link>
            <a href="mailto:peergrouptaktiek@gmail.com" className="hover:text-white">{t("contact_email")}</a>
          </div>
        )}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between gap-4 text-sm text-white/50">
          <span>{t("copyright")}</span>
          {variant === "full" && (
            <p className="max-w-2xl text-white/60 leading-relaxed">{t("origin_note")}</p>
          )}
        </div>
      </Container>
    </footer>
  );
}
