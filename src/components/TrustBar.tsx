import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const logos = [
  { name: 'Shopify', abbr: 'SH' },
  { name: 'HubSpot', abbr: 'HS' },
  { name: 'Webflow', abbr: 'WF' },
  { name: 'Salesforce', abbr: 'SF' },
  { name: 'Make.com', abbr: 'MK' },
  { name: 'Slack', abbr: 'SL' },
  { name: 'Stripe', abbr: 'ST' },
  { name: 'Notion', abbr: 'NT' },
];

export default function TrustBar() {
  const [count, setCount] = useState(0);
  const target = 2847;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 border-y border-white/5 bg-[#0c0e12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-400 text-sm font-bold font-outfit">Live System Activity</span>
          </div>
          <div className="text-4xl font-bold text-white font-outfit mb-1">
            {count.toLocaleString()}+
          </div>
          <p className="text-gray-500 text-sm font-outfit">manual tasks automated across all clients</p>
        </motion.div>

        {/* Logo Bar */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 font-outfit">Integrated with the tools you already use</p>
          <div className="flex flex-wrap justify-center gap-4">
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 bg-dark-panel border border-white/5 rounded-xl px-5 py-2.5 hover:border-white/10 transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-primary-500/10 text-primary-400 text-[10px] font-black flex items-center justify-center font-outfit">
                  {logo.abbr}
                </div>
                <span className="text-gray-400 text-sm font-medium font-outfit">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
