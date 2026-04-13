

# Plan: Create a Platform Landing Page

## Overview
Create a new landing page at `/` that positions the site as a **consumer trust & verification platform** for insurance agents. The current agent profile page at `/` moves to `/agent/:slug` (or simply `/agent` for now). The landing page will feel authoritative and trustworthy — like a verification registry consumers can use to confirm their agent is legitimate.

## New Route Structure
- `/` — New platform landing page (explains the verification service)
- `/agent` — Current agent profile page (moved from `/`)

## New File: `src/pages/Landing.tsx`

A single-page landing with these sections:

**Hero**
- Shield/verification icon
- Headline: "Verify Your Insurance Agent"
- Subheadline: "Confirm your agent is properly licensed, credentialed, and affiliated with a legitimate agency — before you sign anything."
- CTA button: "Verify an Agent" → links to `/agent`

**How It Works** (3-step visual)
1. "Find Your Agent" — Search or follow a link from your agent
2. "Review Credentials" — See their NPN, state licenses, and agency affiliation
3. "Connect With Confidence" — Reach out knowing they're verified

**What We Verify** (icon grid)
- National Producer Number (NPN)
- State Licenses & Active Status
- Agency Affiliation
- Contact Information

**Why It Matters** (trust copy)
- Short paragraph about why consumers should verify their agent before purchasing life insurance
- Stats-style callouts (e.g., "Every agent verified against national licensing databases")

**CTA Banner**
- "Your agent sent you here? That's a good sign." 
- Button: "View Agent Profile" → `/agent`

**Footer** — Minimal, matches existing styling

## Changes to Existing Files

**`src/App.tsx`** — Update routes:
- `/` → `<Landing />`
- `/agent` → `<Index />` (current homepage)

**No other files modified** — Header, Footer, and all agent page components remain untouched.

## Styling
- Uses existing design tokens (accent gold, foreground, muted, card backgrounds)
- Plus Jakarta Sans font
- Mobile responsive with Tailwind
- Clean, institutional feel — shields, checkmarks, verification language

## Technical Notes
- New page is a simple static component, no data fetching needed
- The agent profile link can later become dynamic (`/agent/:id`) when multi-agent support is added
