import { useState, useEffect } from "react";
import type { DemoHistoryEntry } from "./demoState";

const CINZEL: React.CSSProperties = { fontFamily: "'Cinzel', Georgia, serif" };

// ── ImageModal ────────────────────────────────────────────────────────────────
function ImageModal({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mirror image full view"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.93)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "lobbyFadeInUp 0.2s ease both",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", maxWidth: "100%", maxHeight: "100%" }}
      >
        <img
          src={src}
          alt="Mirror reflection"
          style={{
            display: "block",
            maxWidth: "calc(100vw - 40px)",
            maxHeight: "calc(100dvh - 80px)",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
        <button
          onClick={onClose}
          aria-label="Close image preview"
          style={{
            position: "absolute",
            top: "-14px",
            right: "-14px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "rgba(6,4,2,0.92)",
            border: "1px solid rgba(212,175,55,0.3)",
            color: "rgba(215,175,100,0.85)",
            cursor: "pointer",
            fontSize: "20px",
            lineHeight: "30px",
            textAlign: "center",
            padding: 0,
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

// ── DreamTextModal (bottom sheet) ─────────────────────────────────────────────
function DreamTextModal({ text, onClose }: { text: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full dream text"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 210,
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        animation: "lobbyFadeInUp 0.22s ease both",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "480px",
          maxHeight: "calc(100dvh - 64px)",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse at 50% 100%, hsl(215 40% 9%) 0%, hsl(220 45% 5%) 60%, hsl(225 50% 3%) 100%)",
          border: "1px solid rgba(212,175,55,0.18)",
          borderBottom: "none",
          borderRadius: "20px 20px 0 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 18px 12px",
            borderBottom: "1px solid rgba(212,175,55,0.10)",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              ...CINZEL,
              fontSize: "0.58rem",
              letterSpacing: "0.3em",
              color: "rgba(215,165,60,0.65)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            The Dream
          </p>
          <button
            onClick={onClose}
            aria-label="Close dream text"
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: "rgba(212,175,55,0.06)",
              border: "1px solid rgba(212,175,55,0.22)",
              color: "rgba(215,175,100,0.75)",
              cursor: "pointer",
              fontSize: "18px",
              lineHeight: 1,
              textAlign: "center",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>
        </div>
        <div
          style={{
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            padding: "20px 20px 36px",
            flex: 1,
          }}
        >
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.88rem",
              fontStyle: "italic",
              color: "rgba(225,195,145,0.82)",
              lineHeight: 1.85,
              margin: 0,
              whiteSpace: "pre-wrap",
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── DemoSessionCard ───────────────────────────────────────────────────────────
function DemoSessionCard({
  entry,
  index,
  baseUrl,
}: {
  entry: DemoHistoryEntry;
  index: number;
  baseUrl: string;
}) {
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [dreamModalOpen, setDreamModalOpen] = useState(false);

  const dateStr = (() => {
    try {
      return new Date(entry.completedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return entry.completedAt;
    }
  })();

  const dreamExcerpt =
    entry.dreamText.slice(0, 120) +
    (entry.dreamText.length > 120 ? "…" : "");

  const chosenMirror =
    entry.mirrors.find((m) => m.rank === entry.chosenMirrorRank) ??
    entry.mirrors.find((m) => m.chosen) ??
    entry.mirrors[0];
  const heroSrc = `${baseUrl}demo/${chosenMirror.imageFile}`;

  // All candidates: chosen first, then unchosen in rank order
  const candidates = [...entry.mirrors].sort(
    (a, b) => (b.chosen ? 1 : 0) - (a.chosen ? 1 : 0),
  );

  return (
    <>
      <div
        style={{
          background: "rgba(12,8,4,0.7)",
          border: "1px solid rgba(212,175,55,0.12)",
          borderRadius: "12px",
          overflow: "hidden",
          animation: `lobbyFadeInUp 0.35s ease ${index * 60}ms both`,
        }}
      >
        {/* Hero image — chosen mirror, full width, tappable */}
        <button
          onClick={() => setModalSrc(heroSrc)}
          aria-label="View chosen mirror at full size"
          style={{
            display: "block",
            width: "100%",
            padding: 0,
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "4 / 3",
              overflow: "hidden",
              background: "rgba(8,5,2,0.8)",
              position: "relative",
            }}
          >
            <img
              src={heroSrc}
              alt={`${chosenMirror.tierName} mirror`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                ...CINZEL,
                fontSize: "0.52rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(235,195,90,0.9)",
                background: "rgba(6,4,2,0.72)",
                border: "1px solid rgba(212,175,55,0.25)",
                borderRadius: "4px",
                padding: "3px 8px",
              }}
            >
              Tier {chosenMirror.tierNumber}
            </div>
          </div>
        </button>

        <div style={{ padding: "14px 16px 16px" }}>
          {/* Date + Selected badge */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <p
              style={{
                ...CINZEL,
                fontSize: "0.58rem",
                letterSpacing: "0.2em",
                color: "rgba(215,165,60,0.5)",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {dateStr}
            </p>
            <span
              style={{
                ...CINZEL,
                fontSize: "0.52rem",
                letterSpacing: "0.16em",
                color: "rgba(212,175,55,0.55)",
                textTransform: "uppercase",
                background: "rgba(212,175,55,0.07)",
                border: "1px solid rgba(212,175,55,0.14)",
                borderRadius: "4px",
                padding: "2px 7px",
              }}
            >
              Selected
            </span>
          </div>

          {/* Chosen tier name */}
          <p
            style={{
              ...CINZEL,
              fontSize: "0.78rem",
              letterSpacing: "0.10em",
              color: "rgba(235,195,90,0.85)",
              fontWeight: 400,
              margin: "0 0 6px",
            }}
          >
            {chosenMirror.tierName}
          </p>

          {/* Dream excerpt + Read full dream */}
          <div>
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.72rem",
                fontStyle: "italic",
                color: "rgba(215,185,140,0.52)",
                lineHeight: 1.65,
                margin: "0 0 6px",
              }}
            >
              "{dreamExcerpt}"
            </p>
            <button
              type="button"
              onClick={() => setDreamModalOpen(true)}
              style={{
                ...CINZEL,
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontSize: "0.54rem",
                letterSpacing: "0.18em",
                color: "rgba(212,175,55,0.45)",
                textTransform: "uppercase",
                textDecoration: "underline",
                textDecorationColor: "rgba(212,175,55,0.18)",
                textUnderlineOffset: "3px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(212,175,55,0.75)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(212,175,55,0.45)";
              }}
            >
              Read full dream
            </button>
          </div>

          {/* Mirror candidates row */}
          <div
            style={{
              marginTop: "14px",
              paddingTop: "12px",
              borderTop: "1px solid rgba(212,175,55,0.08)",
            }}
          >
            <p
              style={{
                ...CINZEL,
                fontSize: "0.46rem",
                letterSpacing: "0.22em",
                color: "rgba(215,165,60,0.36)",
                textTransform: "uppercase",
                margin: "0 0 8px",
              }}
            >
              All three reflections returned
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "6px",
              }}
            >
              {candidates.map((m) => {
                const imgSrc = `${baseUrl}demo/${m.imageFile}`;
                const isChosen = m.chosen;
                return (
                  <button
                    key={m.rank}
                    onClick={() => setModalSrc(imgSrc)}
                    aria-label={isChosen ? "View chosen mirror at full size" : "View offered mirror at full size"}
                    style={{
                      padding: 0,
                      border: isChosen
                        ? "1.5px solid rgba(212,175,55,0.55)"
                        : "1px solid rgba(212,175,55,0.10)",
                      borderRadius: "6px",
                      overflow: "hidden",
                      cursor: "pointer",
                      background: "none",
                      opacity: isChosen ? 1 : 0.55,
                      position: "relative",
                    }}
                  >
                    <div style={{ aspectRatio: "3 / 4", overflow: "hidden" }}>
                      <img
                        src={imgSrc}
                        alt={isChosen ? "Chosen mirror" : "Offered mirror"}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center top",
                          display: "block",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "3px 4px",
                        background: "rgba(4,2,0,0.78)",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          ...CINZEL,
                          fontSize: "0.42rem",
                          letterSpacing: "0.12em",
                          color: isChosen
                            ? "rgba(235,195,90,0.92)"
                            : "rgba(215,175,100,0.45)",
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                        {isChosen ? "Chosen" : "Offered"}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {modalSrc && <ImageModal src={modalSrc} onClose={() => setModalSrc(null)} />}
      {dreamModalOpen && (
        <DreamTextModal text={entry.dreamText} onClose={() => setDreamModalOpen(false)} />
      )}
    </>
  );
}

// ── DemoHistory panel ─────────────────────────────────────────────────────────
interface Props {
  history: DemoHistoryEntry[];
  baseUrl: string;
  onClose: () => void;
  onShowGallery?: () => void;
}

export default function DemoHistory({ history, baseUrl, onClose, onShowGallery }: Props) {
  // Escape key closes the panel (mirrors the ImageModal and DreamTextModal behaviour)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-label="My Mirrors — past demo dream reflections"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        background: "rgba(6,4,2,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        animation: "lobbyFadeInUp 0.35s ease both",
      }}
    >
      <style>{`
        @keyframes lobbyFadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="lobbyFadeInUp"] { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "clamp(20px,5vw,32px) 20px 16px",
          borderBottom: "1px solid rgba(212,175,55,0.12)",
          flexShrink: 0,
        }}
      >
        <div>
          <p
            style={{
              ...CINZEL,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              color: "rgba(215,165,60,0.6)",
              textTransform: "uppercase",
              margin: "0 0 3px",
            }}
          >
            CONEXUS · ECHOFORM
          </p>
          <h2
            style={{
              ...CINZEL,
              fontSize: "1.1rem",
              letterSpacing: "0.12em",
              color: "rgba(235,195,90,0.95)",
              fontWeight: 400,
              margin: 0,
            }}
          >
            MY MIRRORS
          </h2>
        </div>
        <button
          onClick={onClose}
          aria-label="Close history panel"
          style={{
            background: "none",
            border: "1px solid rgba(212,175,55,0.18)",
            borderRadius: "8px",
            color: "rgba(215,175,100,0.55)",
            cursor: "pointer",
            padding: "8px 14px",
            ...CINZEL,
            fontSize: "0.62rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Close
        </button>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px 32px" }}>
        {onShowGallery && (
          <div style={{ paddingBottom: "4px", marginBottom: "16px", borderBottom: "1px solid rgba(212,175,55,0.06)" }}>
            <button
              type="button"
              onClick={() => { onClose(); onShowGallery(); }}
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontSize: "0.52rem",
                letterSpacing: "0.20em",
                color: "rgba(212,175,55,0.32)",
                textTransform: "uppercase",
                textDecoration: "underline",
                textDecorationColor: "rgba(212,175,55,0.12)",
                textUnderlineOffset: "3px",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(212,175,55,0.58)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(212,175,55,0.32)"; }}
            >
              Evidence Gallery ↗
            </button>
          </div>
        )}

        {history.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              paddingTop: "64px",
              paddingBottom: "48px",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                margin: "0 auto 20px",
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.12), transparent 70%)",
                border: "1px solid rgba(212,175,55,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(212,175,55,0.45)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <p
              style={{
                ...CINZEL,
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                color: "rgba(235,195,90,0.6)",
                fontWeight: 400,
                margin: "0 0 8px",
              }}
            >
              No reflections yet
            </p>
            <p
              style={{
                ...CINZEL,
                fontSize: "0.62rem",
                letterSpacing: "0.10em",
                color: "rgba(215,175,100,0.35)",
                lineHeight: 1.7,
                maxWidth: "240px",
                margin: "0 auto",
              }}
            >
              Return to the Mirror Hall and choose a dream to begin.
              Your reflections will appear here.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {history.map((entry, i) => (
              <DemoSessionCard
                key={entry.dreamId}
                entry={entry}
                index={i}
                baseUrl={baseUrl}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
