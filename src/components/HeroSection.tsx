import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import agentPhoto from "@/assets/agent-headshot.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-10 pt-14 md:pt-20">
      <div className="container flex flex-col items-center text-center">
        {/* Headshot */}
        <div
          className="relative animate-reveal"
        >
          <div className="absolute -inset-3 rounded-full bg-accent/20 blur-xl" />
          <img
            src={agentPhoto}
            alt="Marcus Rivera — Licensed Life Insurance Agent"
            className="relative z-10 h-36 w-36 rounded-full object-cover shadow-lg ring-4 ring-background md:h-44 md:w-44"
          />
        </div>

        {/* Name */}
        <h1
          className="mt-6 text-2xl font-bold tracking-tight text-foreground animate-reveal md:text-3xl"
          style={{ animationDelay: "100ms" }}
        >
          Marcus Rivera
        </h1>

        {/* Short about */}
        <p
          className="text-pretty mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground animate-reveal"
          style={{ animationDelay: "200ms" }}
        >
          Licensed life insurance professional helping families across the
          country find the right coverage. I believe everyone deserves a plan
          they can understand and trust.
        </p>

        {/* CTA */}
        <div
          className="mt-7 flex flex-wrap justify-center gap-3 animate-reveal"
          style={{ animationDelay: "300ms" }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
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
