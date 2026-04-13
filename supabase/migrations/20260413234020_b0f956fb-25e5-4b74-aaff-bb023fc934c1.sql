
-- Create agents table
CREATE TABLE public.agents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  agency TEXT NOT NULL DEFAULT '',
  npn TEXT NOT NULL DEFAULT '',
  bio TEXT NOT NULL DEFAULT '',
  short_bio TEXT NOT NULL DEFAULT '',
  headshot_url TEXT NOT NULL DEFAULT '',
  calendar_url TEXT NOT NULL DEFAULT '#contact',
  state_licenses JSONB NOT NULL DEFAULT '[]'::jsonb,
  testimonials JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Index on slug for fast lookups
CREATE INDEX idx_agents_slug ON public.agents (slug);

-- Enable RLS
ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;

-- Public read access (consumers need to view agent profiles)
CREATE POLICY "Anyone can view agent profiles"
ON public.agents
FOR SELECT
USING (true);

-- Only authenticated users can insert/update (for admin)
CREATE POLICY "Authenticated users can insert agents"
ON public.agents
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update agents"
ON public.agents
FOR UPDATE
TO authenticated
USING (true);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_agents_updated_at
BEFORE UPDATE ON public.agents
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
