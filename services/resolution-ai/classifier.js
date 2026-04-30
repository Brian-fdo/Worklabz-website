const kb = require('./knowledge-base.json');

/**
 * MOCK LLM CLASSIFIER for Resolution AI
 * In production, this would call an LLM (e.g., OpenAI/Gemini) with a prompt like:
 * "Analyze this support ticket. Return Intent (Billing, Password_Reset, Feature_Request, Complex) and Sentiment (Positive, Neutral, Angry)."
 */
const classifyTicket = async (ticketContent) => {
  const text = ticketContent.toLowerCase();
  
  // 1. Sentiment Analysis (Mock)
  let sentiment = 'Neutral';
  const angryWords = ['angry', 'unacceptable', 'cancel', 'lawsuit', 'terrible', 'broken', 'furious', 'refund'];
  if (angryWords.some(word => text.includes(word))) {
    sentiment = 'Angry';
  }

  // 2. Intent Classification (Mock TF-IDF / Keyword matching)
  let bestIntent = 'Complex'; // Default to complex if no clear match
  let maxMatches = 0;
  let recommendedResolution = null;

  for (const faq of kb.faqs) {
    let matches = 0;
    faq.keywords.forEach(kw => {
      if (text.includes(kw.toLowerCase())) matches++;
    });

    if (matches > maxMatches) {
      maxMatches = matches;
      bestIntent = faq.intent;
      recommendedResolution = faq.resolution;
    }
  }

  // Require at least 1 keyword match to consider it L1 resolvable
  if (maxMatches === 0) {
    bestIntent = 'Complex';
    recommendedResolution = null;
  }

  return {
    sentiment,
    intent: bestIntent,
    suggested_reply: recommendedResolution,
    requires_escalation: sentiment === 'Angry' || bestIntent === 'Complex'
  };
};

module.exports = { classifyTicket };
