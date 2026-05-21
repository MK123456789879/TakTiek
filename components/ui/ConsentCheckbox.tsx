"use client";

import { cn } from "@/lib/utils";

type ConsentCheckboxProps = {
  label: string;
  required?: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
};

export function ConsentCheckbox({
  label,
  required,
  checked,
  onChange,
  error,
}: ConsentCheckboxProps) {
  return (
    <div className="space-y-1">
      <label className="flex gap-3 items-start cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 w-4 h-4 accent-coral shrink-0"
        />
        <span className="text-sm text-ink-soft">
          {label}
          {required && (
            <span className="text-coral font-medium ml-1">(verplicht)</span>
          )}
          {!required && (
            <span className="text-ink-muted ml-1">(optioneel)</span>
          )}
        </span>
      </label>
      {error && <p className="text-sm text-coral pl-7">{error}</p>}
    </div>
  );
}
