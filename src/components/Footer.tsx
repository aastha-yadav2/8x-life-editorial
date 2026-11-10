import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerNav = [
    { label: 'Life at 8x', href: '#' },
    { label: 'Manifesto', href: 'https://8x.life/manifesto', external: true },
    { label: 'Team', href: 'https://8x.life/team', external: true },
    { label: 'Careers', href: 'https://www.8x.careers/join', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/8x-life/', external: true },
  ];

  const subBrands = [
    { label: '8x Social', href: 'https://8x.social', desc: 'Consumer brand creator network' },
    { label: '8x Business', href: 'https://8x.business', desc: 'B2B demand generation' },
    { label: '8x Careers', href: 'https://www.8x.careers/join', desc: 'Evidence-first practical hiring' },
    { label: '8x Research', href: 'https://8x.life', desc: 'Parallel human research moderation' },
  ];

  return (
    <footer className="bg-[#111111] text-[#F5F3EC] pt-16 sm:pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/10">
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#D7FF45] text-[#111111] font-display font-extrabold text-xl flex items-center justify-center">
                  8x
                </div>
                <span className="font-display font-bold text-2xl text-white tracking-tight">
                  8X.LIFE
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-white/70 font-sans max-w-sm leading-relaxed">
                The human company. Orchestrating 250k+ people in 50+ countries across marketing, engineering, and research.
              </p>
            </div>

            <div className="mt-8 font-mono text-xs text-white/40">
              <p>HEADQUARTERS: SAN FRANCISCO, CALIFORNIA</p>
              <p className="mt-1">DISTRIBUTED: GLOBAL · REMOTE-FIRST</p>
            </div>
          </div>

          {/* Official Destinations Navigation (3 cols) */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs text-[#D7FF45] uppercase tracking-widest block mb-4">
              // OFFICIAL DESTINATIONS
            </span>
            <ul className="space-y-3 font-mono text-xs">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="group inline-flex items-center gap-1.5 text-white/80 hover:text-[#D7FF45] transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.external && (
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#D7FF45]/60" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-Brand Verticals (4 cols) */}
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-[#FF704D] uppercase tracking-widest block mb-4">
              // ECOSYSTEM PLATFORMS
            </span>
            <div className="space-y-3 font-mono text-xs">
              {subBrands.map((sub) => (
                <a
                  key={sub.label}
                  href={sub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-white/5 border border-white/10 hover:border-[#D7FF45] transition-all group"
                >
                  <div className="flex items-center justify-between text-white group-hover:text-[#D7FF45]">
                    <span className="font-bold">{sub.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </div>
                  <p className="text-[11px] text-white/50 mt-1 font-sans">
                    {sub.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
          <div className="flex items-center gap-4">
            <span>© {currentYear} 8x Inc. All rights reserved.</span>
            <span>·</span>
            <span>Editorial Redesign for 8x.life</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://8x.life"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              8x.life
            </a>
            <a
              href="https://www.8x.careers/join"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              8x.careers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

