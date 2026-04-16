import { useParams, Link } from "react-router-dom";
import { useAgentProfile } from "@/hooks/useAgentProfile";
import BookCallForm from "@/components/BookCallForm";
import { Loader2 } from "lucide-react";

export default function BookCall() {
  const { agencySlug, agentSlug } = useParams<{ agencySlug: string; agentSlug: string }>();
  const { data: agent, isLoading, error } = useAgentProfile(agencySlug, agentSlug);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    );
  }

  if (error || !agent) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-foreground">Agent Not Found</h1>
        <p className="text-muted-foreground">The agent profile you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Book a Call
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            {agent.name} | {agent.agency}
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
          <BookCallForm agentName={agent.name} agencyName={agent.agency} />
        </div>

        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <Link
            to={`/${agencySlug}/${agentSlug}`}
            className="hover:text-accent transition-colors underline-offset-4 hover:underline"
          >
            ← Back to Profile
          </Link>
          <span>·</span>
          <Link
            to={`/${agencySlug}/${agentSlug}/privacy-policy`}
            className="hover:text-accent transition-colors underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <span>·</span>
          <Link
            to={`/${agencySlug}/${agentSlug}#terms`}
            className="hover:text-accent transition-colors underline-offset-4 hover:underline"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
