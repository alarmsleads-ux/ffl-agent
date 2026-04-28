## Move Terms and Conditions to a Dedicated Page

Mirror the existing Privacy Policy pattern so Terms gets its own URL, and remove the Terms section from the in-page LegalSection.

### New page

Create `src/pages/TermsAndConditions.tsx`, structured the same way as `src/pages/PrivacyPolicy.tsx` (header, sections, contact block). Content is the existing Terms copy from `src/components/LegalSection.tsx`, expanded into clear sections:

1. Acceptance of Terms
2. Services Provided (independent life insurance consulting; no approval guarantee)
3. SMS Communications (STOP/HELP, frequency, rates, consent not required for purchase, no third-party sharing of opt-in data)
4. Phone & Email Communications
5. No Professional Advice (informational only)
6. Limitation of Liability
7. Changes to Terms
8. Contact Information (CG Financial / Christopher W Garness, address, phone, email)

### Routes (`src/App.tsx`)

Add two routes mirroring the privacy-policy routes:

- `/terms-and-conditions` → `<TermsAndConditions />`
- `/:agencySlug/:agentSlug/terms-and-conditions` → `<TermsAndConditions />`

### Update existing links

Repoint every "Terms and Conditions" link from the old in-page `#terms` anchor (or `/terms`) to the new page:

- `src/components/BookCallForm.tsx` — change `legalLinks.terms` to `/terms-and-conditions` (default) and `/${agencySlug}/${agentSlug}/terms-and-conditions` (agent-scoped).
- `src/pages/SmsOptIn.tsx` — change `/terms` link to `/terms-and-conditions`.

### Remove Terms from LegalSection

In `src/components/LegalSection.tsx`, delete the `#terms` block so the in-page section only renders Privacy Policy (matching how Privacy was already moved out — we'll leave Privacy in place since the dedicated page already exists and the section currently still shows it; no change there unless you'd also like that block removed).

Optionally, also remove the inline Privacy block from `LegalSection.tsx` since `/privacy-policy` exists — let me know if you want that too. Default plan keeps Privacy block as-is and only removes the Terms block.

### Result

- Terms lives at `/terms-and-conditions` and `/:agency/:agent/terms-and-conditions`.
- BookCall form, SMS opt-in, and any Terms link route to the new page.
- The agent page no longer scrolls to a `#terms` anchor.
