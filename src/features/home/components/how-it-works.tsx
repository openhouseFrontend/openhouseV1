import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    step: "STEP 01",
    label: "Discovery",
    title: "Consult and shortlist",
    description:
      "Tell us your budget, preferred localities, and lifestyle needs. We curate high-fit options instead of flooding you with listings.",
    output: "Curated shortlist in 24 hours",
  },
  {
    step: "STEP 02",
    label: "Evaluation",
    title: "Visit and compare",
    description:
      "Tour verified homes with our advisors, compare pricing benchmarks, and evaluate fit using transparent data-backed insights.",
    output: "Final 1-2 properties with confidence",
  },
  {
    step: "STEP 03",
    label: "Closure",
    title: "Negotiate and close",
    description:
      "We support offer strategy, legal checks, and final paperwork so you close safely without unexpected delays or hidden costs.",
    output: "Smooth closure with full documentation",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold tracking-wider text-primary uppercase">
              How it works
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A structured home-buying process
            </h2>
          </div>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-right">
            From discovery to documentation, every step is managed by specialists so you move
            faster with better decisions.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.step} className="rounded-2xl border">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wide text-primary">
                    {step.step}
                  </span>
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {step.label}
                  </span>
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                <div className="mt-4 rounded-xl bg-muted px-3 py-2 text-xs font-medium text-muted-foreground">
                  Output: {step.output}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
