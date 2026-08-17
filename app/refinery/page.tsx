import { RefineryNarrative } from "@/components/RefineryNarrative";
import { Navigation } from "@/components/Navigation";

export default function RefineryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <RefineryNarrative />
    </main>
  );
}
