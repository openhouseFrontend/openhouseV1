"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Bought in Sector 67",
    text: "Openhouse made the process smooth and delightful. The listings were accurate, negotiations were transparent, and we closed in under three weeks.",
    type: "3 BHK Apartment",
    timeline: "19 days",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rahul Mehta",
    location: "Bought in DLF Phase 5",
    text: "We shortlisted only verified homes and never faced hidden charges. The team handled legal checks and valuation details with professionalism.",
    type: "4 BHK Luxury Home",
    timeline: "24 days",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Neha Arora",
    location: "Bought in New Gurugram",
    text: "From first shortlist to final paperwork, every step felt curated and confident. This was our most buyer-friendly real estate journey.",
    type: "3 BHK Apartment",
    timeline: "16 days",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const item = testimonials[active];

  return (
    <section id="testimonials" className="py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-bold tracking-wider text-primary uppercase">Testimonials</p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by home buyers in Gurugram
          </h2>
          <div className="hidden gap-2 sm:flex">
            <Button variant="outline" size="icon-sm" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon-sm" onClick={next} aria-label="Next testimonial">
              <ChevronRight />
            </Button>
          </div>
        </div>

        <Card className="mt-8 rounded-3xl border">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <span className="text-5xl leading-none font-bold text-primary/30">“</span>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground sm:text-xl">{item.text}</p>
                <p className="mt-5 text-primary">★★★★★</p>
              </div>
              <div className="rounded-2xl bg-primary/5 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={item.image} alt={item.name} />
                    <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-base font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Type:</span> {item.type}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Timeline:</span> {item.timeline}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-5 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={index === active ? "h-2.5 w-8 rounded-full bg-primary" : "h-2.5 w-2.5 rounded-full bg-muted-foreground/35"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
