const { sendEmail, listMessages, getMessageDetail } = require('../zoho-bridge/mail');
const { qualifyLead } = require('./qualifier');
const { syncToCRM } = require('./syncer');

const FULL_CYCLE_TEST = async () => {
  console.log('--- WORKLABS LEADGUARD: END-TO-END STRESS TEST ---');
  
  try {
    // 1. SEND MOCK LEAD EMAIL
    console.log('[Test] Phase 1: Sending High-Intent Lead Email...');
    const subject = `Inquiry: AI Automation & Offshore Team for E-commerce Brand`;
    const body = `
      Hello Worklabs Team,
      
      I'm the founder of a growing e-commerce brand. We're currently overwhelmed with manual data entry and customer support. 
      I'm very interested in your AI Automation services to streamline our operations.
      Also, we are looking to scale our support team. Can you help with Offshore BPO teams in Sri Lanka?
      
      Our monthly manual spend is around $5,000.
      
      Best,
      John Doe
      john.doe.test@example.com
    `;
    
    await sendEmail('enquiry@worklabz.co.uk', subject, body);
    console.log('[Test] Email Sent Successfully.');

    // 2. WAIT FOR PROPAGATION
    console.log('[Test] Phase 2: Waiting 10 seconds for Zoho indexing...');
    await new Promise(resolve => setTimeout(resolve, 10000));

    // 3. RUN QUALIFICATION CYCLE
    console.log('[Test] Phase 3: Running LeadGuard AI Cycle...');
    const messages = await listMessages(5);
    const targetMsg = messages.find(m => m.subject.includes('AI Automation'));
    
    if (!targetMsg) {
      console.warn('[Test] Warning: Test email not found in recent messages yet. Trying with last fetched.');
    }

    const testMsg = targetMsg || messages[0];
    const detail = await getMessageDetail(testMsg.messageId, testMsg.folderId);
    
    const messageObj = {
      messageId: testMsg.messageId,
      sender: testMsg.sender,
      subject: testMsg.subject,
      content: detail.content || detail.summary || testMsg.summary || ''
    };

    const qualification = await qualifyLead(messageObj);
    console.log(`[Test] AI Qualification Result: ${qualification.status} (Score: ${qualification.score}/10)`);

    // 4. SYNC TO CRM
    console.log('[Test] Phase 4: Syncing to Zoho CRM Business Architecture...');
    const crmId = await syncToCRM({
      ...qualification,
      matches: ['AI Automation', 'Offshore BPO'] // Simulating extracted matches
    });

    // 5. DISPATCH NOTIFICATIONS
    console.log('[Test] Phase 5: Dispatching Real-Time Alerts...');
    const { dispatchAlert } = require('../notification-service');
    await dispatchAlert({
      ...qualification,
      recordId: crmId,
      matches: ['AI Automation', 'Offshore BPO']
    });

    console.log('-----------------------------------');
    console.log('   STRESS TEST: SUCCESSFUL          ');
    console.log(`   CRM Lead ID: ${crmId}           `);
    console.log('-----------------------------------');

  } catch (error) {
    console.error('STRESS TEST FAILED:', error.message);
    if (error.response) console.error(JSON.stringify(error.response.data, null, 2));
  }
};

FULL_CYCLE_TEST();
