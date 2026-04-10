import {
  PropertyCard,
  type PropertyCardData,
} from "@/src/features/property/components/property-card";

const homes: PropertyCardData[] = [
  {
    title: "3 BHK in Runwal Bliss",
    price: "INR 4 Cr.",
    area: "1249 Sq.ft",
    location: "Kanjurmarg",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    tags: ["Ample Sunlight", "Ready to move in"],
    bhk: "3 BHK",
  },
  {
    title: "3 BHK in Raj Infinia",
    price: "INR 3.29 Cr.",
    area: "1095 Sq.ft",
    location: "Malad",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    tags: ["City view", "Ready to move in"],
    bhk: "3 BHK",
  },
  {
    title: "3 BHK in Mahindra Splendour",
    price: "INR 3.25 Cr.",
    area: "1276 Sq.ft",
    location: "Bhandup",
    image:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1200&q=80",
    tags: ["Spacious", "Ready to move in"],
    bhk: "3 BHK",
  },
  {
    title: "2 BHK in Lodha Crown",
    price: "INR 1.42 Cr.",
    area: "890 Sq.ft",
    location: "Thane",
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Greenery view", "Ready to move in"],
    bhk: "2 BHK",
  },
  {
    title: "2.5 BHK in Oberoi Enigma",
    price: "INR 2.95 Cr.",
    area: "1012 Sq.ft",
    location: "Mulund",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    tags: ["Clubhouse", "Ready to move in"],
    bhk: "2.5 BHK",
  },
  {
    title: "3 BHK in Godrej Urban Park",
    price: "INR 3.89 Cr.",
    area: "1320 Sq.ft",
    location: "Vikhroli",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Premium", "Ready to move in"],
    bhk: "3 BHK",
  },
];

export function BuyPropertyGrid() {
  return (
    <div>
      <h1 className="mb-5 text-3xl font-semibold tracking-tight">44 Handpicked homes</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {homes.map((home) => (
          <PropertyCard key={home.title} property={home} variant="featured" />
        ))}
      </div>
    </div>
  );
}
