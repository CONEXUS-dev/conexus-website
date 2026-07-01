import { RitualButton } from "./RitualButton";
import { SAMPLE_IDENTITY } from "./demoData";

const CINZEL: React.CSSProperties = { fontFamily: "'Cinzel', Georgia, serif" };

const PROFILE_ROWS: { label: string; key: keyof typeof SAMPLE_IDENTITY }[] = [
  { label: "Presentation",   key: "presentation"   },
  { label: "Skin Tone",      key: "skinTone"        },
  { label: "Hair Color",     key: "hairColor"       },
  { label: "Hair Style",     key: "hairStyle"       },
  { label: "Body Frame",     key: "bodyFrame"       },
  { label: "Facial Hair",    key: "facialHair"      },
  { label: "Glasses",        key: "glasses"         },
  { label: "Age Appearance", key: "ageAppearance"   },
];

interface Props {
  onConfirm: () => void;
}

export default function DemoIdentityConfirm({ onConfirm }: Props) {
  return (
    <div
      className="relative min-h-dvh flex flex-col items-center justify-start overflow-hidden pb-16"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, hsl(215 40% 7%) 0%, hsl(220 45% 4%) 45%, hsl(225 50% 2%) 100%)",
      }}
    >
      <div className="relative z-10 w-full max-w-md px-6 pt-12 sm:pt-16 flex flex-col gap-6">
        <div className="text-center">
          <p className="text-amber-400/60 tracking-[0.3em] text-xs uppercase mb-2" style={CINZEL}>
            Sample Reflection Identity
          </p>
          <h2 className="text-white text-2xl font-light mb-3" style={CINZEL}>
            Confirm to continue
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto">
            These five prepared dreams were built around this sample profile.
            Confirming it starts the guided demo.
          </p>
        </div>

        <div className="bg-white/4 border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-5 py-3 border-b border-white/8 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="hsl(43 85% 62%)" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <p className="text-white/70 text-xs font-medium">Demo Sample</p>
              <p className="text-white/30 text-[10px]">No photo provided · sample profile</p>
            </div>
          </div>

          <div className="divide-y divide-white/6">
            {PROFILE_ROWS.map(({ label, key }) => (
              <div key={key} className="flex items-center justify-between px-5 py-2.5">
                <span className="text-white/40 text-xs">{label}</span>
                <span className="text-white/80 text-xs capitalize font-medium">
                  {String(SAMPLE_IDENTITY[key])}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-400/6 border border-amber-400/20 rounded-xl px-4 py-3">
          <p className="text-amber-300/60 text-xs leading-relaxed text-center">
            In the live product, a photo or a brief description gives the mirror
            your likeness. From there, each reflection is calibrated to preserve
            how you look — or to step back from it, depending on what the dream calls for.
          </p>
        </div>

        {/* Primary CTA — shimmer on the single most important action on this screen */}
        <RitualButton
          variant="primary"
          shimmer
          onClick={onConfirm}
          style={{ width: "100%", padding: "16px 24px", fontSize: "0.78rem" }}
        >
          Confirm Sample Reflection
        </RitualButton>
      </div>
    </div>
  );
}
