import React from 'react';
import { TECH_STACK_ICONS } from '../constants';

const TechStack: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in pb-12">
      <div className="border-b border-gray-800 pb-8">
        <h2 className="text-3xl font-serif text-white mb-4">Technology Architecture</h2>
        <p className="text-gray-400 max-w-3xl text-lg">
          A modern, hybrid architecture designed for speed, security, and scalability. 
          We utilize <strong>Vercel</strong> for the public-facing frontend to ensure instant global delivery, while keeping <strong>Namecheap</strong> for the backend to maintain cost efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Infrastructure */}
        <div className="bg-legacy-gray p-8 rounded-xl border border-gray-800 hover:border-legacy-gold/50 transition-colors">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-green-900/30 rounded-lg text-green-400 mr-4">
              {TECH_STACK_ICONS.Security}
            </div>
            <h3 className="text-2xl font-bold text-white">Hybrid Cloud Infrastructure</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-legacy-gold mr-2">✓</span>
              <div>
                <strong className="text-white">Vercel (Frontend Cloud):</strong>
                <p className="text-sm text-gray-400">
                   Acts as our <strong>Global CDN</strong>. It replicates your site to edge locations worldwide and handles automated deployments.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-legacy-gold mr-2">✓</span>
              <div>
                <strong className="text-white">Zero-Config CI/CD:</strong>
                <p className="text-sm text-gray-400">Automated deployment pipeline. Code saved to GitHub is live in seconds.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-legacy-gold mr-2">✓</span>
              <div>
                <strong className="text-white">Namecheap (Data Layer):</strong>
                <p className="text-sm text-gray-400">Hosts the WordPress Database and PHP server. Essential because Vercel does not host WordPress natively.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Frontend */}
        <div className="bg-legacy-gray p-8 rounded-xl border border-gray-800 hover:border-legacy-gold/50 transition-colors">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400 mr-4">
              {TECH_STACK_ICONS.React}
            </div>
            <h3 className="text-2xl font-bold text-white">Frontend Experience</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-legacy-gold mr-2">✓</span>
              <div>
                <strong className="text-white">React & TypeScript:</strong>
                <p className="text-sm text-gray-400">Building for stability and interactivity.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-legacy-gold mr-2">✓</span>
              <div>
                <strong className="text-white">Tailwind CSS:</strong>
                <p className="text-sm text-gray-400">Custom design system for The Legacy Building brand.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* CMS */}
        <div className="bg-legacy-gray p-8 rounded-xl border border-gray-800 hover:border-legacy-gold/50 transition-colors">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-purple-900/30 rounded-lg text-purple-400 mr-4">
              {TECH_STACK_ICONS.CMS}
            </div>
            <h3 className="text-2xl font-bold text-white">Content Management</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-legacy-gold mr-2">✓</span>
              <div>
                <strong className="text-white">Headless WordPress:</strong>
                <p className="text-sm text-gray-400">Familiar admin panel, decoupled from the frontend for speed.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-legacy-gold mr-2">✓</span>
              <div>
                <strong className="text-white">Secure API:</strong>
                <p className="text-sm text-gray-400">REST/GraphQL endpoints ensure data security.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Communication & Analytics */}
         <div className="bg-legacy-gray p-8 rounded-xl border border-gray-800 hover:border-legacy-gold/50 transition-colors">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-red-900/30 rounded-lg text-red-400 mr-4">
              {TECH_STACK_ICONS.Email}
            </div>
            <h3 className="text-2xl font-bold text-white">Communication & Growth</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-legacy-gold mr-2">✓</span>
              <div>
                <strong className="text-white">Resend (Transactional Email):</strong>
                <p className="text-sm text-gray-400">
                  Enterprise-grade email API to ensure contact forms and notifications actually reach your inbox without spam issues.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-legacy-gold mr-2">✓</span>
              <div>
                <strong className="text-white">React Hook Form + Zod:</strong>
                <p className="text-sm text-gray-400">
                  Robust form validation to capture clean lead data.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-legacy-gold mr-2">✓</span>
              <div>
                <strong className="text-white">Google Analytics 4:</strong>
                <p className="text-sm text-gray-400">Full user behavior tracking.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
