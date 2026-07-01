import { DEMO_DREAMS, type DemoDream } from "./demoData";
import { RitualButton } from "./RitualButton";

const CINZEL: React.CSSProperties = { fontFamily: "'Cinzel', Georgia, serif" };

interface Props {
  completedIds: number[];
  onSelectDream: (dream: DemoDream) => void;
  onViewHistory: () => void;
}

function DreamCard({
  dream,
  completed,
  onSelect,
  onViewHistory,
}: {
  dream: DemoDream;
  completed: boolean;
  onSelect: () => void;
  onViewHistory: () => void;
}) {
  return (
    <div
      style={{
        background: completed ? "rgba(12,8,4,0.40)" : "rgba(12,8,4,0.65)",
        border: `1px solid ${completed ? "rgba(212,175,55,0.07)" : "rgba(212,175,55,0.12)"}`,
        borderRadius: "12px",
        overflow: "hidden",
        opacity: completed ? 0.62 : 1,
        transition: "border-color 200ms ease",
      }}
    >
      <div style={{ padding: "16px 18px 18px" }}>
        {/* ── Title row ──────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "12px",
            marginBottom: "4px",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  ...CINZEL,
                  fontSize: "0.55rem",
                  letterSpacing: "0.22em",
                  color: completed ? "rgba(215,165,60,0.30)" : "rgba(215,165,60,0.55)",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                {String(dream.id).padStart(2, "0")}
              </span>
              <h3
                style={{
                  ...CINZEL,
                  fontSize: "0.88rem",
                  letterSpacing: "0.08em",
                  color: completed ? "rgba(235,195,90,0.45)" : "rgba(235,195,90,0.9)",
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {dream.title}
              </h3>
            </div>
            <p
              style={{
                ...CINZEL,
                fontSize: "0.55rem",
                letterSpacing: "0.16em",
                color: completed ? "rgba(215,165,60,0.25)" : "rgba(215,165,60,0.48)",
                textTransform: "uppercase",
                margin: "4px 0 0",
              }}
            >
              {dream.emotionalLabel}
            </p>
          </div>

          {/* ── Action area ──────────────────────────────────── */}
          {completed ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "6px",
                flexShrink: 0,
              }}
            >
              {/* Inert sealed badge — not a button, not clickable */}
              <span
                style={{
                  ...CINZEL,
                  fontSize: "0.50rem",
                  letterSpacing: "0.16em",
                  color: "rgba(212,175,55,0.35)",
                  textTransform: "uppercase",
                  border: "1px solid rgba(212,175,55,0.12)",
                  borderRadius: "4px",
                  padding: "2px 8px",
                }}
              >
                Already Mirrored
              </span>
              <RitualButton
                variant="secondary"
                onClick={onViewHistory}
                style={{ fontSize: "0.50rem", letterSpacing: "0.14em" }}
              >
                View in My Mirrors
              </RitualButton>
            </div>
          ) : (
            /* Primary CTA — shimmer on the most important action per card */
            <RitualButton
              variant="primary"
              shimmer
              onClick={onSelect}
              style={{
                flexShrink: 0,
                padding: "7px 14px",
                fontSize: "0.60rem",
                letterSpacing: "0.18em",
                borderRadius: "8px",
                whiteSpace: "nowrap",
              }}
            >
              Run This Dream
            </RitualButton>
          )}
        </div>

        {/* ── Full dream text — shown completely, no truncation ─ */}
        <div style={{ marginTop: "12px" }}>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.78rem",
              fontStyle: "italic",
              color: completed ? "rgba(215,185,140,0.28)" : "rgba(215,185,140,0.65)",
              lineHeight: 1.80,
              margin: 0,
            }}
          >
            "{dream.fullText}"
          </p>
        </div>

        {/* ── Test proof ───────────────────────────────────── */}
        <div
          style={{
            marginTop: "12px",
            paddingTop: "10px",
            borderTop: "1px solid rgba(212,175,55,0.06)",
          }}
        >
          <p
            style={{
              ...CINZEL,
              fontSize: "0.48rem",
              letterSpacing: "0.20em",
              color: completed ? "rgba(215,165,60,0.22)" : "rgba(215,165,60,0.38)",
              textTransform: "uppercase",
              margin: "0 0 3px",
            }}
          >
            What this tests
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.65rem",
              color: completed ? "rgba(215,185,140,0.22)" : "rgba(215,185,140,0.42)",
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            {dream.testProof}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DemoDreamSelector({
  completedIds,
  onSelectDream,
  onViewHistory,
}: Props) {
  return (
    <div
      style={{
        minHeight: "100dvh",
        background:
          "radial-gradient(ellipse at 50% 0%, hsl(215 40% 7%) 0%, hsl(220 45% 4%) 45%, hsl(225 50% 2%) 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "clamp(40px,10vw,64px) 20px 20px",
          borderBottom: "1px solid rgba(212,175,55,0.08)",
        }}
      >
        <p
          style={{
            ...CINZEL,
            fontSize: "0.58rem",
            letterSpacing: "0.32em",
            color: "rgba(215,165,60,0.6)",
            textTransform: "uppercase",
            margin: "0 0 6px",
          }}
        >
          CONEXUS · ECHOFORM
        </p>
        <h2
          style={{
            ...CINZEL,
            fontSize: "min(8vw, 1.7rem)",
            letterSpacing: "0.08em",
            color: "rgba(235,195,90,0.92)",
            fontWeight: 400,
            margin: "0 0 6px",
          }}
        >
          Prepared Dreams
        </h2>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.75rem",
            color: "rgba(215,185,140,0.45)",
            lineHeight: 1.65,
            margin: 0,
            maxWidth: "440px",
          }}
        >
          Five prepared dreams — each one revealing a different way ECHOform
          reads and reflects a dream back. Select one to see the full sequence.
        </p>
      </div>

      {/* Dream list */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px 20px 40px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "640px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {DEMO_DREAMS.map((dream) => (
          <DreamCard
            key={dream.id}
            dream={dream}
            completed={completedIds.includes(dream.id)}
            onSelect={() => onSelectDream(dream)}
            onViewHistory={onViewHistory}
          />
        ))}

        {completedIds.length > 0 && (
          <div style={{ textAlign: "center", paddingTop: "8px" }}>
            <RitualButton
              variant="secondary"
              onClick={onViewHistory}
              style={{ fontSize: "0.52rem", letterSpacing: "0.18em" }}
            >
              View My Mirrors ({completedIds.length} completed)
            </RitualButton>
          </div>
        )}
      </div>
    </div>
  );
}
