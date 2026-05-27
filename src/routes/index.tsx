import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { BookingForm } from "@/components/site/BookingForm";
import { VehicleCard, FLEET } from "@/components/site/VehicleCard";
import hero from "@/assets/hero-naivasha.jpg";
import destNaivasha from "@/assets/dest-naivasha.jpg";
import destMara from "@/assets/dest-mara.jpg";
import destHellsgate from "@/assets/dest-hellsgate.jpg";
import { Shield, Clock, CreditCard, MapPin, Wrench, Tag, Star, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RiftRide Car Hire — Reliable Car Rental in Naivasha, Kenya" },
      { name: "description", content: "Affordable, insured self-drive & chauffeur car hire in Naivasha. SUVs, safari 4x4s, vans & luxury. M-Pesa, 24/7 support, airport transfers." },
      { property: "og:title", content: "RiftRide Car Hire — Naivasha" },
      { property: "og:description", content: "Self-drive, chauffeur, airport transfers and safari 4x4 rentals in Naivasha." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const reasons = [
  { icon: Tag, title: "Affordable pricing", text: "Transparent rates with no hidden fees. Pay in KES via M-Pesa." },
  { icon: Shield, title: "Fully insured", text: "Comprehensive cover on every vehicle for total peace of mind." },
  { icon: Clock, title: "24/7 support", text: "Roadside help and a real human on the line, day or night." },
  { icon: CreditCard, title: "M-Pesa payments", text: "Pay deposits and balances instantly from your phone." },
  { icon: MapPin, title: "Flexible pickup", text: "Naivasha, Nairobi, JKIA, Nakuru — we deliver to you." },
  { icon: Wrench, title: "Maintained cars", text: "Every vehicle serviced before each hire. No surprises." },
];

const destinations = [
  { name: "Lake Naivasha", img: destNaivasha, copy: "Flamingos, boat rides and lakeside lodges." },
  { name: "Maasai Mara", img: destMara, copy: "World-famous savanna safaris and the Great Migration." },
  { name: "Hell's Gate", img: destHellsgate, copy: "Cycle and hike among Kenya's dramatic red cliffs." },
];

const reviews = [
  { name: "Wanjiku M.", trip: "Mara Safari", text: "The Prado was spotless and the M-Pesa booking was effortless. Highly recommend RiftRide.", stars: 5 },
  { name: "James O.", trip: "Airport Transfer", text: "Driver was on time at JKIA at 4am. Comfortable ride to Naivasha — true professionals.", stars: 5 },
  { name: "Sarah K.", trip: "Self Drive Week", text: "Best rates I found. Car was almost new and support answered within minutes.", stars: 5 },
];

const faqs = [
  { q: "What documents do I need to rent a car?", a: "A valid driving license (held for 2+ years), national ID or passport, and a refundable security deposit." },
  { q: "Do you offer unlimited mileage?", a: "Yes, all self-drive rentals come with unlimited mileage within Kenya. Cross-border trips require prior approval." },
  { q: "Can I pay with M-Pesa?", a: "Absolutely. We accept M-Pesa, bank transfer, Visa and Mastercard." },
  { q: "Do you deliver to the airport?", a: "Yes — JKIA, Wilson and Eldoret. Delivery fees apply based on distance." },
  { q: "Is insurance included?", a: "All vehicles carry comprehensive insurance. You can also purchase a CDW to reduce your excess." },
];

function Home() {
  return (
    <Layout>
      {/* Hero And some changes were made here  */}
      <section className="relative h-[75vh] overflow-hidden">
  <div className="absolute inset-0">
    <img
      src={hero}
      alt="White SUV at Lake Naivasha at golden hour"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/55 to-foreground/80" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 h-full flex flex-col justify-center text-center text-background">
    <div className="text-xs font-semibold tracking-widest uppercase opacity-80">
      Naivasha · Kenya
    </div>

    <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
      Reliable car hire in Naivasha
    </h1>

    <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg opacity-90">
      Self-drive, chauffeur, airport transfers and unforgettable road-trip rentals — built for the Kenyan adventurer.
    </p>

    <div className="mt-8 flex flex-wrap gap-3 justify-center">
      <Link to="/fleet" className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
        Browse fleet
      </Link>
      <Link to="/contact" className="inline-flex h-11 items-center rounded-md border border-background/40 px-6 text-sm font-semibold text-background hover:bg-background/10">
        Talk to us
      </Link>
    </div>
  </div>

  <div className="relative mx-auto max-w-6xl px-4 sm:px-6 -mt-38 md:-mt-46 z-10">
    <BookingForm />
  </div>
</section>

      {/* How we serve */}
      <Section eyebrow="Services" title="How we serve you" subtitle="Four ways to ride across Kenya — pick what fits your trip.">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            { t: "Take control of the road", d: "Affordable self-drive rentals with unlimited mileage." },
            { t: "Sit back and relax", d: "Professional chauffeurs for business and leisure." },
            { t: "Airport transfers & departures", d: "Reliable JKIA and Wilson pickups, on time." },
            { t: "Adventure awaits", d: "Built-for-safari 4x4s with roof tents on request." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
              <div className="h-9 w-9 rounded-md bg-primary/10 text-primary flex items-center justify-center font-bold">→</div>
              <h3 className="mt-4 font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Popular vehicles */}
      <Section eyebrow="Fleet" title="Our popular vehicles" subtitle="Hand-picked for Kenya's roads and adventures.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FLEET.map((v) => <VehicleCard key={v.name} v={v} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/fleet" className="inline-flex h-10 items-center rounded-md border border-border bg-background px-5 text-sm font-semibold hover:bg-accent">See full fleet →</Link>
        </div>
      </Section>

      {/* Categories */}
      <Section eyebrow="Categories" title="Find your vehicle type" subtitle="From economy commuters to safari beasts.">
        <div className="grid gap-4 md:grid-cols-2">
          <CategoryCard title="Budget-friendly sedans" copy="From KES 3,500/day — perfect for city runs and short trips." dark />
          <CategoryCard title="Safari 4x4s" copy="Land Cruisers and Prados ready for the Mara and Amboseli." />
          <CategoryCard title="SUVs" copy="Comfortable family rides with extra ground clearance." />
          <CategoryCard title="Luxury vehicles" copy="Make an entrance with our premium chauffeur fleet." />
          <div className="md:col-span-2">
            <CategoryCard title="Group travel made simple" copy="14-seater vans for family weekends, weddings and team outings." dark />
          </div>
        </div>
      </Section>

      {/* Why choose us */}
      <Section eyebrow="Why us" title="Why choose RiftRide" subtitle="Six promises that keep our travellers coming back.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-xl border border-border bg-card p-6">
              <r.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold">{r.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Destinations */}
      <Section eyebrow="Destinations" title="Explore Kenya's best routes" subtitle="Drive from Naivasha to the country's most loved escapes.">
        <div className="grid gap-6 md:grid-cols-3">
          {destinations.map((d) => (
            <div key={d.name} className="group relative overflow-hidden rounded-xl">
              <img src={d.img} alt={d.name} loading="lazy" className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 p-5 text-background">
                <h3 className="text-xl font-bold">{d.name}</h3>
                <p className="text-sm opacity-90 mt-1">{d.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section eyebrow="Reviews" title="Travellers love riding with us">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl border border-border bg-card p-6">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-3 text-sm">"{r.text}"</p>
              <div className="mt-4 text-sm">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.trip}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section eyebrow="FAQs" title="Frequently asked questions">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => <Faq key={i} {...f} />)}
        </div>
        <div className="mt-10 text-center">
          <div className="text-sm text-muted-foreground">Still have questions?</div>
          <Link to="/contact" className="mt-3 inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Contact us</Link>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to hit the road?</h2>
          <p className="mt-3 opacity-90 max-w-xl mx-auto">Reserve your vehicle in minutes. Pay deposit via M-Pesa, drive in confidence.</p>
          <div className="mt-6 flex gap-3 justify-center">
            <Link to="/fleet" className="inline-flex h-11 items-center rounded-md bg-background text-foreground px-6 text-sm font-semibold hover:bg-background/90">Book now</Link>
            <a href="https://wa.me/254757483413" className="inline-flex h-11 items-center rounded-md border border-background/40 px-6 text-sm font-semibold hover:bg-background/10">WhatsApp us</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Section({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-10">
        {eyebrow && <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">{eyebrow}</div>}
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function CategoryCard({ title, copy, dark }: { title: string; copy: string; dark?: boolean }) {
  return (
    <div className={`rounded-xl p-6 md:p-8 border border-border ${dark ? "bg-foreground text-background" : "bg-secondary text-foreground"}`}>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className={`mt-2 text-sm ${dark ? "text-background/80" : "text-muted-foreground"}`}>{copy}</p>
      <div className="mt-5 flex gap-2">
        <Link to="/fleet" className={`inline-flex h-9 items-center rounded-md px-4 text-xs font-semibold ${dark ? "bg-background text-foreground" : "bg-primary text-primary-foreground"}`}>Explore</Link>
        <Link to="/contact" className={`inline-flex h-9 items-center rounded-md border px-4 text-xs font-semibold ${dark ? "border-background/30 text-background" : "border-border"}`}>Enquire</Link>
      </div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
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
