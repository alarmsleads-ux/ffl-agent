import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container max-w-3xl" ref={ref}>
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Meet Marcus Rivera
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-accent" />

        <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Growing up, my family didn't have a financial safety net. When my
            father passed unexpectedly, I saw firsthand how the absence of
            proper planning can turn grief into a financial crisis overnight.
            That experience shaped everything I do today.
          </p>
          <p>
            I became a licensed life insurance professional not to sell
            policies — but to make sure no family has to face what mine did.
            Every conversation I have starts with listening: understanding your
            goals, your worries, and the people counting on you.
          </p>
          <p>
            Whether you're a new parent looking for your first term policy or a
            business owner planning for the long term, I'm here to guide you
            through the options in plain language — no jargon, no pressure, just
            honest advice.
          </p>
        </div>

        <p className="mt-10 text-center font-signature text-3xl text-foreground">
          Marcus Rivera
        </p>
      </div>
    </section>
  );
}
