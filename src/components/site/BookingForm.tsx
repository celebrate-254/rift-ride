import { MapPin, Calendar, Car as CarIcon } from "lucide-react";

export function BookingForm({ compact = false }: { compact?: boolean }) {
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); window.location.href = "/fleet"; }}
      className={`rounded-xl bg-card text-card-foreground shadow-xl border border-border ${compact ? "p-4" : "p-5 md:p-6"}`}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <Field label="Pickup location" icon={<MapPin className="h-4 w-4" />}>
          <select className="w-full bg-transparent text-sm outline-none">
            <option>Naivasha Town</option>
            <option>Lake Naivasha</option>
            <option>JKIA Nairobi</option>
            <option>Nakuru</option>
            <option>Maai Mahiu</option>
          </select>
        </Field>
        <Field label="Pickup date" icon={<Calendar className="h-4 w-4" />}>
          <input type="date" className="w-full bg-transparent text-sm outline-none" />
        </Field>
        <Field label="Return date" icon={<Calendar className="h-4 w-4" />}>
          <input type="date" className="w-full bg-transparent text-sm outline-none" />
        </Field>
        <Field label="Vehicle type" icon={<CarIcon className="h-4 w-4" />}>
          <select className="w-full bg-transparent text-sm outline-none">
            <option>Economy</option>
            <option>SUV</option>
            <option>Safari 4x4</option>
            <option>Luxury</option>
            <option>Van</option>
          </select>
        </Field>
      </div>
      <button className="mt-5 w-full md:w-auto md:px-10 inline-flex h-11 items-center justify-center rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
        Book Now
      </button>
    </form>
  );
}

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1 flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2.5">
        <span className="text-muted-foreground">{icon}</span>
        {children}
      </div>
    </label>
  );
}
