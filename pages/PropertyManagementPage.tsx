import React from 'react';

const PropertyManagementPage: React.FC = () => {
  return (
    <div>
{/* Hero Section */}
<section className="relative h-[819px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" data-alt="Modern luxury multifamily residential building exterior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWxkS9RuWfQcj_iL_UuInwe-Mrs9OUvy3njhv33ln1nT-ejqB3qi5Z_infXMUhB3ija_P-xutS_IHOtQ9zV6QgJeUMyYIVKx-YBt8osc0GuOyB4yTjx_6NTDHPYoyWjq6TnNS-pZbIcCy2oUEVhtkIpCDCwo_Or8wLi5Vjemm-4PpSNanFN7P68qVw1uuuzg-3JGygS20trkl7iztwmAVUfupHhDNaMgBK5qUnmjdaZHB49yrzlHnbYdHk9KwBpIAUVWMmS0CmNg0"/>
<div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-8">
<div className="max-w-2xl">
<span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-label font-bold tracking-[0.05rem] rounded-sm mb-6 uppercase">
                        KL Real Estate Services (KLRES)
                    </span>
<h1 className="font-headline text-5xl md:text-7xl text-white font-bold leading-tight mb-8">
                        Elevated Management for <br/><span className="italic font-normal">Modern Estates.</span>
</h1>
<p className="text-white/90 text-xl font-body mb-10 leading-relaxed">
                        Precision-driven residential and multifamily property management tailored for high-performance assets in the Capital Region.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="bg-surface-container-lowest text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-bright transition-colors" href="#inquiry">
                            Owner Inquiry
                        </a>
<a className="border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors" href="#compliance">
                            Our Standards
                        </a>
</div>
</div>
</div>
</section>
{/* Stats Section (Tonal Shift) */}
<section className="bg-surface-container-low py-20">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col gap-2">
<span className="font-headline text-5xl text-primary font-bold">98%</span>
<p className="text-on-surface-variant font-label uppercase tracking-widest text-sm">Lease Renewal Rate</p>
</div>
<div className="flex flex-col gap-2">
<span className="font-headline text-5xl text-primary font-bold">24h</span>
<p className="text-on-surface-variant font-label uppercase tracking-widest text-sm">Maintenance Response</p>
</div>
<div className="flex flex-col gap-2">
<span className="font-headline text-5xl text-primary font-bold">100%</span>
<p className="text-on-surface-variant font-label uppercase tracking-widest text-sm">Compliance Reliability</p>
</div>
</div>
</section>
{/* Compliance Focus: Bento Grid Layout */}
<section className="py-32 bg-surface" id="compliance">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-xl">
<h2 className="font-headline text-4xl text-primary font-bold mb-6">Rigorous Compliance. Unwavering Trust.</h2>
<p className="text-on-surface-variant text-lg">In an evolving regulatory landscape, KLRES provides the bedrock of legal and operational security for your investments.</p>
</div>
<div className="pb-2">
<a className="text-primary font-bold text-lg border-b-2 border-tertiary-fixed-dim hover:border-tertiary transition-all" href="#">Download Compliance Framework</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
{/* Primary Bento Cell */}
<div className="md:col-span-7 bg-primary rounded-xl overflow-hidden relative group">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" data-alt="Legal documents and gavel representing compliance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbAlrSrWKiKxd5_uZK5fLxyI0Gxig8nLjjiohQuvJ2hJQ_gztbLTIPrI5impcvBrqbY8K-VP9352y86-WJgmpDfzBdGV1n1QK_C2pZo_PhiedjdcFEmSXJ4XmSpDbjhDOVxE6hNoduiRW2_98U9VRFGivdRCKAnbW0WQCLmfeoVhQlhkmH84bVYEawSTWAbVj0H6ukjriwr4o9YizFw3bqHmzTg04gaXqcfRm-u4MZJHE8f3KWhi4ymLnheqDd8bfv-blAWdobgn8"/>
<div className="relative z-10 p-12 h-full flex flex-col justify-end">
<h3 className="text-white font-headline text-3xl font-bold mb-4">Regulatory Stewardship</h3>
<p className="text-white/80 text-lg max-w-md">Comprehensive oversight of Fair Housing laws, local building codes, and state-specific residential ordinances.</p>
</div>
</div>
{/* Secondary Bento Cell (Stacked) */}
<div className="md:col-span-5 flex flex-col gap-6">
<div className="flex-1 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="verified_user">verified_user</span>
<div>
<h4 className="font-headline text-xl font-bold text-primary mb-2">Audit Readiness</h4>
<p className="text-on-surface-variant text-sm">Real-time documentation management ensuring you are always prepared for municipal inspections.</p>
</div>
</div>
<div className="flex-1 bg-secondary-container rounded-xl p-8 flex flex-col justify-between">
<span className="material-symbols-outlined text-on-secondary-container text-4xl" data-icon="policy">policy</span>
<div>
<h4 className="font-headline text-xl font-bold text-on-secondary-container mb-2">Liability Mitigation</h4>
<p className="text-on-secondary-container text-sm">Advanced risk assessment protocols protecting your asset from avoidable legal exposure.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Maintenance Coordination: Editorial Overlap */}
<section className="py-32 bg-surface-container-low overflow-hidden">
<div className="max-w-7xl mx-auto px-8 relative">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10">
<img className="w-full h-full object-cover" data-alt="Professional maintenance technician working on smart building system" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFOYVz-ozoCM1lIFFADkipffwA1k8-oIdXSwBkMZH7Tm0bRd_EZUMqpq2P043xpZnAfmCPOBeFVxUvxORGFVX6ksC_0tXIcy03vzXiKnkcYN04YJLdsPi5C_2JZfGxZ7LjW8rEm37E64a3HevWs6def1VUKSz2jLXLN0K48V4OmIRhe0YjYLPNHeiEu4h2pZTkgeH2wLNDIClibuT9JXSz4uB1uBc0ZOrfZRJqEZp4A6-HFinNyxZM_CNgWKtjOntOyGxycBGQ7a0"/>
</div>
{/* Decorative overhanging element */}
<div className="absolute -bottom-12 -right-12 w-64 h-64 bg-tertiary-fixed rounded-xl -z-0 hidden md:block"></div>
</div>
<div>
<span className="font-label text-sm font-bold tracking-[0.2rem] text-secondary mb-4 block">SEAMLESS OPERATIONS</span>
<h2 className="font-headline text-5xl text-primary font-bold mb-8 leading-tight">Response as a <br/><span className="italic font-normal">Service.</span></h2>
<p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
                            Our maintenance request system integrates directly with certified local contractors. From routine inspections to emergency repairs, we prioritize structural integrity and tenant satisfaction with zero friction.
                        </p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-on-primary-container" data-icon="bolt">bolt</span>
</div>
<div>
<h5 className="font-bold text-primary">Rapid Triage</h5>
<p className="text-sm text-on-surface-variant">Intelligent routing of work orders based on severity and expertise requirements.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-on-primary-container" data-icon="visibility">visibility</span>
</div>
<div>
<h5 className="font-bold text-primary">Owner Transparency</h5>
<p className="text-sm text-on-surface-variant">Track every dollar spent with high-resolution photo documentation and real-time updates.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Owner Inquiry CTA Section */}
<section className="py-32 bg-white" id="inquiry">
<div className="max-w-7xl mx-auto px-8">
<div className="bg-primary rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
<div className="lg:w-1/2 p-12 md:p-20">
<h2 className="font-headline text-4xl text-white font-bold mb-6">Transition Your Portfolio to Excellence.</h2>
<p className="text-white/80 text-lg mb-10">Whether you own a single luxury residence or a multifamily complex, our team is ready to discuss a management strategy that aligns with your legacy.</p>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4 text-white">
<span className="material-symbols-outlined text-tertiary-fixed-dim" data-icon="call">call</span>
<span className="font-bold">(518) 555-0192</span>
</div>
<div className="flex items-center gap-4 text-white">
<span className="material-symbols-outlined text-tertiary-fixed-dim" data-icon="mail">mail</span>
<span className="font-bold">management@legacybuilding.com</span>
</div>
</div>
</div>
<div className="lg:w-1/2 bg-surface-container-low p-12 md:p-20">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">Full Name</label>
<input className="w-full bg-surface-container-lowest border-none outline-variant/20 focus:ring-2 focus:ring-primary rounded-xl p-4" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">Email Address</label>
<input className="w-full bg-surface-container-lowest border-none outline-variant/20 focus:ring-2 focus:ring-primary rounded-xl p-4" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">Property Type</label>
<select className="w-full bg-surface-container-lowest border-none outline-variant/20 focus:ring-2 focus:ring-primary rounded-xl p-4">
<option>Multifamily (5+ Units)</option>
<option>Residential Portfolio</option>
<option>Luxury Single Residence</option>
<option>Commercial/Mixed-Use</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">Message</label>
<textarea className="w-full bg-surface-container-lowest border-none outline-variant/20 focus:ring-2 focus:ring-primary rounded-xl p-4" placeholder="Tell us about your portfolio..." rows="4"></textarea>
</div>
<button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg hover:opacity-95 transition-opacity" type="submit">
                                Submit Inquiry
                            </button>
</form>
</div>
</div>
</div>
</section>
    </div>
  );
};

export default PropertyManagementPage;
