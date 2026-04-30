import React, { useState } from 'react';
import { 
  Bot, 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Settings, 
  Zap,
  TrendingUp,
  Activity,
  Calendar,
  PhoneCall,
  ChevronRight
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import AgentMarketplace from './components/AgentMarketplace';
import BPOTeams from './components/BPOTeams';
import CRMLeads from './components/CRMLeads';
import LiveFeed from './components/LiveFeed';

const mockData = [
  { name: 'Mon', leads: 4000, interactions: 2400 },
  { name: 'Tue', leads: 3000, interactions: 1398 },
  { name: 'Wed', leads: 2000, interactions: 9800 },
  { name: 'Thu', leads: 2780, interactions: 3908 },
  { name: 'Fri', leads: 1890, interactions: 4800 },
  { name: 'Sat', leads: 2390, interactions: 3800 },
  { name: 'Sun', leads: 3490, interactions: 4300 },
];

const tabs = [
  { id: 'dashboard', name: 'System Overview', icon: <LayoutDashboard size={20} /> },
  { id: 'agents', name: 'Active AI Agents', icon: <Bot size={20} /> },
  { id: 'bpo', name: 'BPO Teams', icon: <Users size={20} /> },
  { id: 'leads', name: 'CRM & Leads', icon: <MessageSquare size={20} /> },
  { id: 'settings', name: 'Infrastructure Settings', icon: <Settings size={20} /> },
];

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="sidebar">
      <div className="flex items-center gap-3 mb-10" style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div style={{ background: 'var(--accent-cyan)', padding: '0.5rem', borderRadius: '8px', color: '#000' }}>
          <Zap size={24} fill="currentColor" />
        </div>
        <h1 style={{ fontSize: '1.5rem', margin: 0, letterSpacing: '-0.05em' }}>WORKLABS</h1>
      </div>
      
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Architecture</div>
        {tabs.map(tab => (
          <div 
            key={tab.id}
            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.name}
          </div>
        ))}
      </div>
      
      <div className="glass-panel" style={{ padding: '1rem', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>System Status</div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
          <span className="pulse-indicator"></span>
          All Systems Operational
        </div>
      </div>
    </aside>
  );
}

function MetricCard({ title, value, icon, trend, trendValue }) {
  const isUp = trend === 'up';
  return (
    <div className="glass-panel metric-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div className="metric-label">{title}</div>
        <div style={{ color: 'var(--accent-cyan)', opacity: 0.8 }}>{icon}</div>
      </div>
      <div className="metric-value">
        {value}
        <span className={`metric-trend ${isUp ? 'trend-up' : 'trend-down'}`}>
          {isUp ? '↑' : '↓'} {trendValue}
        </span>
      </div>
    </div>
  );
}



export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        <header className="topbar">
          <div>
            <h2 className="text-gradient">Welcome back, Commander.</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Here is the status of your automated enterprise.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline"><Settings size={16}/> Settings</button>
            <button className="btn btn-primary"><Bot size={16}/> Deploy New Agent</button>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div style={{ animation: 'fade-in 0.3s ease-in-out' }}>
            <div className="dashboard-grid">
              <MetricCard 
                title="Automated Interactions" 
                value="24.8k" 
                icon={<Bot size={24} />} 
                trend="up" 
                trendValue="12%" 
              />
              <MetricCard 
                title="Leads Qualified" 
                value="1,492" 
                icon={<TrendingUp size={24} />} 
                trend="up" 
                trendValue="8.4%" 
              />
              <MetricCard 
                title="Appointments Set" 
                value="342" 
                icon={<Calendar size={24} />} 
                trend="up" 
                trendValue="22%" 
              />
              <MetricCard 
                title="Hours Saved" 
                value="1,840" 
                icon={<PhoneCall size={24} />} 
                trend="up" 
                trendValue="5%" 
              />
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <div className="glass-panel" style={{ padding: '1.5rem', flex: 2, minWidth: '400px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.125rem' }}>Interaction Volume</h3>
                  <div className="status-badge status-active">Live</div>
                </div>
                <div style={{ height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--accent-cyan)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="var(--accent-cyan)" stopOpacity={0}/>
                        </linearGradient>
                         <linearGradient id="colorInteractions" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--accent-purple)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="var(--accent-purple)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" stroke="var(--border-light)" tick={{fill: 'var(--text-muted)', fontSize: 12}} />
                      <YAxis stroke="var(--border-light)" tick={{fill: 'var(--text-muted)', fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: '8px' }}
                        itemStyle={{ color: 'var(--text-primary)' }}
                      />
                      <Area type="monotone" dataKey="interactions" stroke="var(--accent-purple)" fillOpacity={1} fill="url(#colorInteractions)" />
                      <Area type="monotone" dataKey="leads" stroke="var(--accent-cyan)" fillOpacity={1} fill="url(#colorLeads)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <LiveFeed />
            </div>
          </div>
        )}

        {activeTab === 'agents' && <AgentMarketplace />}

        {activeTab === 'bpo' && <BPOTeams />}
        
        {activeTab === 'leads' && <CRMLeads />}
        
        {activeTab !== 'dashboard' && activeTab !== 'agents' && activeTab !== 'bpo' && activeTab !== 'leads' && (
           <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', margin: '2rem 0' }}>
             <Bot size={48} color="var(--accent-cyan)" style={{ margin: '0 auto 1.5rem', opacity: 0.5 }} />
             <h3>{tabs.find(t => t.id === activeTab)?.name} Module</h3>
             <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '400px', margin: '1rem auto' }}>
               This infrastructure module is currently being configured. It will go live in the next deployment phase.
             </p>
             <button className="btn btn-outline" onClick={() => setActiveTab('dashboard')} style={{ marginTop: '1.5rem' }}>
               Return to Overview
             </button>
           </div>
        )}
      </main>
    </>
  );
}
