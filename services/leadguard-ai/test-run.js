const { listMessages, getMessageDetail } = require('../zoho-bridge/mail');
const { qualifyLead } = require('./qualifier');

const test = async () => {
  console.log('--- LeadGuard AI Test Run ---');
  try {
    const messages = await listMessages(3);
    console.log(`Fetched ${messages.length} messages.`);
    
    for (const msg of messages) {
      console.log(`\nAnalyzing: ${msg.subject} from ${msg.sender}`);
      const detail = await getMessageDetail(msg.messageId, msg.folderId);
      const result = await qualifyLead({
        subject: msg.subject,
        content: detail.content || detail.summary || msg.summary || '',
        sender: msg.sender
      });
      console.log(`Result: ${result.status} (Score: ${result.score}/10)`);
      console.log(`Analysis: ${result.analysis}`);
    }
  } catch (error) {
    console.error('Test Failed:', error.message);
    if (error.response) console.error(error.response.data);
  }
};

test();
