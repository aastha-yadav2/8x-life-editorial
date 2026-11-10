import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertTriangle } from 'lucide-react';

export const FitCheck: React.FC = () => {
  const thrivePoints = [
    'You take initiative without waiting for instructions.',
    'You are comfortable with ambiguity.',
    'You like building and experimenting.',
    'You take ownership of outcomes.',
    'You value learning through execution.',
  ];

  const thinkTwicePoints = [
    'You need every step prescribed.',
    'You avoid responsibility.',
    'You dislike changing priorities.',
    'You prefer talking about ideas over testing them.',
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#0E0E0E] text-[#F5F3EC] relative border-b border-[#D7FF45]/20 overflow-hidden">
      {/* Dark editorial grid background */}
      <div className="absolute inset-0 editorial-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D7FF45]/20">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D7FF45] mb-3">
              <AlertTriangle className="w-3.5 h-3.5 text-[#D7FF45]" />
              <span>// CANDIDATE SELF-SELECTION GATE</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] tracking-tighter uppercase select-none text-white">
              THIS ISN'T FOR EVERYONE.<br />
              <span className="text-[#D7FF45]">THAT'S THE POINT.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
              We save your time and ours. If you require rigid hand-holding or layers of approval before touching production, 8x will feel uncomfortable.
            </p>
          </div>
        </div>

        {/* Two-Column Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-12 lg:pt-16">
          {/* Column 1: YOU MAY THRIVE HERE IF */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-[#D7FF45] bg-[#161616] p-8 sm:p-10 shadow-[8px_8px_0px_0px_#D7FF45]"
          >
            <div className="flex items-center justify-between pb-6 border-b border-[#D7FF45]/30">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-none bg-[#D7FF45] text-[#111111] flex items-center justify-center font-bold font-mono text-sm">
                  +
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#D7FF45] uppercase tracking-tight">
                  YOU MAY THRIVE HERE IF:
                </h3>
              </div>
              <span className="font-mono text-xs text-[#D7FF45]/70">ALIGNMENT</span>
            </div>

            <ul className="mt-8 space-y-6">
              {thrivePoints.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-[#D7FF45]/20 border border-[#D7FF45] flex items-center justify-center text-[#D7FF45]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-base sm:text-lg text-white/90 font-sans font-medium leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="font-mono text-xs text-[#D7FF45]/80">
                → OUTCOME: Rapid autonomy, high leverage, zero bureaucracy.
              </p>
            </div>
          </motion.div>

          {/* Column 2: THINK TWICE IF */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border-2 border-[#FF704D] bg-[#161616] p-8 sm:p-10 shadow-[8px_8px_0px_0px_#FF704D]"
          >
            <div className="flex items-center justify-between pb-6 border-b border-[#FF704D]/30">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-none bg-[#FF704D] text-[#111111] flex items-center justify-center font-bold font-mono text-sm">
                  −
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#FF704D] uppercase tracking-tight">
                  THINK TWICE IF:
                </h3>
              </div>
              <span className="font-mono text-xs text-[#FF704D]/70">MISALIGNMENT</span>
            </div>

            <ul className="mt-8 space-y-6">
              {thinkTwicePoints.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-[#FF704D]/20 border border-[#FF704D] flex items-center justify-center text-[#FF704D]">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-base sm:text-lg text-white/80 font-sans font-medium leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="font-mono text-xs text-[#FF704D]/80">
                → OUTCOME: Frustration with speed, constant ambiguity, and direct peer critique.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Candidate Self-Assessment Disclaimer */}
        <div className="mt-12 p-5 bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-white/60">
          <span>
            NOTE: This is a candidate self-assessment to help determine cultural resonance, not a formal employment policy or binding legal contract.
          </span>
          <span className="text-[#D7FF45] uppercase tracking-wider flex-shrink-0">
            // RADICAL CANDOR
          </span>
        </div>
      </div>
    </section>
  );
};

