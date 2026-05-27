import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href="https://wa.me/254757483413"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg text-white"
        style={{ backgroundColor: "var(--whatsapp)" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-secondary border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20 text-center">
        {eyebrow && <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">{eyebrow}</div>}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
