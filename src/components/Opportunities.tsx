import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, MapPin, Building, Globe } from 'lucide-react';
import { VERIFIED_ROLES, Role } from '../data/roles';

export const Opportunities: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'core' | 'launch'>('all');

  const filteredRoles = VERIFIED_ROLES.filter((role) => {
    if (filter === 'core') return role.category === 'core';
    if (filter === 'launch') return role.category === 'launch';
    return true;
  });

  return (
    <section id="roles" className="py-20 lg:py-32 border-b border-[#111111]/15 bg-[#F5F3EC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#111111]/15">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77766F] mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#111111]" />
              <span>// LIVE OPPORTUNITY REGISTRY</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(2.3rem,5.5vw,4.5rem)] leading-[0.95] tracking-tighter text-[#111111] uppercase select-none">
              YOUR NEXT CHALLENGE<br />
              <span className="text-[#111111] relative inline-block">
                STARTS HERE.
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#D7FF45] -z-10" />
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <span className="font-mono text-xs text-[#77766F]">
              AUTHORITATIVE REPOSITORY: 8X.CAREERS
            </span>
            <a
              href="https://www.8x.careers/join"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#111111] text-[#D7FF45] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#FF704D] hover:text-[#111111] transition-all"
            >
              <span>EXPLORE ALL LIVE ROLES</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Filter Controls & Category Distinction */}
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
              ALL POSITIONS ({VERIFIED_ROLES.length})
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredRoles.map((role: Role, idx: number) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border-2 border-[#111111] p-6 sm:p-7 flex flex-col justify-between shadow-[4px_4px_0px_0px_#111111] hover:shadow-[7px_7px_0px_0px_#111111] transition-all duration-200 group"
            >
              <div>
                {/* Role Badge and Distinction */}
                <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10">
                  <span
                    className={`font-mono text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 ${
                      role.isPartnerRole
                        ? 'bg-[#FF704D]/15 text-[#FF704D] border border-[#FF704D]/30'
                        : 'bg-[#111111] text-[#D7FF45]'
                    }`}
                  >
                    {role.isPartnerRole ? 'LAUNCH / PARTNER' : '8X CORE TEAM'}
                  </span>

                  <span className="font-mono text-xs text-[#77766F]">
                    {role.type}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] mt-5 uppercase tracking-tight group-hover:text-[#FF704D] transition-colors">
                  {role.title}
                </h3>

                {/* Department & Location */}
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
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-[#77766F] font-sans leading-relaxed line-clamp-3">
                  {role.description}
                </p>
              </div>

              {/* Card Footer / Action */}
              <div className="mt-6 pt-5 border-t border-[#111111]/10 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#77766F]">
                  // 2-WEEK TRIAL
                </span>

                <a
                  href={role.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#FF704D] transition-colors"
                >
                  <span>APPLY & TRIAL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Careers Disclaimer Box */}
        <div className="mt-14 p-6 bg-white border border-[#111111]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#77766F]">
          <div>
            <span className="text-[#111111] font-semibold uppercase block">
              // VERIFICATION NOTICE
            </span>
            <span>
              All listed opportunities are synchronized from <code className="text-[#111111] font-bold">8x.careers/join</code>. Roles with the "LAUNCH / PARTNER" badge correspond to market expansion and partner networks.
            </span>
          </div>

          <a
            href="https://www.8x.careers/join"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#111111] font-bold underline underline-offset-4 hover:text-[#FF704D] transition-colors flex-shrink-0"
          >
            <span>VIEW LIVE STATUS ON 8X.CAREERS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

