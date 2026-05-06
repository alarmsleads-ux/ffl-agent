
-- Add owner column
ALTER TABLE public.agents ADD COLUMN IF NOT EXISTS user_id uuid;

-- Unique constraints
CREATE UNIQUE INDEX IF NOT EXISTS agents_user_id_key ON public.agents(user_id) WHERE user_id IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS agents_agency_slug_slug_key ON public.agents(agency_slug, slug);

-- Replace permissive RLS
DROP POLICY IF EXISTS "Anyone can insert agents" ON public.agents;
DROP POLICY IF EXISTS "Anyone can update agents" ON public.agents;

CREATE POLICY "Users insert own agent"
  ON public.agents FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own agent"
  ON public.agents FOR UPDATE TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users delete own agent"
  ON public.agents FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Auto-create starter agent profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_agent_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_first text := COALESCE(NEW.raw_user_meta_data->>'first_name', '');
  v_last  text := COALESCE(NEW.raw_user_meta_data->>'last_name', '');
  v_agency text := COALESCE(NEW.raw_user_meta_data->>'agency', '');
  v_name text := TRIM(v_first || ' ' || v_last);
  v_base_slug text;
  v_agency_slug text;
  v_slug text;
  v_suffix int := 0;
BEGIN
  IF v_name = '' THEN v_name := split_part(NEW.email, '@', 1); END IF;

  v_base_slug := regexp_replace(lower(v_name), '[^a-z0-9]+', '-', 'g');
  v_base_slug := trim(both '-' from v_base_slug);
  IF v_base_slug = '' THEN v_base_slug := 'agent'; END IF;

  v_agency_slug := regexp_replace(lower(COALESCE(NULLIF(v_agency,''), 'agency')), '[^a-z0-9]+', '-', 'g');
  v_agency_slug := trim(both '-' from v_agency_slug);
  IF v_agency_slug = '' THEN v_agency_slug := 'agency'; END IF;

  v_slug := v_base_slug;
  WHILE EXISTS (SELECT 1 FROM public.agents WHERE agency_slug = v_agency_slug AND slug = v_slug) LOOP
    v_suffix := v_suffix + 1;
    v_slug := v_base_slug || '-' || v_suffix;
  END LOOP;

  INSERT INTO public.agents (user_id, slug, agency_slug, name, first_name, last_name, agency, email)
  VALUES (NEW.id, v_slug, v_agency_slug, v_name, v_first, v_last, v_agency, NEW.email);

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created_agent ON auth.users;
CREATE TRIGGER on_auth_user_created_agent
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_agent_user();
