"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { getNextEnrolledSession } from "@/lib/portal-store";
import { usePortalStore } from "@/lib/use-portal-store";

export function DashboardNextSession() {
  usePortalStore();
  const t = useTranslations("portal.dashboard");
  const next = getNextEnrolledSession();

  return (
    <Link
      href="/portal/agenda"
      className="p-6 rounded-[var(--radius-lg)] bg-teal/10 border border-teal/20 hover:shadow-[var(--shadow-md)] transition block"
    >
      <p className="text-xs font-semibold uppercase text-teal mb-1">{t("next_session")}</p>
      {next ? (
        <>
          <p className="font-display font-bold">{next.dateLabel}</p>
          <p className="text-sm text-ink-soft mt-1">{next.theme}</p>
        </>
      ) : (
        <>
          <p className="font-display font-bold text-base">{t("not_enrolled_cta")}</p>
          <p className="text-sm text-purple mt-2">{t("view_all_agenda")} →</p>
        </>
      )}
    </Link>
  );
}
