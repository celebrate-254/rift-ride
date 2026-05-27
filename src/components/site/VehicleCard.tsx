import { Users, Fuel, Settings2, Snowflake } from "lucide-react";
import corolla from "@/assets/car-corolla.jpg";
import prado from "@/assets/car-prado.jpg";
import van from "@/assets/car-van.jpg";
import luxury from "@/assets/car-luxury.jpg";

export type Vehicle = {
  name: string;
  category: string;
  image: string;
  price: number;
  seats: number;
  transmission: string;
  fuel: string;
  ac: boolean;
};

export function VehicleCard({ v }: { v: Vehicle }) {
  const wa = `https://wa.me/254757483413?text=${encodeURIComponent(`Hi RiftRide, I'd like to book the ${v.name}.`)}`;
  return (
    <article className="group rounded-xl border border-border bg-card overflow-hidden flex flex-col transition-all hover:shadow-lg hover:-translate-y-0.5">
      <div className="aspect-[4/3] bg-secondary overflow-hidden">
        <img src={v.image} alt={v.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary">{v.category}</div>
        <h3 className="mt-1 text-lg font-bold">{v.name}</h3>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{v.seats} seats</span>
          <span className="flex items-center gap-1.5"><Settings2 className="h-3.5 w-3.5" />{v.transmission}</span>
          <span className="flex items-center gap-1.5"><Fuel className="h-3.5 w-3.5" />{v.fuel}</span>
          {v.ac && <span className="flex items-center gap-1.5"><Snowflake className="h-3.5 w-3.5" />A/C</span>}
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold text-foreground">KES {v.price.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">per day</div>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <a href={wa} target="_blank" rel="noreferrer" className="flex-1 inline-flex h-9 items-center justify-center rounded-md text-sm font-semibold text-white" style={{ backgroundColor: "var(--whatsapp)" }}>WhatsApp</a>
          <button className="flex-1 inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Book Now</button>
        </div>
      </div>
    </article>
  );
}

export const FLEET: Vehicle[] = [
  { name: "Toyota Corolla", category: "Economy", image: corolla, price: 3500, seats: 5, transmission: "Automatic", fuel: "Petrol", ac: true },
  { name: "Toyota Prado", category: "Safari 4x4", image: prado, price: 12000, seats: 7, transmission: "Automatic", fuel: "Diesel", ac: true },
  { name: "Toyota Hiace Van", category: "Group Travel", image: van, price: 8500, seats: 14, transmission: "Manual", fuel: "Diesel", ac: true },
  { name: "Mercedes E-Class", category: "Luxury", image: luxury, price: 18000, seats: 5, transmission: "Automatic", fuel: "Petrol", ac: true },
];
