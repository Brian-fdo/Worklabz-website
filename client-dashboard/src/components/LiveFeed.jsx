import React, { useState } from 'react';
import { Activity, Mail, CheckCircle, AlertTriangle, MessageSquare, Briefcase } from 'lucide-react';

const initialLogs = [
  {
    id: 1,
    agent: 'LeadGuard AI',
    type: 'qualification',
    message: 'Analyzed inquiry from "john.doe@techstartup.com"',
    details: 'Detected intent: AI Automation, Offshore BPO. Score: 9/10.',
    status: 'success',
    timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
    icon: <Briefcase size={16} />
  },
  {
    id: 2,
    agent: 'LeadGuard AI',
    type: 'sync',
    message: 'Synced Lead to Zoho CRM',
    details: 'ID: 881259000000609007 (Status: AI-Qualified)',
    status: 'success',
    timestamp: new Date(Date.now() - 1000 * 60 * 1.5).toISOString(),
    icon: <CheckCircle size={16} />
  },
  {
    id: 3,
    agent: 'Notification Service',
    type: 'alert',
    message: 'Dispatched High-Value Lead Alert',
    details: 'Sent to Slack (#sales-leads) and Email (enquiry@)',
    status: 'success',
    timestamp: new Date(Date.now() - 1000 * 60 * 1).toISOString(),
    icon: <Mail size={16} />
  },
  {
    id: 4,
    agent: 'Resolution AI',
    type: 'support',
    message: 'Categorized incoming support ticket',
    details: 'Intent: Password Reset. Sentiment: Neutral.',
    status: 'success',
    timestamp: new Date(Date.now() - 1000 * 30).toISOString(),
    icon: <MessageSquare size={16} />
  },
  {
    id: 5,
    agent: 'Resolution AI',
    type: 'escalation',
    message: 'Escalated complex ticket to Human Ops',
    details: 'Reason: Negative sentiment detected ("Broken System")',
    status: 'warning',
    timestamp: new Date(Date.now() - 1000 * 5).toISOString(),
    icon: <AlertTriangle size={16} />
  }
];

export default function LiveFeed() {
  const [logs] = useState(initialLogs);

  // Formatting timestamp for display
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'var(--accent-cyan)';
      case 'warning': return 'var(--accent-orange, #f59e0b)';
      case 'error': return 'var(--accent-red, #ef4444)';
      default: return 'var(--text-secondary)';
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', height: '100%', maxHeight: '500px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={20} color="var(--accent-cyan)" />
          Live AI Activity Feed
        </h3>
        <div className="status-badge status-active">
          <span className="pulse-indicator"></span> Live
        </div>
      </div>
      
      <div style={{ 
        flex: 1, 
        overflowY: 'auto', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem',
        paddingRight: '0.5rem'
      }}>
        {logs.map((log) => (
          <div 
            key={log.id} 
            style={{ 
              display: 'flex', 
              gap: '1rem', 
              padding: '1rem', 
              background: 'rgba(255, 255, 255, 0.03)', 
              borderRadius: '8px',
              borderLeft: `3px solid ${getStatusColor(log.status)}`,
              animation: 'fade-in 0.5s ease-out'
            }}
          >
            <div style={{ 
              width: '32px', 
              height: '32px', 
              borderRadius: '50%', 
              background: 'rgba(255, 255, 255, 0.05)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: getStatusColor(log.status)
            }}>
              {log.icon}
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{log.agent}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{formatTime(log.timestamp)}</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                {log.message}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                {log.details}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
