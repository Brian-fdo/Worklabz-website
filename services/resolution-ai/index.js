const { classifyTicket } = require('./classifier');
const { handleTicket } = require('./responder');

/**
 * MOCK ORCHESTRATOR - Resolution AI
 * Simulates receiving an email and pushing it through the Resolution AI pipeline.
 */
const processSupportTicket = async (messageObj) => {
  console.log(`\n===========================================`);
  console.log(`[Resolution AI] New Ticket Received`);
  console.log(`From: ${messageObj.sender}`);
  console.log(`Subject: ${messageObj.subject}`);
  console.log(`===========================================`);

  // 1. Classify the Ticket
  const classification = await classifyTicket(messageObj.content);
  
  // 2. Handle the Ticket (Auto-Resolve or Escalate)
  const result = await handleTicket(messageObj, classification);

  console.log(`[Resolution AI] Status: ${result}`);
  console.log(`===========================================\n`);
};

module.exports = { processSupportTicket };
