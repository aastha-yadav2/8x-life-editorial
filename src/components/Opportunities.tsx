import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Briefcase, MapPin, Building, Globe, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { VERIFIED_ROLES, Role } from '../data/roles';

export const Opportunities: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'core' | 'launch'>('all');
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedRoles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredRoles = VERIFIED_ROLES.filter((role) => {
    if (filter === 'core') return role.category === 'core';
    if (filter === 'launch') return role.category === 'launch';
    return true;
  });

  return (
    <section id="roles" className="py-16 sm:py-24 lg:py-32 border-b border-[#111111]/15 bg-[#F5F3EC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#111111]/15">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77766F] mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#111111]" />
              <span>// SYNCHRONIZED OPPORTUNITY REGISTRY</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(2.2rem,5vw,4.25rem)] leading-[0.95] tracking-tighter text-[#111111] uppercase select-none">
              YOUR NEXT CHALLENGE<br />
              <span className="text-[#111111] relative inline-block">
                STARTS HERE.
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#D7FF45] -z-10" />
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <span className="font-mono text-xs text-[#77766F]">
              AUTHORITATIVE LIVE SOURCE: 8X.CAREERS/JOIN
            </span>
            <a
              href="https://www.8x.careers/join"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#111111] text-[#D7FF45] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#FF704D] hover:text-[#111111] transition-all shadow-[4px_4px_0px_0px_#111111]"
            >
              <span>VIEW ALL LIVE VACANCIES</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold border transition-all ${
                filter === 'all'
                  ? 'bg-[#111111] text-[#D7FF45] border-[#111111]'
                  : 'bg-white text-[#111111] border-[#111111]/20 hover:border-[#111111]'
              }`}
            >
              ALL VERIFIED POSITIONS ({VERIFIED_ROLES.length})
            </button>

            <button
              type="button"
              onClick={() => setFilter('core')}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold border transition-all ${
                filter === 'core'
                  ? 'bg-[#111111] text-[#D7FF45] border-[#111111]'
                  : 'bg-white text-[#111111] border-[#111111]/20 hover:border-[#111111]'
              }`}
            >
              8X CORE ROLES (3)
            </button>

            <button
              type="button"
              onClick={() => setFilter('launch')}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold border transition-all ${
                filter === 'launch'
                  ? 'bg-[#111111] text-[#D7FF45] border-[#111111]'
                  : 'bg-white text-[#111111] border-[#111111]/20 hover:border-[#111111]'
              }`}
            >
              GLOBAL LAUNCH LEADS (7)
            </button>
          </div>

          <div className="font-mono text-xs text-[#77766F] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            <span>Practical task issued automatically on apply</span>
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRoles.map((role: Role, idx: number) => {
            const isExpanded = !!expandedRoles[role.id];

            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border-2 border-[#111111] p-5 sm:p-7 flex flex-col justify-between shadow-[4px_4px_0px_0px_#111111] hover:shadow-[7px_7px_0px_0px_#111111] transition-all group"
              >
                <div>
                  {/* Category Badge & Employment Type */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10">
                    <span
                      className={`font-mono text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 ${
                        role.isPartnerRole
                          ? 'bg-[#FF704D]/15 text-[#FF704D] border border-[#FF704D]/30'
                          : 'bg-[#111111] text-[#D7FF45]'
                      }`}
                    >
                      {role.isPartnerRole ? 'LAUNCH INTERNSHIP' : '8X CORE TEAM'}
                    </span>

                    <span className="font-mono text-xs text-[#77766F]">
                      {role.type}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] mt-5 uppercase tracking-tight group-hover:text-[#FF704D] transition-colors leading-snug">
                    {role.title}
                  </h3>

                  {/* Metadata: Dept & Location */}
                  <div className="mt-3 space-y-1.5 font-mono text-xs text-[#77766F]">
                    <div className="flex items-center gap-2">
                      <Building className="w-3.5 h-3.5 text-[#111111]" />
                      <span>{role.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {role.isPartnerRole ? (
                        <Globe className="w-3.5 h-3.5 text-[#111111]" />
                      ) : (
                        <MapPin className="w-3.5 h-3.5 text-[#111111]" />
                      )}
                      <span>{role.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#FF704D]">
                      <Clock className="w-3.5 h-3.5 text-[#FF704D]" />
                      <span className="font-semibold">{role.trialNote}</span>
                    </div>
                  </div>

                  {/* Short description */}
                  <p className="mt-4 text-sm text-[#111111] font-sans font-medium leading-relaxed">
                    {role.description}
                  </p>

                  {/* Expandable full briefing for complete accessibility */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-3 pt-3 border-t border-[#111111]/10"
                      >
                        <p className="text-xs sm:text-sm text-[#77766F] font-sans leading-relaxed">
                          {role.fullBriefing}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand/Collapse Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(role.id)}
                    className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] text-[#77766F] hover:text-[#111111] font-semibold transition-colors focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide detailed briefing' : 'Read full role briefing'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-[#111111]/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#77766F]">
                    // NO CV PREREQUISITE
                  </span>

                  <a
                    href={role.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-1.5 px-4 py-2 bg-[#111111] text-[#D7FF45] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FF704D] hover:text-[#111111] transition-all"
                  >
                    <span>APPLY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verification Footer Note */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-6 bg-white border-2 border-[#111111] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#77766F]">
          <div>
            <span className="text-[#111111] font-bold uppercase block mb-0.5">
              // ROLE SYNCHRONIZATION STATUS
            </span>
            <span>
              All 10 positions are synchronized with live vacancies on <code className="text-[#111111] font-bold">8x.careers/join</code>. Submissions immediately trigger practical evaluation tasks.
            </span>
          </div>

          <a
            href="https://www.8x.careers/join"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#111111] font-bold underline underline-offset-4 hover:text-[#FF704D] transition-colors flex-shrink-0"
          >
            <span>OFFICIAL 8X.CAREERS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
