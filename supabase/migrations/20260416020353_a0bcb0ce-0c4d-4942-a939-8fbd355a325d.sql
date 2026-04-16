
DROP POLICY "Authenticated users can insert agents" ON public.agents;
DROP POLICY "Authenticated users can update agents" ON public.agents;

CREATE POLICY "Anyone can insert agents" ON public.agents FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update agents" ON public.agents FOR UPDATE USING (true);
