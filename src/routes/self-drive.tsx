import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Check } from "lucide-react";

export const Route = createFileRoute("/self-drive")({
  head: () => ({
    meta: [
      { title: "Self Drive Car Hire in Naivasha — RiftRide" },
      { name: "description", content: "Drive yourself across Kenya. Affordable self-drive rentals with unlimited mileage, insurance and M-Pesa payments." },
      { property: "og:title", content: "Self Drive — RiftRide" },
      { property: "og:url", content: "/self-drive" },
    ],
    links: [{ rel: "canonical", href: "/self-drive" }],
  }),
  component: () => {
    const features = ["Unlimited mileage in Kenya", "Comprehensive insurance included", "24/7 roadside assistance", "Flexible pickup & drop-off", "M-Pesa accepted", "Minimum 1 day rental"];
    return (
      <Layout>
        <PageHeader eyebrow="Self Drive" title="The road is yours" subtitle="Pick up the keys, hit the road, and explore Kenya on your own terms." />
        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-lg border border-border p-4">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/fleet" className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Browse self-drive fleet</Link>
          </div>
        </section>
      </Layout>
    );
  },
});
