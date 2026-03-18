import React from 'react';

const BuildingServicesPage: React.FC = () => {
  return (
    <div>
{/* Hero Section */}
<header className="relative min-h-[716px] flex items-center bg-primary overflow-hidden">
<div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center" data-alt="Technical blueprint and engineering infrastructure in a building"></div>
<div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-transparent"></div>
<div className="relative max-w-7xl mx-auto px-8 w-full">
<div className="max-w-3xl">
<span className="inline-block px-4 py-1 mb-6 bg-tertiary-fixed-dim text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase rounded-full">Technical Operations</span>
<h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">Engineering Excellence for Modern Estates.</h1>
<p className="text-xl text-on-primary-container leading-relaxed mb-10 font-light">Precision-driven HVAC, electrical, and general contracting services designed to sustain the structural integrity and operational efficiency of Albany’s premium properties.</p>
<div className="flex flex-wrap gap-4">
<a className="px-8 py-4 bg-primary-fixed text-on-primary-fixed font-bold rounded-xl transition-all hover:bg-white" href="#inquiry">Request Technical Service</a>
<a className="px-8 py-4 border border-outline-variant text-white font-bold rounded-xl hover:bg-white/10 transition-all" href="#expertise">View Our Capabilities</a>
</div>
</div>
</div>
</header>
{/* Capabilities Bento Grid */}
<section className="py-24 bg-surface-container-low" id="expertise">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="text-4xl font-black text-primary mb-4">Core Trades &amp; Disciplines</h2>
<p className="text-on-surface-variant text-lg">Integrated technical solutions managed by licensed journeymen and master tradespeople.</p>
</div>
<div className="flex items-center gap-2 text-primary font-bold">
<span className="material-symbols-outlined">verified</span>
<span>Fully Bonded &amp; Insured</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* HVAC */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-lowest p-8 min-h-[400px] flex flex-col justify-end">
<div className="absolute inset-0 z-0 opacity-20 transition-transform duration-700 group-hover:scale-105">
<img className="w-full h-full object-cover" data-alt="Industrial HVAC system maintenance with gauges and copper pipes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGMWqF9uf7wvDOfIkd0GN2d4_ar0bs7HNyeNLi3JBzAQtLzbpPcPqxCpsjjXenOd4s1V8iaPHj9nsYJ3sc4xqrVZVhc8j_CNl91KiqW3wjkophZIZuFzOGR1gTyt8eCfxzlsEhKdh_oYQEEJWBeTIfH_EFBJE4DH22-8dHBtbBImUlVWMhQ5JgtLrGNGeQbNsUfSptbljoNYcfkEQAfL96aSCa2OaKK1-0f557LwlqvBamUCb-3vSfKl9exmP6fahIzSMpQq9pZa8"/>
</div>
<div className="relative z-10">
<span className="material-symbols-outlined text-4xl text-primary mb-4" data-icon="hvac">hvac</span>
<h3 className="text-3xl font-bold text-primary mb-2">Climate Control &amp; HVAC</h3>
<p className="text-on-surface-variant max-w-md mb-6">Commercial-grade air handling, heating systems, and climate management featuring smart integration and 24/7 monitoring.</p>
<ul className="flex flex-wrap gap-y-2 gap-x-6 text-sm font-bold text-primary">
<li className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span>Preventative Maintenance</li>
<li className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span>Load Calculation</li>
<li className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span>Air Quality Testing</li>
</ul>
</div>
</div>
{/* Electrical */}
<div className="md:col-span-4 bg-primary text-white p-8 rounded-xl flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim mb-4" data-icon="bolt">bolt</span>
<h3 className="text-2xl font-bold mb-4">Electrical Systems</h3>
<p className="text-blue-200 text-sm leading-relaxed">From panel upgrades to smart automation and complex wiring for historical restorations.</p>
</div>
<div className="mt-8 pt-8 border-t border-white/10">
<p className="text-xs uppercase tracking-widest opacity-60 mb-2">Technical Standard</p>
<p className="text-lg font-serif italic">"Safety-first deployment across all high-voltage operations."</p>
</div>
</div>
{/* Plumbing */}
<div className="md:col-span-4 bg-surface-container-highest p-8 rounded-xl">
<span className="material-symbols-outlined text-4xl text-primary mb-4" data-icon="plumbing">plumbing</span>
<h3 className="text-2xl font-bold text-primary mb-4">Industrial Plumbing</h3>
<p className="text-on-surface-variant text-sm mb-6">Expertise in fluid dynamics, waste management, and sustainable water heating solutions.</p>
<div className="space-y-3">
<div className="h-1 bg-outline-variant w-full rounded-full overflow-hidden">
<div className="bg-primary h-full w-[95%]"></div>
</div>
<div className="flex justify-between text-[10px] font-black uppercase tracking-tighter">
<span>Service Reliability</span>
<span>95% Success Rate</span>
</div>
</div>
</div>
{/* General Contracting */}
<div className="md:col-span-8 bg-white border border-outline-variant/20 p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<span className="material-symbols-outlined text-4xl text-primary mb-4" data-icon="handyman">handyman</span>
<h3 className="text-3xl font-bold text-primary mb-4">General Contracting</h3>
<p className="text-on-surface-variant mb-6">Large-scale project management, from shell construction to high-finish interior build-outs. We handle the complexity so you don't have to.</p>
<button className="text-primary font-bold flex items-center gap-2 group">
                            Explore Project Portfolio
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
</div>
<div className="w-full md:w-64 h-48 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Construction site management with blueprints and safety gear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3vtT4gi45awRr5WRsGwtfVXKBwcQwZ-X9o49Cpd239NeW_cGZSh41csmJK9Tx3LPn4AxaqhsG1S-Sn4kUULLI-XcCs90lp_PbcZkwrY9yMTRnJQO3GpiPnNR_GA9fZvahA9kI1bky6GmsMSUx-7dHbiK3RuP_oVw9T49A-4l3rSE_Px_GnNUgT1tjK9ektjRRVarRlA04W6UbjjM_D8I7S7Do6uB9qvbR5y1uoEALdinhAxQyHEYzutEvFmK43oEA9nwk4IpGn9E"/>
</div>
</div>
</div>
</div>
</section>
{/* Certification / Safety Section */}
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-16">
<p className="text-label-caps text-xs font-bold text-secondary mb-2">Compliance &amp; Safety</p>
<h2 className="text-3xl font-black text-primary">Certified Legacy Standards</h2>
</div>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex flex-col items-center gap-3">
<span className="material-symbols-outlined text-5xl" data-icon="verified_user">verified_user</span>
<span className="text-[10px] font-black uppercase tracking-[0.2em]">OSHA Certified</span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="material-symbols-outlined text-5xl" data-icon="construction">construction</span>
<span className="text-[10px] font-black uppercase tracking-[0.2em]">Licensed NY State</span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="material-symbols-outlined text-5xl" data-icon="eco">eco</span>
<span className="text-[10px] font-black uppercase tracking-[0.2em]">EPA Lead Safe</span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="material-symbols-outlined text-5xl" data-icon="security">security</span>
<span className="text-[10px] font-black uppercase tracking-[0.2em]">Fully Bonded</span>
</div>
</div>
</div>
</section>
{/* Service Inquiry CTA Section */}
<section className="py-24 bg-surface" id="inquiry">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<h2 className="text-4xl font-black text-primary leading-tight mb-6">Let’s Discuss Your Facility's Needs.</h2>
<p className="text-on-surface-variant text-lg mb-10">Whether it’s emergency electrical repairs or a multi-year HVAC maintenance contract, our technical team is ready to deploy.</p>
<div className="space-y-8">
<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-container" data-icon="support_agent">support_agent</span>
</div>
<div>
<h4 className="font-bold text-primary">24/7 Technical Dispatch</h4>
<p className="text-sm text-on-surface-variant">Round-the-clock emergency support for existing service contracts.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-container" data-icon="description">description</span>
</div>
<div>
<h4 className="font-bold text-primary">Detailed Auditing</h4>
<p className="text-sm text-on-surface-variant">Full MEP (Mechanical, Electrical, Plumbing) audits provided for all new clients.</p>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-low p-8 md:p-12 rounded-xl shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] font-black uppercase tracking-widest text-secondary">Full Name</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary" placeholder="Enter name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-black uppercase tracking-widest text-secondary">Property Type</label>
<select className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary">
<option>Commercial Office</option>
<option>Residential Estate</option>
<option>Industrial Facility</option>
<option>Other</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-black uppercase tracking-widest text-secondary">Service Required</label>
<select className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary">
<option>HVAC Installation/Repair</option>
<option>Electrical System Upgrade</option>
<option>General Contracting / Renovations</option>
<option>Plumbing / MEP Maintenance</option>
</select>
</div>
<div className="space-y-2">
<label className="text-[10px] font-black uppercase tracking-widest text-secondary">Inquiry Details</label>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 min-h-[120px] focus:ring-primary focus:border-primary" placeholder="Briefly describe the technical requirements..."></textarea>
</div>
<button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold transition-all hover:bg-primary-container active:scale-95 shadow-lg shadow-primary/10">
                        Submit Technical Inquiry
                    </button>
</form>
</div>
</div>
</section>
{/* Footer */}
    </div>
  );
};

export default BuildingServicesPage;
