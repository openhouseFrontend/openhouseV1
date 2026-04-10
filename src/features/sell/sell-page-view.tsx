"use client";

import { useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, CircleDollarSign, FileText, ShieldCheck, UserCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const brand = {
  orange: "#F05A22",
  orangeDark: "#D44A14",
  offWhite: "#FDF9F7",
  charcoal: "#1C1917",
  gray: "#5C5652",
  border: "#EDE9E5",
};

const sectionEyebrow =
  "text-[11px] font-bold uppercase tracking-[1.5px] text-[color:#F05A22]";

const trustStats = [
  { number: "12,000+", label: "Properties Sold" },
  { number: "2,400+", label: "Active Listings" },
  { number: "180+", label: "Verified Builders" },
  { number: "Rs 0", label: "Brokerage for Sellers" },
  { number: "4.8★", label: "Seller Rating" },
];

const benefits = [
  {
    title: "Free Listing",
    description: "Post unlimited photos, floor plans, and videos at zero cost.",
    icon: FileText,
  },
  {
    title: "Verified Buyer Network",
    description: "Only KYC-verified, serious buyers see your listing.",
    icon: UserCheck,
  },
  {
    title: "Zero Brokerage",
    description: "We never charge sellers. Your profit stays yours.",
    icon: CircleDollarSign,
  },
  {
    title: "RERA Compliance Help",
    description: "Our team helps you get RERA paperwork in order.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Relationship Manager",
    description: "A real human assigned to your property.",
    icon: BadgeCheck,
  },
  {
    title: "Price Insights",
    description: "See what similar properties sold for in your locality before you price.",
    icon: ArrowRight,
  },
];

const processSteps = [
  {
    step: "1",
    title: "Post Your Property",
    description: "Fill the form, add photos, set your price. Takes 3 minutes.",
  },
  {
    step: "2",
    title: "We Verify & Promote",
    description: "Our team verifies your listing and boosts it to 50,000+ buyers.",
  },
  {
    step: "3",
    title: "Buyer Visits & Negotiations",
    description: "We schedule site visits and help you negotiate the best price.",
  },
  {
    step: "4",
    title: "Close & Get Paid",
    description: "Legal support, agreement drafting, and smooth registration.",
  },
];

const testimonials = [
  {
    quote: "Sold my 3 BHK in Sector 57 in just 18 days. The RM was incredibly helpful.",
    name: "Rajesh K.",
    meta: "Sector 57 • 3 BHK sold",
  },
  {
    quote: "Zero brokerage saved us Rs 4.2 lakhs. Will always use Openhouse.",
    name: "Priya M.",
    meta: "Golf Course Road • 4 BHK sold",
  },
  {
    quote: "Got 12 serious inquiries in the first week. Unbelievable reach.",
    name: "Amit S.",
    meta: "DLF Phase 4 • 3 BHK sold",
  },
];

const localityData: Record<
  string,
  { avgPrice: string; avgDays: string; activeListings: string; trend: number[] }
> = {
  "Golf Course Road": {
    avgPrice: "Rs 24,500/sq.ft",
    avgDays: "22 days",
    activeListings: "132",
    trend: [16, 17, 18, 18, 19, 21],
  },
  "DLF Phase 5": {
    avgPrice: "Rs 21,800/sq.ft",
    avgDays: "25 days",
    activeListings: "98",
    trend: [14, 15, 16, 17, 18, 19],
  },
  "Sohna Road": {
    avgPrice: "Rs 14,900/sq.ft",
    avgDays: "28 days",
    activeListings: "214",
    trend: [10, 11, 12, 12, 13, 14],
  },
  "Sector 57": {
    avgPrice: "Rs 18,600/sq.ft",
    avgDays: "24 days",
    activeListings: "167",
    trend: [12, 13, 13, 14, 15, 16],
  },
  "Dwarka Expressway": {
    avgPrice: "Rs 13,200/sq.ft",
    avgDays: "31 days",
    activeListings: "286",
    trend: [8, 9, 10, 10, 11, 12],
  },
  "New Gurugram": {
    avgPrice: "Rs 12,400/sq.ft",
    avgDays: "34 days",
    activeListings: "304",
    trend: [7, 8, 8, 9, 10, 11],
  },
};

const faqs = [
  {
    q: "Is listing on Openhouse really free?",
    a: "Yes. Basic property listing on Openhouse is completely free for sellers, with no hidden onboarding fee.",
  },
  {
    q: "How long does it take to sell a property?",
    a: "Most verified listings in Gurugram receive qualified inquiries within the first 7 days, and many close in 3-5 weeks.",
  },
  {
    q: "Do I need RERA registration to list?",
    a: "If your property category requires RERA compliance, our team helps you complete paperwork before promotion.",
  },
  {
    q: "How does Openhouse find buyers for my property?",
    a: "We distribute your listing to our verified buyer network, paid channels, and local intent-based traffic funnels.",
  },
  {
    q: "What documents do I need to sell?",
    a: "Typically title deed, ID proof, tax receipts, society NOC, and any loan closure documents if applicable.",
  },
  {
    q: "Can I list multiple properties?",
    a: "Yes, you can list multiple homes, builder floors, plots, or investment units from the same account.",
  },
  {
    q: "Is there any commission on the sale price?",
    a: "No brokerage is charged from sellers on standard plans. Paid plans are optional visibility upgrades.",
  },
  {
    q: "How do I get a Relationship Manager assigned?",
    a: "Once your listing is published and verified, a dedicated RM is assigned automatically on Boost and Elite plans.",
  },
];

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className={sectionEyebrow}>{eyebrow}</p>
      <h2 className="mt-2 text-4xl leading-tight font-semibold text-[color:#1C1917]">{title}</h2>
    </div>
  );
}

export function SellPageView() {
  const [selectedLocality, setSelectedLocality] = useState("Golf Course Road");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const locality = useMemo(() => localityData[selectedLocality], [selectedLocality]);

  return (
    <div className="bg-white text-[color:#5C5652]">
      <section
        className="relative overflow-hidden py-14"
        style={{
          backgroundColor: brand.orange,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="text-white">
            <h1 className="text-5xl leading-[1.05] font-semibold">
              Sell Your Property. <em className="italic">Fast</em>, Free & Hassle-Free.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/95">
              Join 12,000+ homeowners who sold with Openhouse. No brokerage. No hidden charges.
            </p>

            <div className="mt-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { icon: FileText, label: "Step 1", title: "Post Your Property" },
                  { icon: UserCheck, label: "Step 2", title: "Get Verified Buyers" },
                  { icon: BadgeCheck, label: "Step 3", title: "Close the Deal" },
                ].map((item, idx) => (
                  <div key={item.title} className="relative rounded-xl border border-white/35 bg-white/10 p-4 backdrop-blur">
                    {idx < 2 ? (
                      <span className="absolute top-1/2 left-full hidden h-[2px] w-6 -translate-y-1/2 bg-[#F8A17D] sm:block" />
                    ) : null}
                    <item.icon className="size-5" />
                    <p className="mt-2 text-xs font-semibold tracking-wide uppercase text-white/80">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[color:#EDE9E5] bg-white p-5 shadow-[0_18px_42px_rgba(0,0,0,0.14)]">
            <h3 className="text-2xl font-semibold text-[color:#1C1917]">List your property</h3>
            <p className="mt-1 text-sm text-[color:#5C5652]">Get started in less than 3 minutes</p>
            <div className="mt-4 space-y-3">
              <Input placeholder="Full Name" className="h-11 border-[color:#EDE9E5]" />
              <div className="flex h-11 items-center rounded-lg border border-[color:#EDE9E5] bg-white px-3">
                <span className="mr-2 text-sm text-[color:#5C5652]">+91</span>
                <Input
                  placeholder="Mobile Number"
                  className="h-10 border-0 px-0 focus-visible:ring-0"
                />
              </div>

              <Select defaultValue="apartment">
                <SelectTrigger className="h-11 w-full border-[color:#EDE9E5]">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="builder-floor">Builder Floor</SelectItem>
                  <SelectItem value="plot">Plot</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="sector-57">
                <SelectTrigger className="h-11 w-full border-[color:#EDE9E5]">
                  <SelectValue placeholder="Locality in Gurugram" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sector-57">Sector 57</SelectItem>
                  <SelectItem value="golf-course-road">Golf Course Road</SelectItem>
                  <SelectItem value="dlf-phase-5">DLF Phase 5</SelectItem>
                  <SelectItem value="sohna-road">Sohna Road</SelectItem>
                  <SelectItem value="new-gurugram">New Gurugram</SelectItem>
                </SelectContent>
              </Select>

              <Input placeholder="Expected Price (Rs)" className="h-11 border-[color:#EDE9E5]" />

              <Button
                className="h-11 w-full rounded-lg text-base font-bold text-white"
                style={{ backgroundColor: brand.orange }}
              >
                List My Property Free <ArrowRight className="ml-1 size-4" />
              </Button>

              <p className="text-center text-xs text-[color:#5C5652]">
                Free listing · No spam · RERA compliant
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-2 px-4 py-6 sm:grid-cols-2 sm:gap-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          {trustStats.map((item, idx) => (
            <div
              key={item.label}
              className={`px-2 ${idx < trustStats.length - 1 ? "lg:border-r lg:border-[color:#EDE9E5]" : ""}`}
            >
              <p className="text-3xl font-semibold text-[color:#F05A22]">{item.number}</p>
              <p className="mt-1 text-sm text-[color:#5C5652]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[color:#FDF9F7] py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="WHY OPENHOUSE" title="Everything a Seller Needs" />
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[color:#EDE9E5] bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(28,25,23,0.10)]"
              >
                <item.icon className="size-6 text-[color:#F05A22]" />
                <h3 className="mt-3 text-xl font-semibold text-[color:#1C1917]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:#5C5652]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="THE PROCESS" title="List to Sold in 4 Simple Steps" />

          <div className="relative grid gap-6 md:grid-cols-4">
            <div className="absolute top-6 right-0 left-0 hidden border-t-2 border-dashed border-[color:#F6B198] md:block" />
            {processSteps.map((item) => (
              <article key={item.step} className="relative">
                <div className="relative z-10 inline-flex size-12 items-center justify-center rounded-full bg-[color:#F05A22] text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[color:#1C1917]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:#5C5652]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:#1C1917] py-14">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <p className={sectionEyebrow}>SELLER DASHBOARD</p>
            <h2 className="mt-2 text-4xl leading-tight font-semibold text-white">
              Track Every Lead in Real Time
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/85">
              Know exactly who viewed your listing, how many inquiries came in, and what buyers are
              saying — all from one dashboard.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Live listing views counter",
                "Buyer inquiry notifications",
                "Scheduled visit calendar",
                "Price comparison chart",
                "Document upload center",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2 text-white">
                  <span className="size-2 rounded-full bg-[color:#F05A22]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#2A2A2A] p-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Views", value: "1,240" },
                { label: "Inquiries", value: "34" },
                { label: "Visits", value: "8" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-black/20 p-3">
                  <p className="text-xs text-white/70">{item.label}</p>
                  <p className="mt-1 text-xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg bg-black/25 p-4">
              <p className="mb-3 text-sm text-white/75">Price trend (last 6 months)</p>
              <div className="flex items-end gap-2">
                {[30, 46, 39, 55, 48, 62].map((h, idx) => (
                  <div key={idx} className="flex-1">
                    <div
                      className="w-full rounded-t bg-[color:#F05A22]"
                      style={{ height: `${h * 1.3}px` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 inline-flex rounded-full bg-[color:#F05A22] px-3 py-1 text-xs font-semibold text-white">
              3 new inquiries today
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="PLANS" title="Simple, Transparent Pricing" />

          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                name: "Free",
                price: "Rs 0/month",
                features: "Basic listing, 5 photos, standard placement.",
                cta: "Get Started Free",
                popular: false,
              },
              {
                name: "Boost",
                price: "Rs 999/month",
                features: "Featured placement, 20 photos, video tour, dedicated RM, priority support.",
                cta: "Boost My Listing",
                popular: true,
              },
              {
                name: "Elite",
                price: "Rs 2,499/month",
                features: "Homepage feature, unlimited photos, professional photography, legal assistance, instant buyer matching.",
                cta: "Go Elite",
                popular: false,
              },
            ].map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-2xl border bg-white p-6 ${
                  plan.popular ? "border-2 border-[color:#F05A22]" : "border-[color:#EDE9E5]"
                }`}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 right-4 rounded-full bg-[color:#F05A22] px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="text-2xl font-semibold text-[color:#1C1917]">{plan.name}</h3>
                <p className="mt-2 text-3xl font-semibold text-[color:#F05A22]">{plan.price}</p>
                <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-[color:#5C5652]">{plan.features}</p>
                <Button
                  className="mt-5 h-10 w-full rounded-lg font-bold text-white"
                  style={{ backgroundColor: brand.orange }}
                >
                  {plan.cta}
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:#FDF9F7] py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="SUCCESS STORIES" title="Sellers Who Closed Fast" />
          <div className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-[color:#EDE9E5] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(28,25,23,0.08)]"
              >
                <p className="text-xl leading-relaxed font-medium italic text-[color:#1C1917]">
                  “{item.quote}”
                </p>
                <p className="mt-4 text-sm text-[color:#F05A22]">★★★★★</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[color:#F05A22] text-sm font-bold text-white">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-[color:#1C1917]">{item.name}</p>
                    <p className="text-sm text-[color:#5C5652]">{item.meta}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="MARKET DATA" title="Know Your Property's Worth" />

          <div className="rounded-2xl border border-[color:#EDE9E5] bg-white p-5">
            <div className="max-w-sm">
              <Select value={selectedLocality} onValueChange={setSelectedLocality}>
                <SelectTrigger className="h-11 w-full border-[color:#EDE9E5]">
                  <SelectValue placeholder="Select locality" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(localityData).map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Avg Sale Price", value: locality.avgPrice },
                { label: "Avg Days to Sell", value: locality.avgDays },
                { label: "Active Listings", value: locality.activeListings },
              ].map((metric) => (
                <div key={metric.label} className="rounded-xl border border-[color:#EDE9E5] bg-[color:#FDF9F7] p-4">
                  <p className="text-xs tracking-wide uppercase text-[color:#5C5652]">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-[color:#1C1917]">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-[color:#1C1917] p-4">
              <p className="mb-3 text-sm text-white/80">Price trend (Jan-Jun 2026)</p>
              <div className="flex items-end gap-2">
                {locality.trend.map((value, idx) => (
                  <div key={idx} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t bg-[color:#F05A22]"
                      style={{ height: `${value * 4}px` }}
                    />
                    <span className="text-[10px] text-white/75">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][idx]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:#FDF9F7] py-14">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQs" title="Everything You Need to Know" />
          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const open = openFaq === idx;
              return (
                <article
                  key={item.q}
                  className="overflow-hidden rounded-xl border border-[color:#EDE9E5] bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : idx)}
                    className="flex w-full items-center justify-between px-4 py-4 text-left"
                  >
                    <span className="font-semibold text-[color:#1C1917]">{item.q}</span>
                    <span className="ml-3 text-xl font-bold text-[color:#F05A22]">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-4 pb-4 text-sm text-[color:#5C5652]">
                      {item.a}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div
        className="fixed right-0 bottom-0 left-0 z-40 border-t border-[color:#EDE9E5]"
        style={{ backgroundColor: brand.orange }}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-white sm:text-base">
            Ready to Sell? List your property in 3 minutes.
          </p>
          <div className="flex gap-2">
            <Button
              className="h-10 rounded-lg bg-white px-4 font-bold text-[color:#F05A22] hover:bg-white/90"
            >
              List Free Now
            </Button>
            <Button
              variant="outline"
              className="h-10 rounded-lg border-white bg-transparent px-4 font-bold text-white hover:bg-white/10"
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
}
