import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAgentData } from "@/contexts/AgentDataContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Credentials", href: "#credentials" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data } = useAgentData();
  const { agencySlug, agentSlug } = useParams<{ agencySlug: string; agentSlug: string }>();
  const bookUrl = agencySlug && agentSlug ? `/${agencySlug}/${agentSlug}/book` : "#contact";
  const nameParts = data.name.split(" ");
  const firstName = nameParts[0] || "";
  const rest = nameParts.slice(1).join(" ");

  return (
    <header className="sticky top-[34px] z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          {firstName} <span className="text-primary">{rest}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="hero" size="default" className="hidden md:inline-flex" asChild>
            <a href={bookUrl}>Book a Call</a>
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-accent md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="lg" className="mt-2 w-full" asChild>
              <a href={bookUrl} onClick={() => setMobileOpen(false)}>
                Book a Call
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
