"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { MockSession } from "@/lib/mock-data";
import { isChildEnrolledForSession } from "@/lib/portal-store";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];

type AgendaCalendarProps = {
  sessions: MockSession[];
  selectedSessionId: string | null;
  onSelectSession: (session: MockSession | null) => void;
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export function AgendaCalendar({
  sessions,
  selectedSessionId,
  onSelectSession,
}: AgendaCalendarProps) {
  const t = useTranslations("portal.agenda");
  const [viewDate, setViewDate] = useState(() => new Date(2026, 4, 1));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const today = "2026-05-21";

  const sessionByDate = useMemo(() => {
    const map = new Map<string, MockSession>();
    sessions.forEach((s) => map.set(s.date, s));
    return map;
  }, [sessions]);

  const monthLabel = viewDate.toLocaleDateString("nl-NL", {
    month: "long",
    year: "numeric",
  });

  const daysInMonth = getDaysInMonth(year, month);
  const startOffset = getFirstDayOfMonth(year, month);
  const cells: (number | null)[] = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  return (
    <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--tt-border)] p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={prevMonth}
          className="px-3 py-1 rounded-full text-sm font-medium text-ink-soft hover:bg-cream"
          aria-label={t("prev_month")}
        >
          ←
        </button>
        <h2 className="font-display font-semibold text-lg capitalize">{monthLabel}</h2>
        <button
          type="button"
          onClick={nextMonth}
          className="px-3 py-1 rounded-full text-sm font-medium text-ink-soft hover:bg-cream"
          aria-label={t("next_month")}
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS.map((d) => (
          <div key={d} className="text-center text-xs font-semibold text-ink-muted py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} className="aspect-square" />;
          }

          const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const session = sessionByDate.get(dateStr);
          const dayOfWeek = new Date(year, month, day).getDay();
          const isFriday = dayOfWeek === 5;
          const isPast = dateStr < today;
          const isSelected = session?.id === selectedSessionId;
          const enrolled = session ? isChildEnrolledForSession(session.id) : false;

          if (!session || !isFriday) {
            return (
              <div
                key={dateStr}
                className="aspect-square flex items-center justify-center text-sm text-ink-muted/40"
              >
                {day}
              </div>
            );
          }

          return (
            <button
              key={dateStr}
              type="button"
              disabled={isPast && session.status === "cancelled"}
              onClick={() => onSelectSession(isSelected ? null : session)}
              className={cn(
                "aspect-square rounded-lg text-sm font-semibold transition flex flex-col items-center justify-center gap-0.5",
                isPast && "opacity-50",
                session.status === "cancelled" && "bg-ink-muted/10 text-ink-muted line-through",
                session.status !== "cancelled" && enrolled && "bg-lime/30 text-ink border-2 border-lime",
                session.status !== "cancelled" &&
                  !enrolled &&
                  "bg-teal/10 text-teal border-2 border-teal/40 hover:bg-teal/20",
                isSelected && "ring-2 ring-purple ring-offset-1"
              )}
              aria-label={session.dateLabel}
              aria-pressed={isSelected}
            >
              <span>{day}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-4 mt-6 text-xs text-ink-soft">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-lime/40 border border-lime" /> {t("legend_enrolled")}
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-teal/10 border border-teal/40" /> {t("legend_available")}
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-ink-muted/10" /> {t("legend_cancelled")}
        </span>
      </div>

      <p className="text-xs text-ink-muted mt-4">{t("select_day_hint")}</p>
    </div>
  );
}
