"use client";

import { useCallback, useMemo, useState, type ReactNode } from "react";
import { FocusContext, type FocusState, type GatewayId } from "./FocusContext";

export default function FocusProvider({ children }: { children: ReactNode }) {
  const [activeGateway, setActiveGateway] = useState<GatewayId | null>(null);

  const activate = useCallback((id: GatewayId) => {
    setActiveGateway(id);
  }, []);

  const deactivate = useCallback(() => {
    setActiveGateway(null);
  }, []);

  const value = useMemo<FocusState>(
    () => ({ activeGateway, activate, deactivate }),
    [activeGateway, activate, deactivate]
  );

  return <FocusContext.Provider value={value}>{children}</FocusContext.Provider>;
}
