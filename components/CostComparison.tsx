import React from 'react';
import { MAINTENANCE_OPTIONS } from '../constants';

const CostComparison: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-12">
       <div className="border-b border-gray-800 pb-8 text-center">
        <h2 className="text-3xl font-serif text-white mb-4">Maintenance & ROI Analysis</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We offer two clear paths forward: complete ownership or a comprehensive partnership.
          Select the model that best aligns with your team's technical capacity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 max-w-5xl mx-auto">
        {MAINTENANCE_OPTIONS.map((option) => (
          <div 
            key={option.name} 
            className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
              option.recommended 
                ? 'bg-gradient-to-b from-gray-800 to-gray-900 border-legacy-gold shadow-2xl scale-105 z-10' 
                : 'bg-legacy-gray border-gray-800 hover:border-gray-600'
            }`}
          >
            {option.recommended && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-legacy-gold text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Recommended Choice
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{option.name}</h3>
              <div className="flex items-baseline">
                <span className="text-5xl font-serif font-bold text-white">
                    {option.isVendorCost ? `~${option.monthlyCost}` : `${option.monthlyCost}`}
                </span>
                <span className="text-gray-500 ml-2 text-xl">{option.isVendorCost ? 'est.' : ''}/month</span>
              </div>
               {option.isVendorCost && (
                <p className="text-xs text-red-400 mt-2 font-semibold bg-red-900/20 py-1 px-2 rounded inline-block">*Paid directly to 3rd-party vendors</p>
              )}
              <p className="text-sm text-gray-400 mt-2">
                {option.isVendorCost ? 'Est. ' : ''}<span className="text-legacy-gold font-semibold">${option.annualCost}</span> / year
              </p>
            </div>

            <div className="mb-8 min-h-[5rem]">
                <p className="text-base text-gray-300 leading-relaxed">{option.description}</p>
            </div>

            <div className="mb-8 p-5 bg-gray-900/50 rounded-lg border border-gray-700/50">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">ROI Impact</h4>
                <p className="text-sm text-white italic leading-relaxed">"{option.roi}"</p>
            </div>

            <div className="flex-1">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">
                {option.isVendorCost ? 'Required Vendor Accounts' : 'Partnership Inclusions'}
              </h4>
              <ul className="space-y-4 mb-8">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    {option.isVendorCost ? (
                       <svg className="w-5 h-5 mr-3 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                       </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-3 flex-shrink-0 text-legacy-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    <span className={option.isVendorCost && idx < 4 ? "text-white font-medium" : "text-gray-300"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className={`w-full py-4 rounded-lg font-bold text-lg transition-all mt-auto ${
              option.recommended
                ? 'bg-legacy-gold text-black hover:bg-yellow-500 shadow-lg shadow-yellow-900/20'
                : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
            }`}>
              {option.isVendorCost ? 'Select Self-Managed' : 'Select Partnership'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostComparison;
