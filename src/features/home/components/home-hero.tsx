"use client";

import { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const metrics = [
  { value: "2,400+", label: "Active listings" },
  { value: "180+", label: "Verified builders" },
  { value: "12,000+", label: "Homes sold" },
  { value: "98%", label: "Client satisfaction" },
];

export function HomeHero() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="relative min-h-[calc(100vh-56px)] overflow-hidden sm:min-h-[calc(100vh-64px)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/uu3loaar/video/upload/v1757504119/Web%20Assets/videos/Buy_home_video-1.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 to-slate-900/25" />

      <div className="relative mx-auto flex min-h-[calc(100vh-56px)] w-full max-w-7xl items-end px-4 py-8 sm:min-h-[calc(100vh-64px)] sm:px-6 sm:py-10 lg:px-8 lg:pb-16">
        <div className="w-full max-w-4xl">
          <p className="mb-3 text-xs font-bold tracking-wide text-orange-300 uppercase">
            Gurugram&apos;s trusted home platform
          </p>
          <h1 className="text-4xl leading-[1.06] font-extrabold text-white sm:text-5xl lg:text-6xl">
            Find your perfect home
            <br className="hidden sm:block" /> without the stress.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Verified listings, clear pricing, and local experts who guide you from shortlist to keys.
            No hidden brokerage. No confusion.
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:max-w-md sm:flex-row">
            <Button className="h-11 w-full bg-primary text-primary-foreground">Explore Properties</Button>
            <Button variant="outline" className="hidden h-11 w-full border-white/40 bg-white/15 text-white hover:bg-white/25 sm:flex">
              Book Free Consultation
            </Button>
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-6 hidden grid-cols-1 gap-2 rounded-2xl border border-slate-200 bg-background p-3 shadow-lg sm:mt-7 md:grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_auto]"
          >
            <Input placeholder="Locality, project, or builder" className="h-11 bg-muted" />

            <Select defaultValue="any-budget">
              <SelectTrigger className="h-11 w-full bg-muted">
                <SelectValue placeholder="Any Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any-budget">Any Budget</SelectItem>
                <SelectItem value="under-1cr">Under 1 Cr</SelectItem>
                <SelectItem value="1-3cr">1 Cr - 3 Cr</SelectItem>
                <SelectItem value="3-5cr">3 Cr - 5 Cr</SelectItem>
                <SelectItem value="5cr-plus">5 Cr+</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="any-type">
              <SelectTrigger className="h-11 w-full bg-muted">
                <SelectValue placeholder="Any Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any-type">Any Type</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="builder-floor">Builder Floor</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
              </SelectContent>
            </Select>

            <Button type="submit" className="h-11 px-6">
              Search
            </Button>
          </form>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/20 bg-slate-900/45 px-3 py-2.5 backdrop-blur">
                <p className="text-2xl leading-none font-bold text-white">{item.value}</p>
                <p className="mt-1 text-xs text-white/85">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
