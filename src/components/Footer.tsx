import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-20 relative bg-luxury-abstract rounded-t-[3rem] mt-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-none bg-white flex items-center justify-center text-[#962241] font-bold font-mono">
                IN
              </div>
              <span className="font-mono font-bold tracking-tight text-xl text-white">
                FUNDACION<span className="text-[#962241] bg-white px-1 ml-1 rounded-none">INOB</span>
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Innovación Neurocientifica Operación Bolivia. Advancing neuroscience that benefits society and reflects the aspirations of all people.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono font-semibold text-white uppercase tracking-wider mb-2">
              Contact
            </h4>
            <div className="flex items-center gap-3 text-white/80 text-sm hover:text-white transition-colors cursor-pointer">
              <MapPin size={16} />
              <span>La Paz, Bolivia</span>
            </div>
            <div className="flex items-center gap-3 text-white/80 text-sm hover:text-white transition-colors cursor-pointer">
              <Mail size={16} />
              <span>info@fundacioninob.org</span>
            </div>
            <div className="flex items-center gap-3 text-white/80 text-sm hover:text-white transition-colors cursor-pointer">
              <Phone size={16} />
              <span>+591 2 123 4567</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono font-semibold text-white uppercase tracking-wider mb-2">
              Links
            </h4>
            {[
              { name: 'Home', path: '/' },
              { name: 'Mission', path: '/mission' },
              { name: 'Our Work', path: '/our-work' },
              { name: 'News', path: '/news' },
              { name: 'About Us', path: '/about' }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono font-semibold text-white uppercase tracking-wider mb-2">
              Newsletter
            </h4>
            <p className="text-white/80 text-sm mb-2">
              Stay informed! Sign up for monthly updates on news, our work, and events.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm rounded-none px-4 py-2 w-full focus:outline-none focus:border-white transition-colors shadow-sm"
              />
              <button className="bg-[#2b6338] text-white p-2 rounded-none hover:bg-white hover:text-[#2b6338] transition-colors shadow-[2px_2px_0px_rgba(255,255,255,0.2)]">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs font-mono">
            © 2026 Fundación INOB. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/60 text-xs font-mono hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


