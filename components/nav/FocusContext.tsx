"use client";

import { createContext, useContext } from "react";

export type GatewayId = "nairthex" | "echoform";

export interface FocusState {
  activeGateway: GatewayId | null;
  activate: (id: GatewayId) => void;
  deactivate: () => void;
}

export const FocusContext = createContext<FocusState>({
  activeGateway: null,
  activate: () => undefined,
  deactivate: () => undefined,
});

export function useFocusMode(): FocusState {
  return useContext(FocusContext);
}
