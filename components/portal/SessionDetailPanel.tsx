"use client";

import { useTranslations } from "next-intl";
import type { MockSession } from "@/lib/mock-data";
import { isChildEnrolledForSession } from "@/lib/portal-store";
import { Tag } from "@/components/ui/Tag";

type SessionDetailPanelProps = {
  session: MockSession | null;
};

export function SessionDetailPanel({ session }: SessionDetailPanelProps) {
  const t = useTranslations("portal.agenda");

  if (!session) {
    return (
      <div className="p-6 bg-cream rounded-[var(--radius-lg)] border border-[var(--tt-border)] text-ink-soft text-sm">
        {t("select_day_hint")}
      </div>
    );
  }

  const enrolled = isChildEnrolledForSession(session.id);
  const statusKey =
    session.status === "confirmed"
      ? "status_confirmed"
      : session.status === "pending"
        ? "status_pending"
        : "status_cancelled";

  return (
    <article className="p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--tt-border)] border-l-4 border-l-teal">
      <div className="flex flex-wrap gap-2 mb-3">
        <Tag color="teal">{t(statusKey)}</Tag>
        {enrolled && <Tag color="lime">{t("enrolled_badge")}</Tag>}
      </div>
      <time className="font-display font-bold text-lg block mb-2">{session.dateLabel}</time>
      <h3 className="font-display font-semibold text-xl mb-2">{session.theme}</h3>
      <p className="text-sm text-ink-soft">{session.location}</p>
      {session.notes && (
        <p className="text-sm text-ink-muted italic mt-3">{session.notes}</p>
      )}
      {!enrolled && (
        <p className="text-sm text-purple mt-4 font-medium">{t("not_enrolled_hint")}</p>
      )}
    </article>
  );
}
