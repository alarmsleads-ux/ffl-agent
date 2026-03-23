import { useState } from "react";
import { useAgentData, AgentData } from "@/contexts/AgentDataContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Save, Plus, Trash2, ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const { data, updateData } = useAgentData();
  const [form, setForm] = useState<AgentData>({ ...data });
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  const set = (field: keyof AgentData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSave = () => {
    updateData(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateTestimonial = (index: number, field: "quote" | "name", value: string) => {
    const updated = [...form.testimonials];
    updated[index] = { ...updated[index], [field]: value };
    setForm((prev) => ({ ...prev, testimonials: updated }));
  };

  const addTestimonial = () => {
    setForm((prev) => ({
      ...prev,
      testimonials: [...prev.testimonials, { quote: "", name: "" }],
    }));
  };

  const removeTestimonial = (index: number) => {
    setForm((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((_, i) => i !== index),
    }));
  };

  const setLicenses = (value: string) => {
    setForm((prev) => ({
      ...prev,
      stateLicenses: value.split("\n").map((s) => s.trim()).filter(Boolean),
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Site
          </button>
          <h1 className="text-lg font-bold text-foreground">Agent Dashboard</h1>
          <Button onClick={handleSave} variant="hero" size="default">
            {saved ? <Check size={16} /> : <Save size={16} />}
            {saved ? "Saved!" : "Save Changes"}
          </Button>
        </div>
      </div>

      <div className="container max-w-2xl py-10 space-y-10">
        {/* Personal Info */}
        <Section title="Personal Information">
          <Field label="First Name">
            <Input value={form.firstName} onChange={(e) => set("firstName", e.target.value)} />
          </Field>
          <Field label="Last Name">
            <Input value={form.lastName} onChange={(e) => set("lastName", e.target.value)} />
          </Field>
          <Field label="Display Name">
            <Input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Marcus Rivera" />
          </Field>
          <Field label="Phone Number">
            <Input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+15558142937" />
          </Field>
          <Field label="Email">
            <Input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} />
          </Field>
          <Field label="Calendar Booking URL">
            <Input value={form.calendarUrl} onChange={(e) => set("calendarUrl", e.target.value)} placeholder="https://calendly.com/..." />
          </Field>
          <Field label="Headshot Image URL">
            <Input value={form.headshotUrl} onChange={(e) => set("headshotUrl", e.target.value)} placeholder="https://..." />
          </Field>
        </Section>

        {/* Bio */}
        <Section title="Bio & About">
          <Field label="Short Bio (under profile photo)">
            <Textarea value={form.shortBio} onChange={(e) => set("shortBio", e.target.value)} rows={3} />
          </Field>
          <Field label="About Paragraph 1">
            <Textarea value={form.bio1} onChange={(e) => set("bio1", e.target.value)} rows={4} />
          </Field>
          <Field label="About Paragraph 2">
            <Textarea value={form.bio2} onChange={(e) => set("bio2", e.target.value)} rows={4} />
          </Field>
          <Field label="About Paragraph 3">
            <Textarea value={form.bio3} onChange={(e) => set("bio3", e.target.value)} rows={4} />
          </Field>
        </Section>

        {/* Credentials */}
        <Section title="Licenses & Credentials">
          <Field label="National Producer Number (NPN)">
            <Input value={form.npn} onChange={(e) => set("npn", e.target.value)} />
          </Field>
          <Field label="State Licenses (one per line, e.g. CA - #12345)">
            <Textarea
              value={form.stateLicenses.join("\n")}
              onChange={(e) => setLicenses(e.target.value)}
              rows={8}
              className="font-mono text-xs"
            />
          </Field>
        </Section>

        {/* Testimonials */}
        <Section title="Client Testimonials">
          <div className="space-y-6">
            {form.testimonials.map((t, i) => (
              <div key={i} className="rounded-xl bg-card p-5 ring-1 ring-border/60 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Testimonial {i + 1}</span>
                  <button
                    onClick={() => removeTestimonial(i)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <Field label="Client Name">
                  <Input value={t.name} onChange={(e) => updateTestimonial(i, "name", e.target.value)} placeholder="Sarah M." />
                </Field>
                <Field label="Quote">
                  <Textarea value={t.quote} onChange={(e) => updateTestimonial(i, "quote", e.target.value)} rows={3} />
                </Field>
              </div>
            ))}
            <Button variant="outline" onClick={addTestimonial} className="w-full">
              <Plus size={16} />
              Add Testimonial
            </Button>
          </div>
        </Section>

        {/* Bottom save */}
        <Button onClick={handleSave} variant="hero" size="lg" className="w-full">
          {saved ? <Check size={16} /> : <Save size={16} />}
          {saved ? "Saved!" : "Save All Changes"}
        </Button>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <div className="mt-1.5 h-0.5 w-10 rounded-full bg-accent" />
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
