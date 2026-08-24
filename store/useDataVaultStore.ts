import { create } from "zustand";

export type ArmIdentifier = "NONE" | "CONTROL" | "NEUTRAL" | "TOKEN_ONLY" | "CONEXUS";

interface DataVaultState {
  activeArm: ArmIdentifier;
  setActiveArm: (arm: ArmIdentifier) => void;
  resetActiveArm: () => void;
}

export const useDataVaultStore = create<DataVaultState>()((set) => ({
  activeArm: "NONE",
  setActiveArm: (arm) => set({ activeArm: arm }),
  resetActiveArm: () => set({ activeArm: "NONE" }),
}));
