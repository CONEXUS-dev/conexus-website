# Fidelity Audit — ECHOform Standalone Package

Source: `artifacts/conexus/` in the CONEXUS Replit monorepo

## Files copied VERBATIM (zero changes)

| File | Notes |
|------|-------|
| `src/main.tsx` | React root, unchanged |
| `src/index.css` | Full Tailwind v4 theme, CSS vars, #root constraints, all animations |
| `src/components/EclipseOrb.tsx` | `import.meta.env.BASE_URL` = `"/"` with `base: "/"` → correct paths |
| `src/components/demo/demo.css` | All keyframes, `.demo-btn`, `.demo-veil`, `.demo-mirror-zone` |
| `src/components/demo/demoData.ts` | 5 prepared dreams, mirror candidates, image filenames |
| `src/components/demo/demoState.ts` | sessionStorage read/write, `chosenMirrorRank` |
| `src/components/demo/DemoIntro.tsx` | Intro copy, timing constants, star field |
| `src/components/demo/DemoOnboarding.tsx` | Onboarding flow, orb mount callback |
| `src/components/demo/DemoIdentityConfirm.tsx` | Identity confirm screen |
| `src/components/demo/DemoCalibration.tsx` | Calibration bridge copy and timing |
| `src/components/demo/DemoLobby.tsx` | Mirror Hall image, invisible tap zones, mist |
| `src/components/demo/DemoDreamEntry.tsx` | Dream Entry screen |
| `src/components/demo/DemoDreamSelector.tsx` | 5 prepared dreams, completed state |
| `src/components/demo/DemoProcessing.tsx` | 7-stage processing playback |
| `src/components/demo/DemoReveal.tsx` | Three mirror reveal, lightbox |
| `src/components/demo/DemoChosenMirror.tsx` | Chosen mirror page, sealing animation |
| `src/components/demo/DemoHistory.tsx` | History with chosen/offered fix (read path) |
| `src/components/demo/RitualButton.tsx` | Shared shimmer button |
| `src/components/demo/DreamGallery.tsx` | Evidence Gallery |
| `src/components/demo/DreamCard.tsx` | Gallery cards with lightbox |
| `src/components/demo/SystemFlowDiagram.tsx` | Diagram inside Evidence Gallery |

## Files modified

### `src/pages/Demo.tsx` — PasscodeGate removed only

**Removed (line 4 of source):**
```tsx
import PasscodeGate from "@/components/demo/PasscodeGate";
```

**Export changed from:**
```tsx
export default function Demo() {
  return (
    <PasscodeGate>
      <DemoShell />
    </PasscodeGate>
  );
}
```

**Export changed to:**
```tsx
export default function Demo() {
  return <DemoShell />;
}
```

Everything else in `Demo.tsx` is verbatim, including:
- `const baseUrl = import.meta.env.BASE_URL;` — correct with `base: "/"`
- VEIL_IN_MS = 200, VEIL_OUT_MS = 400 timing constants
- All phase state machine logic
- FLIP orb overlay architecture
- `handleReturnToLobby` with chosen/offered History write-path fix
- `chosen: m.rank === chosenMirror.rank` — PRESERVED
- `chosenMirrorRank: chosenMirror.rank` — PRESERVED

### `src/App.tsx` — new minimal entry (no PasscodeGate, no wouter, no QueryClient)

```tsx
import Demo from "./pages/Demo";

export default function App() {
  return <Demo />;
}
```

Note: `index.css` is imported in `main.tsx` (verbatim copy). `App.tsx` does NOT
re-import it. No duplicate CSS import.

### `index.html` — two metadata-only changes

- `<title>` changed to `ECHOform Guided Demo | CONEXUS`
- `<meta name="robots">` changed to `noindex, nofollow`
- All Google Fonts `<link>` tags preserved verbatim (Cinzel, Cinzel Decorative, Inter)

## New config files (no fidelity impact)

| File | Purpose |
|------|---------|
| `package.json` | Lean npm deps with real version pins (from monorepo catalog) |
| `vite.config.ts` | Clean Vite config: no Replit plugins, no env var throws, `base: "/"` |
| `tsconfig.json` | Standalone TS config: no monorepo extends, no workspace refs |
| `vercel.json` | SPA fallback: `/(.*) → /index.html` |

## Excluded files (not in package)

- `PasscodeGate.tsx` — called `/api/demo/verify`, the only backend dependency
- `LiveDemoPanel.tsx` — wouter-dependent, not part of guided demo
- All other app pages (Journal, Lobby, Onboarding, not-found)
- `src/lib/`, `src/hooks/` — full-app utilities
- `src/components/ui/` — Radix UI, not used by demo
- All Replit-specific plugins and workspace packages

## Key fidelity confirmations

| Check | Status |
|-------|--------|
| Chosen/offered History write-path fix (`chosen: m.rank === chosenMirror.rank`) | PRESERVED in Demo.tsx |
| Chosen/offered History read-path fix (`entry.chosenMirrorRank`) | PRESERVED in DemoHistory.tsx (verbatim) |
| Evidence Gallery reachable from History | PRESERVED — `onShowGallery` prop in DemoLobby, gallery phase in Demo.tsx |
| sessionStorage keys (`echoform_demo_*`) | PRESERVED in demoState.ts (verbatim) |
| Mirror Hall tap zones | PRESERVED in DemoLobby.tsx (verbatim) |
| Intro timing constants | PRESERVED in DemoIntro.tsx (verbatim) |
| Processing stage copy and timing | PRESERVED in DemoProcessing.tsx (verbatim) |
| Calibration bridge copy | PRESERVED in DemoCalibration.tsx (verbatim) |
| All 15 mirror image filenames | PRESERVED in demoData.ts (verbatim) and in public/demo/ |
| All CSS animations and keyframes | PRESERVED in demo.css and index.css (verbatim) |
| Mobile layout (#root max-width: 430px) | PRESERVED in index.css (verbatim) |
| Cinzel font loading | PRESERVED in index.html Google Fonts link |
| No duplicate index.css import | CONFIRMED — only in main.tsx |
| No PasscodeGate in package | CONFIRMED |
| No /api/demo/verify in package | CONFIRMED |
| No OpenAI/DB/secrets in package | CONFIRMED |
| No @workspace/ imports | CONFIRMED |
| No catalog: dependencies | CONFIRMED |
