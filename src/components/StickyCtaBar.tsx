import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed && window.scrollY > 400) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-4 px-6 py-4 bg-primary-600/95 backdrop-blur-md border-t border-primary-500/30 shadow-2xl font-outfit"
        >
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex h-2 w-2 rounded-full bg-white animate-pulse" />
            <p className="text-sm font-semibold text-white">
              <span className="font-bold">Free Automation Audit</span>
              <span className="text-primary-200 mx-2">—</span>
              Find out exactly how much your business is losing to manual work.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/audit"
              className="flex items-center gap-2 bg-white text-primary-700 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => { setDismissed(true); setVisible(false); }}
              className="text-primary-200 hover:text-white transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
