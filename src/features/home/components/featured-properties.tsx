import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const filters = ["All", "Ready to move", "New launch", "3 BHK", "Luxury"];

const properties = [
  {
    title: "Ireo Victory Valley",
    location: "Sector 67, Gurugram",
    price: "Rs 2.8 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    tags: ["3 BHK", "2,200 sq.ft", "Furnished"],
    label: "New",
  },
  {
    title: "DLF The Arbour",
    location: "Sector 63, Golf Course Extension",
    price: "Rs 4.5 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    tags: ["4 BHK", "3,500 sq.ft", "Clubhouse"],
    label: "Hot",
  },
  {
    title: "M3M Skywalk",
    location: "Sector 74, Gurugram",
    price: "Rs 1.2 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    tags: ["2 BHK", "1,350 sq.ft", "Metro Access"],
    label: "RERA",
  },
];

export function FeaturedProperties() {
  return (
    <section id="featured" className="py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold tracking-wider text-primary uppercase">
              Featured properties
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Handpicked premium homes in Gurugram
            </h2>
          </div>
          <Button variant="link" className="px-0 text-primary">
            View all listings
          </Button>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((filter, idx) => (
            <Button
              key={filter}
              size="sm"
              variant={idx === 0 ? "default" : "outline"}
              className={
                idx === 0
                  ? "h-8 rounded-full bg-primary px-3 text-xs font-semibold text-white hover:bg-[#E64A19]"
                  : "h-8 rounded-full border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {properties.map((property) => (
            <article
              key={property.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.10)] transition-all duration-300 hover:border-primary hover:bg-primary"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <Badge className="absolute top-3 left-3 h-5 rounded-full bg-primary px-2.5 text-[10px] font-semibold text-white hover:bg-primary">
                  {property.label}
                </Badge>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-xl leading-tight font-bold text-slate-900 transition-colors duration-300 group-hover:text-white">
                  {property.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 transition-colors duration-300 group-hover:text-white/90">
                  {property.location}
                </p>
                <p className="mt-2 text-3xl leading-none font-bold text-slate-900 transition-colors duration-300 group-hover:text-white">
                  {property.price}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {property.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="h-5 rounded-full border-slate-200 bg-white px-2.5 text-[11px] font-medium text-slate-700 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/15 group-hover:text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="mt-4 h-9 rounded-lg bg-primary px-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#E64A19] group-hover:bg-white group-hover:text-primary">
                  View Details
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
