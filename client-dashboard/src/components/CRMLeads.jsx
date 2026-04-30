import React from 'react';
import { User, Building, BrainCircuit, ExternalLink } from 'lucide-react';

const mockLeads = {
  qualifying: [
    { id: '101', name: 'Sarah Jenkins', company: 'Nexus Retail', service: 'Technical Audit', score: 'Analyzing...' }
  ],
  qualified: [
    { id: '881259007', name: 'John Doe', company: 'Tech Startup Ltd', service: 'AI Automation, Offshore BPO', score: '9/10' },
    { id: '881259008', name: 'Raj Patel', company: 'Global Logistics', service: 'Workflow Automation', score: '8/10' }
  ],
  outreach: [
    { id: '881259002', name: 'Emma Watson', company: 'EcoBrands', service: 'Offshore BPO (Support)', score: '7/10', assignee: 'Colombo Hub' }
  ]
};

function LeadCard({ lead, status }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid var(--border-light)',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }} className="hover:transform hover:-translate-y-1 hover:border-cyan-500/50">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <User size={14} color="var(--text-muted)" />
          {lead.name}
        </div>
        {status === 'qualified' && (
          <div style={{ 
            background: 'rgba(20, 184, 166, 0.1)', 
            color: 'var(--accent-cyan)', 
            padding: '2px 6px', 
            borderRadius: '4px', 
            fontSize: '0.7rem',
            fontWeight: 700
          }}>
            Score: {lead.score}
          </div>
        )}
      </div>
      
      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <Building size={14} /> {lead.company}
      </div>
      
      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <BrainCircuit size={14} color="var(--accent-purple)" />
        {lead.service}
      </div>

      {lead.assignee && (
        <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          Assigned to: <strong>{lead.assignee}</strong>
        </div>
      )}
    </div>
  );
}

function KanbanColumn({ title, count, leads, status }) {
  const borderColor = status === 'qualifying' ? 'var(--border-light)' : 
                      status === 'qualified' ? 'var(--accent-cyan)' : 
                      'var(--accent-purple)';

  return (
    <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '1rem',
        paddingBottom: '0.5rem',
        borderBottom: `2px solid ${borderColor}`
      }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{title}</h3>
        <span style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '2px 8px', 
          borderRadius: '12px', 
          fontSize: '0.8rem' 
        }}>
          {count}
        </span>
      </div>
      
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {leads.map(lead => (
          <LeadCard key={lead.id} lead={lead} status={status} />
        ))}
        {leads.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem', border: '1px dashed var(--border-light)', borderRadius: '8px' }}>
            No leads in this stage.
          </div>
        )}
      </div>
    </div>
  );
}

export default function CRMLeads() {
  return (
    <div style={{ animation: 'fade-in 0.3s ease-in-out' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Active Pipeline</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Leads processed by LeadGuard AI and synced securely with Zoho CRM.
          </p>
        </div>
        <button className="btn btn-outline" onClick={() => window.open('https://crm.zoho.eu/crm/org881259000/tab/Leads', '_blank')}>
          Open in Zoho CRM <ExternalLink size={14} style={{ marginLeft: '0.25rem' }}/>
        </button>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '2rem', overflowX: 'auto', minHeight: '600px' }}>
        <KanbanColumn 
          title="AI Qualifying" 
          count={mockLeads.qualifying.length} 
          leads={mockLeads.qualifying} 
          status="qualifying"
        />
        <KanbanColumn 
          title="AI Qualified" 
          count={mockLeads.qualified.length} 
          leads={mockLeads.qualified} 
          status="qualified"
        />
        <KanbanColumn 
          title="BPO Outreach" 
          count={mockLeads.outreach.length} 
          leads={mockLeads.outreach} 
          status="outreach"
        />
      </div>
    </div>
  );
}
