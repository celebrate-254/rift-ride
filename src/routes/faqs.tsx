import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What documents do I need to rent a car?", a: "A valid driving license (held for 2+ years), national ID or passport, and a refundable security deposit." },
  { q: "Do you offer unlimited mileage?", a: "Yes, all self-drive rentals come with unlimited mileage within Kenya. Cross-border trips require prior approval." },
  { q: "Can I pay with M-Pesa?", a: "Yes — we accept M-Pesa, bank transfer, Visa and Mastercard." },
  { q: "Do you deliver to the airport?", a: "Yes — JKIA, Wilson and Eldoret. Delivery fees apply based on distance." },
  { q: "Is insurance included?", a: "All vehicles carry comprehensive insurance. You can also purchase a CDW to reduce your excess." },
  { q: "What's your cancellation policy?", a: "Free cancellation up to 48 hours before pickup. Inside 48 hours, the first day's rate applies." },
  { q: "Can I take the car cross-border?", a: "With written approval and additional insurance, Uganda, Tanzania and Rwanda are possible." },
];

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — RiftRide Car Hire Naivasha" },
      { name: "description", content: "Answers to common questions about renting a car in Naivasha: documents, payments, insurance, mileage and more." },
      { property: "og:title", content: "FAQs — RiftRide" },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
  }),
  component: () => (
    <Layout>
      <PageHeader eyebrow="FAQs" title="Frequently asked questions" subtitle="Quick answers about renting with RiftRide." />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 space-y-3">
        {faqs.map((f, i) => <Item key={i} {...f} />)}
      </section>
    </Layout>
  ),
});

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-border bg-card">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left p-4">
        <span className="font-medium text-sm">{q}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-4 pb-4 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}
