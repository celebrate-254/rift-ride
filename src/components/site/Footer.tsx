import { Link } from "@tanstack/react-router";
import { Car, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <Car className="h-6 w-6" />
            RiftRide
          </div>
          <p className="mt-3 text-sm text-background/70 max-w-xs">
            Reliable car hire in Naivasha. Self-drive, chauffeur, airport transfers and safari 4x4s.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/fleet">Our Fleet</Link></li>
            <li><Link to="/self-drive">Self Drive</Link></li>
            <li><Link to="/airport-transfers">Airport Transfers</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Get in touch</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li className="flex gap-2 items-start"><Phone className="h-4 w-4 mt-0.5" />+254 757 483 413</li>
            <li className="flex gap-2 items-start"><Mail className="h-4 w-4 mt-0.5" />pkinuthia990@gmail.com</li>
            <li className="flex gap-2 items-start"><MapPin className="h-4 w-4 mt-0.5" />Moi South Lake Rd, Naivasha</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-background/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} RiftRide Car Hire. All rights reserved.</span>
          <span>Made in Naivasha, Kenya 🇰🇪</span>
        </div>
      </div>
    </footer>
  );
}
