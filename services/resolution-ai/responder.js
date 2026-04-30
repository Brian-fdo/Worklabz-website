const { sendEmail } = require('../zoho-bridge/mail');
const { dispatchAlert } = require('../notification-service/index');

/**
 * Handles the action based on the AI's classification.
 */
const handleTicket = async (ticketData, classification) => {
  console.log(`[Responder] Handling ticket from ${ticketData.sender} | Intent: ${classification.intent} | Sentiment: ${classification.sentiment}`);

  if (classification.requires_escalation) {
    // Escalate to Human Team via Slack
    console.log(`[Responder] 🚨 ESCALATING TICKET (Reason: ${classification.sentiment === 'Angry' ? 'Angry Customer' : 'Complex Query'})`);
    
    await dispatchAlert({
      score: 'ESCALATION (L2)',
      email: ticketData.sender,
      name: ticketData.sender_name || 'Customer',
      company: 'Support Ticket',
      analysis: `*ACTION REQUIRED:* Ticket requires human intervention.\n*Reason:* ${classification.sentiment === 'Angry' ? 'Customer is angry/frustrated' : 'Query is too complex for AI'}\n*Original Query:*\n_${ticketData.content}_`,
      matches: [classification.intent, classification.sentiment],
      recordId: 'N/A (Inbox)'
    });

    return 'Escalated';
  } else {
    // Draft / Send L1 Auto-Reply
    console.log(`[Responder] 🤖 Resolving L1 Ticket automatically...`);
    
    const subject = `Re: ${ticketData.subject}`;
    const body = `
      <p>Hi there,</p>
      <p>${classification.suggested_reply}</p>
      <p>Best regards,<br/>Worklabs Support AI</p>
    `;

    // Note: In a real scenario, you might want to call an API to save cleanly as a DRAFT.
    // Here we will simulate sending the automated reply.
    await sendEmail(ticketData.sender, subject, body);
    console.log(`[Responder] ✅ Auto-reply sent to ${ticketData.sender}.`);
    
    return 'Resolved';
  }
};

module.exports = { handleTicket };
