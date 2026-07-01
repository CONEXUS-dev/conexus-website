# ECHOform Guided Demo — Standalone Vite/Vercel Package

Standalone deployment of the CONEXUS ECHOform guided demo. This package is a
static Vite/React SPA with zero backend dependencies.

## Deploy to Vercel

1. Push this repo to `CONEXUS-dev/conexus-echoform-demo` on GitHub
2. Go to vercel.com/new and import the repo
3. Vercel will auto-detect Vite. Confirm:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
   - **Root directory:** `.` (repo root)
   - **Environment variables:** none required
4. Click Deploy. Expected build time: < 30 seconds.

## Local development

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Access protection

The package is deployed with `robots: noindex, nofollow`. For additional
protection before public launch, enable Vercel Deployment Protection (password)
in the Vercel project settings — no code change required.

## Stack

- Vite 7 + React 19 + TypeScript
- Tailwind CSS v4 (@tailwindcss/vite)
- Fonts: Cinzel, Cinzel Decorative, Inter (Google Fonts — loaded in index.html)
- Zero backend dependencies — fully static SPA

## Fidelity

All demo components are copied verbatim from the working Replit ECHOform demo.
The only source change is removal of the `PasscodeGate` wrapper from `Demo.tsx`
(the only runtime backend dependency in the demo). See `FIDELITY_AUDIT.md`.

## Website doorway (future)

After this standalone demo is live, link to it from `CONEXUS-dev/conexus-website`:

**Doorway A (recommended first step):** Add a button/link to the demo URL on the
main website. Zero risk, no routing changes needed.

**Doorway B (optional later):** Add a `next.config.js` redirect:
```js
{ source: '/demo/echoform', destination: 'https://conexus-echoform-demo.vercel.app', permanent: false }
```

**Doorway C (avoid):** Rewrite/proxy — asset paths would break across domains.
