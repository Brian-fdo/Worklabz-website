import { Building2, Rocket, ShoppingCart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Solutions() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const industries = [
    {
      title: 'Digital Agencies',
      icon: Rocket,
      problem: 'Scaling requires hiring expensive account managers and manual data entry for client reporting.',
      solution: 'Automated client onboarding, real-time reporting dashboards, and offshore fulfillment teams.',
      benefits: ['80% Reduction in Admin', 'Predictable Margins', 'Automated Reporting']
    },
    {
      title: 'E-Commerce Brands',
      icon: ShoppingCart,
      problem: 'High volume support tickets and manual inventory/order routing between platforms.',
      solution: 'AI customer support agents and automated order workflows syncing fulfillment and accounting.',
      benefits: ['24/7 Support', 'Zero Manual Order Entry', 'Automated Marketing Ops']
    },
    {
      title: 'Service Businesses',
      icon: Users,
      problem: 'Manual lead booking, endless email chains, and dropped leads due to slow follow-up.',
      solution: 'Self-serve booking flows, automated CRM nurturing, and intelligent lead qualification.',
      benefits: ['3x Higher Lead-to-Book', 'Hands-free Scheduling', 'Instant Lead follow-up']
    },
    {
      title: 'Startups & Founders',
      icon: Building2,
      problem: 'High burn rates and foundering in "admin hell" instead of focusing on growth.',
      solution: 'Deploying lean offshore operations managed by AI-driven project management systems.',
      benefits: ['Lower Burn Rate', 'Focus on Product', 'Scaleable Infrastructure']
    }
  ];

  return (
    <div className="bg-dark-surface min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Engineered for <br className="hidden md:block"/> 
            <span className="text-gradient">High-Growth Industries.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our infrastructure solves the exact operational bottlenecks that prevent your specific industry from scaling.
          </p>
        </motion.div>

        { industries.map((industry, i) => (
          <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 mb-24 lg:mb-32 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div 
              {...fadeInUp}
              className="flex-1 space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
                <industry.icon className="w-4 h-4" />
                {industry.title}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Solving {industry.title} bottlenecks.
              </h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                  <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                    The Problem
                  </h4>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {industry.problem}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                  <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                    The Worklabs System
                  </h4>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {industry.solution}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {industry.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm font-medium text-white px-4 py-3 rounded-xl bg-dark-panel border border-dark-border">
                    <ArrowRight className="w-3 h-3 text-primary-500" />
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 w-full flex justify-center items-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-primary-600/10 blur-[100px] rounded-full animate-pulse" />
                <div className="relative glass-panel rounded-3xl border border-white/5 p-10 flex items-center justify-center transform hover:rotate-2 transition-transform duration-500">
                  <industry.icon className="w-32 h-32 text-primary-500/40" />
                  <div className="absolute top-4 right-4 flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    <div className="w-2 h-2 rounded-full bg-primary-500/30"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}

        {/* Closing CTA */}
        <motion.div 
          {...fadeInUp}
          className="glass-panel rounded-3xl p-12 text-center border border-white/5 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary-900/10 via-dark-panel to-dark-panel"
        >
          <h2 className="text-3xl font-bold mb-6">Don't see your industry?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Automation applies to any business relying on high-volume communication and repetitive process. We've built custom systems for dozens of categories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/book"
              className="px-8 py-4 bg-white text-dark-surface font-bold rounded-xl hover:bg-gray-200 transition-all font-outfit"
            >
              Talk to an Architect
            </Link>
            <Link 
              to="/audit"
              className="px-8 py-4 bg-dark-surface border border-dark-border text-white font-bold rounded-xl hover:bg-dark-panel transition-all font-outfit"
            >
              Take the Free Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
