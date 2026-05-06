import { Link } from 'react-router-dom';
import { ArrowRight, Users, Activity, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import ArchitectureMap from '../components/ArchitectureMap';
import TrustBar from '../components/TrustBar';
import Testimonials from '../components/Testimonials';
import PricingComparison from '../components/PricingComparison';
import FaqSection from '../components/FaqSection';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-dark-surface min-h-screen pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/40 via-dark-surface to-dark-surface -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-dark-panel/80 border border-primary-500/30 rounded-full px-4 py-1.5 mb-8 text-primary-400 font-medium text-sm backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
            <span>Intelligent Systems. Global Talent.</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            Automate Your Operations <br className="hidden sm:block" />
            <span className="text-gradient">With AI and Global Teams.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Worklabs builds automated operational systems and provides elite offshore talent from Sri Lanka, helping you eliminate manual work, reduce costs, and scale effortlessly.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link 
              to="/book" 
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-500 transition-all shadow-lg shadow-primary-500/20 group"
            >
              Book Free Automation Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/audit" 
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-dark-panel border border-dark-border rounded-xl hover:bg-gray-800 transition-all"
            >
              Get Free Automation Audit
            </Link>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 text-sm text-gray-500"
          >
            The operations backbone for fast-growing startups, agencies, and e-commerce brands.
          </motion.p>
        </div>
      </section>

      {/* Trust Bar - Social Proof immediately after hero */}
      <TrustBar />

      {/* Architecture Visualizer */}
      <section className="py-24 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Designed for <span className="text-gradient">Total Autonomy.</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">See how logic flows through our enterprise architecture maps.</p>
          </motion.div>
          <ArchitectureMap />
        </div>
      </section>

      {/* Problem Section (Agitation) */}
      <section className="py-24 border-t border-dark-border/50 bg-[#0c0e12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Is your growth bottlenecked by manual processes?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              You can't reach the next level of revenue if your team is drowning in repetitive admin work.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: 'Inefficient Operations',
                desc: 'High error rates and data stored in silos dragging down your turnaround times.'
              },
              {
                icon: Users,
                title: 'Bloated Operational Costs',
                desc: 'Scaling your local team is destroying your profit margins without scaling output.'
              },
              {
                icon: Zap,
                title: 'Broken Sales Pipelines',
                desc: 'Leads leak out because follow-ups rely on human memory, not automated systems.'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:border-gray-600 transition-colors"
              >
                <div className="w-12 h-12 bg-dark-surface border border-dark-border rounded-lg mb-6 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section (Value Prop) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Infrastructure for Scalable Growth</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We replace chaos with structured systems. Worklabs engineers the automation and supplies the highly-trained global workforce to operate it.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: '1. AI Automation',
                    desc: 'Custom workflows that handle data entry, customer routing, and cross-platform syncing.'
                  },
                  {
                    title: '2. Offshore Operational Teams',
                    desc: 'Dedicated, managed talent to handle the human elements of your automated systems—at a fraction of local costs.'
                  },
                  {
                    title: '3. Business System Infrastructure',
                    desc: 'Integrated CRMs and sales pipelines built to convert leads predictably.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-blue-500/20 blur-3xl -z-10 rounded-full" />
              <div className="glass-panel rounded-2xl border border-dark-border/80 shadow-2xl p-6 relative overflow-hidden">
                <div className="flex border-b border-dark-border pb-4 mb-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                {/* Mock code / workflow dashboard aesthetic */}
                <div className="space-y-4 font-mono text-sm text-gray-400 opacity-80">
                  <div className="flex justify-between items-center bg-dark-surface p-3 rounded">
                    <span className="text-primary-400">trigger</span> <span className="text-xs">Webhook (Lead Received)</span>
                  </div>
                  <div className="pl-6 border-l border-dark-border space-y-4">
                    <div className="flex justify-between items-center bg-dark-surface p-3 rounded">
                      <span className="text-blue-400">action</span> <span className="text-xs">Filter Qualified</span>
                    </div>
                    <div className="flex justify-between items-center bg-dark-surface p-3 rounded border border-primary-500/30">
                      <span className="text-emerald-400">action</span> <span className="text-xs">AI Qualification Engine</span>
                    </div>
                    <div className="flex justify-between items-center bg-dark-surface p-3 rounded">
                      <span className="text-yellow-400">action</span> <span className="text-xs">Sync CRM & Slack</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-24 bg-[#0a0c0f] border-t border-dark-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Stop managing tasks.<br/>Start managing outcomes.</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { stat: '60%+', label: 'Lower Operational Costs' },
              { stat: '24/7', label: 'Automated Processes' },
              { stat: 'Multi-X', label: 'Higher Conversions' },
              { stat: 'Infinite', label: 'Scalable Operations' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-6 glass-panel rounded-2xl"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{item.stat}</div>
                <div className="text-sm text-gray-400 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-6">Why Worklabz?</motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-gray-400 text-lg leading-relaxed mb-10">
            We aren't just consultants giving advice. We are architects and operators. By bridging the UK and Sri Lanka, we provide an unfair operational advantage—giving you enterprise-grade technical architectures designed in the UK, operated by a massive, highly-skilled talent pool in Sri Lanka.
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-dark-panel px-6 py-3 rounded-lg border border-dark-border flex items-center justify-center gap-2 text-sm text-gray-300">🇬🇧 Top-Tier Architecture</div>
            <div className="bg-dark-panel px-6 py-3 rounded-lg border border-dark-border flex items-center justify-center gap-2 text-sm text-gray-300">🇱🇰 Cost-Effective Global Talent</div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing Comparison */}
      <PricingComparison />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer CTA */}
      <section className="py-24 border-t border-dark-border bg-gradient-to-t from-primary-900/20 to-dark-surface text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-6">Ready to build a business that runs itself?</motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-gray-400 text-lg mb-10">
            Speak with our systems architects today to map out your transition to an automated, high-margin operation.
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <Link 
              to="/book" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-dark-surface bg-white rounded-xl hover:bg-gray-200 transition-all"
            >
              Book a Free Automation Consultation
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
