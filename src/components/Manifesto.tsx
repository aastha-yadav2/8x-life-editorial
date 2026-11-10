import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, ChevronRight } from 'lucide-react';
import { MANIFESTO_POINTS } from '../data/manifesto';

export const Manifesto: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number>(0);

  return (
    <section id="manifesto" className="py-20 lg:py-32 border-b border-[#111111]/15 bg-[#F5F3EC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Metadata Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#111111]/15">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77766F] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#111111]" />
              <span>// FOUNDATIONAL THESIS</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.95] tracking-tighter text-[#111111] uppercase select-none">
              AI CAN BUILD ALMOST ANYTHING.<br />
              <span className="text-[#111111] relative inline-block">
                PEOPLE MAKE IT MATTER.
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#D7FF45] -z-10" />
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="font-mono text-xs text-[#77766F]">
              DOCUMENTED MANIFESTO · 5 CORE TENETS
            </span>
            <a
              href="https://8x.life/manifesto"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-[#111111] hover:text-[#FF704D] transition-colors pb-1 border-b border-[#111111] hover:border-[#FF704D]"
            >
              <span>READ ORIGINAL MANIFESTO</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Editorial Sequence of 5 Points with Horizontal Separators */}
        <div className="mt-12 lg:mt-16 divide-y divide-[#111111]/15 border-t border-b border-[#111111]/15">
          {MANIFESTO_POINTS.map((point, idx) => {
            const isActive = activePoint === idx;
            return (
              <motion.div
                key={point.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActivePoint(idx)}
                className={`py-6 sm:py-10 transition-all duration-300 cursor-pointer group ${
                  isActive ? 'bg-white px-5 sm:px-8 border-l-4 border-l-[#111111]' : 'hover:bg-white/60 px-4 sm:px-6'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Point Number */}
                  <div className="lg:col-span-2 flex items-center justify-between lg:block">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tighter text-[#111111]/30 group-hover:text-[#111111] transition-colors">
                      {point.num}
                    </span>
                    <span className="font-mono text-xs uppercase text-[#77766F] lg:block lg:mt-2">
                      TENET 0{idx + 1}
                    </span>
                  </div>

                  {/* Statement */}
                  <div className="lg:col-span-6">
                    <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-[#111111] tracking-tight leading-snug group-hover:text-[#111111]">
                      {point.statement}
                    </h3>
                  </div>

                  {/* Elaboration / Meaning */}
                  <div className="lg:col-span-4 flex items-start justify-between">
                    <p className="text-sm sm:text-base text-[#77766F] font-sans leading-relaxed">
                      {point.elaboration}
                    </p>
                    <ChevronRight
                      className={`w-5 h-5 ml-4 flex-shrink-0 text-[#111111]/40 transition-transform duration-300 ${
                        isActive ? 'rotate-90 text-[#111111]' : 'group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-[#111111] text-[#F5F3EC]">
          <div>
            <span className="font-mono text-xs text-[#D7FF45] uppercase tracking-wider block mb-1">
              // STRATEGIC TAKEAWAY
            </span>
            <p className="font-display font-semibold text-lg sm:text-xl text-white">
              "The human in the loop becomes the most valuable and the bottlenecked resource."
            </p>
          </div>

          <a
            href="https://8x.life/manifesto"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[#D7FF45] text-[#111111] font-mono text-xs tracking-wider uppercase font-bold hover:bg-white transition-colors flex-shrink-0"
          >
            <span>VIEW ON 8X.LIFE</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

