import { BadgeCheck, MapPin } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="sticky top-0 z-[60] w-full bg-foreground py-1.5">
      <div className="container flex items-center justify-center gap-6 text-xs font-medium tracking-wide text-background">
        <span className="flex items-center gap-1.5">
          <BadgeCheck size={14} className="text-accent" />
          NPN: 18294756
        </span>
        <span className="h-3 w-px bg-background/25" />
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="text-accent" />
          Licensed in 30 States
        </span>
      </div>
    </div>
  );
}
