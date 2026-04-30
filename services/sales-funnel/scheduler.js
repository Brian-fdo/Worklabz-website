const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../zoho-bridge/.env') });
const { getSequence } = require('./sequences');
const { sendEmail } = require('../zoho-bridge/mail');

/**
 * Schedule a multi-touch email sequence for a qualified lead.
 * Uses setTimeout-based scheduling for process-persistent sequences.
 */
const enrollInFunnel = (lead) => {
  const sequence = getSequence(lead);

  console.log(`[SalesFunnel] Enrolling ${lead.email} in 7-day sequence (${sequence.length} touches)...`);

  sequence.forEach(touch => {
    const delayMs = touch.day * 24 * 60 * 60 * 1000; // Convert days to milliseconds

    setTimeout(async () => {
      try {
        console.log(`[SalesFunnel] Sending Touch ${touch.day === 0 ? 'Day 0 (Instant)' : `Day ${touch.day}`} to ${lead.email}...`);
        await sendEmail(lead.email, touch.subject, touch.body);
        console.log(`[SalesFunnel] ✅ Touch Day ${touch.day} sent.`);
      } catch (error) {
        console.error(`[SalesFunnel] ❌ Failed Day ${touch.day} for ${lead.email}:`, error.message);
      }
    }, delayMs);

    if (touch.day === 0) {
      console.log(`[SalesFunnel] Touch Day 0: Queued (immediate).`);
    } else {
      console.log(`[SalesFunnel] Touch Day ${touch.day}: Scheduled in ${touch.day} days.`);
    }
  });
};

module.exports = { enrollInFunnel };
