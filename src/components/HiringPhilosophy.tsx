import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, Award, Clock } from 'lucide-react';

export const HiringPhilosophy: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'EVIDENCE-FIRST APPLICATION',
      summary: 'Skip 5-page resumes and automated keyword scanners.',
      detail: 'Submit your portfolio, live links, GitHub repos, or creative accounts. We evaluate your taste and capability based on work that exists in the real world.',
      icon: Layers,
    },
    {
      num: '02',
      title: 'INSTANT PRACTICAL ASSIGNMENT',
      summary: 'Issued immediately upon application submission.',
      detail: 'Every role has a tailored practical task designed to mirror day-to-day challenges—not trivia quizzes. Engineering builds a prototype; marketing drafts a campaign playbook.',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'OBJECTIVE EXECUTION SCORING',
      summary: 'Direct review by active operators and peers.',
      detail: 'Technical work receives automated and architectural scoring. Strategic proposals are judged by team builders on speed, clarity, and commercial viability.',
      icon: Award,
    },
    {
      num: '04',
      title: 'TWO-WEEK PAID TRIAL',
      summary: 'Ship real work alongside the team before committing.',
      detail: 'Finalists participate in an intensive, fully compensated 2-week trial solving actual client challenges across 8x and partner enterprise networks.',
      icon: Clock,
    },
  ];

  return (
    <section className="py-20 lg:py-32 border-b border-[#111111]/15 bg-[#F5F3EC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#111111]/15">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77766F] mb-3">
              <span className="w-2 h-2 bg-[#FF704D]" />
              <span>// RECRUITING REVOLUTION</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.92] tracking-tighter text-[#111111] uppercase select-none">
              SHOW US YOUR WORK.<br />
              <span className="text-[#111111] relative inline-block">
                NOT JUST YOUR CV.
                <span className="absolute -bottom-1 left-0 right-0 h-2 sm:h-3 bg-[#D7FF45] -z-10" />
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base sm:text-lg font-display font-semibold text-[#111111] leading-snug">
              Skills are demonstrated through what you make, solve and ship.
            </p>
            <p className="mt-2 text-sm text-[#77766F] font-sans leading-relaxed">
              We want to understand how you think, how you approach problems and what you can actually do. Opportunities span 8x core teams and our global partner company network.
            </p>
          </div>
        </div>

        {/* 4 Sequential Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-12 lg:pt-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white border-2 border-[#111111] p-6 sm:p-8 flex flex-col justify-between shadow-[5px_5px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10">
                    <span className="font-mono text-xs font-bold text-[#FF704D]">
                      PHASE {step.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#111111]" />
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#111111] mt-5 uppercase tracking-tight leading-snug">
                    {step.title}
                  </h3>

                  <p className="font-display font-medium text-sm text-[#111111] mt-2 leading-snug">
                    {step.summary}
                  </p>

                  <p className="text-xs sm:text-sm text-[#77766F] font-sans leading-relaxed mt-3">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#111111]/10 font-mono text-[11px] text-[#77766F]">
                  // STEP 0{idx + 1} OF 04
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner with CTA */}
        <div className="mt-12 sm:mt-16 p-8 bg-[#111111] text-[#F5F3EC] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#D7FF45] uppercase tracking-wider block mb-1">
              READY TO SUBMIT WORK?
            </span>
            <p className="font-display font-semibold text-xl sm:text-2xl text-white">
              Every role's practical assignment is issued the moment you apply.
            </p>
            <p className="font-sans text-xs sm:text-sm text-white/60 mt-1">
              Note: Requirements and task structures vary specifically by discipline and seniority level.
            </p>
          </div>

          <a
            href="https://www.8x.careers/join"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D7FF45] text-[#111111] font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-colors flex-shrink-0"
          >
            <span>EXPLORE THE HIRING PROCESS</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

