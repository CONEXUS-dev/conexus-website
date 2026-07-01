const KEYS = {
  IDENTITY_CONFIRMED: "echoform_demo_identity_confirmed",
  HISTORY: "echoform_demo_history",
  COMPLETED_IDS: "echoform_demo_completed_dream_ids",
  CURRENT_DREAM_ID: "echoform_demo_current_dream_id",
} as const;

export interface DemoHistoryEntry {
  dreamId: number;
  dreamTitle: string;
  dreamText: string;
  chosenMirrorRank: 1 | 2 | 3;
  mirrors: {
    rank: 1 | 2 | 3;
    tierNumber: number;
    tierName: string;
    variantLabel: string;
    likenessLevel: number;
    likenessLabel: string;
    renderingMode: string;
    chosen: boolean;
    imageFile: string;
    reflectionNote: string;
  }[];
  completedAt: string;
}

function safeGet<T>(key: string, fallback: T): T {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function safeSet(key: string, value: unknown): void {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // sessionStorage full or unavailable — silent fail
  }
}

export function isDemoIdentityConfirmed(): boolean {
  try {
    return sessionStorage.getItem(KEYS.IDENTITY_CONFIRMED) === "true";
  } catch {
    return false;
  }
}

export function setDemoIdentityConfirmed(): void {
  try {
    sessionStorage.setItem(KEYS.IDENTITY_CONFIRMED, "true");
    sessionStorage.setItem("echoform_demo_history", "[]");
    sessionStorage.setItem("echoform_demo_completed_dream_ids", "[]");
  } catch {
    // ignore
  }
}

export function getCompletedDreamIds(): number[] {
  return safeGet<number[]>(KEYS.COMPLETED_IDS, []);
}

export function addCompletedDreamId(id: number): void {
  const existing = getCompletedDreamIds();
  if (!existing.includes(id)) {
    safeSet(KEYS.COMPLETED_IDS, [...existing, id]);
  }
}

export function getDemoHistory(): DemoHistoryEntry[] {
  return safeGet<DemoHistoryEntry[]>(KEYS.HISTORY, []);
}

export function addDemoHistoryEntry(entry: DemoHistoryEntry): void {
  const existing = getDemoHistory();
  const without = existing.filter((e) => e.dreamId !== entry.dreamId);
  safeSet(KEYS.HISTORY, [entry, ...without]);
}

export function getCurrentDreamId(): number | null {
  return safeGet<number | null>(KEYS.CURRENT_DREAM_ID, null);
}

export function setCurrentDreamId(id: number): void {
  safeSet(KEYS.CURRENT_DREAM_ID, id);
}

export function clearDemoState(): void {
  try {
    Object.values(KEYS).forEach((k) => sessionStorage.removeItem(k));
  } catch {
    // ignore
  }
}
