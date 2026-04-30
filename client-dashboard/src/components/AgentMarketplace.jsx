import React, { useState } from 'react';
import { 
  Bot, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Cpu, 
  Globe, 
  LifeBuoy, 
  Calendar, 
  Search,
  Filter,
  BarChart3
} from 'lucide-react';

const agentTemplates = [
  {
    id: 'support',
    name: 'Resolution AI',
    type: 'Customer Support',
    description: 'Autonomous support agent that resolves up to 70% of tickets without human intervention.',
    capabilities: ['Zendesk & Intercom Integration', 'Semantic Knowledge Base', '24/7 Global Availability'],
    roi: 'Average $4.2k monthly savings',
    price: '$499/mo',
    icon: <LifeBuoy size={24} />,
    color: '#00e5ff'
  },
  {
    id: 'qualifier',
    name: 'LeadGuard AI',
    type: 'Sales Qualification',
    description: 'Instantly qualifies inbound leads via webchat or email and pushes data to your CRM.',
    capabilities: ['Dynamic Qualification Flows', 'CRM Real-time Sync', 'Lead Scoring Engine'],
    roi: '3x increase in lead velocity',
    price: '$399/mo',
    icon: <Search size={24} />,
    color: '#7b2cbf'
  },
  {
    id: 'booker',
    name: 'Scheduler AI',
    type: 'Appointment Booking',
    description: 'Handles the back-and-forth of scheduling meetings, syncs with Calendly and Outlook.',
    capabilities: ['Contextual Scheduling', 'Timezone Optimization', 'Automatic Reminders'],
    roi: 'Zero missed opportunities',
    price: '$299/mo',
    icon: <Calendar size={24} />,
    color: '#f72585'
  },
  {
    id: 'analyst',
    name: 'Insight AI',
    type: 'Data Processing',
    description: 'Processes complex business data, generates reports, and identifies operational bottlenecks.',
    capabilities: ['Spreadsheet Processing', 'KPI Dashboarding', 'Anomaly Detection'],
    roi: '15+ hours manual work saved/wk',
    price: '$599/mo',
    icon: <BarChart3 size={24} />,
    color: '#4cc9f0'
  }
];

export default function AgentMarketplace() {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [deploying, setDeploying] = useState(false);

  const handleDeployStart = (agent) => {
    setSelectedAgent(agent);
  };

  const finalizeDeployment = () => {
    setDeploying(true);
    setTimeout(() => {
      setDeploying(false);
      setSelectedAgent(null);
      alert('Infrastructure Provisioning Complete. Agent is now live.');
    }, 2000);
  };

  if (selectedAgent) {
    return (
      <div style={{ animation: 'fade-in 0.3s ease-out' }}>
        <button 
          className="btn btn-outline" 
          onClick={() => setSelectedAgent(null)}
          style={{ marginBottom: '2rem' }}
        >
          ← Back to Catalog
        </button>

        <div className="glass-panel" style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div>
            <div style={{ 
              background: selectedAgent.color + '20', 
              color: selectedAgent.color,
              padding: '1rem',
              borderRadius: '12px',
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              {selectedAgent.icon}
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Deploy {selectedAgent.name}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2rem' }}>
              {selectedAgent.description}
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.1em' }}>Core Capabilities</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {selectedAgent.capabilities.map((cap, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={18} color={selectedAgent.color} />
                    {cap}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px dashed var(--border-light)' }}>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Projection</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>{selectedAgent.roi}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Infrastructure Configuration</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Integration Source</label>
                  <select style={{ width: '100%', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', color: 'white', padding: '0.75rem', borderRadius: '4px' }}>
                    <option>Select API Source...</option>
                    <option>Zoho Mail / CRM</option>
                    <option>Zendesk Suite</option>
                    <option>Salesforce CRM</option>
                    <option>Intercom</option>
                    <option>HubSpot</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Knowledge Base URL</label>
                  <input type="text" placeholder="https://docs.yourcompany.com" style={{ width: '100%', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', color: 'white', padding: '0.75rem', borderRadius: '4px' }} />
                </div>
                <div style={{ padding: '1.5rem 0', borderTop: '1px solid var(--border-light)', marginTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Monthly Infrastructure Fee</span>
                    <span>{selectedAgent.price}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.125rem', color: 'var(--accent-cyan)' }}>
                    <span>Total Recurring</span>
                    <span>{selectedAgent.price}</span>
                  </div>
                </div>
                <button 
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '1rem' }}
                  onClick={finalizeDeployment}
                  disabled={deploying}
                >
                  {deploying ? (
                    'Provisioning Nodes...'
                  ) : (
                    <>Initialize & Deploy <ArrowRight size={18} /></>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ animation: 'fade-in 0.4s ease-out' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <h2 className="text-gradient" style={{ fontSize: '2rem' }}>AI Agent Infrastructure</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Deploy specialized intelligence nodes to automate your business operations.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', padding: '0 1rem', borderRadius: '8px' }}>
            <Search size={16} color="var(--text-muted)" style={{ marginRight: '0.5rem' }} />
            <input type="text" placeholder="Search agents..." style={{ background: 'transparent', border: 'none', color: 'white', padding: '0.75rem 0', outline: 'none', fontSize: '0.875rem' }} />
          </div>
          <button className="btn btn-outline"><Filter size={16} /> Filter</button>
        </div>
      </div>

      <div className="dashboard-grid">
        {agentTemplates.map(agent => (
          <div key={agent.id} className="glass-panel metric-card" style={{ padding: '2rem', cursor: 'default' }}>
            <div style={{ 
              background: agent.color + '15', 
              color: agent.color,
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              {agent.icon}
            </div>
            
            <div style={{ color: agent.color, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              {agent.type}
            </div>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{agent.name}</h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginBottom: '1.5rem', minHeight: '3rem' }}>
              {agent.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
              {agent.capabilities.slice(0, 2).map((cap, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <Zap size={14} color={agent.color} fill={agent.color} />
                  {cap}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
              <div>
                <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>{agent.price}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}> /mo</span>
              </div>
              <button 
                className="btn btn-primary" 
                onClick={() => handleDeployStart(agent)}
                style={{ padding: '0.5rem 1rem' }}
              >
                Configure
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="glass-panel" style={{ marginTop: '2.5rem', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(90deg, var(--bg-panel), rgba(123, 44, 191, 0.1))' }}>
        <div>
          <h3>Custom Infrastructure?</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Our Sri Lankan engineering team can build bespoke AI agents tailored to your specific legacy systems.</p>
        </div>
        <button className="btn btn-outline" style={{ borderColor: 'var(--accent-purple)', color: 'white' }}>
          Consult Architecture Team
        </button>
      </div>
    </div>
  );
}
