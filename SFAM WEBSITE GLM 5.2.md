### 1\. app/globals.css

@import "tailwindcss";

@theme {  
  \--font-serif: "Editorial New", "Times New Roman", serif;  
  \--font-mono: "JetBrains Mono", monospace;  
  \--color-void: oklch(0% 0 0);  
  \--color-surface: oklch(15% 0 0);  
  \--color-data: oklch(90% 0 0);  
  \--color-accent: oklch(60% 0.2 250);  
  \--animate-cinematic-fade: fade 2s ease-in-out;  
}

@keyframes fade {  
  0%, 100% { opacity: 0; }  
  50% { opacity: 1; }  
}

html, body {  
  overflow: hidden;  
  background-color: var(--color-void);  
  color: var(--color-data);  
  font-family: var(--font-serif);  
  height: 100vh;  
  width: 100vw;  
  margin: 0;  
  padding: 0;  
}

::-webkit-scrollbar {  
  width: 0px;  
  background: transparent;  
}

\* {  
  \-webkit-tap-highlight-color: transparent;  
}

### 2\. app/layout.tsx

import type { Metadata } from "next";  
import "./globals.css";

export const metadata: Metadata \= {  
  title: "CONEXUS",  
  description: "Not another AI company. The solution.",  
};

export default function RootLayout({  
  children,  
}: Readonly\<{  
  children: React.ReactNode;  
}\>) {  
  return (  
    \<html lang="en"\>  
      \<body className="antialiased"\>{children}\</body\>  
    \</html\>  
  );  
}

### 3\. app/page.tsx

import SceneController from "@/components/SceneController";

export default function Home() {  
  return \<SceneController /\>;  
}

### 4\. components/SceneController.tsx

"use client";

import { useState, useRef, useEffect, useCallback } from "react";  
import { AnimatePresence, motion } from "motion/react";  
import Scene1 from "./scenes/Scene1";  
import Scene2 from "./scenes/Scene2";  
import Scene3 from "./scenes/Scene3";  
import Scene4 from "./scenes/Scene4";  
import Scene5 from "./scenes/Scene5";  
import Scene6 from "./scenes/Scene6";  
import Scene7 from "./scenes/Scene7";  
import Scene8 from "./scenes/Scene8";  
import Scene9 from "./scenes/Scene9";

export default function SceneController() {  
  const \[scene, setScene\] \= useState(0);  
  const touchStartX \= useRef(0);  
  const lastTransitionTime \= useRef(0);

  const transitionScene \= useCallback((direction: "next" | "prev" | "goto", target?: number) \=\> {  
    const now \= Date.now();  
    if (now \- lastTransitionTime.current \< 1200\) return; // Debounce to prevent skipping  
    lastTransitionTime.current \= now;

    setScene((prev) \=\> {  
      if (direction \=== "next") return Math.min(prev \+ 1, 8);  
      if (direction \=== "prev") return Math.max(prev \- 1, 0);  
      if (direction \=== "goto" && target \!== undefined) return target;  
      return prev;  
    });  
  }, \[\]);

  useEffect(() \=\> {  
    const handleMouseMove \= (e: MouseEvent) \=\> {  
      if (e.clientX \> window.innerWidth \- 50\) {  
        transitionScene("next");  
      } else if (e.clientX \< 50\) {  
        transitionScene("prev");  
      }  
    };

    window.addEventListener("mousemove", handleMouseMove);  
    return () \=\> window.removeEventListener("mousemove", handleMouseMove);  
  }, \[transitionScene\]);

  const handleTouchStart \= (e: React.TouchEvent) \=\> {  
    touchStartX.current \= e.touches\[0\].clientX;  
  };

  const handleTouchEnd \= (e: React.TouchEvent) \=\> {  
    const deltaX \= e.changedTouches\[0\].clientX \- touchStartX.current;  
    if (deltaX \< \-50) transitionScene("next");  
    if (deltaX \> 50\) transitionScene("prev");  
  };

  const scenes \= \[  
    \<Scene1 key="scene1" /\>,  
    \<Scene2 key="scene2" /\>,  
    \<Scene3 key="scene3" onSkip={() \=\> transitionScene("goto", 4)} /\>,  
    \<Scene4 key="scene4" /\>,  
    \<Scene5 key="scene5" /\>,  
    \<Scene6 key="scene6" /\>,  
    \<Scene7 key="scene7" /\>,  
    \<Scene8 key="scene8" /\>,  
    \<Scene9 key="scene9" /\>,  
  \];

  return (  
    \<main   
      className="h-screen w-screen relative bg-void overflow-hidden"  
      onTouchStart={handleTouchStart}  
      onTouchEnd={handleTouchEnd}  
    \>  
      {/\* Edge Trigger Indicators \*/}  
      \<div className="absolute top-0 right-0 h-full w-\[50px\] z-50 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" /\>  
      \<div className="absolute top-0 left-0 h-full w-\[50px\] z-50 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" /\>

      \<AnimatePresence mode="wait"\>  
        \<motion.div  
          key={scene}  
          initial={{ x: "100%" }}  
          animate={{ x: 0 }}  
          exit={{ x: "-100%" }}  
          transition={{ duration: 0.8, ease: \[0.76, 0, 0.24, 1\] }}  
          className="absolute top-0 left-0 h-screen w-screen overflow-y-auto overflow-x-hidden"  
        \>  
          {scenes\[scene\]}  
        \</motion.div\>  
      \</AnimatePresence\>

      {/\* Navigation Dots \*/}  
      \<div className="fixed bottom-8 left-1/2 \-translate-x-1/2 flex gap-2 z-50"\>  
        {Array.from({ length: 9 }).map((\_, i) \=\> (  
          \<button  
            key={i}  
            onClick={() \=\> transitionScene("goto", i)}  
            className={\`h-1 transition-all duration-300 ${  
              scene \=== i ? "w-8 bg-data" : "w-2 bg-data/30"  
            }\`}  
            aria-label={\`Go to scene ${i \+ 1}\`}  
          /\>  
        ))}  
      \</div\>  
    \</main\>  
  );  
}

### 5\. components/scenes/Scene1.tsx

"use client";

import { useState, useEffect, useRef } from "react";  
import { motion } from "motion/react";

const fullText \= "Do I contradict myself? / Very well then I contradict myself, / (I am large, I contain multitudes.)";  
const slowWord \= "multitudes";

export default function Scene1() {  
  const \[typed, setTyped\] \= useState("");  
  const \[phase, setPhase\] \= useState(0); // 0: typing, 1: whitman, 2: logo, 3: tagline  
  const timerRef \= useRef\<NodeJS.Timeout\>();

  useEffect(() \=\> {  
    let index \= 0;  
    const type \= () \=\> {  
      if (index \< fullText.length) {  
        const nextChar \= fullText\[index\];  
        setTyped((prev) \=\> prev \+ nextChar);  
        index++;

        const currentString \= fullText.substring(0, index);  
        const isMultitudeActive \= currentString.includes(slowWord) && \!currentString.includes(slowWord \+ ")");  
          
        timerRef.current \= setTimeout(type, isMultitudeActive ? 300 : 50);  
      } else {  
        timerRef.current \= setTimeout(() \=\> setPhase(1), 1000);  
      }  
    };

    timerRef.current \= setTimeout(type, 800);  
    return () \=\> clearTimeout(timerRef.current);  
  }, \[\]);

  useEffect(() \=\> {  
    if (phase \=== 1\) timerRef.current \= setTimeout(() \=\> setPhase(2), 1200);  
    if (phase \=== 2\) timerRef.current \= setTimeout(() \=\> setPhase(3), 1500);  
    return () \=\> clearTimeout(timerRef.current);  
  }, \[phase\]);

  const isMultitudeActive \= typed.includes(slowWord);

  return (  
    \<section className="h-full w-full flex flex-col items-center justify-center p-8 md:p-16 relative bg-void"\>  
      \<div className="font-serif text-data leading-tight text-center max-w-5xl"\>  
        \<span className={\`block transition-all duration-500 ${isMultitudeActive ? "text-\[clamp(2rem,10vw,10rem)\] tracking-tighter italic" : "text-\[clamp(1rem,4vw,3rem)\]"}\`}\>  
          {typed.split("/").map((line, i, arr) \=\> (  
            \<span key={i} className="block"\>  
              {line}  
              {i \< arr.length \- 1 && \<br /\>}  
            \</span\>  
          ))}  
        \</span\>  
      \</div\>

      {phase \>= 1 && (  
        \<motion.p   
          initial={{ opacity: 0 }}   
          animate={{ opacity: 1 }}   
          transition={{ duration: 0.5 }}  
          className="font-mono text-\[0.65rem\] uppercase tracking-widest mt-8 text-white/50"  
        \>  
          — Walt Whitman  
        \</motion.p\>  
      )}

      {phase \>= 2 && (  
        \<motion.h1   
          initial={{ opacity: 0, y: 50, scale: 0.8 }}   
          animate={{ opacity: 1, y: 0, scale: 1 }}   
          transition={{ duration: 1.2, ease: \[0.16, 1, 0.3, 1\] }}  
          className="font-serif text-\[clamp(4rem,15vw,15rem)\] tracking-tighter absolute bottom-\[20%\] left-1/2 \-translate-x-1/2 text-data"  
        \>  
          CONEXUS  
        \</motion.h1\>  
      )}

      {phase \>= 3 && (  
        \<motion.p   
          initial={{ opacity: 0 }}   
          animate={{ opacity: 1 }}   
          transition={{ duration: 0.8, delay: 0.2 }}  
          className="font-mono text-\[0.8rem\] uppercase tracking-\[0.2em\] mt-4 absolute bottom-\[12%\] left-1/2 \-translate-x-1/2 text-white/70"  
        \>  
          Not another AI company. The solution.  
        \</motion.p\>  
      )}  
    \</section\>  
  );  
}

### 6\. components/scenes/Scene2.tsx

"use client";

import { useState, useEffect, useRef } from "react";  
import { motion } from "motion/react";

export default function Scene2() {  
  const paragraphs \= \[  
    "The world is drowning in crude data…because it lacks a method to make it safe.",  
    "You know what oil is. You pump it. You burn it. You live inside the world it built. But when it first broke open, it was not a system. It was a mess. A rush. A black flood people knew was valuable long before they knew how to live with it.",  
    "1859. That was the boom. Towns sprang up around the wells. Money moved fast. Everyone wanted in. The future had arrived in liquid form, and it was volatile, filthy, and barely understood. For more than a decade, people built towns around a tragedy. Wells caught fire. Storage burned. Promise turned into danger faster than they could build the guardrails.",  
    "Then came the turn. Not the discovery of the well. The method that made the well usable. Rockefeller. He did not strike the oil. He did not invent the well. He understood what to do with it.",  
    "The boom knew it was valuable. He knew it had to be refined. That is the difference between a rush and an industry. That is the difference between black gold in the dirt and something you can trust inside your own home.",  
    "The world calls it AI. That is the first problem. The word arrived before the understanding did. It started in research. It drifted into fantasy. Now it dominates the morning news. People wake up to Good Morning America hearing about AI taking jobs. AI lying. AI hallucinating. AI threatening humanity. Every day the same story. Fear sells. Panic clicks. The cycle repeats.",  
    "Now, when you hear “AI,” you don't hear infrastructure. You hear mythology. You hear machines waking up. You hear Terminator. You hear The Matrix. You hear Skynet. You hear HAL 9000\. You hear the end of work. The end of us.",  
    "Mythology is a terrible way to introduce a technology. Because while the world is busy reacting to a word, the thing underneath it has become the most powerful raw material in human history. A black box built from compressed human life. Language. Records. Desire. Memory. Noise. Signal. That is the new crude. Zettabytes of compressed human life, growing year after year faster than oil ever did. And just like the early boom years, everyone knows it is valuable. No one knows how to handle it. So the pattern repeats. The rush is on. The spill is everywhere.",  
    "Fluent, but unreliable. Powerful, but noisy. Convincing, but not yet dependable where trust actually matters. They're handing you crude and telling you it's finished. It is not.",  
    "This is the noise. This is the spill. And this is why we built the refinery.",  
    "That is where CONEXUS begins. Not as another “AI” company. But as the category that comes after. We are not here to drill deeper into the black box. We are here to refine what comes out of it. Not more worship of raw output. Not more addiction to accumulation. Not the fantasy that “more” automatically means “true.”",  
    "The world does not need another well. It needs a refinery. Not a promise. Not another wrapper. Not a voice pretending the machine is finished.",  
    "Raw power is not the breakthrough. It never was. Raw power is the beginning of the problem.",  
    "Refinement is what makes it usable. Refinement is what makes it safe. Refinement is what makes it matter. That was true in 1859\. It is true again now."  
  \];

  const \[activeIndex, setActiveIndex\] \= useState(0);  
  const activeRef \= useRef\<HTMLDivElement\>(null);

  // Dynamic Auto-Advance Timer  
  useEffect(() \=\> {  
    if (activeIndex \>= paragraphs.length \- 1\) return;

    const currentParagraph \= paragraphs\[activeIndex\];  
    const readTime \= Math.max(3000, currentParagraph.length \* 50);

    const timer \= setTimeout(() \=\> {  
      setActiveIndex((prev) \=\> prev \+ 1);  
    }, readTime);

    return () \=\> clearTimeout(timer);  
  }, \[activeIndex, paragraphs\]);

  // Auto-Scroll to Center   
  useEffect(() \=\> {  
    if (activeRef.current) {  
      activeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });  
    }  
  }, \[activeIndex\]);

  return (  
    \<section className="w-full flex flex-col items-start justify-start p-8 md:p-24 lg:p-32 max-w-\[1400px\] mx-auto pt-\[30vh\] pb-\[60vh\]"\>  
      \<div className="w-full border-t border-white/20"\>  
        {paragraphs.map((text, i) \=\> {  
          const isActive \= i \=== activeIndex;  
          const isPast \= i \< activeIndex;  
          const isFuture \= i \> activeIndex;

          return (  
            \<motion.div  
              key={i}  
              ref={isActive ? activeRef : null}  
              initial={{ opacity: 0 }}  
              animate={{ opacity: isActive ? 1 : isPast ? 0.3 : 0 }}  
              transition={{ duration: 1.2, ease: \[0.16, 1, 0.3, 1\] }}  
              className={\`grid grid-cols-12 gap-4 py-12 border-b border-white/20 ${isFuture ? "hidden" : ""}\`}  
            \>  
              \<div className="col-span-2 md:col-span-1"\>  
                \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40"\>  
                  {String(i \+ 1).padStart(2, '0')}  
                \</span\>  
              \</div\>  
              \<div className="col-span-10 md:col-span-11"\>  
                \<p className={\`font-serif text-data ${i \=== 0 || i \=== paragraphs.length \- 1 ? "text-\[clamp(2rem,5vw,4rem)\] leading-tight tracking-tight" : "text-\[clamp(1rem,1.5vw,1.5rem)\] leading-relaxed text-white/80"}\`}\>  
                  {text}  
                \</p\>  
              \</div\>  
            \</motion.div\>  
          );  
        })}  
      \</div\>  
    \</section\>  
  );  
}

### 7\. components/scenes/Scene3.tsx

"use client";

interface Scene3Props {  
  onSkip: () \=\> void;  
}

export default function Scene3({ onSkip }: Scene3Props) {  
  const metrics \= \[  
    { label: "Control", value: "0.2466", desc: "Single-turn baseline" },  
    { label: "Neutral", value: "0.2219", desc: "Analytical multi-turn prompt" },  
    { label: "Token-only", value: "0.2258", desc: "Emoji exposure without the architecture" },  
    { label: "CONEXUS", value: "0.2929", desc: "Complete contradiction-holding sequence" },  
  \];

  return (  
    \<section className="min-h-full w-full flex flex-col items-center justify-start p-8 md:p-24 lg:p-32 max-w-\[1600px\] mx-auto"\>  
      \<button   
        onClick={onSkip}   
        className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/50 border border-white/20 px-4 py-2 hover:bg-white hover:text-void transition-colors mb-16 self-end"  
      \>  
        If you want to skip the science jargon CLICK HERE  
      \</button\>

      \<div className="w-full mb-16"\>  
        \<h2 className="font-serif text-\[clamp(2rem,6vw,6rem)\] tracking-tighter mb-4"\>Primary Causal Study\</h2\>  
        \<p className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/50"\>  
          Strong results. Explicit limits. Four controlled conditions. Two hundred independent runs.  
        \</p\>  
      \</div\>

      \<div className="w-full aspect-\[2.39/1\] border-t border-b border-white/20 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20 mb-16"\>  
        {metrics.map((m) \=\> (  
          \<div key={m.label} className="flex flex-col justify-between p-6 md:p-8"\>  
            \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40"\>{m.label}\</span\>  
            \<span className="font-serif text-\[clamp(2rem,4vw,4rem)\] tracking-tighter text-data my-4"\>{m.value}\</span\>  
            \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/50"\>{m.desc}\</span\>  
          \</div\>  
        ))}  
      \</div\>

      \<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-12"\>  
        \<div\>  
          \<span className="font-serif text-\[clamp(2rem,3vw,3rem)\] block mb-2"\>d \= 3.7824\</span\>  
          \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/50"\>Neutral to CONEXUS: Large run-level standardized mean difference in the tested configuration.\</span\>  
        \</div\>  
        \<div\>  
          \<span className="font-serif text-\[clamp(2rem,3vw,3rem)\] block mb-2"\>2.97e-32\</span\>  
          \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/50"\>Welch p-value. The bootstrap interval for the mean difference was \[+0.063467, \+0.078094\].\</span\>  
        \</div\>  
        \<div\>  
          \<span className="font-serif text-\[clamp(2rem,3vw,3rem)\] block mb-2"\>p \= 0.3612\</span\>  
          \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/50"\>Token-only control: No statistically detectable difference from the neutral condition was found in this comparison.\</span\>  
        \</div\>  
      \</div\>  
    \</section\>  
  );  
}

### 8\. components/scenes/Scene4.tsx

export default function Scene4() {  
  const benchmarks \= \[  
    { trials: "2,000 trials", title: "2D Protein Folding", data: "Approximately 80% relative improvement in the stated comparison", note: "Internal benchmark against the documented Monte Carlo baseline" },  
    { trials: "4,000 trials", title: "3D Protein Folding", data: "25.8% success versus 3.9%, approximately 361.8% relative improvement", note: "Largest reported relative gap in this research portfolio" },  
    { trials: "Scale series trials", title: "Traveling Salesman", data: "Larger relative gaps were reported at larger tested instances", note: "Benchmark-specific trend, not a universal scaling law" },  
    { trials: "250 trials", title: "Vehicle Routing", data: "Up to 89.3% improvement at the largest tested scale", note: "Compared with the stated routing baseline and configuration" },  
    { trials: "300 trials", title: "Neural Architecture Search", data: "Reported accuracy gains ranged from 3.8% to 8.4%", note: "Internal search benchmark; external replication remains needed" },  
    { trials: "5,000 trials", title: "Quantum Compilation", data: "27.8% gate reduction and 3.7% fidelity gain were reported", note: "Simulator-based comparison under the documented compilation setup" },  
  \];

  return (  
    \<section className="min-h-full w-full flex flex-col items-start justify-start p-8 md:p-24 lg:p-32 max-w-\[1600px\] mx-auto"\>  
      \<div className="w-full mb-16"\>  
        \<h2 className="font-serif text-\[clamp(2rem,6vw,6rem)\] tracking-tighter mb-4"\>The Forgetting Engine benchmark program\</h2\>  
      \</div\>

      \<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20 mb-16"\>  
        {benchmarks.map((b) \=\> (  
          \<div key={b.title} className="bg-void p-8 flex flex-col justify-between min-h-\[300px\]"\>  
            \<div\>  
              \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40 block mb-4"\>{b.trials}\</span\>  
              \<h3 className="font-serif text-\[clamp(1.5rem,2.5vw,2.5rem)\] tracking-tight mb-4"\>{b.title}\</h3\>  
            \</div\>  
            \<div className="mt-auto"\>  
              \<p className="font-serif text-\[1.1rem\] leading-relaxed text-data mb-2"\>{b.data}\</p\>  
              \<p className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/50"\>{b.note}\</p\>  
            \</div\>  
          \</div\>  
        ))}  
      \</div\>

      \<div className="w-full border-t border-white/20 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12"\>  
        \<div\>  
          \<h4 className="font-serif text-\[1.5rem\] mb-4"\>Important\</h4\>  
          \<p className="font-serif text-\[1rem\] leading-relaxed text-white/80"\>A 361.8% relative success-rate difference in protein folding is not the same quantity as an 89.3% routing improvement or a 27.8% gate reduction. These numbers should be read within their own experiments, not combined into one universal score.\</p\>  
        \</div\>  
        \<div\>  
          \<h4 className="font-serif text-\[1.5rem\] mb-4"\>Complexity inversion is an observed pattern, not a declared law.\</h4\>  
          \<p className="font-serif text-\[1rem\] leading-relaxed text-white/80"\>In several CONEXUS benchmark series, the relative advantage over the chosen baseline increased at larger tested scales. That is the phenomenon CONEXUS calls complexity inversion. Establishing a general scaling law would require preregistered experiments, stronger competing methods, multiple independent implementations, and replication outside the CONEXUS team.\</p\>  
        \</div\>  
        \<div className="md:col-span-2 grid grid-cols-2 gap-8 border-t border-white/20 pt-8"\>  
          \<div\>  
            \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40 block mb-2"\>Observed\</span\>  
            \<p className="font-serif text-\[1.1rem\]"\>Larger relative gaps in selected benchmark series as tested scale increased.\</p\>  
          \</div\>  
          \<div\>  
            \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40 block mb-2"\>Not yet established\</span\>  
            \<p className="font-serif text-\[1.1rem\]"\>A universal rule that the Forgetting Engine improves with every form of complexity or defeats all conventional algorithms.\</p\>  
          \</div\>  
        \</div\>  
      \</div\>  
    \</section\>  
  );  
}

### 9\. components/scenes/Scene5.tsx

export default function Scene5() {  
  return (  
    \<section className="min-h-full w-full flex flex-col items-start justify-start p-8 md:p-24 lg:p-32 max-w-\[1400px\] mx-auto"\>  
      \<div className="w-full mb-16"\>  
        \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40 block mb-4"\>SCENE 05\</span\>  
        \<h2 className="font-serif text-\[clamp(2rem,8vw,8rem)\] tracking-tighter leading-none"\>NAiRTHEX\</h2\>  
        \<p className="font-serif text-\[clamp(1.5rem,3vw,2.5rem)\] mt-4 text-white/70"\>A Digital Threshold for Sacred Space\</p\>  
      \</div\>

      \<div className="w-full aspect-\[2.39/1\] border-t border-b border-white/20 flex items-center justify-center p-8 mb-16"\>  
        \<p className="font-serif text-\[clamp(1rem,2vw,1.5rem)\] text-center max-w-3xl text-white/80 leading-relaxed"\>  
          A private AI reflection companion serving as a quiet foyer before ministry, built on a doctrine of restraint and respect for human authority. NAiRTHEX is designed as a reflective threshold under human and pastoral authority, not as therapy, clergy, diagnosis, or autonomous decision-making.  
        \</p\>  
      \</div\>

      \<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/20 pt-12 mb-16"\>  
        \<div\>  
          \<h3 className="font-serif text-\[2rem\] mb-4"\>Product Doctrine\</h3\>  
          \<p className="font-serif text-\[1.1rem\] leading-relaxed text-white/80"\>The moment before ministry matters. NAiRTHEX does not rush a person toward an answer. It creates a quiet threshold where they can speak honestly, remain whole, and decide what human support comes next.\</p\>  
        \</div\>  
        \<div\>  
          \<h3 className="font-serif text-\[2rem\] mb-4"\>Presence Before Intervention\</h3\>  
          \<p className="font-serif text-\[1.1rem\] leading-relaxed text-white/80"\>Receive the person accurately without immediately trying to convert, diagnose, correct, or resolve them.\</p\>  
        \</div\>  
        \<div\>  
          \<h3 className="font-serif text-\[2rem\] mb-4"\>Contradiction Without Collapse\</h3\>  
          \<p className="font-serif text-\[1.1rem\] leading-relaxed text-white/80"\>Allow doubt, anger, grief, joy, and uncertainty to coexist without forcing a quick answer.\</p\>  
        \</div\>  
        \<div\>  
          \<h3 className="font-serif text-\[2rem\] mb-4"\>Human Authority First\</h3\>  
          \<p className="font-serif text-\[1.1rem\] leading-relaxed text-white/80"\>NAiRTHEX never replaces pastors, clinicians, sponsors, or community. It protects the moment before ministry.\</p\>  
        \</div\>  
      \</div\>

      \<div className="w-full border-t border-white/20 pt-12 mb-16"\>  
        \<p className="font-serif text-\[clamp(1.5rem,3vw,2rem)\] leading-tight mb-8"\>One quiet conversation.\</p\>  
        \<div className="grid grid-cols-1 md:grid-cols-3 gap-8"\>  
          \<div\>  
            \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40 block mb-2"\>Voice and Text\</span\>  
            \<p className="font-serif text-\[1rem\] text-white/80"\>Speak freely or type. Both paths enter the same quiet, session-aware conversation.\</p\>  
          \</div\>  
          \<div\>  
            \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40 block mb-2"\>Governed Reflection\</span\>  
            \<p className="font-serif text-\[1rem\] text-white/80"\>The experience is designed around restraint, boundaries, and respect for the person's stated worldview.\</p\>  
          \</div\>  
          \<div\>  
            \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40 block mb-2"\>Built for the Threshold\</span\>  
            \<p className="font-serif text-\[1rem\] text-white/80"\>A private foyer before ministry, not a replacement for ministry itself.\</p\>  
          \</div\>  
        \</div\>  
      \</div\>

      \<div className="w-full border-t border-white/20 pt-12"\>  
        \<p className="font-serif text-\[1.5rem\] mb-8"\>Step into the threshold.\</p\>  
        \<p className="font-serif text-\[1.1rem\] text-white/80 mb-8 max-w-3xl"\>No account is required. Speak or type, pause when you need to, and leave the conversation whenever you choose.\</p\>  
        \<button className="font-mono text-\[0.8rem\] uppercase tracking-widest border border-data px-8 py-4 hover:bg-data hover:text-void transition-colors"\>  
          Enter NAiRTHEX →  
        \</button\>  
      \</div\>  
    \</section\>  
  );  
}

### 10\. components/scenes/Scene6.tsx

export default function Scene6() {  
  return (  
    \<section className="min-h-full w-full flex flex-col items-start justify-start p-8 md:p-24 lg:p-32 max-w-\[1400px\] mx-auto"\>  
      \<div className="w-full mb-16"\>  
        \<h2 className="font-serif text-\[clamp(2rem,6vw,5rem)\] tracking-tighter leading-none mb-4"\>Your dream becomes a symbolic reflection.\</h2\>  
        \<p className="font-serif text-\[clamp(1.5rem,3vw,2.5rem)\] text-white/70"\>You decide what it means.\</p\>  
      \</div\>

      \<div className="w-full aspect-\[2.39/1\] border-t border-b border-white/20 flex items-center justify-center p-8 mb-16"\>  
        \<p className="font-serif text-\[clamp(1rem,2vw,1.5rem)\] text-center max-w-3xl text-white/80 leading-relaxed"\>  
          ECHOform turns a dream, memory, or written moment into multiple creative perspectives and visual mirror choices. It does not claim to decode the unconscious or reveal psychological truth. Multiple perspectives without a forced conclusion.  
        \</p\>  
      \</div\>

      \<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/20 pt-12 mb-16"\>  
        \<div className="flex flex-col gap-4"\>  
          \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40"\>Step 1: Share a dream or moment\</span\>  
          \<p className="font-serif text-\[1.1rem\] text-white/80"\>Enter a dream, memory, image, or written reflection. The user chooses what to share and may stop at any time.\</p\>  
        \</div\>  
        \<div className="flex flex-col gap-4"\>  
          \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40"\>Step 2: Receive three perspectives\</span\>  
          \<p className="font-serif text-\[1.1rem\] text-white/80"\>The system offers Shadow, Light, and Reality as simultaneous symbolic routes rather than a single authoritative interpretation.\</p\>  
        \</div\>  
        \<div className="flex flex-col gap-4"\>  
          \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40"\>Step 3: Choose a mirror\</span\>  
          \<p className="font-serif text-\[1.1rem\] text-white/80"\>The selected route is translated into a visual and written reflection through one of the ECHOform mirror tiers.\</p\>  
        \</div\>  
        \<div className="flex flex-col gap-4"\>  
          \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/40"\>Step 4: Keep or discard the result\</span\>  
          \<p className="font-serif text-\[1.1rem\] text-white/80"\>The output is a creative journal artifact. The user decides whether it is useful, meaningful, or worth saving.\</p\>  
        \</div\>  
      \</div\>

      \<div className="w-full border-t border-white/20 pt-12 mb-16"\>  
        \<h3 className="font-serif text-\[2rem\] mb-4"\>Inside the guided experience\</h3\>  
        \<p className="font-serif text-\[1.1rem\] text-white/80 max-w-3xl"\>These screens show the current visual journey. The guided demo uses prepared examples so visitors can examine the flow without treating the output as a personal assessment.\</p\>  
      \</div\>

      \<div className="w-full border-t border-white/20 pt-12"\>  
        \<p className="font-serif text-\[1.5rem\] mb-8"\>The mirror offers language. It does not own your meaning.\</p\>  
        \<p className="font-serif text-\[1.1rem\] text-white/80 mb-8 max-w-3xl"\>ECHOform output should be treated as creative reflection, not medical, psychological, legal, financial, or spiritual advice. Distressing or urgent concerns belong with qualified human support.\</p\>  
        \<button className="font-mono text-\[0.8rem\] uppercase tracking-widest border border-data px-8 py-4 hover:bg-data hover:text-void transition-colors"\>  
          Open the Guided Demo →  
        \</button\>  
      \</div\>  
    \</section\>  
  );  
}

### 11\. components/scenes/Scene7.tsx

export default function Scene7() {  
  return (  
    \<section className="h-full w-full flex flex-col items-center justify-center p-8 md:p-24 lg:p-32 max-w-\[1400px\] mx-auto text-center"\>  
      \<h2 className="font-serif text-\[clamp(3rem,10vw,10rem)\] tracking-tighter mb-8"\>ECHOagent\</h2\>  
      \<p className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/50 mb-12"\>Coming soon…\</p\>  
      \<button className="font-mono text-\[0.8rem\] uppercase tracking-widest text-white/50 border-b border-white/20 pb-2 hover:text-data hover:border-data transition-colors"\>  
        Link to ECHOagent Deck →  
      \</button\>  
    \</section\>  
  );  
}

### 12\. components/scenes/Scene8.tsx

export default function Scene8() {  
  return (  
    \<section className="h-full w-full flex flex-col items-center justify-center p-8 md:p-24 lg:p-32 max-w-\[1400px\] mx-auto text-center"\>  
      \<h2 className="font-serif text-\[clamp(3rem,10vw,10rem)\] tracking-tighter mb-8"\>CONEXUS Cyndicate\</h2\>  
      \<p className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/50 mb-12"\>Coming soon…\</p\>  
      \<button className="font-mono text-\[0.8rem\] uppercase tracking-widest text-white/50 border-b border-white/20 pb-2 hover:text-data hover:border-data transition-colors"\>  
        Link to Teaser →  
      \</button\>  
    \</section\>  
  );  
}

### 13\. components/scenes/Scene9.tsx

export default function Scene9() {  
  return (  
    \<section className="min-h-full w-full flex flex-col items-start justify-start p-8 md:p-24 lg:p-32 max-w-\[1400px\] mx-auto"\>  
      \<div className="w-full mb-16 border-t border-white/20 pt-12"\>  
        \<p className="font-serif text-\[clamp(1.5rem,4vw,3rem)\] leading-tight max-w-4xl"\>Built from first principles by a solo founder who discovered something no one expected.\</p\>  
      \</div\>

      \<div className="w-full aspect-\[2.39/1\] border-t border-b border-white/20 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 mb-16"\>  
        \<div className="text-left"\>  
          \<h2 className="font-serif text-\[clamp(2rem,5vw,5rem)\] tracking-tighter leading-none"\>Derek Angell\</h2\>  
          \<span className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/50"\>Founder & CEO\</span\>  
        \</div\>  
        \<div className="max-w-xl mt-8 md:mt-0"\>  
          \<p className="font-serif text-\[1.1rem\] leading-relaxed text-white/80"\>  
            Inventor of ECP and architect of the Forgetting Engine. Founder of CONEXUS, building calibration, optimization, and provenance systems through controlled experiments and cross-domain computational research.  
          \</p\>  
        \</div\>  
      \</div\>

      \<div className="w-full mb-16 max-w-4xl mx-auto text-center"\>  
        \<blockquote className="font-serif text-\[clamp(1.5rem,3.5vw,3rem)\] italic leading-tight tracking-tight"\>  
          “We didn't just build a smarter AI. We built a system that feels the weight of the problem.”  
        \</blockquote\>  
      \</div\>

      \<div className="w-full border-t border-white/20 pt-12 flex flex-wrap gap-8 justify-center"\>  
        {\["AI Architecture", "Cognitive Systems", "Computational Research", "Product Development"\].map((tag) \=\> (  
          \<span key={tag} className="font-mono text-\[0.65rem\] uppercase tracking-widest text-white/50 border border-white/20 px-4 py-2"\>  
            {tag}  
          \</span\>  
        ))}  
      \</div\>  
    \</section\>  
  );  
}

