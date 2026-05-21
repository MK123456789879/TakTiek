"use client";

import {
  mockChild,
  mockParent,
  mockSessions,
  mockSeries,
  getSessionsForSeries,
  type MockAnnouncement,
  type MockSession,
  type SessionSeries,
} from "./mock-data";

export type SeriesEnrollment = "enrolled" | "none";

let deleted = false;
let childData = { ...mockChild };
let parentData = { ...mockParent };

/** Demo: Jules start ingeschreven voor actieve reeks */
let enrollments: Record<string, SeriesEnrollment> = {
  "spellen-2026-q2": "enrolled",
};

/** Lokale spotsTaken-aanpassing voor demo (alleen als deze ouder in/uit schrijft) */
let demoSpotsDelta = 0;

type Listener = () => void;
const listeners = new Set<Listener>();

export function subscribePortalStore(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function notify() {
  listeners.forEach((l) => l());
}

export function isPortalDeleted() {
  return deleted;
}

export function getPortalChild() {
  return deleted ? null : { ...childData };
}

export function getPortalParent() {
  return deleted ? null : { ...parentData };
}

export function updatePortalChild(data: Partial<typeof mockChild>) {
  if (!deleted) {
    childData = { ...childData, ...data };
    notify();
  }
}

export function updatePortalParent(data: Partial<typeof mockParent>) {
  if (!deleted) parentData = { ...parentData, ...data };
}

export function deletePortalData() {
  deleted = true;
  notify();
}

export function resetPortalData() {
  deleted = false;
  childData = { ...mockChild };
  parentData = { ...mockParent };
  enrollments = { "spellen-2026-q2": "enrolled" };
  demoSpotsDelta = 0;
  notify();
}

export function getSeriesEnrollment(seriesId: string): SeriesEnrollment {
  if (deleted) return "none";
  return enrollments[seriesId] ?? "none";
}

export function getSeriesWithSpots(series: SessionSeries): SessionSeries {
  return {
    ...series,
    spotsTaken: Math.min(
      series.maxSpots,
      Math.max(0, series.spotsTaken + demoSpotsDelta)
    ),
  };
}

export function isSeriesFull(series: SessionSeries): boolean {
  const s = getSeriesWithSpots(series);
  return s.spotsTaken >= s.maxSpots;
}

export function enrollInSeries(seriesId: string) {
  if (deleted) return;
  const series = mockSeries.find((s) => s.id === seriesId);
  if (!series || !series.enrollmentOpen) return;
  if (getSeriesEnrollment(seriesId) === "enrolled") return;
  if (isSeriesFull(series)) return;

  enrollments[seriesId] = "enrolled";
  demoSpotsDelta += 1;
  console.log("[TakTiek demo] Ingeschreven voor reeks:", seriesId, childData.name);
  notify();
}

export function unenrollFromSeries(seriesId: string) {
  if (deleted) return;
  if (getSeriesEnrollment(seriesId) !== "enrolled") return;

  enrollments[seriesId] = "none";
  demoSpotsDelta -= 1;
  console.log("[TakTiek demo] Afgemeld voor reeks:", seriesId, childData.name);
  notify();
}

export function isChildEnrolledForSession(sessionId: string): boolean {
  const session = mockSessions.find((s) => s.id === sessionId);
  if (!session || deleted) return false;
  return getSeriesEnrollment(session.seriesId) === "enrolled";
}

export function getNextEnrolledSession(): MockSession | null {
  if (deleted) return null;
  const today = new Date().toISOString().slice(0, 10);
  return (
    mockSessions
      .filter(
        (s) =>
          s.date >= today &&
          s.status !== "cancelled" &&
          getSeriesEnrollment(s.seriesId) === "enrolled"
      )
      .sort((a, b) => a.date.localeCompare(b.date))[0] ?? null
  );
}

export function getUpcomingSessions(sessions: MockSession[]) {
  const today = new Date().toISOString().slice(0, 10);
  return sessions
    .filter((s) => s.date >= today && s.status !== "cancelled")
    .slice(0, 3);
}

export function getUnreadAnnouncements(announcements: MockAnnouncement[]) {
  return announcements.filter((a) => !a.read).length;
}

export function getEnrolledSeriesIds(): string[] {
  if (deleted) return [];
  return Object.entries(enrollments)
    .filter(([, v]) => v === "enrolled")
    .map(([id]) => id);
}

export function getActiveSeriesForEnrollment(): SessionSeries[] {
  const today = new Date().toISOString().slice(0, 10);
  return mockSeries
    .filter((s) => s.enrollmentOpen && s.endDate >= today)
    .map(getSeriesWithSpots);
}

export { mockSessions, mockSeries, getSessionsForSeries };
