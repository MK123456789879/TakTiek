import { cn } from "@/lib/utils";

const styles = [
  "bg-teal text-white",
  "bg-coral text-white",
  "bg-lime text-ink",
  "bg-purple text-white",
];

export function PillarCard({
  num,
  title,
  body,
  index,
}: {
  num: string;
  title: string;
  body: string;
  index: number;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] p-8 min-h-[200px] flex flex-col",
        styles[index]
      )}
    >
      <span className="font-display text-3xl font-bold opacity-60 mb-4">{num}</span>
      <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm leading-relaxed opacity-90">{body}</p>
    </div>
  );
}
