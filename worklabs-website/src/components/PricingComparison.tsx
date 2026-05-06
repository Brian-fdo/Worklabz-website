import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const rows = [
  { label: 'Monthly Cost (5-person team)', inHouse: '£15,000–£25,000', worklabz: '£2,500–£5,000', worklabzWins: true },
  { label: 'Setup Time', inHouse: '3–6 months recruiting', worklabz: '2–4 weeks', worklabzWins: true },
  { label: '24/7 Operations', inHouse: false, worklabz: true, worklabzWins: true },
  { label: 'AI-Powered Workflows', inHouse: false, worklabz: true, worklabzWins: true },
  { label: 'Management Overhead', inHouse: 'High (HR, payroll, appraisals)', worklabz: 'Zero — we handle it', worklabzWins: true },
  { label: 'Scalability', inHouse: 'Slow, expensive', worklabz: 'Instant & flexible', worklabzWins: true },
  { label: 'Sick Days / Holiday Cover', inHouse: 'Your problem', worklabz: 'Our problem', worklabzWins: true },
  { label: 'Cross-Platform Integration', inHouse: 'Requires developers', worklabz: 'Built-in from day 1', worklabzWins: true },
];

export default function PricingComparison() {
  return (
    <section className="py-24 bg-dark-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-3 font-outfit">The Numbers Don't Lie</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">In-House vs. Worklabz</h2>
          <p className="text-gray-400 max-w-xl mx-auto font-outfit">Most businesses overspend by 5x on operations. Here's why Worklabz clients are winning.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/5"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#12151c] border-b border-white/5">
            <div className="p-5 text-sm font-bold uppercase tracking-widest text-gray-600 font-outfit">Comparison</div>
            <div className="p-5 text-center text-sm font-bold uppercase tracking-widest text-gray-500 font-outfit border-l border-white/5">
              🏢 In-House Team
            </div>
            <div className="p-5 text-center border-l border-primary-500/20 bg-primary-500/5">
              <div className="text-sm font-bold uppercase tracking-widest text-primary-400 font-outfit">✦ Worklabz</div>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 border-b border-white/5 ${i % 2 === 0 ? 'bg-[#0e1116]' : 'bg-[#0c0e12]'}`}>
              <div className="p-5 text-sm text-gray-400 font-outfit flex items-center">{row.label}</div>

              <div className="p-5 border-l border-white/5 flex items-center justify-center">
                {typeof row.inHouse === 'boolean' ? (
                  <X className="w-5 h-5 text-red-400" />
                ) : (
                  <span className="text-sm text-gray-500 text-center font-outfit">{row.inHouse}</span>
                )}
              </div>

              <div className="p-5 border-l border-primary-500/20 bg-primary-500/5 flex items-center justify-center">
                {typeof row.worklabz === 'boolean' ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : (
                  <span className="text-sm text-emerald-400 font-bold text-center font-outfit">{row.worklabz}</span>
                )}
              </div>
            </div>
          ))}

          {/* Footer CTA */}
          <div className="bg-primary-500/5 border-t border-primary-500/20 p-8 text-center">
            <p className="text-white font-bold text-lg mb-2 font-outfit">Ready to cut your operational costs by up to 60%?</p>
            <p className="text-gray-400 text-sm mb-6 font-outfit">Start with a free audit. No commitment.</p>
            <Link
              to="/audit"
              className="inline-flex items-center gap-2 bg-white text-dark-surface font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-xl font-outfit"
            >
              Get My Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
