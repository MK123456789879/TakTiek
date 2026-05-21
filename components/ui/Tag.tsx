import { cn } from "@/lib/utils";

type TagColor = "teal" | "coral" | "lime" | "purple";

const colors: Record<TagColor, string> = {
  teal: "bg-teal/15 text-teal",
  coral: "bg-coral/15 text-coral",
  lime: "bg-lime/20 text-ink",
  purple: "bg-purple/15 text-purple",
};

export function Tag({
  children,
  color = "teal",
  className,
}: {
  children: React.ReactNode;
  color?: TagColor;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full",
        colors[color],
        className
      )}
    >
      {children}
    </span>
  );
}
