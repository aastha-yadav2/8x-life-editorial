import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ShieldCheck, Zap, HelpCircle, Eye } from 'lucide-react';
import { OPERATING_PRINCIPLES } from '../data/principles';

export const Principles: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    '01': <ShieldCheck className="w-5 h-5 text-[#111111]" />,
    '02': <Zap className="w-5 h-5 text-[#111111]" />,
    '03': <HelpCircle className="w-5 h-5 text-[#111111]" />,
    '04': <Eye className="w-5 h-5 text-[#111111]" />,
  };

  return (
    <section id="how-we-work" className="py-20 lg:py-32 border-b border-[#111111]/15 bg-[#F5F3EC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#111111]/15">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77766F] mb-3">
              <Flame className="w-3.5 h-3.5 text-[#FF704D]" />
              <span>// OPERATING ETHOS</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] tracking-tighter text-[#111111] uppercase select-none">
              LESS TALK.<br />
              <span className="text-[#111111] relative inline-block">
                MORE OWNERSHIP.
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#FF704D] -z-10" />
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            {/* Disclaimer pill required by creative brief */}
            <div className="inline-block px-3 py-1 bg-[#111111]/5 border border-[#111111]/20 font-mono text-[11px] uppercase tracking-wider text-[#77766F] mb-3">
              PROPOSED DESIGN PRINCIPLES
            </div>
            <p className="text-sm text-[#77766F] font-sans leading-relaxed">
              Inferred from 8x's public trial workflows, human-orchestration positioning, and founder stances. Not a formal employee policy handbook.
            </p>
          </div>
        </div>

        {/* 4 Distinct Editorial Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-12 lg:pt-16">
          {OPERATING_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group p-8 sm:p-10 bg-white border-2 border-[#111111] shadow-[6px_6px_0px_0px_#111111] hover:shadow-[10px_10px_0px_0px_#111111] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between pb-6 border-b border-[#111111]/10">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tighter text-[#111111]">
                    {principle.number}
                  </span>
                  <div className="p-2.5 bg-[#F5F3EC] border border-[#111111]/20 group-hover:bg-[#D7FF45] transition-colors">
                    {iconMap[principle.number]}
                  </div>
                </div>

                {/* Title & Summary */}
                <div className="mt-6 mb-4">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight uppercase">
                    {principle.title}
                  </h3>
                  <p className="font-display font-semibold text-lg text-[#111111] mt-2 leading-snug">
                    {principle.summary}
                  </p>
                </div>

                {/* Detail */}
                <p className="text-sm text-[#77766F] font-sans leading-relaxed mt-4">
                  {principle.detail}
                </p>
              </div>

              {/* Actionable Benchmark Question */}
              <div className="mt-8 pt-6 border-t border-[#111111]/10 bg-[#F5F3EC] -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 sm:p-8">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#77766F] block mb-1">
                  THE DAILY LITMUS TEST
                </span>
                <p className="font-mono text-xs sm:text-sm font-semibold text-[#111111] italic">
                  {principle.actionableQuestion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

