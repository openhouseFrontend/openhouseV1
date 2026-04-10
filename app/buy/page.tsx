import { BuyFiltersSidebar } from "@/src/features/buy/components/buy-filters-sidebar";
import { BuyPropertyGrid } from "@/src/features/buy/components/buy-property-grid";
import { BuySearchToolbar } from "@/src/features/buy/components/buy-search-toolbar";

export default function BuyPage() {
  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-2 flex flex-col gap-4 lg:flex-row">
          <aside className="lg:sticky lg:top-[88px] lg:h-fit lg:w-[280px] lg:shrink-0">
            <BuyFiltersSidebar />
          </aside>

          <div className="min-w-0 flex-1 space-y-4">
            <BuySearchToolbar />
            <BuyPropertyGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
