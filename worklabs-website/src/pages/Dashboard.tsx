import { 
  AreaChart, Area, Tooltip, ResponsiveContainer, Cell, PieChart, Pie
} from 'recharts';
import { 
  Activity, Zap, Users, ShieldCheck, Database, Server, RefreshCw, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const efficiencyDelta = [
  { day: 'Mon', manual: 40, automated: 120 },
  { day: 'Tue', manual: 38, automated: 135 },
  { day: 'Wed', manual: 42, automated: 148 },
  { day: 'Thu', manual: 35, automated: 160 },
  { day: 'Fri', manual: 30, automated: 185 },
];

const resourceAllocation = [
  { name: 'AI Workflows', value: 65, color: '#3b82f6' },
  { name: 'Offshore Ops', value: 25, color: '#10b981' },
  { name: 'Infrastructure', value: 10, color: '#6366f1' },
];

export default function Dashboard() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-[#0a0c0f] min-h-screen pt-24 pb-12 flex flex-col overflow-hidden font-outfit">
      {/* Sidebar / Top Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-6 border-b border-white/5"
        >
          <div>
            <div className="flex items-center gap-2 text-primary-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Activity className="w-3 h-3" /> Live Operations Center
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">System Performance Dashboard</h1>
          </div>
          <div className="flex gap-3">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-400 font-outfit">All Systems Operational</span>
            </div>
            <button className="bg-dark-panel border border-white/5 rounded-lg px-4 py-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold font-outfit">
              <RefreshCw className="w-3 h-3" /> Refresh Data
            </button>
          </div>
        </motion.div>

        {/* Global Key Metrics */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {[
            { label: 'Total Tasks Automated', value: '42,891', icon: Zap, trend: '+12%', color: 'text-primary-400' },
            { label: 'Active AI Agents', value: '14', icon: Cpu, trend: '+2', color: 'text-purple-400' },
            { label: 'Offshore Bandwidth', value: '98.4%', icon: Users, trend: 'Optimal', color: 'text-emerald-400' },
            { label: 'Operational Uptime', value: '99.99%', icon: Server, trend: 'Stable', color: 'text-blue-400' }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#12151c] hover:border-primary-500/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg bg-dark-surface border border-white/5 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                  {stat.trend}
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {/* Main Chart: Efficiency Delta */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 glass-panel rounded-3xl p-8 border border-white/5 bg-[#12151c] flex flex-col h-[450px]"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start mb-10 gap-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Operational Efficiency Delta</h3>
                <p className="text-xs text-gray-500">Comparing manual output (hrs) vs. automated throughput (tasks/hr).</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-gray-600" /> Baseline Manual
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary-400">
                  <span className="w-2 h-2 rounded-full bg-primary-500" /> Worklabs Optimized
                </div>
              </div>
            </div>
            
            <div className="flex-grow w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={efficiencyDelta}>
                  <defs>
                    <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', border: '1px solid #1e293b', borderRadius: '12px' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="manual" stroke="#334155" fill="#334155" fillOpacity={0.1} strokeDasharray="5 5" />
                  <Area type="monotone" dataKey="automated" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorHigh)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Side Chart: Allocation */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.5 }}
            className="glass-panel rounded-3xl p-8 border border-white/5 bg-[#12151c] h-[450px] flex flex-col"
          >
            <h3 className="text-lg font-bold text-white mb-1">Resource Allocation</h3>
            <p className="text-xs text-gray-500 mb-10">Load distribution across pillars.</p>
            
            <div className="flex-grow w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={resourceAllocation}
                    cx="50%"
                    cy="45%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {resourceAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="space-y-4 mt-4">
                {resourceAllocation.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest leading-none">
                    <div className="flex items-center gap-2 text-gray-500">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      {item.name}
                    </div>
                    <div className="text-white">{item.value}%</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Grid: Live Logs & Tech Stack */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="glass-panel rounded-3xl p-8 border border-white/5 bg-[#12151c]"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-primary-400" /> Recent System Logs
              </h3>
              <div className="text-[10px] font-bold text-gray-500">LIVE FEED</div>
            </div>
            <div className="space-y-4 font-mono text-[11px]">
              {[
                { time: '10:42:11', event: 'Webflow → Salesforce Sync Completed', status: 'SUCCESS' },
                { time: '10:41:05', event: 'AI Support Agent: Ticket #482 Resolved', status: 'AI RESOLVED' },
                { time: '10:39:58', event: 'Shopify Inventory Re-balance Triggered', status: 'AUTO' },
                { time: '10:38:22', event: 'New Lead Qualified: CRM Routing Done', status: 'SUCCESS' }
              ].map((log, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-dark-surface border border-white/5">
                  <span className="text-gray-500">{log.time}</span>
                  <span className="text-gray-300 mx-4 flex-grow truncate">{log.event}</span>
                  <span className={`px-2 py-0.5 rounded text-[8px] font-bold ${
                    log.status.includes('SUCCESS') ? 'text-emerald-400 bg-emerald-400/5' : 
                    log.status.includes('AI') ? 'text-purple-400 bg-purple-400/5' : 'text-primary-400 bg-primary-400/5'
                  }`}>
                    {log.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.7 }}
            className="glass-panel rounded-3xl p-8 border border-white/5 bg-[#12151c] flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary-500/5 pointer-events-none" />
            <ShieldCheck className="w-16 h-16 text-primary-500/20 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Ready to see your business data?</h3>
            <p className="text-sm text-gray-400 max-w-sm mx-auto mb-8">
              This is a live simulation. Connect your own infrastructure to get actual operational insights and cost-saving audits.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-dark-surface font-bold rounded-xl text-sm hover:bg-gray-200 transition-all font-outfit shadow-xl">
                Connect Data Source
              </button>
              <Link to="/book" className="px-6 py-3 border border-white/10 text-white font-bold rounded-xl text-sm hover:bg-white/5 transition-all font-outfit">
                Talk to Architect
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
