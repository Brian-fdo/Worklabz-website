import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What does Worklabz actually do?",
    a: "We build two things: AI automation systems that remove repetitive manual work from your business, and managed offshore teams in Sri Lanka who operate those systems. Think of us as your operations department — designed in the UK, operated globally, at a fraction of local cost."
  },
  {
    q: "How quickly can I see results?",
    a: "Most clients see their first workflows live within 2–4 weeks. Common quick wins: automated lead follow-up within week 1, CRM syncing within week 2, full reporting dashboards by week 4. Larger transformations (like full BPO handover) take 6–8 weeks."
  },
  {
    q: "Do you work with small businesses or only large companies?",
    a: "We work with businesses from solo founders to teams of 100+. Our systems are modular — you can start with one automation and scale as you grow. There's no minimum team size requirement."
  },
  {
    q: "Where is the offshore team based, and what's the quality like?",
    a: "Our entire offshore team is in Sri Lanka. They're university-educated professionals, trained specifically for your systems. All work is quality-assured by our UK-based engineers. You get constant communication via Slack and weekly performance reports."
  },
  {
    q: "What platforms and tools do you integrate with?",
    a: "We work with everything: HubSpot, Salesforce, Shopify, Webflow, Make.com, Zapier, n8n, Slack, Notion, Stripe, Airtable, and custom APIs. If your tool has an API, we can automate it."
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the scope of automation and team size. Most clients spend between £1,500–£4,000/month for a fully managed automation + offshore team setup — significantly less than one local hire. We offer a free audit first so you can see your projected ROI before committing."
  },
  {
    q: "What if I want to cancel?",
    a: "No long-term lock-in. We have a 30-day notice period after the initial setup phase. All the systems and documentation we build belong to you — you can take them with you."
  },
  {
    q: "Can I start with just the automation, without the offshore team?",
    a: "Absolutely. Many clients start with pure automation and add the offshore team later as they scale. We'll recommend the right combination based on your business needs during the free audit."
  }
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0c0e12]" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-3 font-outfit">Got Questions?</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Everything you need to know</h2>
          <p className="text-gray-400">If you don't find your answer here, book a free call and ask us directly.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-dark-panel border border-white/5 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left gap-4 hover:bg-white/2 transition-colors"
              >
                <span className="text-white font-semibold font-outfit pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-gray-400"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 font-outfit">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
