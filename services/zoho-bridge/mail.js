const axios = require('axios');
const { getAccessToken } = require('./auth');
require('dotenv').config();

let cachedAccountId = null;

/**
 * Get the specific Account ID for Zoho Mail (with caching)
 */
const getAccountId = async () => {
  if (cachedAccountId) return cachedAccountId;
  
  const token = await getAccessToken();
  const response = await axios.get(`${process.env.ZOHO_MAIL_API_URL}/accounts`, {
    headers: { Authorization: `Zoho-oauthtoken ${token}` }
  });
  cachedAccountId = response.data.data[0].accountId;
  return cachedAccountId;
};

/**
 * List recent messages from the inbox
 */
const listMessages = async (limit = 10) => {
  const token = await getAccessToken();
  const accountId = await getAccountId();
  
  const response = await axios.get(`${process.env.ZOHO_MAIL_API_URL}/accounts/${accountId}/messages/view`, {
    headers: { Authorization: `Zoho-oauthtoken ${token}` },
    params: { limit }
  });
  return response.data.data; 
};

/**
 * Get full content of a specific message
 */
const getMessageDetail = async (messageId, folderId) => {
  const token = await getAccessToken();
  const accountId = await getAccountId();

  const url = folderId 
    ? `${process.env.ZOHO_MAIL_API_URL}/accounts/${accountId}/folders/${folderId}/messages/${messageId}/content`
    : `${process.env.ZOHO_MAIL_API_URL}/accounts/${accountId}/messages/${messageId}/content`;

  const response = await axios.get(url, {
    headers: { Authorization: `Zoho-oauthtoken ${token}` }
  });
  return response.data.data; 
};

/**
 * Send a reply or new email
 */
const sendEmail = async (to, subject, content) => {
  const token = await getAccessToken();
  const accountId = await getAccountId();
  
  // Fetch primary email for 'fromAddress'
  const accounts = await axios.get(`${process.env.ZOHO_MAIL_API_URL}/accounts`, {
    headers: { Authorization: `Zoho-oauthtoken ${token}` }
  });
  const from = accounts.data.data[0].mailboxAddress;

  const data = {
    fromAddress: from,
    toAddress: to,
    subject: subject,
    content: content
  };
  
  const response = await axios.post(`${process.env.ZOHO_MAIL_API_URL}/accounts/${accountId}/messages`, data, {
    headers: { 
      Authorization: `Zoho-oauthtoken ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

module.exports = { listMessages, getMessageDetail, sendEmail };
