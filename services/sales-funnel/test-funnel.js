const { startFunnel } = require('./index');

console.log('--- TEST SALES FUNNEL ORCHESTRATION ---');

const testLead = {
  email: 'enquiry@worklabz.co.uk', // Real email to verify delivery
  name: 'Test Founder',
  company: 'FastGrow Inc',
  matches: ['AI Automation', 'Offshore BPO']
};

startFunnel(testLead);

// We keep the process alive slightly longer so Day 0 triggers
setTimeout(() => {
  console.log('Test logic completed. Real funnel would stay active.');
}, 2000);
