export function AnnouncementCard({
  date,
  title,
  body,
  author,
}: {
  date: string;
  title: string;
  body: string;
  author: string;
}) {
  return (
    <article className="p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--tt-border)]">
      <time className="text-xs text-ink-muted uppercase tracking-wide">{date}</time>
      <h3 className="font-display font-semibold text-xl mt-2 mb-2">{title}</h3>
      <p className="text-ink-soft text-sm leading-relaxed">{body}</p>
      <p className="text-xs text-ink-muted mt-4">— {author}</p>
    </article>
  );
}
