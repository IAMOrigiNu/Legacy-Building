import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
{/* Hero Section: Narrative Driven */}
<section className="relative min-h-[716px] flex items-center overflow-hidden bg-primary text-on-primary">
<div className="absolute inset-0 opacity-40">
<img className="w-full h-full object-cover" data-alt="Architecture of a historic building in Albany South End" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9h24hhXeH9J8qFA3lXlsAr7MavfIOIiMkQa5CdPpGI4NdenRyrw2ek2yd5eZlxf6LJbO9ai9OHd2IafEZ10MxZ0vJCUz46yslaNKv5oogADUNmRnWn6g8a2pNXlhc0kZ-5edHkzJ6dLyBBaFad4hoMb9Ivg64I7QN0FIXMdzYhek0DLmyCgEiyLvDZBmdx-D9-_OMNauVpkuzFwNE-6VO9YuRrFRNN8pDif2m7khEwccbSLgamYbnXOZFw_qSnAiUi8M1zwyFzgU"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/80 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-8 py-20 z-10">
<div className="max-w-3xl">
<span className="inline-block px-4 py-1 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-label text-xs tracking-widest mb-6">ESTABLISHED IN ALBANY</span>
<h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">More than structures. <br/><span className="italic font-normal">A lasting foundation.</span></h1>
<p className="text-xl md:text-2xl font-body text-primary-fixed-dim leading-relaxed mb-10">
                        The Legacy Building stands as a testament to Albany’s South End—a hub for collective empowerment, architectural preservation, and digital equity.
                    </p>
</div>
</div>
</section>
{/* Mission & Vision: Asymmetric Layout */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Community leaders meeting in a modern conference room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWh-9W1Snma07mJS9zHUi5aN3ld6_44Rl6vkZ6b66U9F5VBE5kTQh1CQTHmmBiv-opvYuwj6j-UZLXXxlVuG9PKNEwf2aSMTPWJPfQtbDB4GvOEJJg1W-9M58W0mUudYQb_P0DrT8k_UFpb5iU_NZeihsA8ZhwC7PkXqn7-pbIGFaoqdRB1NjeKDZtJt41CstR9wYHCjEZOWYKxUfGujE69A-O9J_sKenpUDWUDb3molPTiQ_H6TQxPikYzeREbzuSZNMCd_zO8vk"/>
</div>
<div className="absolute -bottom-10 -right-10 hidden md:block w-64 p-8 bg-tertiary text-on-tertiary rounded-xl shadow-xl">
<p className="font-serif italic text-lg leading-snug">"Community is not just where we live, it is how we lift."</p>
</div>
</div>
<div className="lg:col-span-7 space-y-12">
<div>
<h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
<p className="text-lg text-on-surface-variant leading-relaxed">
                                To redefine property management by centering the human experience. We steward historic assets while fostering modern opportunities, ensuring that Albany’s South End remains a vibrant, self-sustaining ecosystem for generations to come.
                            </p>
</div>
<div className="pt-8 border-t border-outline-variant/20">
<h2 className="text-4xl font-bold text-primary mb-6">Our Vision</h2>
<p className="text-lg text-on-surface-variant leading-relaxed">
                                A future where digital equity is a right, not a privilege. We envision The Legacy Building as the heartbeat of neighborhood progress—bridging the gap between historic prestige and technological advancement.
                            </p>
</div>
</div>
</div>
</div>
</section>
{/* Core Values: Bento Grid */}
<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">The Pillars of Legacy</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">Our philosophy is built on four core commitments that guide every decision we make.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Value 1 */}
<div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="diversity_3">diversity_3</span>
<h3 className="text-3xl font-bold text-primary mb-4">Collective Empowerment</h3>
<p className="text-on-surface-variant text-lg">We don't just manage buildings; we manage partnerships. By providing resources for local entrepreneurs and community organizers, we turn real estate into a platform for shared success.</p>
</div>
</div>
{/* Value 2 */}
<div className="bg-primary-container text-on-primary-container p-10 rounded-xl flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-4xl mb-6" data-icon="lan">lan</span>
<h3 className="text-2xl font-bold mb-4">Digital Equity</h3>
<p className="text-on-primary-container/80">Ensuring every resident and tenant has high-speed access and the digital literacy tools to thrive in the modern economy.</p>
</div>
</div>
{/* Value 3 */}
<div className="bg-surface-container-low p-10 rounded-xl flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-4xl text-secondary mb-6" data-icon="account_balance">account_balance</span>
<h3 className="text-2xl font-bold text-primary mb-4">Heritage Preservation</h3>
<p className="text-on-surface-variant">Respecting the architectural soul of Albany while integrating sustainable, high-efficiency building systems.</p>
</div>
</div>
{/* Value 4 */}
<div className="md:col-span-2 bg-secondary text-on-secondary p-10 rounded-xl flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-4xl mb-6" data-icon="verified_user">verified_user</span>
<h3 className="text-3xl font-bold mb-4">Unwavering Integrity</h3>
<p className="text-on-secondary/80">Transparency in every contract, equity in every lease, and accountability in every service call. Our reputation is our most valuable asset.</p>
</div>
</div>
</div>
</div>
</section>
{/* Leadership Section: High-End Editorial */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div>
<h2 className="text-4xl font-bold text-primary mb-2">Guided by Experience</h2>
<p className="text-on-surface-variant">The visionaries steering The Legacy Building toward a new standard.</p>
</div>
<a className="text-primary font-bold border-b-2 border-tertiary-fixed-dim pb-1 hover:text-tertiary transition-all" href="#">Join Our Team</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Leader 1 */}
<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Professional man in a tailored suit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPaOQEXzSymUwi5nTzOcZgaTCo4G_JBDhaT6kwFNI_ORz0fN7eYd6XZWdfSs6q1ElOPIXO1UiPncPHha2QR3Ixche-vNqk_Bs2TrAZtrLIvEjQq-_9fVSRTvSJVFZpJbHBlUPYH8ULb0r6kVccqmoTFEIFkffeP0JoyCGE4EEIhrHzXhEKczod7Pv13H3SBSKGH-bui5IXsXPGRxIKQH4JyQAagJbIh5FYXAk4uOQMut2B9HiyDndFbMZ7sYptNMMEnTTmNE7hGMQ"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h4 className="text-xl font-bold text-primary">Marcus Thornton</h4>
<p className="text-sm font-label text-outline uppercase tracking-wider">Executive Director</p>
</div>
{/* Leader 2 */}
<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Professional woman looking confident" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDEM2idM8UwVT7uNIF-BYNX5nROzCCZ1c8a20s2mqw4dgxvNQQKA1GTpnMpgAU-zvp86qmDGCLOAorwwVWLKfYWtEvJh9pG2K004m1qYE1Q-1t8CnFuGsijkST3girbYdLNa890GGmePu1efH8Vn5c3rgxsUajMP9VmJK8W4bX6CIgRFfUEHECOlf1-3OvrK0A3_bhCvEr0RjlNme1HW9anBJlJU-l4iU5xc3HIQAFjt8NtZ34qL0cwg5whYtn4kZf99nnbA2RoDU"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h4 className="text-xl font-bold text-primary">Elena Rodriguez</h4>
<p className="text-sm font-label text-outline uppercase tracking-wider">Director of Community Impact</p>
</div>
{/* Leader 3 */}
<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Man in business casual attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAhL9boAXkE9Bw0yPyPvftXlHaqoxvxNYQ_4DCzm3oM_Sp7SUTkSf8hjPC8EpK_hnEwi0M2ILUP4VBos-qBOxIZKOJ6WGUwTtZFk1p2e7ayVBN-GBXvxzoHV1FidWGwIR6eQrP807Gx9Tx3HxX1_GdiIUXf00G1kgFh4gkRU4Yq9qb5TaGX5l_YsLKpd1cKOmJToKMYTEJHX7_Levu3jnizG-cquBUkr9efyo_DuJN4BVu98kjWuiqI4nRPugFIAINFY8BBBFGF68"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h4 className="text-xl font-bold text-primary">David Chen</h4>
<p className="text-sm font-label text-outline uppercase tracking-wider">Head of Property Services</p>
</div>
{/* Leader 4 */}
<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Woman smiling in professional setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDaB3nbounXyuBdt78gzgBZVpPYcLOEgxhAYxYysOlsmlQ5mOV6FmSj9ep7wMQknFUxR4oPDTPeqUsjYALeR7jxmMUWAj-kXCVtcxMwVLUeWekdJrRO5DVJjIZ7xtC3-OdrXFKkUMvG4aVK-eYwjQd-fVobCFtzuNOPeqnPUK5xtuLMu6fISRSLdwJYPmWNfWhKrqqNFQv-bPFX3x6jXT586dLuQz4-yHMkb4UtOkaH0PV_eXZr-Qfc0wTsU7q-YtBefTbPFpvNgw"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h4 className="text-xl font-bold text-primary">Sarah Jenkins</h4>
<p className="text-sm font-label text-outline uppercase tracking-wider">Operations Lead</p>
</div>
</div>
</div>
</section>
{/* Community Focus: The Legacy Card */}
<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="relative bg-primary rounded-xl overflow-hidden min-h-[500px] flex items-center">
<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-30" data-alt="Group of diverse people working together in a bright office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2XJhSk_WAS3zWHy1uaNRBBfwasbAtZ5zRnEaZxv4SfwoGRgpFQ-zn2gInmegL6IDaZXDj85OJBfvh4WFeYrvN22psv82cxncXoJjGLh92F9oQ9z_-daQ34CJIdiJ0tsoAO6J6_fn2LbBD-wI_oJ2wHW1deNVnI4jl8ZI62TDYSR89Rghk_HuMgJNfJN01-UIVKNHm5PO91hS2CW32sWIUBJhlesSIUU9XlLqCnb2VAKm84O6HPdrBMESqhnwROFImjPMcjSOLAwg"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
</div>
<div className="relative z-10 p-12 lg:p-20 max-w-2xl">
<h2 className="text-4xl md:text-5xl font-bold text-on-primary mb-8 leading-tight">The Albany Collective</h2>
<p className="text-xl text-primary-fixed-dim leading-relaxed mb-10">
                            Our community-focused philosophy means we invest back into the neighborhood. From local hiring initiatives to public Wi-Fi zones, we are building more than equity—we are building a legacy.
                        </p>
<button className="bg-surface-container-lowest text-primary px-8 py-3 rounded-xl font-bold hover:bg-white transition-all">Learn about our Impact</button>
</div>
</div>
</div>
</section>
{/* Final CTA */}
<section className="py-24 bg-surface-container-low text-center">
<div className="max-w-3xl mx-auto px-8">
<h2 className="text-4xl font-bold text-primary mb-6">Be a part of the legacy.</h2>
<p className="text-on-surface-variant text-lg mb-10">Whether you're looking for a home, a business location, or a community partner, let's build something lasting together.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-container transition-all">Contact Us Today</button>
<button className="bg-white border-2 border-primary/10 text-primary px-10 py-4 rounded-xl font-bold text-lg hover:border-primary/30 transition-all">View Properties</button>
</div>
</div>
</section>
    </div>
  );
};

export default AboutPage;
