import type { ReactNode } from "react";
import { EvidenceInfographics } from "@/components/EvidenceInfographics";

export default function EvidenceLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <EvidenceInfographics />
    </>
  );
}
