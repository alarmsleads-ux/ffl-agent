import { Shield, Heart, TrendingUp, Umbrella } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Shield,
    title: "Term Life Insurance",
    desc: "Affordable coverage for a set period — ideal for protecting your family during your working years, mortgage, or while the kids are young.",
  },
  {
    icon: Heart,
    title: "Whole Life Insurance",
    desc: "Lifelong coverage with a guaranteed cash value component that grows over time, giving you protection and a financial asset in one.",
  },
  {
    icon: TrendingUp,
    title: "Indexed Universal Life",
    desc: "Flexible premiums with cash value growth tied to market indexes — a smart option for those who want protection and growth potential.",
  },
  {
    icon: Umbrella,
    title: "Final Expense",
    desc: "Smaller, simplified policies designed to cover end-of-life costs so your loved ones aren't burdened during a difficult time.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-sand/50 py-20 md:py-28">
      <div className="container">
        <SectionHeading />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading() {
  const ref = useScrollReveal();
  return (
    <h2
      ref={ref}
      className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl"
    >
      How I Can Help You
    </h2>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useScrollReveal(index * 80);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="group rounded-2xl bg-background p-7 shadow-sm ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-accent"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.desc}
      </p>
    </div>
  );
}
