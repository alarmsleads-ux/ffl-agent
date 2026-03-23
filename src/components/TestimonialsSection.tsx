import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "Marcus explained everything in plain English. For the first time, I actually understood my policy — and felt confident about it.",
    name: "Sarah M.",
  },
  {
    quote:
      "We were overwhelmed after having our first child. Marcus walked us through our options without any pressure and found us the perfect plan.",
    name: "David & Leah R.",
  },
  {
    quote:
      "I'd been putting off life insurance for years because it felt complicated. Marcus made the whole process simple and even enjoyable.",
    name: "James T.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-sand/50 py-20 md:py-28">
      <div className="container">
        <Heading />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Heading() {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="text-center">
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        What Families Are Saying
      </h2>
      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-accent" />
    </div>
  );
}

function Card({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useScrollReveal(index * 100);

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-background p-7 shadow-sm ring-1 ring-border/60"
    >
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-gold-star text-gold-star"
          />
        ))}
      </div>
      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
        "{testimonial.quote}"
      </p>
      <p className="mt-5 text-sm font-semibold text-foreground">
        — {testimonial.name}
      </p>
    </div>
  );
}
