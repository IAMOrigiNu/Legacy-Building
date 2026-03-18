import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface py-32">
      <div className="max-w-3xl mx-auto px-8">
        <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label text-[0.65rem] tracking-[0.15rem] uppercase font-bold mb-6">
          Get In Touch
        </span>
        <h1 className="font-serif text-5xl text-primary font-black mb-6">Let's Build Something Together.</h1>
        <p className="text-on-surface-variant text-lg mb-12">
          Whether you're a property owner, investor, or community partner, we'd love to hear from you.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="name">Full Name</label>
              <input id="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low focus:outline-none focus:border-primary transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="subject">Subject</label>
            <input id="subject" type="text" placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low focus:outline-none focus:border-primary transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="message">Message</label>
            <textarea id="message" rows={6} placeholder="Tell us about your needs..." className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
          </div>
          <button type="submit" className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-container transition-all active:scale-95">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
