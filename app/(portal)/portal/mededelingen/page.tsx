"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { mockAnnouncements } from "@/lib/mock-data";
import { AnnouncementCard } from "@/components/portal/AnnouncementCard";

export default function PortalMededelingenPage() {
  const t = useTranslations("portal.announcements");
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const filtered =
    filter === "unread"
      ? mockAnnouncements.filter((a) => !a.read)
      : mockAnnouncements;

  return (
    <Section>
      <Container>
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <h1 className="font-display text-3xl font-bold">{t("heading")}</h1>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${filter === "all" ? "bg-purple text-white" : "bg-white border"}`}
            >
              {t("filter_all")}
            </button>
            <button
              type="button"
              onClick={() => setFilter("unread")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${filter === "unread" ? "bg-purple text-white" : "bg-white border"}`}
            >
              {t("filter_unread")}
            </button>
          </div>
        </div>
        {filtered.length === 0 ? (
          <p className="text-ink-soft">{t("empty")}</p>
        ) : (
          <div className="space-y-4">
            {filtered.map((a) => (
              <AnnouncementCard key={a.id} {...a} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
