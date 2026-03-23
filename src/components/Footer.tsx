import { useAgentData } from "@/contexts/AgentDataContext";

export default function Footer() {
  const { data } = useAgentData();

  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-accent" />
      <div className="container text-center">
        <p className="text-sm font-medium text-foreground">
          © {new Date().getFullYear()} {data.name} — Licensed Life Insurance Agent
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          This website is for informational purposes only and does not
          constitute legal or financial advice. {data.name} is not affiliated
          with or endorsed by the U.S. government or any federal agency.
          Guarantees are based on the claims-paying ability of the issuing
          insurance company. Policy availability, features, and costs may vary
          by state. Please consult your policy documents and a qualified
          professional for specific guidance.
        </p>
      </div>
    </footer>
  );
}
