import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import agentPhoto from "@/assets/agent-headshot.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-6 pt-12 md:pt-20">
      <div className="container">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          {/* Left — Copy */}
          <div className="flex-1 animate-reveal text-center md:text-left">
            <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Protecting Your Family's Future,{" "}
              <span className="text-accent">Together</span>
            </h1>
            <p className="text-pretty mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground md:mx-0">
              I help families across the country find the right coverage — so
              you can focus on what matters most, knowing the people you love are
              protected.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  <CalendarDays size={18} />
                  See My Calendar
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#services">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Right — Headshot (smaller) */}
          <div
            className="relative flex-shrink-0 animate-reveal"
            style={{ animationDelay: "150ms" }}
          >
            <div className="absolute -inset-4 rounded-full bg-accent/15 blur-xl" />
            <img
              src={agentPhoto}
              alt="Marcus Rivera — Licensed Life Insurance Agent"
              className="relative z-10 h-44 w-44 rounded-2xl object-cover shadow-lg ring-4 ring-background md:h-52 md:w-48"
            />
          </div>
        </div>

        {/* Trust banner */}
        <div
          className="mx-auto mt-10 flex items-center justify-center gap-3 text-xs font-medium tracking-wide text-muted-foreground animate-reveal"
          style={{ animationDelay: "300ms" }}
        >
          <span className="h-px w-8 bg-border" />
          NPN: 18294756 &nbsp;|&nbsp; Fully Licensed & Regulated
          <span className="h-px w-8 bg-border" />
        </div>
      </div>
    </section>
  );
}
