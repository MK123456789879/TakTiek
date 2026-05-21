"use client";

import { useTranslations } from "next-intl";

export function LanguageToggle() {
  const t = useTranslations("global.language");

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <span className="text-purple font-semibold">{t("nl")}</span>
      <span className="text-ink-muted">|</span>
      <span
        className="text-ink-muted cursor-not-allowed"
        title={t("coming_soon")}
      >
        {t("en")}
      </span>
    </div>
  );
}
