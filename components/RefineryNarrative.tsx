"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function RefineryNarrative() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-950/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            THE SPILL IS OVER
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        {/* Image 1: OIL/AI/REFINER OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <Image
            src="/images/refinery-diagram.png"
            alt="Oil/AI/Refiner Overview"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg shadow-2xl"
          />
          <p className="text-slate-500 text-sm text-center mt-2 italic">
            OIL/AI/REFINER OVERVIEW
          </p>
        </motion.div>

        {/* Section 1: Pennsylvania 1859 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            You know what oil is.
            <br />
            You pump it.
            <br />
            You burn it.
            <br />
            You live inside the world it built.
          </p>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
            But when it first broke open, it was not a system.
            <br />
            It was a mess.
            <br />
            A rush.
            <br />A black flood people knew was valuable long before they knew
            how to live with it.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pennsylvania. 1859.
          </h2>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            That was the boom.
            <br />
            Towns sprang up around the wells.
            <br />
            Money moved fast.
            <br />
            Everyone wanted in.
            <br />
            The future had arrived in liquid form, and it was volatile, filthy,
            and barely understood.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            For more than a decade, people built towns around a tragedy.
            <br />
            Wells caught fire.
            <br />
            Storage burned.
            <br />
            Promise turned into danger faster than they could build the
            guardrails.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            1863.
          </h2>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            Then came the turn.
            <br />
            <br />
            Not the discovery of the well.
            <br />
            The method that made the well usable.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            Rockefeller.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            He did not strike the oil.
            <br />
            He did not invent the well.
            <br />
            He understood what to do with it.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            The boom knew it was valuable.
            <br />
            <span className="text-green-400 font-bold">
              He knew it had to be refined.
            </span>
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            That is the difference between a rush and an industry.
            <br />
            That is the difference between black gold in the dirt
            <br />
            And something you can trust inside your own home.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-px bg-slate-700 mb-16"
        />

        {/* THE PIVOT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            THE PIVOT
          </h2>

          {/* Image 2: THE SCALE */}
          <div className="mb-12">
            <Image
              src="/images/crude-ai-refinery-comparison.png"
              alt="The Scale"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-slate-500 text-sm text-center mt-2 italic">
              THE SCALE - 1 Trillion Billions / 850 Million Years / $4 Trillion
              / 1,000x Growth
            </p>
          </div>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            The world calls it AI.
            <br />
            <br />
            That is the first problem.
          </p>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
            The word arrived before the understanding did.
            <br />
            It started in research.
            <br />
            It drifted into fantasy.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            Now it dominates the morning news. People wake up to Good Morning
            America hearing about AI taking jobs. AI lying. AI hallucinating. AI
            threatening humanity. Every day the same story. Fear sells. Panic
            clicks. The cycle repeats.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            Now, when you hear &ldquo;AI,&rdquo; you don't hear infrastructure.
            <br />
            You hear mythology.
            <br />
            You hear machines waking up.
            <br />
            You hear Terminator.
            <br />
            You hear The Matrix.
            <br />
            You hear Skynet.
            <br />
            You hear HAL 9000.
            <br />
            You hear the end of work.
            <br />
            The end of us.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            <span className="text-red-400 font-bold">
              Mythology is a terrible way to introduce a technology.
            </span>
          </p>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
            Because while the world is busy reacting to a word,
            <br />
            The thing underneath it has become the most powerful raw material in
            human history.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            A black box built from compressed human life.
          </p>

          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-8 pl-8">
            Language.
            <br />
            Records.
            <br />
            Desire.
            <br />
            Memory.
            <br />
            Noise.
            <br />
            Signal.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            <span className="text-green-400 font-bold">
              That is the new crude.
            </span>
          </p>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
            Zettabytes of compressed human life, growing year after year faster
            than oil ever did.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            And just like the early boom years,
            <br />
            Everyone knows it is valuable.
            <br />
            No one knows how to handle it.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            So the pattern repeats.
            <br />
            The rush is on.
            <br />
            The spill is everywhere.
          </p>

          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-8 pl-8">
            Fluent, but unreliable.
            <br />
            Powerful, but noisy.
            <br />
            Convincing, but not yet dependable where trust actually matters.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            <span className="text-red-400 font-bold">
              They&rsquo;re handing you crude and telling you it&rsquo;s
              finished.
            </span>
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            <span className="text-red-400 font-bold">It is not.</span>
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            This is the noise. This is the spill. And this is why we built the
            refinery.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            CONEXUS doesn't add to the noise. We eliminate it.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            Our architecture subtracts the hallucinations. Filters the
            falsehoods. Calibrates to truth. Traces every answer to its source.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            We don't celebrate the black box. We refine it.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full h-px bg-slate-700 mb-16"
        />

        {/* THE VERDICT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            THE VERDICT
          </h2>

          {/* Image 3: THE METHOD */}
          <div className="mb-12">
            <Image
              src="/images/forgetting-engine.png"
              alt="The Method"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-slate-500 text-sm text-center mt-2 italic">
              THE METHOD - Rockefeller / ECP Truth-Symbol-Contradiction Triangle
            </p>
          </div>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            That is where{" "}
            <span className="text-green-400 font-bold">CONEXUS</span> begins.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            Not as another &ldquo;AI&rdquo; company.
            <br />
            But as the category that comes after.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            We are not here to drill deeper into the black box.
            <br />
            We are here to refine what comes out of it.
          </p>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
            Not more worship of raw output.
            <br />
            Not more addiction to accumulation.
            <br />
            Not the fantasy that &ldquo;more&rdquo; automatically means
            &ldquo;true.&rdquo;
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 pl-8">
            <span className="text-green-400 font-bold">Subtraction:</span> We
            eliminate wrong answers instead of searching for right ones.
            <br />
            <span className="text-green-400 font-bold">Filtration:</span> We
            separate signal from noise.
            <br />
            <span className="text-green-400 font-bold">Calibration:</span> We
            align outputs with truth through ECP.
            <br />
            <span className="text-green-400 font-bold">Provenance:</span> We
            trace every answer to its cryptographic source.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            The world does not need another well.
            <br />
            <span className="text-green-400 font-bold">
              It needs a refinery.
            </span>
          </p>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
            Not a promise.
            <br />
            Not another wrapper.
            <br />
            Not a voice pretending the machine is finished.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            <span className="text-red-400 font-bold">
              Raw power is not the breakthrough.
            </span>
            <br />
            <span className="text-red-400 font-bold">It never was.</span>
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            Raw power is the beginning of the problem.
            <br />
            Refinement is what makes it usable.
            <br />
            Refinement is what makes it safe.
            <br />
            Refinement is what makes it matter.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            That was true in 1863.
            <br />
            It is true again now.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
