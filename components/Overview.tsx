import React from 'react';
import { Section } from '../types';

interface OverviewProps {
  setSection: (section: Section) => void;
}

const Overview: React.FC<OverviewProps> = ({ setSection }) => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 p-8 md:p-12 text-center md:text-left">
        <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg className="w-64 h-64 text-white" viewBox="0 0 200 200" fill="currentColor">
               <path d="M100 0L200 50V150L100 200L0 150V50L100 0Z" />
            </svg>
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Building Your Digital Legacy With <span className="text-legacy-gold">Purpose & Power</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            A comprehensive proposal for The Legacy Building's digital ecosystem. 
            Designed to unify Real Estate, Property Management, and Building Services under one powerful, community-anchored platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => setSection(Section.ROADMAP)}
              className="px-8 py-3 bg-legacy-gold text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              View 30-Day Roadmap
            </button>
            <button 
              onClick={() => setSection(Section.TECH_STACK)}
              className="px-8 py-3 bg-transparent border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Explore Tech Stack
            </button>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="p-6 bg-legacy-gray rounded-xl border border-gray-800">
            <div className="text-legacy-gold text-4xl mb-4 font-serif">01</div>
            <h3 className="text-xl font-bold text-white mb-2">Centralized Hub</h3>
            <p className="text-gray-400 text-sm">One ecosystem serving multiple business divisions seamlessly.</p>
         </div>
         <div className="p-6 bg-legacy-gray rounded-xl border border-gray-800">
            <div className="text-legacy-gold text-4xl mb-4 font-serif">02</div>
            <h3 className="text-xl font-bold text-white mb-2">Scalable Tech</h3>
            <p className="text-gray-400 text-sm">Built on React and Headless CMS to expand effortlessly with your growth.</p>
         </div>
         <div className="p-6 bg-legacy-gray rounded-xl border border-gray-800">
            <div className="text-legacy-gold text-4xl mb-4 font-serif">03</div>
            <h3 className="text-xl font-bold text-white mb-2">Community Anchor</h3>
            <p className="text-gray-400 text-sm">Prioritizing the South End revitalization with digital equity.</p>
         </div>
      </div>
    </div>
  );
};

export default Overview;
