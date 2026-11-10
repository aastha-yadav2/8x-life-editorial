import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#111111] text-[#F5F3EC] relative overflow-hidden border-b border-white/10">
      {/* Background editorial accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D7FF45]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF704D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Editorial Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#D7FF45] text-[#111111] font-mono text-xs uppercase tracking-widest font-bold mb-6 sm:mb-8"
        >
          <span>THE TIME IS NOW</span>
        </motion.div>

        {/* Large Editorial Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-[clamp(2.5rem,7.5vw,6.5rem)] leading-[0.92] tracking-tighter text-white uppercase select-none max-w-5xl"
        >
          MAKE SOMETHING<br />
          <span className="text-[#D7FF45] relative inline-block">
            THAT MATTERS.
          </span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-base sm:text-xl lg:text-2xl text-white/80 font-display font-medium max-w-2xl leading-relaxed"
        >
          Bring your ideas. Bring your initiative. Show us what you can do.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12"
        >
          <a
            href="https://www.8x.careers/join"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-[#D7FF45] text-[#111111] font-mono text-sm sm:text-base uppercase font-bold tracking-wider hover:bg-[#FF704D] hover:text-[#111111] transition-all duration-300 shadow-[4px_4px_0px_0px_#FFFFFF] sm:shadow-[8px_8px_0px_0px_#FFFFFF] hover:shadow-[6px_6px_0px_0px_#FFFFFF] sm:hover:shadow-[12px_12px_0px_0px_#FFFFFF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF45]"
          >
            <span>FIND YOUR ROLE</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Supporting note */}
        <p className="mt-6 sm:mt-8 font-mono text-xs text-white/50">
          No CV requirements. Complete the practical test upon submission.
        </p>
      </div>
    </section>
  );
};

