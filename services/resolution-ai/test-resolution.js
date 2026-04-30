const { processSupportTicket } = require('./index');

const runTests = async () => {
  console.log('--- STARTING RESOLUTION AI TESTS ---');

  // Test Case 1: Simple L1 Query (Password Reset)
  await processSupportTicket({
    sender: 'user1@example.com',
    sender_name: 'Alice',
    subject: 'Cannot login',
    content: 'Hi, I forgot my password and am locked out of the dashboard. Can you help me reset it?'
  });


  // Test Case 2: Escalate (Feature Request - No angry sentiment, but not L1 resolvable)
  await processSupportTicket({
    sender: 'user2@example.com',
    sender_name: 'Bob',
    subject: 'New idea for the app',
    content: 'It would be great if you could add a feature to export reports to PDF.'
  });

  // Test Case 3: Escalate (Angry Customer - Complex)
  await processSupportTicket({
    sender: 'user3@example.com',
    sender_name: 'Charlie',
    subject: 'URGENT: Broken System',
    content: 'Everything is broken! This is terrible and completely unacceptable. I am furious and want a refund right now. Fix this immediately!'
  });

  console.log('--- TESTS COMPLETE ---');
};

runTests();
