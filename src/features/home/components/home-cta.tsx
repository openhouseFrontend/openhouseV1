import { Button } from "@/components/ui/button";

export function HomeCta() {
  return (
    <section className="pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-5 py-8 sm:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Need help choosing the right property?
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/80 sm:text-base">
                Talk to a local expert and get curated recommendations with zero brokerage charges.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button className="h-11">Book Free Consultation</Button>
              <Button variant="outline" className="h-11 border-white/35 bg-transparent text-white hover:bg-white/10">
                Browse Listings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
