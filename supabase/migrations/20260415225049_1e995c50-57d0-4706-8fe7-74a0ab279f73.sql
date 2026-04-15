ALTER TABLE public.agents ADD COLUMN agency_slug TEXT NOT NULL DEFAULT '';
UPDATE public.agents SET agency_slug = 'cg-financial' WHERE slug = 'christopher-garness';
CREATE INDEX idx_agents_agency_slug ON public.agents (agency_slug);