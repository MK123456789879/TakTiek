import { PortalNav } from "./PortalNav";
import { Footer } from "./Footer";

export function PortalShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PortalNav />
      <main className="min-h-[60vh]">{children}</main>
      <Footer variant="short" />
    </>
  );
}
