import { useState, useEffect, useRef } from 'react';
import { X, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered.current && !dismissed) {
        triggered.current = true;
        setShow(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [dismissed]);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed z-50 inset-x-4 top-1/2 -translate-y-1/2 max-w-lg mx-auto bg-[#12151c] border border-white/10 rounded-3xl p-8 shadow-2xl font-outfit"
          >
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/10 border border-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-primary-400" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2">Before You Go</div>
              <h2 className="text-2xl font-bold text-white mb-3">Get Your Free Automation Playbook</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Download <span className="text-white font-semibold">"5 Automations Every Agency Needs in 2025"</span> — a practical guide to cutting your admin time in half.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  'Lead follow-up automation that never misses',
                  'Client onboarding on autopilot',
                  'Invoice & payment chasing workflows',
                  'Reporting without lifting a finger',
                  'The offshore leverage model explained',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-left text-sm text-gray-300">
                    <span className="text-primary-400 font-bold mt-0.5">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/audit"
                onClick={dismiss}
                className="block w-full bg-white text-dark-surface font-bold py-3 rounded-xl hover:bg-gray-100 transition-all shadow-xl text-sm mb-3"
              >
                Get Free Audit + Playbook
              </Link>
              <button
                onClick={dismiss}
                className="text-gray-500 text-xs hover:text-gray-400 transition-colors"
              >
                No thanks, I'll figure it out myself
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
