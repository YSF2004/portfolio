# Redesign validation

Branch: `redesign/interaction-portfolio`.

## Checks

- Production build: `npm run build` (Next.js 16.4.6).
- Lint: `npm run lint`.
- Type checking: `npx tsc --noEmit`.
- Whitespace: `git diff --check`.
- Dependency audit after patching Next.js and transitive dependencies: zero vulnerabilities.
- Browser inspection at 320, 375, 414, 768 and 1280 CSS pixels: root width equals viewport width, no horizontal overflow.
- All three project screenshots load. Project order: Kelus, Digi Moqef, Caffeine.
- All preview dialogs open; zoom toggles; Close and Escape dismiss; focus returns to the opener. Tab navigation stays inside native modal dialogs.
- Native project notes expand with keyboard/click support.
- Copy email displays confirmation; clipboard rejection has an email-link fallback.
- Anchor navigation and back-to-top work.
- Reduced-motion CSS removes animation, transitions and smooth scrolling. All content is initially visible; no scroll reveal dependency.

The legacy Deno workflow failed because this repository has no Deno test suite. It is replaced in place with Node.js 24, npm ci, ESLint and the production build (including TypeScript).

## Deployment and limitations

The existing Vercel CLI credential is invalid. No production deployment was performed. Repository-connected preview deployments may run on the branch/PR.

Browser checks used the local in-app browser. This is not a complete cross-browser or assistive-technology certification. External project destinations were retained from source; availability could not be independently verified by the web reader. No performance score or unverified project outcome is claimed.
