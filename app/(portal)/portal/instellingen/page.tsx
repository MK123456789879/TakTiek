"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { mockParent } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";

export default function InstellingenPage() {
  const t = useTranslations("portal.settings");
  const [privacyConsent, setPrivacyConsent] = useState(true);
  const [photoConsent, setPhotoConsent] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);

  const handleExport = () => {
    const data = {
      parent: mockParent,
      exportedAt: new Date().toISOString(),
      note: "TakTiek demo export",
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "taktiek-mijn-gegevens.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Section>
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl font-bold mb-8">{t("heading")}</h1>

        <section className="mb-10 space-y-4">
          <h2 className="font-display text-lg font-bold">{t("account")}</h2>
          <p className="text-ink-soft text-sm">{mockParent.email}</p>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="font-display text-lg font-bold">{t("notifications")}</h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={emailNotif}
              onChange={(e) => setEmailNotif(e.target.checked)}
              className="accent-coral w-4 h-4"
            />
            <span className="text-sm">{t("email_notifications")}</span>
          </label>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="font-display text-lg font-bold">{t("consents")}</h2>
          <div className="flex items-center justify-between p-4 bg-white rounded-[var(--radius-md)] border">
            <span className="text-sm">{t("consent_privacy")}</span>
            <button
              type="button"
              className="text-sm text-coral font-medium"
              onClick={() => setPrivacyConsent(!privacyConsent)}
            >
              {privacyConsent ? t("revoke") : "Herstellen"}
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-white rounded-[var(--radius-md)] border">
            <span className="text-sm">{t("consent_photo")}</span>
            <button
              type="button"
              className="text-sm text-coral font-medium"
              onClick={() => setPhotoConsent(!photoConsent)}
            >
              {photoConsent ? t("revoke") : "Herstellen"}
            </button>
          </div>
        </section>

        <Button type="button" variant="secondary" onClick={handleExport}>
          {t("export")}
        </Button>

        <section className="mt-12 p-8 rounded-[var(--radius-lg)] bg-coral/10 border-2 border-coral/30">
          <h2 className="font-display text-lg font-bold text-coral mb-4">{t("delete_account")}</h2>
          <p className="text-sm text-ink-soft mb-4">{t("delete_account_confirm")}</p>
          <Button href="/portal/mijn-kind" variant="destructive">
            {t("delete_account")}
          </Button>
        </section>
      </Container>
    </Section>
  );
}
