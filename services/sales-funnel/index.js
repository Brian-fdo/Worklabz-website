const { enrollInFunnel } = require('./scheduler');

/**
 * Worklabs Sales Funnel - Core Orchestrator
 * Activates when LeadGuard AI marks a lead as Qualified.
 */
const startFunnel = (leadData) => {
  if (!leadData || !leadData.email) {
    console.error('[SalesFunnel] Invalid lead data. Skipping funnel enrollment.');
    return;
  }

  console.log(`[SalesFunnel] 🚀 Activating Sales Funnel for ${leadData.email}`);
  enrollInFunnel(leadData);
};

module.exports = { startFunnel };
