import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type PropertyCardData = {
  title: string;
  location: string;
  price: string;
  image: string;
  tags: string[];
  label?: string;
  area?: string;
  bhk?: string;
};

type Props = {
  property: PropertyCardData;
  variant?: "featured" | "buy";
};

export function PropertyCard({ property, variant = "featured" }: Props) {
  if (variant === "buy") {
    return (
      <article className="overflow-hidden border bg-white shadow-sm transition hover:shadow-md">
        <div className="relative aspect-[16/10] bg-slate-100">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute top-2 left-2 flex gap-2">
            {property.tags.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                className="rounded-sm bg-white/90 px-2 py-0.5 text-[10px] text-slate-700 hover:bg-white/90"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-3xl font-medium leading-tight">{property.title}</h3>
          <p className="mt-1 text-xl leading-none text-muted-foreground">{property.price}</p>
          <p className="mt-2 text-sm text-muted-foreground">{property.location}</p>
        </div>

        {(property.area || property.bhk) && (
          <div className="flex items-center gap-4 border-t px-4 py-3 text-sm text-muted-foreground">
            {property.area ? <span>{property.area}</span> : null}
            {property.location ? <span>{property.location}</span> : null}
            {property.bhk ? <span>{property.bhk}</span> : null}
          </div>
        )}
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.10)] transition-all duration-300 hover:border-primary hover:bg-primary">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        {property.label ? (
          <Badge className="absolute top-3 left-3 h-5 rounded-full bg-primary px-2.5 text-[10px] font-semibold text-white hover:bg-primary">
            {property.label}
          </Badge>
        ) : null}
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-white">
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
  );
}
