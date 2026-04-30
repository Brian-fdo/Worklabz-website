const axios = require('axios');

/**
 * Sends an alert to Slack via Webhook.
 */
const sendSlackAlert = async (webhookUrl, leadData) => {
  if (!webhookUrl || webhookUrl.includes('placeholder')) {
    console.log('[Slack] Webhook URL not configured. Skipping Slack alert.');
    return;
  }

  const payload = {
    text: `🚀 *New High-Value Lead Qualified!*`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*New High-Value Lead Qualified!*\n*Score:* ${leadData.score}/10\n*Interest:* ${leadData.matches.join(', ')}`
        }
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Name:*\n${leadData.name || 'Unknown'}` },
          { type: "mrkdwn", text: `*Email:*\n${leadData.email}` },
          { type: "mrkdwn", text: `*Company:*\n${leadData.company || 'Individual'}` }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*AI Analysis:*\n_${leadData.analysis}_`
        }
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: { type: "plain_text", text: "View in Zoho CRM" },
            url: `https://crm.zoho.eu/crm/org881259000/tab/Leads/${leadData.recordId}`,
            style: "primary"
          }
        ]
      }
    ]
  };

  try {
    await axios.post(webhookUrl, payload);
    console.log('[Slack] Alert sent successfully.');
  } catch (error) {
    console.error('[Slack] Error sending alert:', error.message);
  }
};

module.exports = { sendSlackAlert };
