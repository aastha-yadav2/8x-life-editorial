import React from 'react';

interface MarqueeProps {
  items?: string[];
  className?: string;
  speed?: 'normal' | 'fast';
}

export const Marquee: React.FC<MarqueeProps> = ({
  items = [
    'THINK BIGGER',
    'MOVE FASTER',
    'OWN THE OUTCOME',
    'BUILD WHAT MATTERS',
    'NO SLACK POLISHING',
    'RADICAL HIGH AGENCY',
    'HUMAN ORCHESTRATION',
  ],
  className = '',
}) => {
  // Duplicate array to ensure seamless infinite scroll
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-[#111111]/15 py-3.5 bg-[#111111] text-[#F5F3EC] select-none ${className}`}
      aria-label="Operating Principles Ticker"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-6 sm:mx-8">
            <span className="font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold text-[#D7FF45]">
              {item}
            </span>
            <span className="ml-6 sm:ml-8 text-[#77766F] text-xs font-mono select-none">
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

