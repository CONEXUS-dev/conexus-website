"use client";

import { create } from "zustand";

export type ArmIdentifier =
  | "NONE"
  | "CONTROL"
  | "NEUTRAL"
  | "TOKEN_ONLY"
  | "CONEXUS";

export interface DataVaultState {
  /** Currently focused experimental condition ("NONE" when unfocused). */
  activeArm: ArmIdentifier;
  /** True only after a legitimate user activation successfully started audio. */
  audioUnlocked: boolean;
  setActiveArm: (arm: ArmIdentifier) => void;
  resetActiveArm: () => void;
  setAudioUnlocked: (unlocked: boolean) => void;
}

export const useDataVaultStore = create<DataVaultState>()((set) => ({
  activeArm: "NONE",
  audioUnlocked: false,
  setActiveArm: (arm) => set({ activeArm: arm }),
  resetActiveArm: () => set({ activeArm: "NONE" }),
  setAudioUnlocked: (unlocked) => set({ audioUnlocked: unlocked }),
}));
