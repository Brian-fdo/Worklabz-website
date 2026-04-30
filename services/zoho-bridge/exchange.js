require('dotenv').config();
const axios = require('axios');

const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_ACCOUNTS_URL = process.env.ZOHO_ACCOUNTS_URL; // e.g., https://accounts.zoho.com

const exchangeGrantToken = async (grantToken) => {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', ZOHO_CLIENT_ID);
    params.append('client_secret', ZOHO_CLIENT_SECRET);
    params.append('code', grantToken);
    
    if (process.env.ZOHO_REDIRECT_URI) {
      params.append('redirect_uri', process.env.ZOHO_REDIRECT_URI);
    }

    console.log('Exchanging Grant Token for Access/Refresh Tokens...');
    
    const response = await axios.post(`${ZOHO_ACCOUNTS_URL}/oauth/v2/token`, params);
    
    if (response.data.error) {
      console.error('Zoho Error:', response.data.error);
      return;
    }

    console.log('-----------------------------------');
    console.log('SUCCESS! Tokens received:');
    console.log('Access Token:', response.data.access_token);
    console.log('Refresh Token:', response.data.refresh_token);
    console.log('API Domain:', response.data.api_domain);
    console.log('-----------------------------------');
    console.log('\nSAVE THIS REFRESH TOKEN in your .env file as ZOHO_REFRESH_TOKEN');
    
  } catch (error) {
    console.error('Exchange Failed:', error.response ? error.response.data : error.message);
  }
};

const grantToken = process.argv[2];
if (!grantToken) {
  console.log('Usage: node exchange.js <GRANT_TOKEN>');
  process.exit(1);
}

exchangeGrantToken(grantToken);
