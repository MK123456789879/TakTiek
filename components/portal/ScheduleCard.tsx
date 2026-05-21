"use client";

import { Tag } from "@/components/ui/Tag";
import type { MockSession } from "@/lib/mock-data";
import { isChildEnrolledForSession } from "@/lib/portal-store";
import { usePortalStore } from "@/lib/use-portal-store";

const statusMap = {
  confirmed: { label: "Bevestigd", color: "lime" as const },
  pending: { label: "Onder voorbehoud", color: "coral" as const },
  cancelled: { label: "Afgelast", color: "teal" as const },
};

export function ScheduleCard({
  session,
  statusLabels,
  enrolledLabel,
}: {
  session: MockSession;
  statusLabels: { confirmed: string; pending: string; cancelled: string };
  enrolledLabel?: string;
}) {
  usePortalStore();
  const status = statusMap[session.status];
  const label =
    session.status === "confirmed"
      ? statusLabels.confirmed
      : session.status === "pending"
        ? statusLabels.pending
        : statusLabels.cancelled;
  const enrolled = isChildEnrolledForSession(session.id);

  return (
    <article className="p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--tt-border)] border-l-4 border-l-teal">
      <div className="flex flex-wrap justify-between gap-2 mb-2">
        <time className="font-display font-bold text-lg">{session.dateLabel}</time>
        <div className="flex flex-wrap gap-2">
          {enrolled && enrolledLabel && <Tag color="lime">{enrolledLabel}</Tag>}
          <Tag color={status.color}>{label}</Tag>
        </div>
      </div>
      <h3 className="font-display font-semibold text-xl mb-2">{session.theme}</h3>
      <p className="text-sm text-ink-soft">{session.location}</p>
      {session.notes && <p className="text-sm text-ink-muted italic mt-2">{session.notes}</p>}
    </article>
  );
}
