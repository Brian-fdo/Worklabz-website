const { sendSlackAlert } = require('./slack');
const { sendEmailAlert } = require('./email');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../zoho-bridge/.env') });

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || 'REPLACE_WITH_YOUR_WEBHOOK';
const ALERT_EMAIL = process.env.ALERT_EMAIL || 'enquiry@worklabz.co.uk';
const MIN_SCORE_FOR_ALERT = parseInt(process.env.MIN_SCORE_FOR_ALERT) || 7;

/**
 * Dispatch alerts across all active channels.
 */
const dispatchAlert = async (leadData) => {
  if (leadData.score < MIN_SCORE_FOR_ALERT) {
    console.log(`[Notification] Lead score ${leadData.score} below threshold. Skipping alerts.`);
    return;
  }

  console.log(`[Notification] Dispatching alerts for high-value lead: ${leadData.email}...`);

  await Promise.all([
    sendSlackAlert(SLACK_WEBHOOK_URL, leadData),
    sendEmailAlert(ALERT_EMAIL, leadData)
  ]);
};

module.exports = { dispatchAlert };
