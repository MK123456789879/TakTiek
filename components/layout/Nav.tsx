"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/Logo";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Container } from "./Container";

type NavProps = {
  variant?: "public" | "minimal";
};

export function Nav({ variant = "public" }: NavProps) {
  const t = useTranslations("global");

  if (variant === "minimal") {
    return (
      <nav className="sticky top-0 z-50 bg-cream/92 backdrop-blur border-b border-[var(--tt-border)]">
        <Container className="py-4 flex justify-center">
          <Link href="/" aria-label="TakTiek home">
            <Logo />
          </Link>
        </Container>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-cream/92 backdrop-blur border-b border-[var(--tt-border)]">
      <Container className="py-4 flex items-center justify-between gap-4 flex-wrap">
        <Link href="/" aria-label="TakTiek home">
          <Logo />
        </Link>
        <ul className="hidden lg:flex gap-8 list-none m-0 p-0">
          <li>
            <Link href="/over" className="text-ink-soft font-medium hover:text-purple text-[15px]">
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <Link href="/team" className="text-ink-soft font-medium hover:text-purple text-[15px]">
              {t("nav.team")}
            </Link>
          </li>
          <li>
            <Link href="/aanpak" className="text-ink-soft font-medium hover:text-purple text-[15px]">
              {t("nav.approach")}
            </Link>
          </li>
          <li>
            <Link href="/vertrouwen" className="text-ink-soft font-medium hover:text-purple text-[15px]">
              {t("nav.trust")}
            </Link>
          </li>
          <li>
            <Link href="/vragen" className="text-ink-soft font-medium hover:text-purple text-[15px]">
              {t("nav.faq")}
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <Link
            href="/inloggen"
            className="text-ink-soft font-medium hover:text-purple text-sm hidden sm:inline"
          >
            {t("nav.login")}
          </Link>
          <Link
            href="/aanmelden"
            className="bg-coral text-white font-semibold rounded-full px-5 py-2.5 text-sm shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-coral)] hover:-translate-y-0.5 transition"
          >
            {t("nav.signup")}
          </Link>
        </div>
      </Container>
    </nav>
  );
}
