const { verifyWorklabsSchema } = require('../zoho-bridge/schema');

async function check() {
  console.log('--- Worklabs Business Architecture: Schema Check ---');
  const result = await verifyWorklabsSchema();
  console.log('Verification Result:', result);
}

check();
