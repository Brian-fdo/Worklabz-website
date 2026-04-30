const { upsertLead } = require('../zoho-bridge/crm');

/**
 * Sync qualified lead information to Zoho CRM
 */
const syncToCRM = async (qualificationData) => {
  console.log(`[Syncer] Syncing lead: ${qualificationData.email}...`);
  
  const leadData = {
    Last_Name: qualificationData.name || 'Unknown',
    Email: qualificationData.email,
    Company: qualificationData.company || 'Individual',
    Description: qualificationData.analysis,
    Lead_Source: 'LeadGuard AI',
    Lead_Status: qualificationData.status === 'Qualified' ? 'AI-Qualified' : 'AI-Qualifying',
    
    // Worklabs Business Architecture Fields
    Service_Interest: qualificationData.matches ? qualificationData.matches[0] : 'None',
    AI_Qualification_Score: qualificationData.score,
    AI_Analysis: qualificationData.analysis
  };

  try {
    const response = await upsertLead(leadData);
    console.log(`[Syncer] CRM Sync Successful. ID: ${response.data[0].details.id}`);
    return response.data[0].details.id;
  } catch (error) {
    console.error(`[Syncer] CRM Sync Failed:`, error.message);
    throw error;
  }
};

module.exports = { syncToCRM };
