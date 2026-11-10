import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'How we work', href: '#how-we-work' },
    { label: 'People', href: '#people' },
    { label: 'Open roles', href: '#roles' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F3EC]/92 backdrop-blur-md border-b border-[#111111]/10 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-[#F5F3EC]/70 backdrop-blur-sm border-b border-[#111111]/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Left: 8x Wordmark */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
          aria-label="8x Home"
        >
          {/* Custom crisp SVG logomark representing 8x */}
          <div className="w-8 h-8 bg-[#111111] flex items-center justify-center text-[#D7FF45] font-display font-bold text-lg tracking-tight rounded-none group-hover:bg-[#FF704D] group-hover:text-[#111111] transition-colors duration-200">
            8x
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight leading-none text-[#111111]">
              8X.LIFE
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#77766F] uppercase mt-0.5">
              ORCHESTRATION
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-[#111111]/80 hover:text-[#111111] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#111111] hover:after:w-full after:transition-all after:duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Primary Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.8x.careers/join"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-[#F5F3EC] text-xs font-mono tracking-wider uppercase font-semibold hover:bg-[#D7FF45] hover:text-[#111111] transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            <span>LET'S BUILD</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111111] hover:bg-[#111111]/5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[61px] bg-[#F5F3EC] z-40 px-6 py-8 flex flex-col justify-between border-t border-[#111111]/10 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-6 pt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#77766F]">
              // Navigation Menu
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display text-3xl font-bold text-[#111111] hover:text-[#FF704D] tracking-tight transition-colors flex items-center justify-between border-b border-[#111111]/10 pb-4"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[#77766F]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#111111]/10 space-y-4">
            <a
              href="https://www.8x.careers/join"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#111111] text-[#D7FF45] font-mono text-sm tracking-wider uppercase font-semibold flex items-center justify-center gap-2 hover:bg-[#111111]/90 transition-colors"
            >
              <span>LET'S BUILD</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="font-mono text-xs text-center text-[#77766F]">
              50+ Countries · 250k+ Humans Managed
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

