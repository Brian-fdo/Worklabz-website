const { getAccessToken } = require('./auth');
const axios = require('axios');
require('dotenv').config();

const verifyLead = async (leadId) => {
  const token = await getAccessToken();
  try {
    const response = await axios.get(`${process.env.ZOHO_API_URL}/Leads/${leadId}`, {
      headers: { Authorization: `Zoho-oauthtoken ${token}` }
    });
    console.log('--- LEAD VERIFICATION ---');
    console.log(`Status: ${response.status}`);
    console.log(`Data: ${JSON.stringify(response.data.data[0], null, 2)}`);
  } catch (error) {
    console.error('Lead Verification Failed:', error.message);
    if (error.response) {
      console.error(JSON.stringify(error.response.data, null, 2));
    }
  }
};

const leadId = '881259000000609007';
verifyLead(leadId);
