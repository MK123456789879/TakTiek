"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AgendaCalendar } from "@/components/portal/AgendaCalendar";
import { SeriesEnrollmentCard } from "@/components/portal/SeriesEnrollmentCard";
import { SessionDetailPanel } from "@/components/portal/SessionDetailPanel";
import { ScheduleCard } from "@/components/portal/ScheduleCard";
import {
  getSeriesById,
  mockSessions,
  mockSeries,
  type MockSession,
} from "@/lib/mock-data";
import { getActiveSeriesForEnrollment } from "@/lib/portal-store";
import { usePortalStore } from "@/lib/use-portal-store";
import { cn } from "@/lib/utils";

const TODAY = "2026-05-21";

export default function PortalAgendaPage() {
  usePortalStore();
  const t = useTranslations("portal.agenda");
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<MockSession | null>(null);

  const activeSeries = getActiveSeriesForEnrollment();
  const primarySeries = activeSeries[0] ?? mockSeries.find((s) => s.enrollmentOpen);

  const upcoming = useMemo(
    () => mockSessions.filter((s) => s.date >= TODAY),
    []
  );
  const past = useMemo(
    () => mockSessions.filter((s) => s.date < TODAY),
    []
  );

  const sessionsBySeries = useMemo(() => {
    const map = new Map<string, MockSession[]>();
    upcoming.forEach((s) => {
      const list = map.get(s.seriesId) ?? [];
      list.push(s);
      map.set(s.seriesId, list);
    });
    return map;
  }, [upcoming]);

  const statusLabels = {
    confirmed: t("status_confirmed"),
    pending: t("status_pending"),
    cancelled: t("status_cancelled"),
  };

  return (
    <Section>
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
          <div>
            <h1 className="font-display text-3xl font-bold">{t("heading")}</h1>
            <p className="text-ink-soft mt-2">{t("intro")}</p>
          </div>
          <div
            className="inline-flex rounded-full border border-[var(--tt-border)] p-1 bg-cream"
            role="tablist"
            aria-label={t("view_toggle_label")}
          >
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "calendar"}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition",
                viewMode === "calendar" ? "bg-white shadow-sm text-ink" : "text-ink-soft"
              )}
              onClick={() => setViewMode("calendar")}
            >
              {t("view_calendar")}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "list"}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition",
                viewMode === "list" ? "bg-white shadow-sm text-ink" : "text-ink-soft"
              )}
              onClick={() => setViewMode("list")}
            >
              {t("view_list")}
            </button>
          </div>
        </div>

        {primarySeries && <SeriesEnrollmentCard series={primarySeries} />}

        {mockSeries
          .filter((s) => !s.enrollmentOpen && s.endDate >= TODAY)
          .map((series) => {
            const meta = getSeriesById(series.id);
            if (!meta) return null;
            return (
              <article
                key={series.id}
                className="p-4 mb-8 rounded-[var(--radius-lg)] border border-[var(--tt-border)] bg-cream/50 opacity-80"
              >
                <p className="text-xs font-semibold uppercase text-ink-muted mb-1">
                  {t("series_upcoming")}
                </p>
                <h3 className="font-display font-semibold">{meta.title}</h3>
                <p className="text-sm text-ink-soft mt-1">{t("series_closed")}</p>
              </article>
            );
          })}

        {viewMode === "calendar" ? (
          <div className="grid lg:grid-cols-2 gap-8">
            <AgendaCalendar
              sessions={upcoming}
              selectedSessionId={selectedSession?.id ?? null}
              onSelectSession={setSelectedSession}
            />
            <SessionDetailPanel session={selectedSession} />
          </div>
        ) : (
          <div className="space-y-10">
            {Array.from(sessionsBySeries.entries()).map(([seriesId, sessions]) => {
              const series = getSeriesById(seriesId);
              return (
                <section key={seriesId}>
                  {series && (
                    <h2 className="font-display text-lg font-bold mb-4 text-purple">
                      {series.title}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {sessions.map((s) => (
                      <ScheduleCard
                        key={s.id}
                        session={s}
                        statusLabels={statusLabels}
                        enrolledLabel={t("enrolled_badge")}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {past.length > 0 && (
          <div className="mt-12">
            <button
              type="button"
              className="font-display font-semibold text-purple mb-4"
              onClick={() => setArchiveOpen(!archiveOpen)}
            >
              {t("archive")} {archiveOpen ? "−" : "+"}
            </button>
            {archiveOpen && (
              <div className="space-y-4 opacity-70">
                {past.map((s) => (
                  <ScheduleCard
                    key={s.id}
                    session={s}
                    statusLabels={statusLabels}
                    enrolledLabel={t("enrolled_badge")}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
}
