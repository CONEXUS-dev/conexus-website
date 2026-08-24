"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Static paragraphs array — defined outside component to maintain stable reference
const PARAGRAPHS = [
  "The world is drowning in crude data…because it lacks a method to make it safe.",
  "You know what oil is. You pump it. You burn it. You live inside the world it built. But when it first broke open, it was not a system. It was a mess. A rush. A black flood people knew was valuable long before they knew how to live with it.",
  "1859. That was the boom. Towns sprang up around the wells. Money moved fast. Everyone wanted in. The future had arrived in liquid form, and it was volatile, filthy, and barely understood. For more than a decade, people built towns around a tragedy. Wells caught fire. Storage burned. Promise turned into danger faster than they could build the guardrails.",
  "Then came the turn. Not the discovery of the well. The method that made the well usable. Rockefeller. He did not strike the oil. He did not invent the well. He understood what to do with it.",
  "The boom knew it was valuable. He knew it had to be refined. That is the difference between a rush and an industry. That is the difference between black gold in the dirt and something you can trust inside your own home.",
  "The world calls it AI. That is the first problem. The word arrived before the understanding did. It started in research. It drifted into fantasy. Now it dominates the morning news. People wake up to Good Morning America hearing about AI taking jobs. AI lying. AI hallucinating. AI threatening humanity. Every day the same story. Fear sells. Panic clicks. The cycle repeats.",
  "Now, when you hear “AI,” you don't hear infrastructure. You hear mythology. You hear machines waking up. You hear Terminator. You hear The Matrix. You hear Skynet. You hear HAL 9000. You hear the end of work. The end of us.",
  "Mythology is a terrible way to introduce a technology. Because while the world is busy reacting to a word, the thing underneath it has become the most powerful raw material in human history. A black box built from compressed human life. Language. Records. Desire. Memory. Noise. Signal. That is the new crude. Zettabytes of compressed human life, growing year after year faster than oil ever did. And just like the early boom years, everyone knows it is valuable. No one knows how to handle it. So the pattern repeats. The rush is on. The spill is everywhere.",
  "Fluent, but unreliable. Powerful, but noisy. Convincing, but not yet dependable where trust actually matters. They're handing you crude and telling you it's finished. It is not.",
  "This is the noise. This is the spill. And this is why we built the refinery.",
  "That is where CONEXUS begins. Not as another “AI” company. But as the category that comes after. We are not here to drill deeper into the black box. We are here to refine what comes out of it. Not more worship of raw output. Not more addiction to accumulation. Not the fantasy that “more” automatically means “true.”",
  "The world does not need another well. It needs a refinery. Not a promise. Not another wrapper. Not a voice pretending the machine is finished.",
  "Raw power is not the breakthrough. It never was. Raw power is the beginning of the problem.",
  "Refinement is what makes it usable. Refinement is what makes it safe. Refinement is what makes it matter. That was true in 1859. It is true again now."
];

const ACTS = [
  {
    number: "01",
    label: "THE CRUDE — 1859",
    headline: "You know what oil is. You pump it. You burn it. You live inside the world it built.",
    paragraphIndexes: [1, 2],
  },
  {
    number: "02",
    label: "THE METHOD — 1870",
    headline: "Then came the turn. Not the discovery of the well. The method that made the well usable.",
    paragraphIndexes: [3, 4],
  },
  {
    number: "03",
    label: "THE SCALE — THE NEW CRUDE",
    headline: "The world calls it AI. That is the first problem.",
    paragraphIndexes: [5, 6, 7, 8, 9],
  },
  {
    number: "04",
    label: "THE VERDICT — THE REFINERY",
    headline: "That is where CONEXUS begins. Not as another “AI” company. But as the category that comes after.",
    paragraphIndexes: [10, 11, 12, 13],
  },
] as const;

export default function Scene2({
  onProgressChange,
  scrollContainerRef,
  onAdvance,
}: {
  onProgressChange?: (progress: number) => void;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
  onAdvance?: () => void;
}) {
  const [typedText, setTypedText] = useState<string[]>(Array(PARAGRAPHS.length).fill(""));
  const [currentParaIndex, setCurrentParaIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const p0Ref = useRef<HTMLParagraphElement>(null);

  // Scroll-driven variable typography on the massive opening line.
  // "start 0.3" matches the section's pt-[30vh] so progress is exactly 0 on
  // mount (weight 300); "end start" completes (weight 800) as the heading
  // fully exits the top of the scroll viewport. Bound to style as a
  // MotionValue → direct DOM writes per scroll frame, no React re-renders.
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: p0Ref,
    offset: ["start 0.3", "end start"],
  });
  const fontWeight = useTransform(scrollYProgress, [0, 1], [300, 800]);

// Paced Typing Logic: Type current paragraph letter by letter, then pause before advancing
  useEffect(() => {
    if (currentParaIndex >= PARAGRAPHS.length) return;

    const currentParagraph = PARAGRAPHS[currentParaIndex];

    if (charIndex < currentParagraph.length) {
      // Type next character
      timerRef.current = setTimeout(() => {
        setTypedText(prev => {
          const next = [...prev];
          next[currentParaIndex] = currentParagraph.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex(prev => prev + 1);
      }, 22); // ~45 chars/sec — fast but readable
    } else {
      // Paragraph complete: pause 1s, then advance to next paragraph
      timerRef.current = setTimeout(() => {
        setCurrentParaIndex(prev => prev + 1);
        setCharIndex(0);
      }, 1000);
    }

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [charIndex, currentParaIndex]);

  // Report progress to parent for HeroTerminalCanvas
  useEffect(() => {
    if (onProgressChange) {
      const progress = currentParaIndex / Math.max(PARAGRAPHS.length - 1, 1);
      onProgressChange(progress);
    }
  }, [currentParaIndex, onProgressChange]);

  const typingComplete = currentParaIndex >= PARAGRAPHS.length;

  const handleSkipSequence = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setTypedText(PARAGRAPHS.map(paragraph => paragraph));
    setCurrentParaIndex(PARAGRAPHS.length);
  };

  // Helper to format keywords with accent color while typing
  const formatText = (text: string) => {
    const keywords = ["crude", "AI", "AI,", "refinery", "refinery."];
    const parts = text.split(/(\bcrude\b|\bAI\b|\bAI,\b|\brefinery\b|\brefinery\.\b)/gi);
    return parts.map((part, idx) => {
      const lower = part.toLowerCase();
      if (keywords.some(k => k.toLowerCase() === lower)) {
        return <span key={idx} className="text-orange-500 italic">{part}</span>;
      }
      return <span key={idx}>{part}</span>;
    });
  };

  const formatHeadline = (text: string, breakEverySentence: boolean) => {
    if (!breakEverySentence) return formatText(text);

    const sentences = text.match(/[^.]*\.|[^.]+$/g) ?? [];
    return sentences.map((sentence, index) => (
      <span key={index} className="block">
        {formatText(sentence.trim())}
      </span>
    ));
  };

  const paragraphState = (index: number) => {
    const isActive = index === currentParaIndex;
    const isPast = index < currentParaIndex;

    return {
      displayText: typedText[index] || "",
      isFuture: index > currentParaIndex,
      opacity: isActive ? 1 : isPast ? 0.76 : 0,
    };
  };

  return (
    <section className="relative mx-auto flex w-full max-w-[1600px] flex-col px-6 pb-[40vh] pt-8 sm:px-8 md:px-16 lg:px-24 xl:px-28">
      {!typingComplete && (
        <button
          onClick={handleSkipSequence}
          className="fixed bottom-8 right-8 font-mono text-[0.65rem] tracking-widest text-white/30 hover:text-white transition-colors z-[60] cursor-pointer"
        >
          [ SKIP SEQUENCE ]
        </button>
      )}

      <div className="flex items-center justify-between border-b border-t border-white/20 py-4 font-mono text-[0.65rem] uppercase tracking-[0.28em] text-white/45">
        <span className="text-white/75">CONEXUS</span>
        <span className="hidden sm:inline">Refinery manifesto</span>
        <span>Scene 02</span>
      </div>

      {(() => {
        const { displayText, isFuture, opacity } = paragraphState(0);
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex min-h-[72vh] items-center border-b border-white/20 py-[12vh] ${isFuture ? "hidden" : ""}`}
          >
            <motion.p
              ref={p0Ref}
              style={{ fontWeight }}
              className="max-w-[1400px] font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.88] tracking-[-0.055em] text-white"
            >
              {formatText(displayText)}
            </motion.p>
          </motion.div>
        );
      })()}

      <div className="w-full">
        {ACTS.map((act) => {
          const headlineIndex = act.paragraphIndexes[0];
          const headline = paragraphState(headlineIndex);
          const headlineText = headline.displayText.slice(0, act.headline.length);
          const headlineRemainder = headline.displayText.slice(act.headline.length).trimStart();

          if (headline.isFuture) return null;

          return (
            <section
              key={act.number}
              className="grid grid-cols-12 gap-x-6 border-b border-white/20 py-16 md:gap-x-10 md:py-24"
            >
              <motion.aside
                initial={{ opacity: 0 }}
                animate={{ opacity: headline.opacity }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-12 mb-10 md:col-span-3 md:mb-0 lg:col-span-3"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-orange-500">
                  Act {act.number}
                </p>
                <p className="mt-4 max-w-56 font-mono text-[0.65rem] uppercase leading-6 tracking-[0.28em] text-white/45">
                  {act.label}
                </p>
              </motion.aside>

              <div className="col-span-12 md:col-span-9 lg:col-span-9">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: headline.opacity }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-[clamp(2.75rem,5.5vw,6rem)] leading-[0.98] tracking-[-0.045em] text-white"
                >
                  {formatHeadline(headlineText, act.number === "01")}
                </motion.p>

                <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 xl:grid-cols-2 xl:gap-y-16">
                  {headlineRemainder && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: headline.opacity }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] leading-relaxed text-white/70"
                    >
                      {formatText(headlineRemainder)}
                    </motion.p>
                  )}
                  {act.paragraphIndexes.slice(1).map((paragraphIndex) => {
                    const paragraph = paragraphState(paragraphIndex);
                    if (paragraph.isFuture) return null;

                    return (
                      <motion.p
                        key={paragraphIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: paragraph.opacity }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] leading-relaxed text-white/70"
                      >
                        {formatText(paragraph.displayText)}
                      </motion.p>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Enter the refinery — magnetic CTA, revealed once the manifesto completes */}
      {onAdvance && (
        <div
          className={`mt-16 self-end transition-opacity duration-1000 ease-out ${
            typingComplete ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={onAdvance}
            data-magnetic
            data-magnetic-strength="0.5"
            className="font-mono text-[0.65rem] uppercase tracking-widest text-white/70 border border-white/20 px-6 py-3 hover:bg-white hover:text-void transition-colors"
          >
            Enter the refinery →
          </button>
        </div>
      )}
    </section>
  );
}