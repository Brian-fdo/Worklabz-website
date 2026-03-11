import { useState } from 'react';
import { ChevronRight, ArrowLeft, Bot, CheckCircle2, Factory, Monitor, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Audit() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessModel: '',
    teamSize: '',
    bottleneck: '',
    software: [] as string[],
    name: '',
    email: '',
    company: ''
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [roi, setRoi] = useState(0);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 6));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const updateForm = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const toggleSoftware = (item: string) => {
    setFormData(prev => ({
      ...prev,
      software: prev.software.includes(item) 
        ? prev.software.filter(s => s !== item)
        : [...prev.software, item]
    }));
  };

  const calculateROI = () => {
    setIsCalculating(true);
    let base = 25000; // Base savings
    if (formData.teamSize.includes('6 - 15')) base = 65000;
    if (formData.teamSize.includes('16 - 50')) base = 180000;
    if (formData.teamSize.includes('50+')) base = 450000;

    const multiplier = formData.bottleneck.includes('Manual') ? 1.4 : 1.2;
    const total = base * multiplier;
    
    setTimeout(() => {
      setRoi(Math.round(total));
      setIsCalculating(false);
      nextStep();
    }, 2500);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    calculateROI();
  };

  return (
    <div className="min-h-screen pt-20 bg-dark-surface relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-surface to-dark-surface -z-10" />

      <div className="flex-grow flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-2xl">
          {step < 6 && (
            <div className="mb-8 relative">
              <div className="flex justify-between text-xs text-gray-500 font-medium mb-3 px-1">
                <span>Phase {step} of 5</span>
                <span>{Math.round((step / 5) * 100)}% Completed</span>
              </div>
              <div className="h-2 w-full bg-dark-panel rounded-full overflow-hidden border border-dark-border/50">
                <div 
                  className="h-full bg-primary-500 transition-all duration-500 ease-out"
                  style={{ width: `${(step / 5) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="glass-panel p-6 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden border-t-2 border-t-primary-500/50">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">What is your core business model?</h2>
                <p className="text-gray-400 mb-8">This helps us tailor the automation blueprint precisely to your operations.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: 'agency', label: 'Agency / Marketing', icon: Briefcase },
                    { id: 'ecommerce', label: 'E-commerce / Retail', icon: Factory },
                    { id: 'saas', label: 'SaaS / Tech', icon: Monitor },
                    { id: 'service', label: 'Service Business', icon: Users }
                  ].map(option => (
                    <button
                      key={option.id}
                      onClick={() => { updateForm('businessModel', option.label); nextStep(); }}
                      className={`p-6 rounded-xl border flex flex-col items-center gap-4 transition-all ${
                        formData.businessModel === option.label 
                        ? 'border-primary-500 bg-primary-500/10 text-white' 
                        : 'border-dark-border bg-dark-panel/50 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                      }`}
                    >
                      <option.icon className="w-8 h-8" />
                      <span className="font-medium">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button onClick={prevStep} className="text-gray-500 hover:text-white mb-6 flex items-center text-sm transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back
                </button>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">What is your current team size?</h2>
                <p className="text-gray-400 mb-8">This dictates the scale of the required infrastructure.</p>
                <div className="grid gap-3">
                  {['1 - 5 (Founder/Lean)', '6 - 15 (Scaling)', '16 - 50 (Growth Stage)', '50+ (Enterprise)'].map(size => (
                    <button
                      key={size}
                      onClick={() => { updateForm('teamSize', size); nextStep(); }}
                      className="p-5 rounded-xl border border-dark-border bg-dark-panel/50 text-left font-medium text-gray-300 hover:border-primary-500 hover:bg-primary-500/10 hover:text-white transition-all outline-none"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button onClick={prevStep} className="text-gray-500 hover:text-white mb-6 flex items-center text-sm transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back
                </button>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Where do you waste the most time?</h2>
                <p className="text-gray-400 mb-8">Identify the single biggest operational bottleneck dragging down your margins.</p>
                <div className="grid gap-3">
                  {[
                    'Manual Data Entry & Syncing',
                    'Tier 1 Customer Support',
                    'Lead Follow-ups & Sales CRM',
                    'Client Onboarding & Reporting'
                  ].map(problem => (
                    <button
                      key={problem}
                      onClick={() => { updateForm('bottleneck', problem); nextStep(); }}
                      className="p-5 flex justify-between items-center rounded-xl border border-dark-border bg-dark-panel/50 text-left font-medium text-gray-300 hover:border-primary-500 hover:bg-primary-500/10 hover:text-white transition-all group"
                    >
                      {problem}
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button onClick={prevStep} className="text-gray-500 hover:text-white mb-6 flex items-center text-sm transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back
                </button>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">What software runs your business?</h2>
                <p className="text-gray-400 mb-8">Select all the platforms you currently use (we integrate with all of them).</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {['HubSpot', 'Salesforce', 'Shopify', 'Stripe', 'Slack', 'Zapier/Make', 'Google Workspace', 'Custom/Other'].map(soft => (
                    <button
                      key={soft}
                      onClick={() => toggleSoftware(soft)}
                      className={`p-4 rounded-xl border text-sm font-medium transition-all ${
                        formData.software.includes(soft)
                        ? 'border-primary-500 bg-primary-500/20 text-white shadow-[inset_0_0_15px_rgba(59,130,246,0.2)]'
                        : 'border-dark-border bg-dark-panel/50 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${formData.software.includes(soft) ? 'bg-primary-500 border-primary-500' : 'border-gray-600'}`}>
                          {formData.software.includes(soft) && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        {soft}
                      </div>
                    </button>
                  ))}
                </div>
                <button 
                  onClick={nextStep}
                  className="w-full bg-white text-dark-surface font-semibold py-4 rounded-xl hover:bg-gray-200 transition-colors flex justify-center items-center"
                >
                  Continue <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            )}

            {step === 5 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button onClick={prevStep} className="text-gray-500 hover:text-white mb-6 flex items-center text-sm transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back
                </button>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                    <CheckCircle2 className="w-8 h-8 text-primary-400" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">Audit Complete</h2>
                  <p className="text-gray-400">Where should we send your custom Automation Blueprint?</p>
                </div>
                
                <form onSubmit={submitForm} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-400 pl-1">Name</label>
                      <input 
                        required 
                        type="text"
                        className="w-full bg-dark-surface border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-400 pl-1">Work Email</label>
                      <input 
                        required 
                        type="email"
                        className="w-full bg-dark-surface border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-1 pb-4">
                    <label className="text-sm font-medium text-gray-400 pl-1">Company Name</label>
                    <input 
                      required 
                      type="text"
                      className="w-full bg-dark-surface border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary-600 text-white font-semibold py-4 rounded-xl hover:bg-primary-500 transition-all shadow-lg shadow-primary-500/20 flex justify-center items-center"
                  >
                    Generate My Blueprint <Bot className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>
            )}

            {step === 6 && (
              <div className="animate-in fade-in zoom-in-95 duration-500 text-center py-8">
                {isCalculating ? (
                  <div className="space-y-8 py-12">
                    <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto animate-spin-slow border-2 border-primary-500/30 border-t-primary-500">
                      <Bot className="w-10 h-10 text-primary-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Simulating System Architecture...</h2>
                      <p className="text-gray-500 text-sm">Calculating delta via Sri Lankan Technical Hub throughput...</p>
                    </div>
                    <div className="max-w-xs mx-auto h-1.5 bg-dark-panel rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2.2 }}
                        className="h-full bg-primary-500"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h2 className="text-3xl font-bold mb-2 text-gradient-primary">Analysis Complete.</h2>
                    <div className="bg-dark-panel/60 border border-white/5 rounded-2xl p-6 mb-8 mt-6">
                      <div className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Target Annual Savings</div>
                      <div className="text-5xl font-black text-white">£{roi.toLocaleString()}</div>
                      <div className="text-xs text-primary-400 mt-2 font-medium italic">*Projected via Worklabs Automation Blueprint</div>
                    </div>
                    <p className="text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
                      We've compiled your data. Your full technical blueprint has been sent to your email.
                      <br/><br/>
                      Want faster results? Bypass the queue and speak directly with our Lead Architect right now.
                    </p>
                    <Link 
                      to="/book"
                      className="inline-block bg-white text-dark-surface font-semibold py-4 px-8 rounded-xl hover:bg-gray-200 transition-all shadow-md"
                    >
                      Book Priority Consultation
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
            Secure, end-to-end encrypted audit protocol.
          </div>
        </div>
      </div>
    </div>
  );
}
