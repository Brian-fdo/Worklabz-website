import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-panel border-b-white/5 border-b shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white font-outfit">
              WORK<span className="text-primary-500">LABS</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide font-medium">Services</Link>
            <Link to="/solutions" className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide font-medium">Solutions</Link>
            <Link to="/dashboard" className="text-sm text-primary-400 hover:text-primary-300 transition-colors tracking-wide font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-500/5 border border-primary-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
              Live Demo
            </Link>
            <Link to="/case-studies" className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide font-medium">Case Studies</Link>
            <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide font-medium">About</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/audit" className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide font-medium">
              Free Audit
            </Link>
            <Link 
              to="/book" 
              className="bg-white text-dark-surface hover:bg-gray-200 px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-xl font-outfit"
            >
              Book Consultation
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-white/5 bg-dark-panel/95 backdrop-blur-xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              <Link onClick={() => setIsOpen(false)} to="/services" className="block px-3 py-3 rounded-xl text-base font-semibold text-gray-300 hover:text-white hover:bg-dark-surface transition-all">Services</Link>
              <Link onClick={() => setIsOpen(false)} to="/solutions" className="block px-3 py-3 rounded-xl text-base font-semibold text-gray-300 hover:text-white hover:bg-dark-surface transition-all">Solutions</Link>
              <Link onClick={() => setIsOpen(false)} to="/case-studies" className="block px-3 py-3 rounded-xl text-base font-semibold text-gray-300 hover:text-white hover:bg-dark-surface transition-all">Case Studies</Link>
              <Link onClick={() => setIsOpen(false)} to="/about" className="block px-3 py-3 rounded-xl text-base font-semibold text-gray-300 hover:text-white hover:bg-dark-surface transition-all">About</Link>
              <Link onClick={() => setIsOpen(false)} to="/audit" className="block px-3 py-3 rounded-xl text-base font-semibold text-gray-300 hover:text-white hover:bg-dark-surface transition-all">Free Audit</Link>
              <Link onClick={() => setIsOpen(false)} to="/book" className="block px-3 py-4 rounded-xl text-base font-bold text-center bg-white text-dark-surface shadow-lg">Book Consultation</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
