import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Sparkles, Terminal } from 'lucide-react';
import { Marquee } from './Marquee';

export const Hero: React.FC = () => {
  const scrollToHowWeWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#how-we-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRoles = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#roles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 border-b border-[#111111]/15 overflow-hidden">
      {/* Editorial background subtle grid */}
      <div className="absolute inset-0 editorial-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Editorial Metadata Stamp */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#111111]/10"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#111111] text-[#D7FF45] font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF45] animate-ping" />
            <span>LIFE AT 8X / GLOBAL / REMOTE-FIRST</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 font-mono text-xs text-[#77766F] tracking-wide">
            <span>COORDINATES: SF · LIS · LJU · IST · NBO · BLR</span>
            <span className="text-[#111111]/20">|</span>
            <span className="flex items-center gap-1.5 text-[#111111]">
              <span className="w-2 h-2 rounded-full bg-[#FF704D]" />
              ACTIVE OPERATING CYCLE
            </span>
          </div>
        </motion.div>

        {/* Main Headline & Editorial Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-10 sm:pt-14 items-start">
          {/* Left Column: Oversized Typography & Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-display font-extrabold text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.92] tracking-tighter text-[#111111] uppercase select-none">
                THE FUTURE<br />
                IS BUILT BY<br />
                <span className="text-[#111111] relative inline-block">
                  PEOPLE WHO
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-[#D7FF45] -z-10 transform -rotate-1" />
                </span><br />
                MAKE IT HAPPEN.
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 sm:mt-12 max-w-2xl"
            >
              <p className="text-xl sm:text-2xl font-display font-semibold text-[#111111] leading-snug">
                AI changes what's possible. People change what happens next.
              </p>
              <p className="mt-4 text-base sm:text-lg text-[#77766F] leading-relaxed font-normal">
                At 8x, we bring together ambitious people, intelligent systems and relentless execution to turn ideas into real-world outcomes.
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
            >
              <a
                href="#roles"
                onClick={scrollToRoles}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] text-[#D7FF45] font-mono text-sm tracking-wider uppercase font-bold hover:bg-[#FF704D] hover:text-[#111111] transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              >
                <span>EXPLORE OPEN ROLES</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href="#how-we-work"
                onClick={scrollToHowWeWork}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-transparent border border-[#111111]/30 text-[#111111] font-mono text-sm tracking-wider uppercase font-semibold hover:border-[#111111] hover:bg-[#111111]/5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              >
                <span>HOW WE WORK</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Striking Editorial Composition (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            {/* Editorial Frame with high-contrast architectural & human craft visual */}
            <div className="relative border-2 border-[#111111] bg-[#111111] p-3 sm:p-4 shadow-[8px_8px_0px_0px_#111111]">
              {/* Monospace frame header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/20 text-[#D7FF45] font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#D7FF45]" />
                  <span>FRAME // ORCHESTRATION_CORE</span>
                </div>
                <span className="text-white/60">FIG 01.A</span>
              </div>

              {/* Main Visual Composition (Authentic architectural & engineering workspace imagery) */}
              <div className="relative aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                  alt="Ambitious team collaborating in high-focus engineering environment"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95 hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Editorial Duotone gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

                {/* Floating Technical Badge */}
                <div className="absolute top-4 left-4 bg-[#F5F3EC] text-[#111111] p-3 border border-[#111111] shadow-sm max-w-[200px]">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[#77766F]">
                    PRINCIPLE NOTE
                  </p>
                  <p className="font-display font-bold text-xs leading-tight mt-1">
                    "Execution eats strategy for breakfast."
                  </p>
                </div>

                {/* Bottom Overlay Metrics Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/90 backdrop-blur-md border border-white/15 p-4 text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[11px] text-[#D7FF45] tracking-wider uppercase">
                      SYSTEM STATUS
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-white/70">
                      <Sparkles className="w-3 h-3 text-[#FF704D]" />
                      HUMANS IN THE LOOP
                    </span>
                  </div>
                  <p className="text-sm font-sans font-medium text-white/90 leading-snug">
                    Decentralized networks executing across engineering, creative distribution, and consumer intelligence.
                  </p>
                </div>
              </div>

              {/* Frame footer with authentic editorial disclaimer */}
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/50">
                <span>INDEX REF: 8X-LIFE-2026</span>
                <span>AUTHENTIC OPERATOR NETWORK</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Ticker Strip directly integrated */}
      <div className="mt-14 sm:mt-20">
        <Marquee />
      </div>
    </section>
  );
};

