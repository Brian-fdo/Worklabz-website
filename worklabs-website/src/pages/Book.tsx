import { useState } from 'react';
import { Calendar, Clock, Globe, ShieldCheck, CheckCircle2, Check, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Book() {
  const [isBooked, setIsBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleBooking = async () => {
    if (!formData.name || !formData.email) return;
    
    setIsSubmitting(true);
    try {
      await fetch('https://hook.eu1.make.com/oekufl861eliq22aykn76qrh65ebz751', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'Worklabz Booking Form',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          submittedAt: new Date().toISOString()
        })
      });
    } catch (error) {
      console.error('Error submitting form to webhook:', error);
    }
    
    setIsSubmitting(false);
    setIsBooked(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-dark-surface min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Context & Trust */}
          <div className="space-y-12">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                Engineer Your Next <br/> 
                <span className="text-gradient">Phase of Growth.</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Book a 30-minute discovery session with a Worklabs Systems Architect. We'll audit your current bottlenecks and map out a custom automation roadmap.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary-500 rounded-full"></div>
                What to expect during the session:
              </h3>
              
              {[
                { title: 'Operational Audit', desc: 'Identify the exact processes leaking profit and time.' },
                { title: 'System Architecture', desc: 'Design a bespoke AI automation and BPO workflow.' },
                { title: 'Implementation ROI', desc: 'Transparent breakdown of setup costs and recurring margins.' },
                { title: 'Global Scaling Plan', desc: 'Map out the transition to an offshore managed team.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Globe, label: 'Global Infrastructure' },
                { icon: ShieldCheck, label: 'Enterprise Security' },
                { icon: Clock, label: '24/7 Redundancy' },
                { icon: Calendar, label: 'Flexible Scheduling' }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-dark-panel/40 border border-white/5 text-gray-400 text-sm">
                  <badge.icon className="w-5 h-5 text-primary-500/60" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Booking Widget */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary-600/10 blur-[100px] rounded-full" />
            <div className="relative glass-panel rounded-3xl border border-white/5 bg-dark-panel p-2 shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#11141a]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                  Systems Consultation Scheduler
                </div>
              </div>
              
              <div className="flex-grow flex flex-col items-center justify-center p-8 text-center bg-[#0d0f14] relative">
                <AnimatePresence mode="wait">
                  {!isBooked ? (
                    <motion.div 
                      key="booking-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full"
                    >
                      <Calendar className="w-16 h-16 text-primary-500/20 mb-6 mx-auto" />
                      <h4 className="text-xl font-bold mb-4">Enter Your Details</h4>
                      <p className="text-gray-400 text-sm mb-8 max-w-xs mx-auto">
                        Provide your details below and we will contact you shortly to schedule a session that works for your team.
                      </p>
                      
                      {/* User Details Form */}
                      <div className="w-full space-y-4 mb-6 text-left">
                            <div className="space-y-1">
                              <label className="text-xs font-medium text-gray-400 pl-1">Full Name *</label>
                              <input 
                                required 
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-dark-surface border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all text-sm"
                                placeholder="John Doe"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-400 pl-1">Work Email *</label>
                                <input 
                                  required 
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                                  className="w-full bg-dark-surface border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all text-sm"
                                  placeholder="john@company.com"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-400 pl-1">Phone Number</label>
                                <input 
                                  type="tel"
                                  value={formData.phone}
                                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                  className="w-full bg-dark-surface border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all text-sm"
                                  placeholder="+44 7700 900077"
                                />
                              </div>
                              <div className="space-y-1 col-span-2">
                                <label className="text-xs font-medium text-gray-400 pl-1">Company</label>
                                <input 
                                  type="text"
                                  value={formData.company}
                                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                                  className="w-full bg-dark-surface border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all text-sm"
                                  placeholder="Acme Corp"
                                />
                              </div>
                            </div>
                      </div>

                      <div className="w-full pt-6 border-t border-white/5">
                        <div className="text-xs text-gray-500 mb-4 italic">
                          By booking, you agree to our discovery interview format.
                        </div>
                        <button 
                          onClick={handleBooking}
                          disabled={!formData.name || !formData.email || isSubmitting}
                          className={`w-full font-bold py-4 rounded-xl transition-all shadow-xl font-outfit flex justify-center items-center ${
                            formData.name && formData.email && !isSubmitting
                              ? 'bg-white text-dark-surface hover:bg-gray-200 cursor-pointer' 
                              : 'bg-white/10 text-gray-400 cursor-not-allowed border border-white/10'
                          }`}
                        >
                          {isSubmitting ? (
                            <><Bot className="w-5 h-5 mr-2 animate-spin" /> Finalizing...</>
                          ) : (
                            'Finalize Booking'
                          )}
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="success-state"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full py-12"
                    >
                      <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                      </div>
                      <h4 className="text-3xl font-bold mb-3 text-white">Booking Confirmed.</h4>
                      <p className="text-gray-400 max-w-sm mx-auto mb-8">
                        We have received your request. One of our architects will contact you shortly to schedule your discovery session.
                      </p>
                      <div className="p-6 bg-dark-panel border border-white/5 rounded-2xl mx-auto max-w-sm mb-8 text-left">
                        <h5 className="text-white font-bold mb-2">Next Steps:</h5>
                        <ul className="text-sm text-gray-400 space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> 
                            Compile a list of your 3 biggest operational bottlenecks.
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> 
                            Ensure key decision-makers are present on the call.
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Lead Qualification Note */}
            <div className="mt-8 p-6 rounded-2xl bg-primary-900/10 border border-primary-500/20 text-center">
              <p className="text-sm text-gray-400">
                <span className="text-primary-400 font-semibold italic">Note:</span> We currently have a 2-day waitlist for systems consultations. Booking early ensures priority architecture allocation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
