import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteShell({
  children,
  navVariant = "public",
  footerVariant = "full",
}: {
  children: React.ReactNode;
  navVariant?: "public" | "minimal";
  footerVariant?: "full" | "short";
}) {
  return (
    <>
      <Nav variant={navVariant} />
      <main>{children}</main>
      <Footer variant={footerVariant} />
    </>
  );
}
