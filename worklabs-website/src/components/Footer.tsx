import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-surface pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white block mb-4 font-outfit">
              WORK<span className="text-primary-500">LABS</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Intelligent Systems. Global Talent. We design and deploy the automation infrastructure and offshore teams you need to eliminate operational bottlenecks and scale efficiently.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">AI Automation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Offshore Teams (BPO)</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Sales Infrastructure</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Industry Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Case Studies</Link></li>
              <li><Link to="/insights" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Insights Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Take Action</h4>
            <div className="space-y-4 flex flex-col items-start">
              <Link to="/book" className="bg-white text-dark-surface px-6 py-3 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all w-full text-center shadow-xl font-outfit">
                Book Consultation
              </Link>
              <Link to="/audit" className="border border-white/5 bg-dark-panel/50 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-dark-panel transition-all w-full text-center font-outfit">
                Free Automation Audit
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-600">
          <p>&copy; {new Date().getFullYear()} Worklabs AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
