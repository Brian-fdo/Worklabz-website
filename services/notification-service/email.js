const { sendEmail } = require('../zoho-bridge/mail');

/**
 * Sends an alert via Email using the Zoho Bridge.
 */
const sendEmailAlert = async (recipient, leadData) => {
  const subject = `[LeadGuard] High-Priority Lead: ${leadData.name || leadData.email} (${leadData.score}/10)`;
  
  const body = `
    <h2>LeadGuard AI Alert</h2>
    <p>A new high-intent lead has been qualified for Worklabs.</p>
    <hr/>
    <ul>
      <li><strong>Score:</strong> ${leadData.score}/10</li>
      <li><strong>Service Interest:</strong> ${leadData.matches.join(', ')}</li>
      <li><strong>Name:</strong> ${leadData.name || 'Unknown'}</li>
      <li><strong>Email:</strong> ${leadData.email}</li>
      <li><strong>Company:</strong> ${leadData.company || 'Individual'}</li>
    </ul>
    <h3>AI Analysis:</h3>
    <p><em>${leadData.analysis}</em></p>
    <hr/>
    <p><a href="https://crm.zoho.eu/crm/org881259000/tab/Leads/${leadData.recordId}">View Lead in Zoho CRM</a></p>
  `;

  try {
    await sendEmail(recipient, subject, body);
    console.log('[Email] Alert sent successfully.');
  } catch (error) {
    console.error('[Email] Error sending alert:', error.message);
  }
};

module.exports = { sendEmailAlert };
