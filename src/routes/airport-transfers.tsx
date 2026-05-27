import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Plane, Clock, Shield } from "lucide-react";

export const Route = createFileRoute("/airport-transfers")({
  head: () => ({
    meta: [
      { title: "Airport Transfers JKIA → Naivasha — RiftRide" },
      { name: "description", content: "Reliable airport transfers between JKIA, Wilson, Nairobi and Naivasha. Professional chauffeurs, on-time guarantee." },
      { property: "og:title", content: "Airport Transfers — RiftRide" },
      { property: "og:url", content: "/airport-transfers" },
    ],
    links: [{ rel: "canonical", href: "/airport-transfers" }],
  }),
  component: () => (
    <Layout>
      <PageHeader eyebrow="Airport Transfers" title="Land and ride, smoothly" subtitle="Professional chauffeurs meet you at JKIA, Wilson or Eldoret — any hour." />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 grid gap-6 md:grid-cols-3">
        {[
          { icon: Plane, t: "Meet & greet", d: "Driver waits at arrivals with a name board." },
          { icon: Clock, t: "On time, every time", d: "Flight tracked in real time so we adjust to delays." },
          { icon: Shield, t: "Insured comfort", d: "Spacious AC vehicles, bottled water, free WiFi." },
        ].map((x) => (
          <div key={x.t} className="rounded-xl border border-border bg-card p-6">
            <x.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-semibold">{x.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-20 text-center">
        <Link to="/contact" className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Book a transfer</Link>
      </section>
    </Layout>
  ),
});
