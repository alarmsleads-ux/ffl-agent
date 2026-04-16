-- Allow admin page writes without requiring Supabase Auth session.
-- The app currently has a public /agent-admin route and uses the anon key.
CREATE POLICY "Anyone can insert agents (anon)"
ON public.agents
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Anyone can update agents (anon)"
ON public.agents
FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);
