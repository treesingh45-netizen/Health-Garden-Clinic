import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-manrope">
      <Navbar />
      <main className="flex-1 w-full relative">
        {children}
      </main>
      <Footer />
      
      {/* Floating Book Button (Mobile mostly) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-40 md:hidden"
      >
        <Link 
          to="/book" 
          className="bg-forest text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:bg-forest-dark transition-all focus:outline-none focus:ring-4 focus:ring-forest/30"
          aria-label="Book Appointment"
        >
          <Calendar className="w-6 h-6" />
        </Link>
      </motion.div>
    </div>
  );
}
