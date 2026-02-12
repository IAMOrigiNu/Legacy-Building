import { RoadmapItem, MaintenanceOption } from './types';
import React from 'react';

export const ROADMAP_DATA: RoadmapItem[] = [
  {
    id: 1,
    phase: "Discovery & Strategy",
    days: "Days 1-7",
    description: "Deep dive into brand requirements, content gathering, and initial design concepts.",
    deliverables: ["Project Brief", "Sitemap Architecture", "Mood Boards", "Content Strategy"],
    status: 'completed'
  },
  {
    id: 2,
    phase: "Design & Prototyping",
    days: "Days 8-14",
    description: "Creation of high-fidelity mockups for Landing, Listings, and Service pages.",
    deliverables: ["UI/UX Mockups", "Mobile Responsive Designs", "Interactive Prototype", "Design Approval"],
    status: 'active'
  },
  {
    id: 3,
    phase: "Development & Integration",
    days: "Days 15-21",
    description: "Full stack development of the React frontend and Headless CMS integration.",
    deliverables: ["React Component Library", "CMS Setup (WordPress)", "Contact Form & Email Setup (Resend)", "Service Routing Logic"],
    status: 'pending'
  },
  {
    id: 4,
    phase: "Testing & Refinement",
    days: "Days 22-28",
    description: "Rigorous QA testing across devices, SEO setup, and performance optimization.",
    deliverables: ["Cross-Browser Testing", "Speed Optimization", "SEO Metadata Setup", "Client Review Cycle"],
    status: 'pending'
  },
  {
    id: 5,
    phase: "Launch & Handover",
    days: "Days 29-30",
    description: "Final deployment to production, DNS propagation, and admin training.",
    deliverables: ["Live Website", "Admin Training Session", "Documentation Handover", "30-Day Support Start"],
    status: 'pending'
  }
];

export const MAINTENANCE_OPTIONS: MaintenanceOption[] = [
  {
    name: "Self-Managed Handover",
    monthlyCost: 45,
    annualCost: 540,
    isVendorCost: true,
    description: "You take full ownership of the tech stack. You will need to maintain active billing accounts with the following required vendors to keep the site online:",
    roi: "Zero agency fees, but requires high technical oversight. Any downtime or errors are the client's responsibility.",
    features: [
      "Namecheap: ~$15/mo (WordPress Backend)",
      "Vercel: ~$20/mo (Frontend Hosting)",
      "Resend: Free/Starts at $20 (Emails)",
      "Namecheap: ~$15/yr (Domain Name)",
      "GitHub: Free (Code Repository)",
      "Client responsible for all WP Core, Plugin & Server Security Patches"
    ]
  },
  {
    name: "Wraparound Partnership",
    monthlyCost: 500,
    annualCost: 6000,
    recommended: true,
    description: "A complete digital concierge service. Ocasio operates as your fractional technical partner, handling all billing, security, and growth strategies.",
    roi: "Maximum Peace of Mind. We absorb the technical complexity and vendor costs, letting you focus solely on The Legacy Building's mission.",
    features: [
      "All Vendor & Hosting Fees Included",
      "Unlimited Content Updates & Edits",
      "Monthly Strategy & Growth Call",
      "Priority Phone, Text & Slack Support",
      "24/7 Security & Uptime Guard",
      "Quarterly Feature Enhancements"
    ]
  }
];

export const TECH_STACK_ICONS = {
  React: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>,
  CMS: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  Security: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  Analytics: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  Email: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
};