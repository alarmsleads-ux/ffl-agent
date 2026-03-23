import { Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAgentData } from "@/contexts/AgentDataContext";

export default function AboutSection() {
  const ref = useScrollReveal();
  const { data } = useAgentData();

  const formatPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 11 && digits[0] === "1") {
      return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    }
    return phone;
  };

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container max-w-3xl" ref={ref}>
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Meet {data.name}
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-accent" />

        <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {data.bio1 && <p>{data.bio1}</p>}
          {data.bio2 && <p>{data.bio2}</p>}
          {data.bio3 && <p>{data.bio3}</p>}
        </div>

        <p className="mt-10 text-center font-signature text-3xl text-foreground">
          {data.name}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
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

        <div className="mt-5 flex flex-col items-center gap-2 text-sm text-muted-foreground">
          <a href={`tel:${data.phone}`} className="hover:text-foreground transition-colors">
            {formatPhone(data.phone)}
          </a>
          <a href={`mailto:${data.email}`} className="hover:text-foreground transition-colors">
            {data.email}
          </a>
        </div>
      </div>
    </section>
  );
}
