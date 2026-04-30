import React from 'react';
import { 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  TrendingUp, 
  Clock, 
  ShieldCheck,
  Star,
  ChevronRight,
  Activity
} from 'lucide-react';

const bpoTeams = [
  {
    id: 'cold-calling',
    name: 'Outbound Sales Unit',
    manager: 'Pradeep J.',
    location: 'Colombo, Sri Lanka',
    status: 'Active',
    staffCount: 12,
    todayPerformance: '1,240 Calls / 42 Leads',
    performanceScore: 94,
    color: '#00e5ff'
  },
  {
    id: 'customer-support',
    name: 'Level 1 Support Desk',
    manager: 'Anjali R.',
    location: 'Kandy, Sri Lanka',
    status: 'Active',
    staffCount: 8,
    todayPerformance: '156 Tickets Resolved',
    performanceScore: 98,
    color: '#7b2cbf'
  },
  {
    id: 'lead-gen',
    name: 'Strategic Research Team',
    manager: 'Kasun D.',
    location: 'Colombo, Sri Lanka',
    status: 'Active',
    staffCount: 15,
    todayPerformance: '450 Verified Prospects',
    performanceScore: 91,
    color: '#f72585'
  }
];

export default function BPOTeams() {
  return (
    <div style={{ animation: 'fade-in 0.4s ease-out' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <h2 className="text-gradient" style={{ fontSize: '2rem' }}>BPO Infrastructure</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Manage and monitor your dedicated offshore operational units in Sri Lanka.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(0, 229, 255, 0.05)', border: '1px solid var(--border-glow)' }}>
            <span className="pulse-indicator"></span>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>Colombo Hub: Operational (9:15 AM LKT)</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
        {bpoTeams.map(team => (
          <div key={team.id} className="glass-panel metric-card" style={{ padding: '1.5rem', cursor: 'default' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{team.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={12} /> {team.location}
                </div>
              </div>
              <div className="status-badge status-active">{team.status}</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Active Staff</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{team.staffCount}</div>
              </div>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Performance</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: team.performanceScore > 90 ? '#00e676' : 'var(--accent-cyan)' }}>{team.performanceScore}%</div>
              </div>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Today's Output</div>
              <div style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Activity size={16} color="var(--accent-cyan)" />
                {team.todayPerformance}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem' }}>
                  {team.manager.split(' ')[0][0]}
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{team.manager}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Unit Manager</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-outline" style={{ padding: '0.4rem' }}><Phone size={14} /></button>
                <button className="btn btn-outline" style={{ padding: '0.4rem' }}><Mail size={14} /></button>
                <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>Manage</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Unit Security & Compliance</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <ShieldCheck size={32} color="var(--accent-cyan)" />
              <div>
                <div style={{ fontWeight: 600 }}>Data Sovereignty</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>All Sri Lankan units operate on encrypted VPN tunnels with strict SoC2 data handling protocols.</p>
              </div>
            </div>
             <div style={{ display: 'flex', gap: '1rem' }}>
              <Clock size={32} color="var(--accent-purple)" />
              <div>
                <div style={{ fontWeight: 600 }}>99.9% Up-time Guarantee</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Redundant power and fiber connectivity in all our regional hubs ensure 24/7 service delivery.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, var(--bg-panel), rgba(0, 229, 255, 0.05))' }}>
          <Star size={32} color="var(--accent-cyan)" style={{ marginBottom: '1rem' }} />
          <h3>Scale Your Human Talent</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Need to spin up a new department or scale current staff?</p>
          <button className="btn btn-primary" style={{ width: '100%' }}>Request Talent Expansion</button>
        </div>
      </div>
    </div>
  );
}
