import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  color = "teal",
}: {
  children: React.ReactNode;
  className?: string;
  color?: "teal" | "coral" | "purple";
}) {
  const colors = {
    teal: "text-teal",
    coral: "text-coral",
    purple: "text-purple",
  };
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-widest mb-4",
        colors[color],
        className
      )}
    >
      {children}
    </p>
  );
}
