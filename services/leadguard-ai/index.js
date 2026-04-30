const { listMessages, getMessageDetail } = require('../zoho-bridge/mail');
const { qualifyLead } = require('./qualifier');
const { syncToCRM } = require('./syncer');
const config = require('./config.json');

const processedMessageIds = new Set();

/**
 * Main Orchestration Loop
 */
const runLeadGuardCycle = async () => {
  console.log(`[LeadGuard] Starting qualification cycle...`);

  try {
    // 1. Fetch recent messages
    const messages = await listMessages(5);
    
    if (!messages || messages.length === 0) {
      console.log(`[LeadGuard] No new messages found.`);
      return;
    }

    for (const msgSummary of messages) {
      if (processedMessageIds.has(msgSummary.messageId)) continue;
      
      console.log(`[LeadGuard] Processing new message: ${msgSummary.subject}`);

      // 2. Get full detail
      const detail = await getMessageDetail(msgSummary.messageId, msgSummary.folderId);
      
      const messageObj = {
        messageId: msgSummary.messageId,
        sender: msgSummary.sender,
        sender_name: msgSummary.sender_name,
        subject: msgSummary.subject,
        content: detail.content || detail.summary || msgSummary.summary || ''
      };

      // 3. Qualify via AI Logic
      const result = await qualifyLead(messageObj);
      console.log(`[LeadGuard] Result: ${result.status} (Score: ${result.score}/10)`);

      // 4. Sync to CRM if qualified
      if (result.status === 'Qualified' && config.crm_sync_enabled) {
        const recordId = await syncToCRM(result);
        
        // 5. Dispatch Notifications
        const { dispatchAlert } = require('../notification-service');
        const enrichedLead = {
          ...result,
          recordId,
          matches: result.matches || ['General Inquiry']
        };
        await dispatchAlert(enrichedLead);

        // 6. Enroll in Sales Funnel
        const { startFunnel } = require('../sales-funnel');
        startFunnel(enrichedLead);
      }

      processedMessageIds.add(msgSummary.messageId);
    }
  } catch (error) {
    console.error(`[LeadGuard] Cycle Error:`, error.message);
  }
};

/**
 * Start Autonomous Agent
 */
const startAgent = () => {
  console.log('-----------------------------------');
  console.log('   WORKLABS LeadGuard AI ACTIVE    ');
  console.log('-----------------------------------');
  console.log(`Target: Zoho Mail Inbox`);
  console.log(`Interval: ${config.polling_interval_ms / 1000}s`);
  console.log('-----------------------------------');

  // Initial Run
  runLeadGuardCycle();

  // Polling Interval
  setInterval(runLeadGuardCycle, config.polling_interval_ms);
};

startAgent();
