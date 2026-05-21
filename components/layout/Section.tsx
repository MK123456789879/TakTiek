import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  background = "default",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "cream" | "white" | "purple";
}) {
  const bg =
    background === "cream"
      ? "bg-cream"
      : background === "white"
        ? "bg-surface"
        : background === "purple"
          ? "bg-purple/5"
          : "";

  return (
    <section
      id={id}
      className={cn("py-[var(--section-padding-y)]", bg, className)}
    >
      {children}
    </section>
  );
}
