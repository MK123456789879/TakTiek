import { cn } from "@/lib/utils";

const markerColors = ["bg-teal", "bg-coral", "bg-lime", "bg-purple"];

export function TrustItem({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index: number;
}) {
  return (
    <li className="flex gap-4 pb-6 border-b border-[var(--tt-border)] last:border-0">
      <div
        className={cn(
          "w-10 h-10 rounded-xl shrink-0 flex items-center justify-center",
          markerColors[index % 4]
        )}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white" fill="none" strokeWidth="2.5">
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>
      <div>
        <h4 className="font-display font-semibold text-lg mb-1">{title}</h4>
        <p className="text-ink-soft text-sm leading-relaxed">{body}</p>
      </div>
    </li>
  );
}
