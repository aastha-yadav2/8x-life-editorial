import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, Network, BarChart3, CheckCircle2, FileText } from 'lucide-react';

export const CompanyScale: React.FC = () => {
  const verifiedStats = [
    {
      figure: '50+',
      label: 'COUNTRIES ACTIVE',
      context: 'GLOBAL DECENTRALIZATION',
      qualification: 'Decentralized creator, research, and sales presence active across 50+ sovereign markets globally—from San Francisco to Lisbon, Ljubljana, Istanbul, Nairobi, and Bengaluru.',
      source: 'Verified on 8x.life official registry',
      icon: Globe2,
    },
    {
      figure: '250K+',
      label: 'HUMANS MANAGED',
      context: 'NETWORK OPERATORS',
      qualification: 'Vetted creators, researchers, sales representatives, and domain specialists coordinated through intelligent systems. This reflects platform network volume, not internal corporate headcount.',
      source: 'Verified on 8x.life ("People in the network")',
      icon: Users,
    },
    {
      figure: '300M+',
      label: 'ORGANIC VIEWS',
      context: 'UNPAID DISTRIBUTION',
      qualification: 'Generated organically by creators publishing on their own personal accounts in their authentic voices across TikTok, Instagram, YouTube, X, and LinkedIn with zero ad spend behind them.',
      source: 'Verified on 8x.life and 8x.social',
      icon: BarChart3,
    },
  ];

  const verticals = [
    {
      name: 'Marketing & Distribution',
      description: 'Orchestrating hundreds of high-performing creators for rapid multi-platform campaigns, UGC generation, and viral consumer reach.',
      tag: '8X SOCIAL & BUSINESS',
      proof: '12,000+ posts published across major consumer networks.',
    },
    {
      name: 'Engineering & Automation',
      description: 'Building custom orchestration engines, automated practical evaluation workflows, and real-time operational infrastructure.',
      tag: '8X ENGINEERING',
      proof: 'Automated evaluation pipelines powering 8x.careers trials.',
    },
    {
      name: 'Research & Intelligence',
      description: 'Executing parallel AI-moderated one-to-one user research sessions at unprecedented speed, delivering qualitative depth at quantitative scale.',
      tag: '8X RESEARCH',
      proof: 'Simultaneous 1-on-1 interviews with synthesized user findings.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 border-b border-[#111111]/15 bg-[#F5F3EC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#111111]/15">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77766F] mb-3">
              <Network className="w-3.5 h-3.5 text-[#111111]" />
              <span>// OPERATIONAL VOLUME & SCALE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#111111] uppercase leading-none">
              COMPANY SCALE.
            </h2>
          </div>

          <div className="max-w-md">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#111111]/20 font-mono text-[10px] uppercase tracking-wider text-[#111111] font-semibold mb-2">
              <CheckCircle2 className="w-3 h-3 text-[#FF704D]" />
              <span>STRICTLY AUDITED METRICS</span>
            </div>
            <p className="text-xs sm:text-sm text-[#77766F] font-sans leading-relaxed">
              These audited figures represent confirmed decentralized network volume across 8x operating platforms—not internal salaried employees.
            </p>
          </div>
        </div>

        {/* Oversized Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 pt-10 sm:pt-14">
          {verifiedStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative p-6 sm:p-8 lg:p-10 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] sm:shadow-[6px_6px_0px_0px_#111111] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-[#111111]/10">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF704D]">
                      {stat.context}
                    </span>
                    <Icon className="w-5 h-5 text-[#111111]/50 group-hover:text-[#111111] transition-colors" />
                  </div>

                  <div className="my-6">
                    <div className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-[#111111] leading-none select-none">
                      {stat.figure}
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg tracking-tight text-[#111111] mt-2 uppercase">
                      {stat.label}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#77766F] leading-relaxed font-sans border-t border-[#111111]/10 pt-4">
                    {stat.qualification}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#111111]/10 flex items-center gap-1.5 font-mono text-[10px] text-[#77766F]">
                  <FileText className="w-3 h-3 text-[#111111]" />
                  <span>{stat.source}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Operating Verticals */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 bg-[#111111] text-[#F5F3EC] shadow-[6px_6px_0px_0px_#D7FF45]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/15">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D7FF45] font-semibold">
              CORE OPERATING VERTICALS // MARKETING · ENGINEERING · RESEARCH
            </span>
            <span className="font-mono text-[11px] text-white/50">
              ORCHESTRATING OUTCOMES AT SCALE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {verticals.map((v, i) => (
              <div key={v.name} className="flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#FF704D] tracking-wider block mb-2">
                    0{i + 1} / {v.tag}
                  </span>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight mb-2">
                    {v.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans mb-4">
                    {v.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 font-mono text-[11px] text-[#D7FF45]">
                  → {v.proof}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
