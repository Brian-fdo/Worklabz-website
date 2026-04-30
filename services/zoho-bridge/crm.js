const axios = require('axios');
const { getAccessToken } = require('./auth');
require('dotenv').config();

/**
 * Upsert a Lead in Zoho CRM
 */
const upsertLead = async (leadData) => {
  const token = await getAccessToken();
  
  // Lead Data Format: { Last_Name: '...', Email: '...', Company: '...', Description: '...' }
  const data = {
    data: [leadData],
    trigger: ['workflow']
  };

  const response = await axios.post(`${process.env.ZOHO_API_URL}/Leads/upsert`, data, {
    headers: { 
      Authorization: `Zoho-oauthtoken ${token}`,
      'Content-Type': 'application/json'
    }
  });
  
  return response.data;
};

module.exports = { upsertLead };
