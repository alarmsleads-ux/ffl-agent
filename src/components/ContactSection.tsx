import { useState } from "react";
import { CalendarDays, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container" ref={ref}>
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Let's Build Your Plan
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-accent" />

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Left — CTA + Contact Info */}
          <div className="flex flex-col justify-center">
            <Button variant="hero" size="xl" className="w-full md:w-fit" asChild>
              <a href="#contact">
                <CalendarDays size={20} />
                Book on My Calendar
              </a>
            </Button>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span className="text-sm">(555) 814-2937</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span className="text-sm">marcus@riverainsurance.com</span>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-4 rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border/60"
    >
      <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
      <Input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
      <Input name="phone" type="tel" placeholder="Phone (optional)" value={form.phone} onChange={handleChange} />
      <textarea
        name="message"
        rows={4}
        placeholder="How can I help?"
        value={form.message}
        onChange={handleChange}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <Button variant="hero" size="lg" type="submit" className="w-full">
        <Send size={16} />
        Send Message
      </Button>
    </form>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
    />
  );
}
