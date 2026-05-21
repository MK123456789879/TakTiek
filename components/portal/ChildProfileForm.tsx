"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  deletePortalData,
  getPortalChild,
  getPortalParent,
  isPortalDeleted,
  updatePortalChild,
  updatePortalParent,
} from "@/lib/portal-store";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full px-4 py-2 rounded-[var(--radius-sm)] border border-[var(--tt-border)] bg-white";

export function ChildProfileForm() {
  const t = useTranslations("portal.child");
  const [deleted, setDeleted] = useState(isPortalDeleted());
  const [confirmOpen, setConfirmOpen] = useState(false);
  const child = getPortalChild();
  const parent = getPortalParent();
  const [form, setForm] = useState({
    childName: child?.name ?? "",
    childAge: child?.age ?? 8,
    schoolGroup: child?.schoolGroup ?? "",
    parentName: parent?.name ?? "",
    parentEmail: parent?.email ?? "",
    parentPhone: parent?.phone ?? "",
    careNotes: child?.careNotes ?? "",
  });

  if (deleted) {
    return (
      <div className="max-w-lg text-center py-12">
        <h2 className="font-display text-2xl font-bold mb-4">{t("deleted_title")}</h2>
        <p className="text-ink-soft mb-8">{t("deleted_body")}</p>
        <Button href="/" variant="primary">
          Naar home
        </Button>
      </div>
    );
  }

  const handleSave = () => {
    updatePortalChild({
      name: form.childName,
      age: Number(form.childAge),
      schoolGroup: form.schoolGroup,
      careNotes: form.careNotes,
    });
    updatePortalParent({
      name: form.parentName,
      email: form.parentEmail,
      phone: form.parentPhone,
    });
  };

  const handleDelete = () => {
    deletePortalData();
    setDeleted(true);
    setConfirmOpen(false);
  };

  return (
    <div className="max-w-2xl space-y-10">
      <section className="space-y-4">
        <h2 className="font-display text-lg font-bold">{t("sections.child")}</h2>
        <label className="block text-sm font-medium">Naam</label>
        <input
          className={inputClass}
          value={form.childName}
          onChange={(e) => setForm({ ...form, childName: e.target.value })}
        />
        <label className="block text-sm font-medium">Leeftijd</label>
        <input
          type="number"
          className={inputClass}
          value={form.childAge}
          onChange={(e) => setForm({ ...form, childAge: Number(e.target.value) })}
        />
        <label className="block text-sm font-medium">Schoolgroep</label>
        <input
          className={inputClass}
          value={form.schoolGroup}
          onChange={(e) => setForm({ ...form, schoolGroup: e.target.value })}
        />
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-lg font-bold">{t("sections.contact")}</h2>
        <input
          className={inputClass}
          value={form.parentName}
          onChange={(e) => setForm({ ...form, parentName: e.target.value })}
        />
        <input
          type="email"
          className={inputClass}
          value={form.parentEmail}
          onChange={(e) => setForm({ ...form, parentEmail: e.target.value })}
        />
        <input
          type="tel"
          className={inputClass}
          value={form.parentPhone}
          onChange={(e) => setForm({ ...form, parentPhone: e.target.value })}
        />
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-lg font-bold">{t("sections.care")}</h2>
        <p className="text-sm text-ink-soft">{t("care_note")}</p>
        <textarea
          rows={4}
          className={inputClass}
          value={form.careNotes}
          onChange={(e) => setForm({ ...form, careNotes: e.target.value })}
        />
      </section>

      <Button type="button" variant="primary" onClick={handleSave}>
        {t("save")}
      </Button>

      <section className="p-8 rounded-[var(--radius-lg)] bg-coral/10 border-2 border-coral/30">
        <h2 className="font-display text-lg font-bold text-coral mb-4">{t("sections.stop")}</h2>
        <Button type="button" variant="destructive" onClick={() => setConfirmOpen(true)}>
          {t("delete_btn")}
        </Button>
      </section>

      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40" role="dialog">
          <div className="bg-white rounded-[var(--radius-xl)] p-8 max-w-md w-full">
            <h3 className="font-display text-xl font-bold mb-4">{t("delete_confirm_title")}</h3>
            <p className="text-ink-soft mb-6">{t("delete_confirm_body")}</p>
            <div className="flex gap-4">
              <Button type="button" variant="destructive" onClick={handleDelete}>
                {t("delete_confirm_btn")}
              </Button>
              <Button type="button" variant="secondary" onClick={() => setConfirmOpen(false)}>
                {t("delete_cancel")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
