"use client";

import { Tooltip } from "./Tooltip";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  why?: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
};

export function FormField({
  label,
  why,
  error,
  children,
  required,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="flex flex-wrap items-center gap-2 font-medium text-ink">
        {label}
        {required && <span className="text-coral text-sm">*</span>}
        {why && <Tooltip text={why} />}
      </label>
      {children}
      {error && <p className="text-sm text-coral">{error}</p>}
    </div>
  );
}
