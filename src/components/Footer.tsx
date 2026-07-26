import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-forest-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-sage-light" />
              <div>
                <h2 className="font-cormorant text-2xl font-semibold leading-none text-cream">Health Garden</h2>
                <p className="font-manrope text-[10px] tracking-widest uppercase text-sage">Wellness Clinic</p>
              </div>
            </Link>
            <p className="text-cream/80 text-sm leading-relaxed mt-2">
              Restore balance through acupuncture, massage therapy, cupping, reflexology, and holistic treatments designed to help you feel your best.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/healthgarden_clinic/?hl=en" target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/80 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cormorant text-xl font-semibold mb-6 text-cream">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Treatments', 'Pricing', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase().replace(' ', '')}`} 
                    className="text-sm text-cream/80 hover:text-sage-light transition-colors flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-sage-light before:rounded-full before:opacity-0 hover:before:opacity-100"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-cormorant text-xl font-semibold mb-6 text-cream">Visit Us</h3>
            <ul className="flex flex-col gap-4 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                <span>
                  27 London End<br />
                  Beaconsfield<br />
                  Buckinghamshire<br />
                  HP9 2HN
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sage shrink-0" />
                <span>+44 (0) 1494 000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sage shrink-0" />
                <span>hello@healthgardenclinic.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Newsletter */}
          <div>
            <h3 className="font-cormorant text-xl font-semibold mb-6 text-cream">Opening Hours</h3>
            <ul className="flex flex-col gap-2 text-sm text-cream/80 mb-8">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Mon - Fri</span>
                <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 py-2">
                <span>Saturday</span>
                <span>9:00 - 14:00</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>

            <h3 className="font-cormorant text-lg font-semibold mb-3 text-cream">Newsletter</h3>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 text-white placeholder:text-cream/50 text-sm rounded-l-md px-3 py-2 outline-none focus:bg-white/20 w-full"
              />
              <button 
                type="button"
                className="bg-sage hover:bg-sage-light text-white px-3 py-2 rounded-r-md text-sm font-medium transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50">
          <p>&copy; {new Date().getFullYear()} Health Garden Clinic. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
