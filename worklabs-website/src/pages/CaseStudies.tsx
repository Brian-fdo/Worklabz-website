import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Users, Zap } from 'lucide-react';

const cases = [
  {
    tag: 'Digital Agency',
    company: 'Apex Digital',
    location: '🇬🇧 London, UK',
    headline: 'How a 12-person agency cut their admin time by 68% and doubled their client roster',
    problem: 'Apex Digital were spending 3+ hours per day on manual lead follow-ups, CRM updates, and client reporting. The team was burning out and growth had plateaued.',
    solution: 'Worklabz built a full lead-to-client automation system: new leads were automatically scored, routed via HubSpot, and followed up via a 5-step email sequence. Client reports were generated and sent automatically every Monday.',
    results: [
      { icon: Clock, label: '68%', sub: 'reduction in admin time' },
      { icon: Users, label: '2x', sub: 'client roster growth' },
      { icon: TrendingUp, label: '£45k', sub: 'saved per year' },
    ],
    quote: "Within 3 weeks of onboarding, our team stopped worrying about follow-ups entirely. The system just handles it. We've since doubled our clients without a single new hire.",
    author: 'James Thornton, Founder',
    color: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-500/20',
  },
  {
    tag: 'E-Commerce Brand',
    company: 'KineticCommerce',
    location: '🇬🇧 Manchester, UK',
    headline: 'E-commerce brand saves £180k/year by replacing in-house ops team with Worklabz',
    problem: 'KineticCommerce had a 6-person in-house operations team handling Shopify orders, returns, supplier communication, and inventory. Costs were £22k/month. Mistakes were frequent.',
    solution: 'Worklabz replaced the entire operations workflow with automation and a 4-person offshore team in Sri Lanka. Returns were processed automatically, supplier emails were handled via AI drafts reviewed by the team, and inventory alerts were fully automated.',
    results: [
      { icon: TrendingUp, label: '£180k', sub: 'saved annually' },
      { icon: Zap, label: '3x', sub: 'faster returns processing' },
      { icon: Users, label: '4 hires', sub: 'vs 6 local staff' },
    ],
    quote: "The quality of the Worklabz team genuinely surprised me. I was sceptical, but the output was better and more consistent than our in-house team — at a third of the cost.",
    author: 'Priya Nair, CEO',
    color: 'from-purple-600/20 to-pink-600/10',
    border: 'border-purple-500/20',
  },
  {
    tag: 'SaaS Company',
    company: 'ScaleForge SaaS',
    location: '🇬🇧 Edinburgh, UK',
    headline: 'SaaS startup builds fully automated CS pipeline — 34% increase in trial-to-paid conversions',
    problem: 'ScaleForge had a leaky trial pipeline. Free trial users were churning at 78% because the sales team couldn\'t follow up fast enough. The onboarding process was entirely manual.',
    solution: 'Worklabz built an automated onboarding sequence triggered at signup, a usage-based scoring model to prioritise high-intent users, and an automated upgrade nudge system integrated with Stripe. The CS team now only handles pre-qualified upgrade calls.',
    results: [
      { icon: TrendingUp, label: '34%', sub: 'increase in conversions' },
      { icon: Zap, label: '4x', sub: 'faster reporting pipeline' },
      { icon: Clock, label: '22 hrs', sub: 'saved per week' },
    ],
    quote: "Worklabz didn't just build automations — they redesigned our entire customer journey. The trial-to-paid rate was 12% before. It's now 34%. That's the difference between struggling and thriving.",
    author: 'Callum Reid, Operations Director',
    color: 'from-emerald-600/20 to-teal-600/10',
    border: 'border-emerald-500/20',
  },
];

export default function CaseStudies() {
  return (
    <div className="bg-dark-surface min-h-screen pt-24 pb-16 font-outfit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-4">Proof of Work</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Real businesses. <span className="text-gradient">Real results.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These aren't projections. These are verified outcomes from Worklabz clients who replaced manual chaos with intelligent systems.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-20">
          {cases.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`rounded-3xl border ${c.border} bg-gradient-to-br ${c.color} p-8 sm:p-12`}
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full">
                  {c.tag}
                </span>
                <span className="text-xs text-gray-500">{c.location}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-snug">{c.headline}</h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-red-400 mb-3">The Problem</h3>
                  <p className="text-gray-400 leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-3">The Solution</h3>
                  <p className="text-gray-400 leading-relaxed">{c.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {c.results.map((r, j) => (
                  <div key={j} className="bg-dark-surface/50 border border-white/5 rounded-2xl p-5 text-center">
                    <r.icon className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{r.label}</div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{r.sub}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-primary-500/40 pl-6 mb-6">
                <p className="text-white italic text-lg leading-relaxed mb-3">"{c.quote}"</p>
                <cite className="text-gray-500 text-sm font-bold not-italic">{c.author}, {c.company}</cite>
              </blockquote>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-[#12151c] border border-white/5 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Want results like these?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Start with a free automation audit. We'll map out exactly where your business is losing time and money — and show you what a Worklabz system would look like.
          </p>
          <Link
            to="/audit"
            className="inline-flex items-center gap-2 bg-white text-dark-surface font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-xl text-lg"
          >
            Get My Free Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
