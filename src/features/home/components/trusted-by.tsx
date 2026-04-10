const brands = ["DLF", "M3M", "Godrej", "HDFC", "ICICI"];

export function TrustedBy() {
  return (
    <section id="trusted" className="pb-16 pt-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-bold tracking-wider text-primary uppercase">Trusted by</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Top developers and finance partners
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 rounded-2xl border bg-card p-4 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-lg border bg-muted px-3 py-4 text-center text-sm font-semibold text-muted-foreground"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
