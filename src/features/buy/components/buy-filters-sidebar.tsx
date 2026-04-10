"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

const localities = [
  ["Goregaon", 13],
  ["Powai", 10],
  ["Kanjurmarg", 7],
  ["Bhandup", 3],
  ["Vikhroli", 3],
  ["Chandivali", 3],
  ["Andheri West", 2],
  ["Malad", 1],
  ["Ghatkopar", 1],
  ["Jogeshwari East", 1],
] as const;

const bedrooms = ["1 BHK", "2 BHK", "2.5 BHK", "3 BHK"] as const;
const bathrooms = ["1 Bath", "2 Bath", "3 Bath", "4 Bath"] as const;

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function FilterSection({ title, children }: SectionProps) {
  return (
    <section className="border-t pt-5 first:border-t-0 first:pt-0">
      <p className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {title}
      </p>
      {children}
    </section>
  );
}

export function BuyFiltersSidebar() {
  const [priceRange, setPriceRange] = useState<number[]>([1, 9]);

  return (
    <aside className="rounded-xl border bg-white p-4">
      <div className="space-y-5">
        <FilterSection title="Locality">
          <div className="flex flex-wrap gap-2">
            {localities.map(([name, count]) => (
              <button
                key={name}
                type="button"
                className="rounded-full border bg-white px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50"
              >
                {name} <span className="text-muted-foreground">{count}</span>
              </button>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Bedrooms">
          <div className="flex flex-wrap gap-2">
            {bedrooms.map((item) => (
              <Badge key={item} variant="outline" className="h-8 rounded-full bg-white px-3 text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Price">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Range</span>
            <span className="font-medium text-primary">
              [{priceRange[0]} - {priceRange[1]} CR]
            </span>
          </div>
          <Slider
            value={priceRange}
            min={1}
            max={9}
            step={1}
            onValueChange={setPriceRange}
            className="py-3"
          />
          <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
            {[1, 3, 5, 7, 9].map((v) => (
              <span key={v}>{v}</span>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Bathrooms">
          <div className="flex flex-wrap gap-2">
            {bathrooms.map((item) => (
              <Badge key={item} variant="outline" className="h-8 rounded-full bg-white px-3 text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </FilterSection>
      </div>
    </aside>
  );
}
