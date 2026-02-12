import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    question: 'Do we really need Namecheap, or can Vercel handle everything?',
    answer: 'No. Vercel cannot replace Namecheap. Vercel is built for the frontend (React/Next.js) and excels at speed, global edge delivery, and instant deployments. However, it cannot host the WordPress database or PHP files. We need Namecheap to host the "Headless" WordPress content. The two work together: Namecheap stores the data, Vercel displays it. This hybrid approach gives you the best of both worlds—fast frontend and reliable content management.',
  },
  {
    id: '2',
    question: 'What about security updates? Who is responsible?',
    answer: 'It depends on your maintenance choice. With Self-Managed Handover (~$45/mo), you are 100% responsible. You must manually log in to WordPress to update Core files, patch plugins, and fix server vulnerabilities. If a plugin update breaks the site, you are responsible for restoring the backup. With the Wraparound Partnership ($500/mo), we handle all security monitoring, updates, and patches 24/7—giving you total peace of mind.',
  },
  {
    id: '3',
    question: 'What is the total timeline for the project?',
    answer: '30 days from kickoff to launch. The roadmap is broken into five phases: Discovery & Strategy (Days 1–7), Design & Prototyping (Days 8–14), Development & Integration (Days 15–21), Testing & Refinement (Days 22–28), and Launch & Handover (Days 29–30). Each phase has clear deliverables and approval gates.',
  },
  {
    id: '4',
    question: 'What is the hybrid tech stack?',
    answer: 'Frontend: Vercel-hosted React/Next.js for speed and global edge delivery. Backend: Namecheap-hosted WordPress as a Headless CMS—the cheapest reliable way to host the WordPress database ($15/mo). Email: Resend for forms and transactional emails. Domain: Namecheap ($15/yr). The frontend fetches content from WordPress via API; the two systems work in tandem.',
  },
  {
    id: '5',
    question: 'What is the difference between Self-Managed and Wraparound Partnership?',
    answer: 'Self-Managed (~$45/mo): You pay vendors directly. You handle all updates, security patches, and troubleshooting. Best for tech-savvy clients who want minimal cost. Wraparound Partnership ($500/mo): We pay all vendor fees and act as your fractional technical partner. Includes unlimited content updates, 24/7 security monitoring, priority support, and monthly strategy calls. Recommended for maximum peace of mind and continuous growth.',
  },
  {
    id: '6',
    question: 'What vendors will I need to pay if I choose Self-Managed?',
    answer: 'Namecheap: ~$15/mo (WordPress backend), Vercel: ~$20/mo (frontend hosting), Resend: Free or starts at $20/mo (emails), Domain: ~$15/yr. Total: approximately $45/mo plus domain. You also need a GitHub account (free) for the code repository. You are responsible for all WordPress Core, plugin, and server security patches.',
  },
  {
    id: '7',
    question: 'What does the Wraparound Partnership include?',
    answer: 'All vendor and hosting fees, unlimited content updates and edits, monthly strategy and growth calls, priority phone, text, and Slack support, 24/7 security and uptime monitoring, and quarterly feature enhancements. We absorb the technical complexity so you can focus solely on The Legacy Building\'s mission.',
  },
  {
    id: '8',
    question: 'Where will the site be located? What about the South End of Albany?',
    answer: 'The Legacy Building is a community anchor in the South End of Albany. The digital presence will reflect this—supporting local revitalization, digital equity, and community visibility. The site will be optimized for local search and can integrate location-based features as needed.',
  },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-400">Clear answers about the proposal, timeline, and maintenance options.</p>
      </div>

      <div className="space-y-3">
        {FAQ_DATA.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="bg-legacy-gray rounded-xl border border-gray-800 overflow-hidden transition-colors hover:border-gray-700"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-legacy-gold focus:ring-inset rounded-xl"
              >
                <span className="font-semibold text-white pr-4">{item.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-legacy-gold transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-4 pt-0">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
