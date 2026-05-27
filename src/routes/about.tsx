import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RiftRide — Naivasha's Trusted Car Hire" },
      { name: "description", content: "Born in Naivasha, RiftRide is built for Kenyan travellers and tourists. Honest pricing, modern fleet, real support." },
      { property: "og:title", content: "About — RiftRide" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <Layout>
      <PageHeader eyebrow="About Us" title="Built in Naivasha, for the open road" subtitle="We started RiftRide to make exploring Kenya simple, affordable and unforgettable." />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 space-y-5 text-muted-foreground leading-relaxed">
        <p>RiftRide began with a single Land Cruiser and a love for the Great Rift Valley. Today our growing fleet serves travellers from across Kenya and the world — from weekend escapes at Lake Naivasha to multi-week safaris through the Mara.</p>
        <p>We believe car hire should be transparent. No hidden fees. No condescending paperwork. Just a clean, serviced vehicle, a fair rate in shillings, and a phone number that someone actually picks up.</p>
        <p>Whether you're after a budget sedan to zip around town, a luxury chauffeur experience for a wedding, or a kitted-out 4x4 for the bush — we've got the keys.</p>
      </section>
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-3 text-center">
          {[{n:"500+",l:"Happy renters"},{n:"40+",l:"Vehicles in fleet"},{n:"6yrs",l:"On the road"}].map(s=>(
            <div key={s.l}>
              <div className="text-4xl font-bold text-primary">{s.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  ),
});
