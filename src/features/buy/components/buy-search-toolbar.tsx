"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function BuySearchToolbar() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex w-full items-center gap-2 sm:max-w-md">
        <Search className="size-4 text-muted-foreground" />
        <Input
          placeholder="Search locality, project, or builder"
          className="h-9 border-0 bg-slate-100"
        />
      </div>

      <div className="flex items-center gap-2">
        <Select defaultValue="relevance">
          <SelectTrigger className="h-9 w-40 bg-white">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevance</SelectItem>
            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
