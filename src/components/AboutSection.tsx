import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAgentData } from "@/contexts/AgentDataContext";

export default function AboutSection() {
  const ref = useScrollReveal();
  const { data } = useAgentData();

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container max-w-3xl" ref={ref}>
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Meet {data.name}
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-accent" />

        <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {data.bio && <p>{data.bio}</p>}
        </div>

        <p className="mt-10 text-center font-signature text-3xl text-foreground">
          {data.name}
        </p>

      </div>
    </section>
  );
}
