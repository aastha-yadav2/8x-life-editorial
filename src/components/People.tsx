import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, UserCheck, MapPin, Globe, Code2, Briefcase } from 'lucide-react';

export const People: React.FC = () => {
  const founders = [
    {
      name: 'Jaka Bavdek',
      role: 'Co-founder, CEO',
      url: 'https://jakabavdek.com/',
      focus: 'Company strategy, creator economics, distribution networks, and enterprise partnerships.',
      philosophy: '“Anyone can build in the AI era. The defensible value lies in distribution, audience attention, and human execution at scale.”',
      initials: 'JB',
      tag: 'STRATEGY & GROWTH',
      icon: Briefcase,
    },
    {
      name: 'Theo Bui',
      role: 'Co-founder, CTO',
      url: 'https://www.theobui.com/',
      focus: 'Engineering architecture, human-in-the-loop orchestration systems, and automated evaluation.',
      philosophy: '“We build the technical substrate that coordinates hundreds of thousands of people with machine speed and human nuance.”',
      initials: 'TB',
      tag: 'SYSTEMS & ARCHITECTURE',
      icon: Code2,
    },
  ];

  const globalHubs = [
    { city: 'San Francisco', region: 'HQ Anchor' },
    { city: 'Lisbon', region: 'Western Europe' },
    { city: 'Ljubljana', region: 'Central Europe' },
    { city: 'Istanbul', region: 'Eurasia' },
    { city: 'Nairobi', region: 'East Africa' },
    { city: 'Bengaluru', region: 'South Asia' },
  ];

  return (
    <section id="people" className="py-16 sm:py-24 lg:py-32 border-b border-[#111111]/15 bg-[#F5F3EC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#111111]/15">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77766F] mb-3">
              <UserCheck className="w-3.5 h-3.5 text-[#111111]" />
              <span>// LEADERSHIP & HUMAN STORYTELLING</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(2.2rem,5vw,4.25rem)] leading-[0.95] tracking-tighter text-[#111111] uppercase select-none">
              BEHIND EVERY OUTCOME,<br />
              <span className="text-[#111111] relative inline-block">
                THERE ARE PEOPLE.
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#D7FF45] -z-10" />
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="font-mono text-xs text-[#77766F]">
              OFFICIAL LEADERSHIP DIRECTORY
            </span>
            <a
              href="https://8x.life/team"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-[#111111] hover:text-[#FF704D] transition-colors pb-0.5 border-b border-[#111111] hover:border-[#FF704D]"
            >
              <span>CONFIRMED VIA 8X.LIFE/TEAM</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Co-Founders Editorial Grid (Authentic, no fake stock portraits) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 pt-10 sm:pt-14">
          {founders.map((founder, idx) => {
            const Icon = founder.icon;
            return (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border-2 border-[#111111] p-6 sm:p-8 lg:p-10 shadow-[4px_4px_0px_0px_#111111] sm:shadow-[6px_6px_0px_0px_#111111] flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#111111]/10">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF704D]">
                      CO-FOUNDER 0{idx + 1} // {founder.tag}
                    </span>
                    <div className="w-8 h-8 bg-[#111111] text-[#D7FF45] font-mono font-bold text-xs flex items-center justify-center">
                      {founder.initials}
                    </div>
                  </div>

                  {/* Monogram / Typographic Identity Anchor */}
                  <div className="mt-8 mb-6">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight uppercase">
                      {founder.name}
                    </h3>
                    <p className="font-mono text-sm uppercase tracking-wider text-[#111111] font-semibold mt-1">
                      {founder.role}
                    </p>
                  </div>

                  {/* Founding Stance */}
                  <div className="p-4 sm:p-5 bg-[#F5F3EC] border-l-4 border-l-[#111111] my-5">
                    <p className="font-display font-medium text-sm sm:text-base text-[#111111] italic leading-snug">
                      {founder.philosophy}
                    </p>
                  </div>

                  {/* Operational Focus */}
                  <p className="text-xs sm:text-sm text-[#77766F] font-sans leading-relaxed mb-6">
                    {founder.focus}
                  </p>
                </div>

                {/* Verified Official Links */}
                <div className="pt-6 border-t border-[#111111]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#77766F]">
                    <Icon className="w-3.5 h-3.5 text-[#111111]" />
                    <span>SAN FRANCISCO & REMOTE</span>
                  </div>

                  <a
                    href={founder.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-[#D7FF45] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#FF704D] hover:text-[#111111] transition-all flex-shrink-0"
                  >
                    <span>OFFICIAL SITE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Distributed Footprint strip */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 border-2 border-[#111111] bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#111111]/10">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#111111]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#111111] font-bold">
                DISTRIBUTED OPERATOR ANCHORS
              </span>
            </div>
            <span className="font-mono text-xs text-[#77766F]">
              AUTHENTIC REMOTE-FIRST · EVALUATION BY WORK SHIPPED
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 pt-5">
            {globalHubs.map((hub) => (
              <div
                key={hub.city}
                className="p-3 bg-[#F5F3EC] border border-[#111111]/15 flex flex-col justify-between"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3 h-3 text-[#FF704D]" />
                  <span className="font-display font-bold text-xs sm:text-sm text-[#111111]">
                    {hub.city}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#77766F] uppercase">
                  {hub.region}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
