import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Mission', href: '/mission' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Events', href: '/news' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#962241]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* Replace this placeholder with the direct image URL or upload the logo to the public folder */}
          <img 
            src="https://placehold.co/100x40/ffffff/962241?text=INOB+Logo" 
            alt="INOB Foundation Logo" 
            className="h-10 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-mono uppercase tracking-wider transition-colors hover:text-[#2b6338] ${
                  location.pathname === link.href ? 'text-[#962241] font-bold' : 'text-[#962241]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a href="mailto:fundacioninob@gmail.com" className="flex items-center gap-2 bg-[#962241] text-white px-4 py-2 rounded-none text-sm font-medium hover:bg-[#2b6338] transition-colors shadow-[2px_2px_0px_rgba(43,99,56,0.3)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(43,99,56,0.5)]">
            Contact Us <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#962241] hover:text-[#2b6338] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-[#962241]/20 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-mono uppercase tracking-wider transition-colors hover:text-[#2b6338] ${
                location.pathname === link.href ? 'text-[#962241] font-bold' : 'text-[#962241]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a href="mailto:fundacioninob@gmail.com" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 bg-[#962241] text-white px-4 py-3 rounded-none text-sm font-medium hover:bg-[#2b6338] transition-colors mt-4 shadow-[2px_2px_0px_rgba(43,99,56,0.3)]">
            Contact Us <ArrowRight size={16} />
          </a>
        </motion.div>
      )}
    </nav>
  );
}


