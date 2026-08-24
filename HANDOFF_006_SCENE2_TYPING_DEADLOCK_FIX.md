# HANDOFF_006_SCENE2_TYPING_DEADLOCK_FIX

**Date:** 2026-08-18  
**Mission:** 006_SCENE2_TYPING_DEADLOCK_FIX  
**Status:** COMPLETE — All verification bars passed

---

## 1. FILE MODIFIED

`C:\Users\Derek Angell\Desktop\CONEXUS Website 2.0\components\scenes\Scene2.tsx`

**No other files were modified.**

---

## 2. ROOT CAUSE ANALYSIS

The previous implementation contained a **React useEffect deadlock** caused by the `isPaused` state:

1. When a paragraph finished typing, `setIsPaused(true)` was called
2. This triggered a re-render, which immediately ran the `useEffect` cleanup function
3. The cleanup cleared the 1000ms timeout before it could fire
3. The effect then hit `if (isPaused) return;` and exited permanently
4. The sequence halted at the end of paragraph 1, never advancing

Additionally, the `paragraphs` array was defined *inside* the component, creating a new array reference on every render, which:
- Caused unnecessary `useEffect` re-fires (since `paragraphs` was in the dependency array)
- Violated React best practices for static data

---

## 3. CHANGES APPLIED

### 3.1 Extract Paragraphs Array (Lines 6–22)

**Before:** `const paragraphs = [...]` defined inside `Scene2()` component (lines 7–22)

**After:** `const PARAGRAPHS = [...]` defined as a **module-level constant** outside the component

```typescript
// Static paragraphs array — defined outside component to maintain stable reference
const PARAGRAPHS = [
  "The world is drowning in crude data…because it lacks a method to make it safe.",
  // ... 13 more paragraphs
];
```

**Benefits:**
- Single stable reference — never recreates on render
- Removed from `useEffect` dependency array
- Follows React best practices for static data

---

### 3.2 Remove Deadlock State (Lines 24–29)

**Before:** Four state variables including the problematic `isPaused`:
```typescript
const [typedText, setTypedText] = useState<string[]>(Array(paragraphs.length).fill(""));
const [currentParaIndex, setCurrentParaIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isPaused, setIsPaused] = useState(false);  // ← REMOVED
```

**After:** Three state variables — `isPaused` completely eliminated:
```typescript
const [typedText, setTypedText] = useState<string[]>(Array(PARAGRAPHS.length).fill(""));
const [currentParaIndex, setCurrentParaIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
```

---

### 3.3 Refactor Typing Logic (Lines 31–56)

**Before:** Complex branching with `isPaused` gate and dual timer setup causing the deadlock.

**After:** Simplified, deadlock-free chaining logic with strict `[charIndex, currentParaIndex]` dependencies:

```typescript
useEffect(() => {
  if (currentParaIndex >= PARAGRAPHS.length) return;

  const currentParagraph = PARAGRAPHS[currentParaIndex];

  if (charIndex < currentParagraph.length) {
    // Type next character
    timerRef.current = setTimeout(() => {
      setTypedText(prev => {
        const next = [...prev];
        next[currentParaIndex] = currentParagraph.slice(0, charIndex + 1);
        return next;
      });
      setCharIndex(prev => prev + 1);
    }, 22); // ~45 chars/sec
  } else {
    // Paragraph complete: pause 1s, then advance
    timerRef.current = setTimeout(() => {
      setCurrentParaIndex(prev => prev + 1);
      setCharIndex(0);
    }, 1000);
  }

  return () => { if (timerRef.current) clearTimeout(timerRef.current); };
}, [charIndex, currentParaIndex]);  // ← Clean dependency array
```

**Key Improvements:**
- **No `isPaused` gate** — effect runs cleanly on every `charIndex`/`currentParaIndex` change
- **Single timer per render** — either typing (22ms) or inter-paragraph pause (1000ms)
- **Proper cleanup** — `clearTimeout` only clears the timer that was just set
- **Minimal dependencies** — `[charIndex, currentParaIndex]` only; `PARAGRAPHS` is stable module constant
- **Functional state updates** — `prev => prev + 1` pattern avoids stale closures

---

### 3.4 Auto-Scroll Preserved (Lines 58–63)

Unchanged — triggers on `currentParaIndex` change:
```typescript
useEffect(() => {
  if (activeRef.current) {
    activeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}, [currentParaIndex]);
```

---

### 3.5 Layout & Render Preserved (Lines 65–100)

All visual structure intact:
- 12-column Awwwards grid with numbering (01–14)
- Ghosting opacity: active=1, past=0.4, future=hidden
- Typography scale: first/last paragraph larger clamp
- `pt-[30vh] pb-[60vh]` padding
- Framer Motion transitions on opacity

Only reference changes: `paragraphs` → `PARAGRAPHS` (module constant)