import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact RiftRide Car Hire Naivasha" },
      { name: "description", content: "Talk to RiftRide: phone, WhatsApp, email and our office on Moi South Lake Road, Naivasha." },
      { property: "og:title", content: "Contact — RiftRide" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <Layout>
      <PageHeader eyebrow="Contact" title="Get in touch with us" subtitle="Our team is on the line 24/7. Call, WhatsApp or drop by the office." />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <Row icon={Phone} label="Phone" value="+254 757 483 413" href="tel:0757483413" />
          <Row icon={MessageCircle} label="WhatsApp" value="Chat with us" href="https://wa.me/254750740200" />
          <Row icon={Mail} label="Email" value="pkinuthia990@gmail.com" href="mailto:pkinuthia990@gmail.com" />
          <Row icon={MapPin} label="Office" value="Moi South Lake Road, Naivasha, Kenya" />
          <form className="mt-4 space-y-3 rounded-xl border border-border bg-card p-6">
            <input className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm" placeholder="Your name" />
            <input className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm" placeholder="Email or phone" />
            <textarea rows={4} className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm" placeholder="How can we help?" />
            <button className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground">Send message</button>
          </form>
        </div>
        <div className="rounded-xl overflow-hidden border border-border min-h-[400px]">
          <iframe
            title="RiftRide office on Google Maps"
            className="w-full h-full min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Lake+Naivasha,Kenya&output=embed"
          />
        </div>
      </section>
    </Layout>
  ),
});

function Row({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-base font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80">{content}</a> : content;
}
