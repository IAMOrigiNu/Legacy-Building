import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Property Management', path: '/property-management' },
    { label: 'Real Estate Brokerage', path: '/real-estate-brokerage' },
    { label: 'Building Services', path: '/building-services' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-surface font-body">
      <nav className="bg-white/80 backdrop-blur-md top-0 sticky z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-blue-950 hover:opacity-80 transition-opacity">
            The Legacy Building
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-serif text-lg tracking-tight transition-colors ${
                  isActive(link.path)
                    ? 'text-blue-900 font-bold border-b-2 border-blue-900 pb-1'
                    : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-6 py-2 rounded-xl font-bold active:scale-95 duration-150 ease-in-out transition-all hover:bg-primary-container"
            >
              Contact Us
            </Link>
            <button
              className="md:hidden text-primary"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-8 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`font-serif text-lg tracking-tight transition-colors ${
                  isActive(link.path) ? 'text-blue-900 font-bold' : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-slate-100 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
          <div className="col-span-1">
            <div className="text-xl font-serif font-black text-blue-950 mb-6">The Legacy Building</div>
            <p className="text-slate-500 text-sm tracking-wide leading-relaxed">
              Preserving the past, cultivating the future. Your partner in Albany's revitalization.
            </p>
          </div>
          <div>
            <h5 className="text-blue-950 font-bold mb-6 text-sm uppercase tracking-widest">Our Services</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 hover:text-blue-700 transition-opacity duration-300 text-sm" to="/property-management">Property Management</Link></li>
              <li><Link className="text-slate-500 hover:text-blue-700 transition-opacity duration-300 text-sm" to="/real-estate-brokerage">Brokerage</Link></li>
              <li><Link className="text-slate-500 hover:text-blue-700 transition-opacity duration-300 text-sm" to="/building-services">Building Services</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-blue-950 font-bold mb-6 text-sm uppercase tracking-widest">Company</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 hover:text-blue-700 transition-opacity duration-300 text-sm" to="/about">About Us</Link></li>
              <li><Link className="text-slate-500 hover:text-blue-700 transition-opacity duration-300 text-sm" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-slate-500 hover:text-blue-700 transition-opacity duration-300 text-sm" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-blue-950 font-bold mb-6 text-sm uppercase tracking-widest">Connect</h5>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all" href="#" aria-label="Share">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all" href="#" aria-label="Email">
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">© 2024 The Legacy Building. All rights reserved.</p>
          <p className="text-slate-500 text-xs italic">An abundance mindset community partner.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
