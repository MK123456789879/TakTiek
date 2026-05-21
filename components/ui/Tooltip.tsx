"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export function Tooltip({ text }: { text: string }) {
  const id = useId();
  const [open, setOpen] = useState(false);

  return (
    <span className="inline-flex items-start gap-1">
      <button
        type="button"
        className="hidden md:inline-flex w-5 h-5 rounded-full bg-teal/15 text-teal text-xs font-bold items-center justify-center shrink-0 hover:bg-teal/25"
        aria-describedby={id}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        ?
      </button>
      <span
        id={id}
        role="tooltip"
        className={cn(
          "text-sm text-ink-soft",
          "md:absolute md:z-10 md:max-w-xs md:rounded-lg md:bg-white md:p-3 md:shadow-[var(--shadow-md)] md:border md:border-[var(--tt-border)]",
          "md:hidden block mt-1",
          "md:opacity-0 md:pointer-events-none",
          open && "md:opacity-100"
        )}
      >
        {text}
      </span>
    </span>
  );
}
