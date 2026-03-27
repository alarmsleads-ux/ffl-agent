import { createContext, useContext, useState, ReactNode } from "react";

export interface AgentData {
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  agency: string;
  npn: string;
  bio: string;
  shortBio: string;
  headshotUrl: string;
  calendarUrl: string;
  stateLicenses: string[];
  testimonials: { quote: string; name: string }[];
}

const DEFAULT_DATA: AgentData = {
  name: "Marcus Rivera",
  firstName: "Marcus",
  lastName: "Rivera",
  phone: "(555) 814-2937",
  email: "marcus@riverainsurance.com",
  agency: "Rivera Insurance Group",
  npn: "18294756",
  bio: "Growing up, my family didn't have a financial safety net. When my father passed unexpectedly, I saw firsthand how the absence of proper planning can turn grief into a financial crisis overnight. That experience shaped everything I do today. I became a licensed life insurance professional not to sell policies — but to make sure no family has to face what mine did. Every conversation I have starts with listening: understanding your goals, your worries, and the people counting on you. Whether you're a new parent looking for your first term policy or a business owner planning for the long term, I'm here to guide you through the options in plain language — no jargon, no pressure, just honest advice.",
  shortBio: "Licensed life insurance professional helping families across the country find the right coverage. I believe everyone deserves a plan they can understand and trust.",
  headshotUrl: "",
  calendarUrl: "#contact",
  stateLicenses: [
    "CA - #0M84521", "TX - #2847103", "FL - #W614829", "NY - #LA-1293847",
    "IL - #17294836", "PA - #983172", "OH - #1183920", "GA - #214837",
    "NC - #18472930", "MI - #0117293", "NJ - #1839204", "VA - #829173",
    "WA - #1029384", "AZ - #1847293", "MA - #2019384", "TN - #2918374",
    "IN - #3819274", "MO - #8192730", "MD - #1928374", "WI - #2018394",
    "CO - #618293", "MN - #7192834", "SC - #8291034", "AL - #1928340",
    "LA - #819203", "KY - #2918304", "OR - #1029384", "OK - #1928347",
    "CT - #3019284", "UT - #1928340",
  ],
  testimonials: [
    { quote: "Marcus explained everything in plain English. For the first time, I actually understood my policy — and felt confident about it.", name: "Sarah M." },
    { quote: "We were overwhelmed after having our first child. Marcus walked us through our options without any pressure and found us the perfect plan.", name: "David & Leah R." },
    { quote: "I'd been putting off life insurance for years because it felt complicated. Marcus made the whole process simple and even enjoyable.", name: "James T." },
  ],
};

const STORAGE_KEY = "agent-data";

interface AgentDataContextType {
  data: AgentData;
  updateData: (data: AgentData) => void;
}

const AgentDataContext = createContext<AgentDataContextType>({
  data: DEFAULT_DATA,
  updateData: () => {},
});

export function AgentDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AgentData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Migrate old bio1/bio2/bio3 to single bio
        if (parsed.bio1 && !parsed.bio) {
          parsed.bio = [parsed.bio1, parsed.bio2, parsed.bio3].filter(Boolean).join(" ");
          delete parsed.bio1;
          delete parsed.bio2;
          delete parsed.bio3;
        }
        return { ...DEFAULT_DATA, ...parsed };
      }
    } catch {}
    return DEFAULT_DATA;
  });

  const updateData = (newData: AgentData) => {
    setData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  };

  return (
    <AgentDataContext.Provider value={{ data, updateData }}>
      {children}
    </AgentDataContext.Provider>
  );
}

export const useAgentData = () => useContext(AgentDataContext);
