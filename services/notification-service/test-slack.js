const { dispatchAlert } = require('./index');
require('dotenv').config({ path: '../zoho-bridge/.env' });

const testAlert = async () => {
  console.log('--- Firing Test Slack Alert ---');
  await dispatchAlert({
    score: 9,
    status: 'Qualified',
    email: 'john.doe@example.com',
    name: 'John Doe',
    company: 'Tech Startup Ltd.',
    analysis: 'Detected strong intent for AI Automation and Offshore BPO. Company size and requirements align with Worklabs\' core service offering.',
    matches: ['AI Automation', 'Offshore BPO'],
    recordId: '881259000000609007'
  });
  console.log('--- Done ---');
};

testAlert();
