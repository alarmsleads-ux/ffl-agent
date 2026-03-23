import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAgentData } from "@/contexts/AgentDataContext";
import agentPhotoDefault from "@/assets/agent-headshot.jpg";

export default function HeroSection() {
  const { data } = useAgentData();
  const photo = data.headshotUrl || agentPhotoDefault;

  return (
    <section className="relative overflow-hidden pb-10 pt-14 md:pt-20">
      <div className="container flex flex-col items-center text-center">
        <div className="relative animate-reveal">
          <div className="absolute -inset-3 rounded-full bg-accent/20 blur-xl" />
          <img
            src={photo}
            alt={`${data.name} — Licensed Life Insurance Agent`}
            className="relative z-10 h-36 w-36 rounded-full object-cover shadow-lg ring-4 ring-background md:h-44 md:w-44"
          />
        </div>

        <h1
          className="mt-6 text-2xl font-bold tracking-tight text-foreground animate-reveal md:text-3xl"
          style={{ animationDelay: "100ms" }}
        >
          {data.name}
        </h1>

        <p
          className="text-pretty mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground animate-reveal"
          style={{ animationDelay: "200ms" }}
        >
          {data.shortBio}
        </p>

        <div
          className="mt-7 flex flex-wrap justify-center gap-3 animate-reveal"
          style={{ animationDelay: "300ms" }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href={data.calendarUrl}>
              <CalendarDays size={17} />
              See My Calendar
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#about">More About Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
