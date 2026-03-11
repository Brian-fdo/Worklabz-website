import { Cpu, Globe, Zap, CheckCircle2, ShieldCheck, Database, Search, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArchitectureMap from '../components/ArchitectureMap';

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const services = [
    {
      title: 'AI Automation Architecture',
      icon: Cpu,
      description: 'Replace repetitive, error-prone manual tasks with intelligent, self-correcting workflows.',
      features: [
        'Custom AI Agents for Support',
        'Automated Data Processing',
        'Intents Extraction',
        'Cross-Platform API Sync'
      ]
    },
    {
      title: 'Offshore Operational Teams',
      icon: Globe,
      description: 'Elite talent integrated directly into your workflow at a fraction of local hiring costs.',
      features: [
        'Technical Ops Management',
        'Data Cleaning Teams',
        'Customer Success Support',
        'Direct SLA Monitoring'
      ]
    },
    {
      title: 'Sales Infrastructure',
      icon: Zap,
      description: 'Turn your sales process into a predictable revenue-generating machine.',
      features: [
        'Automated Lead Scoring',
        'AI Outbound Sequences',
        'CRM Infrastructure Design',
        'Booking Automation'
      ]
    }
  ];

  const methodology = [
    { title: 'Audit', icon: Search, desc: 'We map every manual touchpoint in your current business.' },
    { title: 'Engineer', icon: Database, desc: 'We build the high-scale automation layer for those tasks.' },
    { title: 'Deploy', icon: ShieldCheck, desc: 'We integrate offshore teams to manage the edge cases.' },
    { title: 'Optimize', icon: BarChart3, desc: 'We use real-time data to refine and scale the system.' }
  ];

  return (
    <div className="bg-dark-surface min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Intelligent Systems. <br className="hidden md:block"/> 
            <span className="text-gradient">Scalable Human Operations.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We don't just consult; we architect and deploy the technical infrastructure and global teams required to eliminate operational bottlenecks.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex flex-col border border-dark-border/50 hover:border-primary-500/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-dark-panel flex items-center justify-center mb-8 border border-dark-border group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed text-sm">
                {service.description}
              </p>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-xs text-gray-300 uppercase tracking-wider font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Methodology Visualizer */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-gradient">The Logic Flow.</h2>
          <p className="text-gray-400 max-w-xl mx-auto">See how we bridge manual inputs with automated enterprise output.</p>
        </motion.div>
        
        <div className="mb-32">
          <ArchitectureMap />
        </div>

        {/* Methodology Section */}
        <div className="bg-dark-panel/40 border border-dark-border/50 rounded-3xl p-12 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 blur-3xl rounded-full -mr-32 -mt-32" />
          <motion.div {...fadeInUp} className="text-center mb-16 relative z-10">
            <h2 className="text-3xl font-bold mb-4">Our Deployment Blueprint</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How we transform manual friction into automated precision.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {methodology.map((m, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-dark-surface border border-dark-border rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-primary-500 transition-colors shadow-xl">
                  <m.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{m.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Stop scaling your headcount. <br/> Start scaling your systems.</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/book"
              className="px-10 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/20"
            >
              Book Systems Consultation
            </Link>
            <Link 
              to="/audit"
              className="px-10 py-4 border border-dark-border text-white font-bold rounded-xl hover:bg-dark-panel transition-all"
            >
              Get Free Automation Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
