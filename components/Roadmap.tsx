import React from 'react';
import { ROADMAP_DATA } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
       <div className="border-b border-gray-800 pb-8">
        <h2 className="text-3xl font-serif text-white mb-4">30-Day Deployment Roadmap</h2>
        <p className="text-gray-400 max-w-3xl text-lg">
          A structured, agile approach to delivering the fully functional Legacy Building ecosystem within 30 days.
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800" />

        <div className="space-y-12">
          {ROADMAP_DATA.map((item, index) => (
            <div key={item.id} className="relative flex items-start group">
              {/* Dot */}
              <div className={`absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 mt-1.5 transition-colors duration-300 ${
                index === 0 ? 'bg-legacy-gold border-legacy-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'bg-legacy-dark border-gray-600 group-hover:border-legacy-gold'
              }`} />
              
              {/* Content */}
              <div className="ml-20 w-full">
                <div className="flex flex-col md:flex-row md:items-center mb-2">
                   <span className="text-legacy-gold font-bold uppercase tracking-wider text-sm mb-1 md:mb-0 md:mr-4">{item.days}</span>
                   <h3 className="text-xl font-bold text-white">{item.phase}</h3>
                </div>
                
                <div className="bg-legacy-gray p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Key Deliverables</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.deliverables.map((del, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-400">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {del}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
