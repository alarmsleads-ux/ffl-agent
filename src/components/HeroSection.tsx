import { Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAgentData } from "@/contexts/AgentDataContext";
import agentPhotoDefault from "@/assets/agent-headshot.jpg";

export default function HeroSection() {
  const { data } = useAgentData();
  const photo = data.headshotUrl || agentPhotoDefault;

  const formatPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 11 && digits[0] === "1")
      return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    if (digits.length === 10)
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    return phone;
  };

  return (
    <section className="relative overflow-hidden pb-10 pt-14 md:pt-20">
      <div className="container">
        {/* Top row: photo left, name/agency/contact right */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          {/* Left: Photo */}
          <div className="relative shrink-0 animate-reveal">
            <div className="absolute -inset-3 rounded-full bg-accent/20 blur-xl" />
            <img
              src={photo}
              alt={`${data.name} — Licensed Life Insurance Agent`}
              className="relative z-10 h-36 w-36 rounded-full object-cover shadow-lg ring-4 ring-background md:h-44 md:w-44"
            />
          </div>

          {/* Right: Name, agency, contact */}
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
            <h1
              className="text-2xl font-bold tracking-tight text-foreground animate-reveal md:text-3xl"
              style={{ animationDelay: "100ms" }}
            >
              {data.name}
            </h1>

            {data.agency && (
              <p
                className="mt-1 text-sm font-semibold uppercase tracking-wide text-accent animate-reveal"
                style={{ animationDelay: "150ms" }}
              >
                Agency: <span className="text-foreground">{data.agency}</span>
              </p>
            )}

            <div
              className="mt-4 flex flex-col items-center gap-1.5 text-sm text-muted-foreground animate-reveal md:items-start"
              style={{ animationDelay: "200ms" }}
            >
              <a href={`tel:${data.phone}`} className="transition-colors hover:text-foreground">
                {formatPhone(data.phone)}
              </a>
              <a href={`mailto:${data.email}`} className="transition-colors hover:text-foreground">
                {data.email}
              </a>
            </div>

            <div
              className="mt-5 flex flex-wrap justify-center gap-3 animate-reveal md:justify-start"
              style={{ animationDelay: "300ms" }}
            >
              <Button variant="outline" size="lg" asChild>
                <a href={`tel:${data.phone}`}>
                  <Phone size={16} />
                  Call
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`sms:${data.phone}`}>
                  <MessageSquare size={16} />
                  Text
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`mailto:${data.email}`}>
                  <Mail size={16} />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bio below photo */}
        <p
          className="text-pretty mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground animate-reveal md:ml-0 md:text-left"
          style={{ animationDelay: "400ms" }}
        >
          {data.shortBio}
        </p>
      </div>
    </section>
  );
}
