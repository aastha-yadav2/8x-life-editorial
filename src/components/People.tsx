import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, UserCheck, MapPin } from 'lucide-react';

export const People: React.FC = () => {
  const founders = [
    {
      name: 'Jaka Bavdek',
      role: 'Co-founder, CEO',
      url: 'https://jakabavdek.com/',
      focus: 'Company strategy, creator economics, and enterprise commercial partnerships.',
      location: 'San Francisco / Global',
      initials: 'JB',
      portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Theo Bui',
      role: 'Co-founder, CTO',
      url: 'https://www.theobui.com/',
      focus: 'Engineering architecture, human orchestration systems, and automated evaluation.',
      location: 'San Francisco / Global',
      initials: 'TB',
      portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const globalHubs = [
    'San Francisco',
    'Lisbon',
    'Ljubljana',
    'Istanbul',
    'Nairobi',
    'Bengaluru',
  ];

  return (
    <section id="people" className="py-20 lg:py-32 border-b border-[#111111]/15 bg-[#F5F3EC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#111111]/15">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77766F] mb-3">
              <UserCheck className="w-3.5 h-3.5 text-[#111111]" />
              <span>// LEADERSHIP & OPERATORS</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.95] tracking-tighter text-[#111111] uppercase select-none">
              BEHIND EVERY OUTCOME,<br />
              <span className="text-[#111111] relative inline-block">
                THERE ARE PEOPLE.
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#D7FF45] -z-10" />
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="font-mono text-xs text-[#77766F]">
              OFFICIAL LEADERSHIP VERIFICATION
            </span>
            <a
              href="https://8x.life/team"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-[#111111] hover:text-[#FF704D] transition-colors pb-0.5 border-b border-[#111111] hover:border-[#FF704D]"
            >
              <span>VIEW OFFICIAL 8X TEAM DIRECTORY</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Co-Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-12 lg:pt-16">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white border-2 border-[#111111] p-8 sm:p-10 shadow-[6px_6px_0px_0px_#111111] flex flex-col justify-between"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between pb-6 border-b border-[#111111]/10">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF704D]">
                    FOUNDER PROFILE // 0{idx + 1}
                  </span>
                  <span className="font-mono text-xs text-[#77766F] flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#111111]" />
                    {founder.location}
                  </span>
                </div>

                {/* Name & Title */}
                <div className="mt-8 mb-6">
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight uppercase">
                    {founder.name}
                  </h3>
                  <p className="font-mono text-sm uppercase tracking-wider text-[#111111] font-semibold mt-1.5">
                    {founder.role}
                  </p>
                </div>

                {/* Scope Note */}
                <p className="text-sm sm:text-base text-[#77766F] font-sans leading-relaxed mb-8">
                  {founder.focus}
                </p>
              </div>

              {/* Official Link Card */}
              <div className="pt-6 border-t border-[#111111]/10 flex items-center justify-between">
                <span className="font-mono text-xs text-[#77766F]">
                  PERSONAL WEBSITE & NOTES
                </span>
                <a
                  href={founder.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-[#D7FF45] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#FF704D] hover:text-[#111111] transition-all"
                >
                  <span>{founder.name.split(' ')[0]}.COM</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Distributed Footprint strip */}
        <div className="mt-14 sm:mt-18 p-8 border border-[#111111]/15 bg-white/70">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#111111]/10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#111111] font-semibold">
              // DISTRIBUTED TIMEZONE ANCHORS
            </span>
            <span className="font-mono text-xs text-[#77766F]">
              ASYNC FIRST · MERIT FIRST · NO ARBITRARY OFFICE MANDATES
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-5">
            {globalHubs.map((hub) => (
              <div
                key={hub}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#F5F3EC] border border-[#111111]/15 font-mono text-xs text-[#111111] font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                <span>{hub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

