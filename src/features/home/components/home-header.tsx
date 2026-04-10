"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Buy", href: "#featured" },
  { label: "Sell", href: "/sell" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Trusted by", href: "#trusted" },
];

export function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-primary">
          <Image
            src="/D-logo.png"
            alt="Openhouse logo"
            width={122}
            height={32}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <Button size="sm">List Property</Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/D-logo.png"
                  alt="Openhouse logo"
                  width={122}
                  height={32}
                  className="h-7 w-auto"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-2 flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-3">List Property</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
