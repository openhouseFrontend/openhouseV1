import { Button } from "@/components/ui/button";
import { PropertyCard, type PropertyCardData } from "@/src/features/property/components/property-card";

const filters = ["All", "Ready to move", "New launch", "3 BHK", "Luxury"];

const properties: PropertyCardData[] = [
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
            <PropertyCard key={property.title} property={property} variant="featured" />
          ))}
        </div>
      </div>
    </section>
  );
}
