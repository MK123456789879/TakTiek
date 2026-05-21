"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/Logo";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

const links = [
  { href: "/portal", key: "dashboard" },
  { href: "/portal/agenda", key: "agenda" },
  { href: "/portal/mededelingen", key: "announcements" },
  { href: "/portal/mijn-kind", key: "child" },
  { href: "/portal/instellingen", key: "settings" },
] as const;

export function PortalNav() {
  const t = useTranslations("portal.nav");
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[var(--tt-border)]">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link href="/portal">
            <Logo height={32} />
          </Link>
          <ul className="flex flex-wrap gap-4 list-none m-0 p-0">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium",
                    pathname === link.href
                      ? "text-purple"
                      : "text-ink-soft hover:text-purple"
                  )}
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="text-sm font-medium text-ink-soft hover:text-coral"
          >
            {t("logout")}
          </button>
        </div>
      </Container>
    </nav>
  );
}
