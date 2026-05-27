import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { VehicleCard, FLEET } from "@/components/site/VehicleCard";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet — RiftRide Car Hire Naivasha" },
      { name: "description", content: "Explore our full fleet: economy sedans, SUVs, safari 4x4s, luxury cars and 14-seater vans." },
      { property: "og:title", content: "Fleet — RiftRide" },
      { property: "og:url", content: "/fleet" },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: () => (
    <Layout>
      <PageHeader eyebrow="Fleet" title="Find your perfect ride" subtitle="From budget commuters to safari-ready 4x4s, all insured and serviced." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...FLEET, ...FLEET].map((v, i) => <VehicleCard key={i} v={v} />)}
        </div>
      </section>
    </Layout>
  ),
});
