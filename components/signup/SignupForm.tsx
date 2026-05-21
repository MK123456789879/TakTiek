"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { signupSchema, type SignupFormData } from "@/lib/signup-schema";
import { FormField } from "@/components/ui/FormField";
import { ConsentCheckbox } from "@/components/ui/ConsentCheckbox";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--tt-border)] bg-white text-ink focus:border-teal focus:ring-2 focus:ring-teal/20";

export function SignupForm() {
  const t = useTranslations("signup");
  const [success, setSuccess] = useState(false);
  const [dataPanelOpen, setDataPanelOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      consentPrivacy: false,
      consentPhoto: false,
      attendance: undefined,
      speelotheek: undefined,
    },
  });

  const consentPrivacy = watch("consentPrivacy");
  const consentPhoto = watch("consentPhoto");

  const onSubmit = (data: SignupFormData) => {
    console.log("[TakTiek demo] Aanmelding:", data);
    setSuccess(true);
  };

  if (success) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-white rounded-[var(--radius-xl)] p-8 max-w-lg w-full shadow-[var(--shadow-lg)]">
          <h2 className="font-display text-2xl font-bold mb-4">{t("success.heading")}</h2>
          <p className="text-ink-soft mb-4">{t("success.body")}</p>
          <p className="text-coral font-semibold text-sm mb-6">{t("success.demo_notice")}</p>
          <button
            type="button"
            className="text-purple font-semibold text-sm mb-2"
            onClick={() => setDataPanelOpen(!dataPanelOpen)}
          >
            {t("success.data_heading")} {dataPanelOpen ? "−" : "+"}
          </button>
          {dataPanelOpen && (
            <p className="text-ink-soft text-sm mb-6">{t("success.data_body")}</p>
          )}
          <Button href="/" variant="primary">
            Naar home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 max-w-2xl">
      <section className="space-y-6">
        <h2 className="font-display text-xl font-bold text-teal">{t("sections.child")}</h2>
        <FormField label={t("fields.child_name.label")} why={t("fields.child_name.why")} required error={errors.childName?.message}>
          <input className={inputClass} {...register("childName")} />
        </FormField>
        <FormField label={t("fields.child_age.label")} why={t("fields.child_age.why")} required error={errors.childAge?.message}>
          <input type="number" min={5} max={12} className={inputClass} {...register("childAge", { valueAsNumber: true })} />
        </FormField>
        <FormField label={t("fields.child_school_group.label")} why={t("fields.child_school_group.why")} error={errors.childSchoolGroup?.message}>
          <input className={inputClass} {...register("childSchoolGroup")} />
        </FormField>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-xl font-bold text-coral">{t("sections.parent")}</h2>
        <FormField label={t("fields.parent_name.label")} why={t("fields.parent_name.why")} required error={errors.parentName?.message}>
          <input className={inputClass} {...register("parentName")} />
        </FormField>
        <FormField label={t("fields.parent_email.label")} why={t("fields.parent_email.why")} required error={errors.parentEmail?.message}>
          <input type="email" className={inputClass} {...register("parentEmail")} />
        </FormField>
        <FormField label={t("fields.parent_phone.label")} why={t("fields.parent_phone.why")} required error={errors.parentPhone?.message}>
          <input type="tel" className={inputClass} {...register("parentPhone")} />
        </FormField>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-xl font-bold text-purple">{t("sections.practical")}</h2>
        <FormField label={t("fields.attendance.label")} why={t("fields.attendance.why")} required error={errors.attendance?.message}>
          <div className="space-y-2">
            {(["all", "biweekly", "other"] as const).map((v) => (
              <label key={v} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value={v} {...register("attendance")} className="accent-coral" />
                <span className="text-sm">
                  {v === "all" ? t("fields.attendance_all") : v === "biweekly" ? t("fields.attendance_biweekly") : t("fields.attendance_other")}
                </span>
              </label>
            ))}
          </div>
        </FormField>
        <FormField label={t("fields.speelotheek.label")} why={t("fields.speelotheek.why")} required error={errors.speelotheek?.message}>
          <div className="space-y-2">
            {(["yes", "no", "unknown"] as const).map((v) => (
              <label key={v} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value={v} {...register("speelotheek")} className="accent-coral" />
                <span className="text-sm">
                  {v === "yes" ? t("fields.speelotheek_yes") : v === "no" ? t("fields.speelotheek_no") : t("fields.speelotheek_unknown")}
                </span>
              </label>
            ))}
          </div>
        </FormField>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-xl font-bold text-ink">{t("sections.care")}</h2>
        <p className="text-ink-soft text-sm">{t("fields.care_intro")}</p>
        <FormField label={t("fields.care.label")} why={t("fields.care.why")} error={errors.careNotes?.message}>
          <textarea rows={4} maxLength={500} className={inputClass} {...register("careNotes")} />
        </FormField>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-xl font-bold">{t("sections.consent")}</h2>
        <input type="checkbox" className="sr-only" {...register("consentPrivacy")} />
        <ConsentCheckbox
          label={t("consent_privacy")}
          required
          checked={!!consentPrivacy}
          onChange={(v) => setValue("consentPrivacy", v, { shouldValidate: true })}
          error={errors.consentPrivacy?.message}
        />
        <ConsentCheckbox
          label={t("consent_photo")}
          checked={!!consentPhoto}
          onChange={(v) => setValue("consentPhoto", v)}
        />
        <p className="text-sm">
          <Link href="/privacyverklaring" className="text-purple hover:underline">
            Privacyverklaring
          </Link>
        </p>
      </section>

      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? "Bezig met versturen…" : t("submit")}
      </Button>
    </form>
  );
}
