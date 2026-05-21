import { Eyebrow } from "./Eyebrow";
import { Container } from "@/components/layout/Container";

export function Hero({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <Container>
        <div className={centered ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
            {title}
          </h1>
          {children}
        </div>
      </Container>
    </section>
  );
}
