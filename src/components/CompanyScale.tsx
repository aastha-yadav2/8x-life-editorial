import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, Network, BarChart3 } from 'lucide-react';

export const CompanyScale: React.FC = () => {
  const scaleStats = [
    {
      figure: '50+',
      label: 'COUNTRIES ACTIVE',
      context: 'GLOBAL REACH',
      detail: 'A distributed operator network operating seamlessly across every major time zone—from San Francisco to Lisbon, Ljubljana, Istanbul, Nairobi, and Bengaluru.',
      icon: Globe2,
    },
    {
      figure: '250K+',
      label: 'HUMANS MANAGED',
      context: 'SCALE OF ORCHESTRATION',
      detail: 'Vetted creators, researchers, sales representatives, and technical specialists coordinated through intelligent systems to deliver business outcomes.',
      icon: Users,
    },
    {
      figure: '300M+',
      label: 'ORGANIC REACH',
      context: 'UNPAID DISTRIBUTION',
      detail: 'Generated organically by creators publishing in their own authentic voices across TikTok, Instagram, YouTube, X, and LinkedIn without artificial ad spend.',
      icon: BarChart3,
    },
  ];

  const verticals = [
    {
      name: 'Marketing & Distribution',
      description: 'Orchestrating hundreds of high-performing creators for rapid multi-platform campaigns, UGC generation, and viral consumer momentum.',
      tag: '8X SOCIAL & BUSINESS',
    },
    {
      name: 'Engineering & Automation',
      description: 'Building custom orchestration engines, automated practical evaluation workflows, and real-time operational infrastructure.',
      tag: '8X ENGINEERING',
    },
    {
      name: 'Research & Intelligence',
      description: 'Executing parallel AI-moderated one-to-one user research sessions at unprecedented speed, delivering qualitative depth at quantitative scale.',
      tag: '8X RESEARCH',
    },
  ];

  return (
    <section className="py-20 lg:py-32 border-b border-[#111111]/15 bg-[#F5F3EC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#111111]/15">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77766F] mb-3">
              <Network className="w-3.5 h-3.5 text-[#111111]" />
              <span>// OPERATIONAL FOOTPRINT</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#111111] uppercase leading-none">
              COMPANY SCALE.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#77766F] font-sans leading-relaxed">
              These figures represent the confirmed operational volume of 8x's global human orchestration platform—not internal corporate headcounts.
            </p>
          </div>
        </div>

        {/* Oversized Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-12 lg:pt-16">
          {scaleStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative p-8 sm:p-10 bg-white border border-[#111111]/15 hover:border-[#111111] transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(17,17,17,0.06)] hover:shadow-[6px_6px_0px_0px_#111111]"
              >
                <div className="flex items-center justify-between pb-6 border-b border-[#111111]/10">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF704D]">
                    {stat.context}
                  </span>
                  <Icon className="w-5 h-5 text-[#111111]/40 group-hover:text-[#111111] transition-colors" />
                </div>

                <div className="my-6">
                  <div className="font-display font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-tighter text-[#111111] leading-none select-none">
                    {stat.figure}
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#111111] mt-3 uppercase">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-sm text-[#77766F] leading-relaxed font-sans border-t border-[#111111]/10 pt-4">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Context: Marketing / Engineering / Research */}
        <div className="mt-14 sm:mt-20 p-8 sm:p-10 bg-[#111111] text-[#F5F3EC]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/15">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D7FF45]">
              CORE VERTICALS // MARKETING · ENGINEERING · RESEARCH
            </span>
            <span className="font-mono text-xs text-white/50">
              ORCHESTRATING OUTCOMES AT ENTERPRISE VELOCITY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {verticals.map((v, i) => (
              <div key={v.name} className="flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#FF704D] tracking-wider block mb-2">
                    0{i + 1} / {v.tag}
                  </span>
                  <h4 className="font-display font-bold text-xl text-white tracking-tight mb-3">
                    {v.name}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed font-sans">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

