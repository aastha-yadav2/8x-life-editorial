import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyScale } from './components/CompanyScale';
import { Manifesto } from './components/Manifesto';
import { Principles } from './components/Principles';
import { People } from './components/People';
import { FitCheck } from './components/FitCheck';
import { HiringPhilosophy } from './components/HiringPhilosophy';
import { Opportunities } from './components/Opportunities';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F3EC] text-[#111111] antialiased selection:bg-[#D7FF45] selection:text-[#111111]">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section B: Hero with Marquee */}
        <Hero />

        {/* Section C: Company Scale */}
        <CompanyScale />

        {/* Section D: Manifesto */}
        <Manifesto />

        {/* Section E: How We Work */}
        <Principles />

        {/* Section F: The Human Side */}
        <People />

        {/* Section G: The Honest Fit Check */}
        <FitCheck />

        {/* Section H: Hiring Philosophy */}
        <HiringPhilosophy />

        {/* Section I: Open Opportunities */}
        <Opportunities />

        {/* Section J: Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

