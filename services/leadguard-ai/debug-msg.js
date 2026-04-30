const { listMessages } = require('../zoho-bridge/mail');

const debug = async () => {
  try {
    const messages = await listMessages(1);
    console.log('--- MESSAGE METADATA ---');
    console.log(JSON.stringify(messages[0], null, 2));
  } catch (error) {
    console.error('Debug Failed:', error.message);
  }
};

debug();
