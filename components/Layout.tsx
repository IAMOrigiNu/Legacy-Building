import React from 'react';
import { Section } from '../types';

interface LayoutProps {
  currentSection: Section;
  setSection: (section: Section) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentSection, setSection, children }) => {
  const menuItems = [
    { id: Section.OVERVIEW, label: 'Executive Summary', icon: 'M4 6h16M4 12h16M4 18h7' },
    { id: Section.TECH_STACK, label: 'Tech Stack', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { id: Section.ROADMAP, label: '30-Day Roadmap', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: Section.COSTS, label: 'Maintenance ROI', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: Section.FAQ, label: 'FAQ', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  const logoUrl = "https://image2url.com/r2/default/images/1770931202977-ebccf21d-00f3-4837-a920-7d85000a0a15.blob";

  return (
    <div className="flex h-screen overflow-hidden bg-legacy-dark text-legacy-light">
      {/* Sidebar */}
      <aside className="w-64 bg-legacy-gray flex-shrink-0 border-r border-gray-800 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-800 flex flex-col items-center text-center">
          <div className="w-32 h-32 mb-4 relative flex items-center justify-center">
            <img 
              src={logoUrl} 
              alt="House of Willson Crest" 
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.15)]"
            />
          </div>
          <h1 className="text-2xl font-serif font-bold text-legacy-gold leading-tight">The Legacy<br/>Building</h1>
          <p className="text-xs text-gray-400 mt-2">Digital Proposal v1.0</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setSection(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    currentSection === item.id 
                      ? 'bg-legacy-gold text-black shadow-lg shadow-yellow-900/20' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center">
             <div className="w-8 h-8 rounded-full bg-legacy-gold flex items-center justify-center text-black font-bold text-xs">O</div>
             <div className="ml-3">
               <p className="text-sm font-medium">Ocasio Willson</p>
               <p className="text-xs text-gray-500">Lead Developer</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        <div className="md:hidden p-4 bg-legacy-gray border-b border-gray-800 flex justify-between items-center sticky top-0 z-20">
             <div className="flex items-center">
               <img 
                  src={logoUrl} 
                  alt="Logo" 
                  className="w-10 h-10 mr-3 object-contain"
               />
               <h1 className="text-lg font-serif font-bold text-legacy-gold">The Legacy Building</h1>
             </div>
             <button className="text-gray-300" onClick={() => {/* Simple mobile toggle logic would go here in real app */}}>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
             </button>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;