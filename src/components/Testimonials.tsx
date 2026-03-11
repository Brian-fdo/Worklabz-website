import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James Thornton',
    role: 'Founder',
    company: 'Apex Digital Agency',
    country: '🇬🇧 London, UK',
    result: '68% reduction in admin time',
    quote: "Before Worklabz, we were spending 3 hours a day just on lead follow-ups and CRM updates. Within 3 weeks of onboarding, every new lead was automatically qualified, tagged in HubSpot, and assigned to a team member. We've since doubled our client roster without adding a single hire.",
    avatar: 'JT',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Priya Nair',
    role: 'CEO',
    company: 'KineticCommerce',
    country: '🇬🇧 Manchester, UK',
    result: '£180k saved in operational costs annually',
    quote: "I was sceptical about offshore teams — until Worklabz showed me their onboarding process. Within 6 weeks we had a team of 4 in Sri Lanka handling our Shopify operations, returns processing, and supplier communications. The quality is honestly better than our in-house team was.",
    avatar: 'PN',
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Callum Reid',
    role: 'Operations Director',
    company: 'ScaleForge SaaS',
    country: '🇬🇧 Edinburgh, UK',
    result: '4x faster client reporting pipeline',
    quote: "We used to produce client reports manually every week — a full day of work. Worklabz built us a system that pulls data from 6 different platforms, formats the reports, and emails them out automatically every Monday morning at 9am. It's genuinely magic.",
    avatar: 'CR',
    color: 'from-emerald-600 to-teal-600'
  },
  {
    name: 'Sophie Laurent',
    role: 'Marketing Director',
    company: 'Maison Luxe Brand',
    country: '🇫🇷 Paris, FR',
    result: '3x increase in qualified leads monthly',
    quote: "Our biggest problem was leads slipping through the cracks. Worklabz built a full lead-nurturing sequence — from first touch to booked call — that runs completely on its own. Our sales team now only speaks to qualified, pre-warmed prospects. Conversion rate went from 12% to 34%.",
    avatar: 'SL',
    color: 'from-amber-600 to-orange-600'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section className="py-24 relative overflow-hidden bg-dark-surface">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-3 font-outfit">Client Stories</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Real businesses. Real results.</h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-[#12151c] border border-white/5 rounded-3xl p-8 sm:p-12 relative"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 font-outfit italic">
              "{t.quote}"
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold font-outfit`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold font-outfit">{t.name}</div>
                  <div className="text-gray-500 text-sm font-outfit">{t.role}, {t.company} · {t.country}</div>
                </div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-2 text-emerald-400 text-sm font-bold font-outfit">
                📈 {t.result}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setIndex(i => (i - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-primary-500' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setIndex(i => (i + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
