import { BadgeCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stateLicenses = [
  "CA - #0M84521",
  "TX - #2847103",
  "FL - #W614829",
  "NY - #LA-1293847",
  "IL - #17294836",
  "PA - #983172",
  "OH - #1183920",
  "GA - #214837",
  "NC - #18472930",
  "MI - #0117293",
  "NJ - #1839204",
  "VA - #829173",
  "WA - #1029384",
  "AZ - #1847293",
  "MA - #2019384",
  "TN - #2918374",
  "IN - #3819274",
  "MO - #8192730",
  "MD - #1928374",
  "WI - #2018394",
  "CO - #618293",
  "MN - #7192834",
  "SC - #8291034",
  "AL - #1928340",
  "LA - #819203",
  "KY - #2918304",
  "OR - #1029384",
  "OK - #1928347",
  "CT - #3019284",
  "UT - #1928340",
];

export default function CredentialsSection() {
  const ref = useScrollReveal();

  return (
    <section id="credentials" className="py-20 md:py-28">
      <div className="container max-w-3xl" ref={ref}>
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Licenses & Credentials
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-accent" />
        <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground">
          I am a fully licensed and regulated insurance professional, committed
          to the highest standards of transparency and service.
        </p>

        {/* NPN Badge */}
        <div className="mx-auto mt-10 flex flex-col items-center gap-1">
          <BadgeCheck className="text-accent" size={32} />
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            National Producer Number
          </p>
          <p className="text-3xl font-bold tabular-nums text-foreground">
            18294756
          </p>
        </div>

        {/* State Licenses */}
        <div className="mt-10">
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            State Licenses
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {stateLicenses.map((lic) => (
              <span
                key={lic}
                className="inline-block rounded-full bg-card px-3.5 py-1.5 text-xs font-medium text-foreground ring-1 ring-border"
              >
                {lic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
