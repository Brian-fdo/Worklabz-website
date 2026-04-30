const config = require('./config.json');

/**
 * AI Lead Qualification Logic
 * In a production environment, this would call an LLM (OpenAI/Anthropic).
 * For now, we implement the logic based on configured criteria.
 */
const qualifyLead = async (message) => {
  console.log(`[Qualifier] Analyzing message from: ${message.sender}...`);
  
  // MOCK LLM ANALYSIS
  // In reality: 
  // const prompt = `Analyze this email based on: ${config.qualification_criteria}...`;
  // const analysis = await llm.complete(prompt);

  const content = (message.subject + " " + message.content).toLowerCase();
  const criteria = config.qualification_criteria;
  
  let score = 0;
  let matches = [];

  if (content.includes("automation") || content.includes("ai")) {
    score += 4;
    matches.push("AI Automation Interest");
  }
  if (content.includes("bpo") || content.includes("hiring") || content.includes("team")) {
    score += 3;
    matches.push("BPO/Staffing Need");
  }
  if (content.includes("manual") || content.includes("cost")) {
    score += 2;
    matches.push("Pain Point Highlighted");
  }

  const isQualified = score >= 5;

  return {
    email: message.sender,
    name: message.sender_name || message.sender.split('@')[0],
    score: score,
    status: isQualified ? 'Qualified' : 'Disqualified',
    analysis: `Detected Interest: ${matches.join(', ')}. Intent level scored ${score}/10 based on keywords and service alignment.`,
    message_preview: message.content.substring(0, 100)
  };
};

module.exports = { qualifyLead };
