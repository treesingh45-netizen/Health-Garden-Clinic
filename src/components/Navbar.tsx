import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Phone, MapPin, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Treatments', 
    path: '/treatments',
    dropdown: [
      { name: 'Acupuncture', path: '/treatments#acupuncture' },
      { name: 'Massage Therapy', path: '/treatments#massage' },
      { name: 'Cupping Therapy', path: '/treatments#cupping' },
      { name: 'Reflexology', path: '/treatments#reflexology' },
    ]
  },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-sage" />
            <div>
              <h1 className="font-cormorant text-2xl font-semibold leading-none text-forest">Health Garden</h1>
              <p className="font-manrope text-[10px] tracking-widest uppercase text-sage-dark">Wellness Clinic</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors flex items-center gap-1',
                    location.pathname === link.path ? 'text-sage' : 'text-charcoal hover:text-sage'
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Mega Menu / Dropdown */}
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-lg border border-beige p-4 w-48 flex flex-col gap-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="text-sm text-charcoal hover:text-sage py-1 px-2 rounded-md hover:bg-cream transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/book"
              className="bg-forest hover:bg-forest-dark text-white font-poppins text-sm px-6 py-2.5 rounded-full transition-colors"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-cream md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-beige">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Leaf className="w-6 h-6 text-sage" />
                <span className="font-cormorant text-xl font-semibold text-forest">Health Garden</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X className="w-6 h-6 text-charcoal" />
              </button>
            </div>
            
            <nav className="flex flex-col p-4 gap-4 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="text-lg font-cormorant font-medium text-charcoal block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 flex flex-col gap-2 border-l-2 border-sage/20 mt-2">
                      {link.dropdown.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="text-sm text-charcoal/80 py-1 block"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="p-6 border-t border-beige flex flex-col gap-4">
              <Link
                to="/book"
                className="w-full bg-forest text-white text-center py-3 rounded-full font-poppins font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
              <div className="flex items-center gap-2 text-sm text-charcoal/70 justify-center">
                <Phone className="w-4 h-4" />
                <span>+44 1234 567890</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
