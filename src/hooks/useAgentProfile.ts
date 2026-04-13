import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { AgentData } from "@/contexts/AgentDataContext";

export function useAgentProfile(slug: string | undefined) {
  return useQuery({
    queryKey: ["agent", slug],
    queryFn: async (): Promise<AgentData> => {
      if (!slug) throw new Error("No agent slug provided");

      const { data, error } = await supabase
        .from("agents")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;
      if (!data) throw new Error("Agent not found");

      return {
        name: data.name,
        firstName: data.first_name,
        lastName: data.last_name,
        phone: data.phone,
        email: data.email,
        agency: data.agency,
        npn: data.npn,
        bio: data.bio,
        shortBio: data.short_bio,
        headshotUrl: data.headshot_url,
        calendarUrl: data.calendar_url,
        stateLicenses: data.state_licenses as string[],
        testimonials: data.testimonials as { quote: string; name: string }[],
      };
    },
    enabled: !!slug,
  });
}
