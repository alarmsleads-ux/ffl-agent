import { BadgeCheck, MapPin } from "lucide-react";
import { useAgentData } from "@/contexts/AgentDataContext";

export default function TrustBar() {
  const { data } = useAgentData();

  return (
    <div className="sticky top-0 z-[60] w-full bg-foreground py-1.5">
      <div className="container flex items-center justify-center gap-6 text-xs font-medium tracking-wide text-background">
        <span className="flex items-center gap-1.5">
          <BadgeCheck size={14} className="text-accent" />
          NPN: {data.npn}
        </span>
        <span className="h-3 w-px bg-background/25" />
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="text-accent" />
          Licensed in {data.stateLicenses.length} States
        </span>
      </div>
    </div>
  );
}
