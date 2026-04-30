const { getAccessToken } = require('./auth');
const axios = require('axios');
require('dotenv').config();

const getPrimaryEmail = async () => {
  const token = await getAccessToken();
  const response = await axios.get(`${process.env.ZOHO_MAIL_API_URL}/accounts`, {
    headers: { Authorization: `Zoho-oauthtoken ${token}` }
  });
  console.log('--- ZOHO ACCOUNTS ---');
  console.log(JSON.stringify(response.data.data, null, 2));
};

getPrimaryEmail();
