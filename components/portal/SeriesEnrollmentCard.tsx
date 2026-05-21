"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { SessionSeries } from "@/lib/mock-data";
import { getSessionsForSeries } from "@/lib/mock-data";
import {
  enrollInSeries,
  getSeriesEnrollment,
  getPortalChild,
  getSeriesWithSpots,
  isSeriesFull,
  unenrollFromSeries,
} from "@/lib/portal-store";
import { usePortalStore } from "@/lib/use-portal-store";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

type SeriesEnrollmentCardProps = {
  series: SessionSeries;
};

export function SeriesEnrollmentCard({ series }: SeriesEnrollmentCardProps) {
  usePortalStore();
  const t = useTranslations("portal.agenda");
  const child = getPortalChild();
  const enrollment = getSeriesEnrollment(series.id);
  const sessions = getSessionsForSeries(series.id);
  const seriesWithSpots = getSeriesWithSpots(series);
  const full = isSeriesFull(series);
  const spotsLeft = seriesWithSpots.maxSpots - seriesWithSpots.spotsTaken;

  const [confirmMode, setConfirmMode] = useState<"enroll" | "unenroll" | null>(null);

  const formatRange = () => {
    const start = new Date(series.startDate).toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "long",
    });
    const end = new Date(series.endDate).toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return `${start} – ${end}`;
  };

  const handleConfirm = () => {
    if (confirmMode === "enroll") enrollInSeries(series.id);
    if (confirmMode === "unenroll") unenrollFromSeries(series.id);
    setConfirmMode(null);
  };

  if (!child) return null;

  return (
    <>
      <article className="p-6 bg-purple/5 rounded-[var(--radius-lg)] border border-purple/20 mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <Tag color="purple" className="mb-2">
              {t("series_label")}
            </Tag>
            <h2 className="font-display text-xl font-bold">{series.title}</h2>
            <p className="text-sm text-ink-soft mt-2">{series.description}</p>
          </div>
          {enrollment === "enrolled" && (
            <Tag color="lime">{t("series_enrolled")}</Tag>
          )}
        </div>

        <dl className="grid sm:grid-cols-3 gap-4 text-sm mb-6">
          <div>
            <dt className="text-ink-muted text-xs uppercase tracking-wide">{t("series_period")}</dt>
            <dd className="font-medium">{formatRange()}</dd>
          </div>
          <div>
            <dt className="text-ink-muted text-xs uppercase tracking-wide">{t("series_sessions")}</dt>
            <dd className="font-medium">{sessions.length} {t("series_sessions_unit")}</dd>
          </div>
          <div>
            <dt className="text-ink-muted text-xs uppercase tracking-wide">{t("spots_label")}</dt>
            <dd className="font-medium">
              {full ? t("series_full") : t("spots_left", { count: spotsLeft })}
            </dd>
          </div>
        </dl>

        <p className="text-xs text-ink-soft mb-4">{t("series_privacy_note")}</p>

        {!series.enrollmentOpen ? (
          <p className="text-sm text-ink-muted">{t("series_closed")}</p>
        ) : enrollment === "enrolled" ? (
          <Button type="button" variant="secondary" onClick={() => setConfirmMode("unenroll")}>
            {t("series_unenroll", { name: child.name })}
          </Button>
        ) : (
          <Button
            type="button"
            variant="primary"
            onClick={() => setConfirmMode("enroll")}
            disabled={full}
          >
            {full ? t("series_full") : t("series_enroll", { name: child.name })}
          </Button>
        )}

        <p className="text-xs text-coral mt-3">{t("demo_notice")}</p>
      </article>

      {confirmMode && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-[var(--radius-xl)] p-8 max-w-md w-full shadow-[var(--shadow-lg)]">
            <h3 className="font-display text-xl font-bold mb-4">
              {confirmMode === "enroll"
                ? t("series_confirm_enroll_title")
                : t("series_confirm_unenroll_title")}
            </h3>
            <p className="text-ink-soft mb-6">
              {confirmMode === "enroll"
                ? t("series_confirm_enroll_body", {
                    name: child.name,
                    count: sessions.length,
                    title: series.title,
                  })
                : t("series_confirm_unenroll_body", { name: child.name, title: series.title })}
            </p>
            <div className="flex gap-3">
              <Button type="button" variant="primary" onClick={handleConfirm}>
                {t("series_confirm_btn")}
              </Button>
              <Button type="button" variant="secondary" onClick={() => setConfirmMode(null)}>
                {t("series_cancel_btn")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
