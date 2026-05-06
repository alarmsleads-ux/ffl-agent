## Goal

Add hidden authentication so each agent has their own account. The Admin page loads/saves only the logged-in agent's profile. No public-facing sign-in/sign-up links — accounts are created by visiting hidden URLs.

## Auth approach

- Use Lovable Cloud email/password auth (no email confirmation, so signup → instant login).
- No public links to auth pages. Hidden routes only:
  - `/agent-admin/signup` — sign-up form (email + password + first name + last name + agency)
  - `/agent-admin/login` — login form
- `/agent-admin` becomes protected. If not logged in → redirect to `/agent-admin/login`.
- Add a small "Sign out" button in the Admin header.

## Database changes

1. Add `user_id uuid` column to `agents` (nullable for now to preserve existing row, then enforced via app logic).
2. Add unique constraint on `user_id` (one profile per account).
3. Add unique constraint on `(agency_slug, slug)` so URLs stay unique.
4. Tighten RLS on `agents`:
   - SELECT: public (profiles are public-facing pages).
   - INSERT: `auth.uid() = user_id`.
   - UPDATE: `auth.uid() = user_id`.
   - DELETE: `auth.uid() = user_id`.
5. Drop the existing permissive "Anyone can insert/update" policies.
6. Trigger on signup: auto-create a blank `agents` row for the new user with their first/last name and a generated unique slug, so they land in the dashboard with a starter profile.

Note: the existing single demo agent row (Christopher) has no `user_id`. The migration will leave it as-is (publicly viewable, not editable by anyone since no policy matches). New signups create new rows.

## Code changes

### New: `src/pages/AgentSignup.tsx`
Form: email, password, first name, last name, agency name. Calls `supabase.auth.signUp` with `emailRedirectTo: window.location.origin + '/agent-admin'` and metadata `{ first_name, last_name, agency }`. On success → navigate to `/agent-admin`.

### New: `src/pages/AgentLogin.tsx`
Email + password. On success → `/agent-admin`. Small link to `/agent-admin/signup`.

### New: `src/hooks/useAuth.ts`
Subscribes to `onAuthStateChange`, exposes `{ user, session, loading }`.

### Modified: `src/pages/Admin.tsx`
- Replace "load latest agent" logic with: load the agent row where `user_id = auth.uid()`.
- Remove `ADMIN_AGENT_ID_KEY` localStorage hack.
- Save sets `user_id: session.user.id` and upserts on `user_id`.
- If not authenticated → redirect to `/agent-admin/login`.
- Add "Sign out" button in header (signs out + navigates to login).
- "View my profile" link that opens `/:agency_slug/:slug` in a new tab.

### Modified: `src/App.tsx`
Add routes:
- `/agent-admin/signup` → `AgentSignup`
- `/agent-admin/login` → `AgentLogin`

### Migration SQL (summary)

```sql
alter table public.agents add column user_id uuid;
create unique index agents_user_id_key on public.agents(user_id) where user_id is not null;
create unique index agents_agency_slug_slug_key on public.agents(agency_slug, slug);

drop policy "Anyone can insert agents" on public.agents;
drop policy "Anyone can update agents" on public.agents;

create policy "Users insert own agent" on public.agents
  for insert to authenticated with check (auth.uid() = user_id);
create policy "Users update own agent" on public.agents
  for update to authenticated using (auth.uid() = user_id);
create policy "Users delete own agent" on public.agents
  for delete to authenticated using (auth.uid() = user_id);

-- handle_new_user trigger creates an agents row from auth metadata
```

## Out of scope

- Password reset flow (can add later if needed).
- Google/social login (not requested).
- Admin role / multi-agent-per-account.

## Result

- Visit `/agent-admin/signup` (hidden) → create account → land in dashboard with empty profile prefilled with name/agency.
- Profile saves are scoped to the logged-in user; multiple agents coexist.
- Public profile pages `/:agency/:agent` continue to work for anyone.
- No sign-in UI exposed anywhere on the public site.