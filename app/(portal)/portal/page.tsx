import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { mockParent, mockChild, mockSessions, mockAnnouncements } from "@/lib/mock-data";
import { ScheduleCard } from "@/components/portal/ScheduleCard";
import { AnnouncementCard } from "@/components/portal/AnnouncementCard";
import { DashboardNextSession } from "@/components/portal/DashboardNextSession";

export const metadata = { title: "Portal" };

export default async function PortalDashboardPage() {
  const t = await getTranslations("portal");
  const upcoming = mockSessions
    .filter((s) => s.status !== "cancelled" && s.date >= "2026-05-21")
    .slice(0, 3);

  return (
    <Section>
      <Container>
        <h1 className="font-display text-3xl font-bold mb-2">
          {t("dashboard.welcome", { name: mockParent.name.split(" ")[0] })}
        </h1>
        <p className="text-ink-soft text-sm mb-8">{mockParent.email}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <DashboardNextSession />
          <Link
            href="/portal/mededelingen"
            className="p-6 rounded-[var(--radius-lg)] bg-coral/10 border border-coral/20 hover:shadow-[var(--shadow-md)] transition"
          >
            <p className="text-xs font-semibold uppercase text-coral mb-1">{t("dashboard.announcements")}</p>
            <p className="font-display font-bold text-2xl">{mockAnnouncements.filter((a) => !a.read).length}</p>
            <p className="text-sm text-purple mt-2">{t("dashboard.view_all_announcements")} →</p>
          </Link>
          <Link
            href="/portal/mijn-kind"
            className="p-6 rounded-[var(--radius-lg)] bg-lime/15 border border-lime/30 hover:shadow-[var(--shadow-md)] transition"
          >
            <p className="text-xs font-semibold uppercase text-ink-soft mb-1">{t("dashboard.child")}</p>
            <p className="font-display font-bold text-xl">{mockChild.name}</p>
            <p className="text-sm text-purple mt-2">{t("dashboard.manage_child")} →</p>
          </Link>
        </div>

        <h2 className="font-display text-xl font-bold mb-4">{t("dashboard.upcoming")}</h2>
        <div className="space-y-4 mb-12">
          {upcoming.map((s) => (
            <ScheduleCard
              key={s.id}
              session={s}
              statusLabels={{
                confirmed: t("agenda.status_confirmed"),
                pending: t("agenda.status_pending"),
                cancelled: t("agenda.status_cancelled"),
              }}
              enrolledLabel={t("agenda.enrolled_badge")}
            />
          ))}
        </div>

        <h2 className="font-display text-xl font-bold mb-4">{t("dashboard.announcements")}</h2>
        <div className="space-y-4">
          {mockAnnouncements.slice(0, 2).map((a) => (
            <AnnouncementCard key={a.id} {...a} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
