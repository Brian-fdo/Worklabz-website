import { Globe, Users, Target, Shield, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const values = [
    { title: 'Systems First', desc: 'We treat every business operation as an engineering problem that can be solved with logic and architecture.', icon: Target },
    { title: 'Global Scale', desc: 'We bridge the technical expertise of the UK with the massive, skilled talent pool in Sri Lanka.', icon: Globe },
    { title: 'Radical Transparency', desc: 'No hidden costs, no vague promises. We provide clear ROI metrics for every automation deployed.', icon: Shield },
    { title: 'Partner Success', desc: 'We succeed when your operations become so efficient that your headcount can stay lean while revenue triples.', icon: HeartHandshake }
  ];

  return (
    <div className="bg-dark-surface min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
              Built for the <br/> 
              <span className="text-gradient">Future of Work.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Worklabs was founded on a simple realization: Most businesses are running on antiquated, manual systems that drain founder focus and crush profit margins.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We didn't just want to build another agency. We wanted to build an infrastructure company—a bridge that connects intelligent AI systems with elite global talent to give modern companies an "unfair" operational advantage.
            </p>
            <div className="flex gap-4">
              <Link to="/book" className="px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 transition-all shadow-lg shadow-primary-500/20">
                Join the Mission
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-primary-500/10 blur-[120px] rounded-full -z-10" />
            <div className="glass-panel rounded-3xl border border-white/5 p-8 max-w-md shadow-2xl overflow-hidden">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 border border-primary-500/30">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight italic">Sri Lanka & UK Hybrid</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Operational Advantage</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "By locating our engineering in the UK and our operations hub in Colombo, Sri Lanka, we provide our clients with enterprise-grade quality at a fraction of the cost."
              </p>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-dark-panel border border-dark-border text-xs flex justify-between items-center text-gray-400">
                  <span>Architecture</span>
                  <span className="bg-primary-500 text-white px-2 py-0.5 rounded uppercase font-bold text-[10px]">London, UK</span>
                </div>
                <div className="p-3 rounded-xl bg-dark-panel border border-dark-border text-xs flex justify-between items-center text-gray-400">
                  <span>Operations</span>
                  <span className="bg-emerald-500 text-white px-2 py-0.5 rounded uppercase font-bold text-[10px]">Colombo, SL</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Philosophy</h2>
          <p className="text-gray-400">The engineering principles that drive every project.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {values.map((v, i) => (
            <motion.div 
              key={i} 
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:bg-dark-panel/40 transition-all text-center group"
            >
              <div className="w-14 h-14 bg-dark-surface border border-dark-border rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:border-primary-500 transition-colors">
                <v.icon className="w-7 h-7 text-primary-500" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{v.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Us / Advantage */}
        <motion.div 
          {...fadeInUp}
          className="glass-panel rounded-3xl p-10 md:p-16 border border-white/5 overflow-hidden relative"
        >
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary-600/5 blur-[100px] rounded-full -ml-32 -mb-32" />
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white leading-tight">The "Unfair" Advantage.</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Most agencies just hire people. We build machines and then hire the best people to manage them. This hybrid approach is why our clients save an average of 65% on operational overhead in their first year.
              </p>
              <div className="space-y-4">
                {[
                  'Enterprise-grade AI security protocols',
                  'ISO certified data handling offshore',
                  'UK-based strategy & legal oversight',
                  'Direct communication with lead architects'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <Link 
                to="/audit"
                className="group w-full p-10 rounded-2xl bg-dark-surface border border-dark-border hover:border-primary-500 transition-all flex flex-col items-center justify-center text-center gap-6"
              >
                <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">Ready to Scale?</div>
                <div className="text-2xl font-bold text-white">Experience our methodology in a free automation audit.</div>
                <div className="inline-flex items-center gap-2 text-primary-500 font-bold group-hover:gap-4 transition-all">
                  Start Audit <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
