const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const TOKEN_CACHE_PATH = path.join(__dirname, '.token_cache.json');

/**
 * Centrally manages Zoho OAuth 2.0 Access Tokens with Persistent Caching.
 */
const getAccessToken = async () => {
  const now = Date.now();
  let cache = {};

  // 1. Try to load from file cache
  if (fs.existsSync(TOKEN_CACHE_PATH)) {
    try {
      cache = JSON.parse(fs.readFileSync(TOKEN_CACHE_PATH, 'utf8'));
      if (cache.accessToken && now < cache.expiry - 60000) {
        return cache.accessToken;
      }
    } catch (e) {
      console.warn('[Auth] Token cache file corrupted, ignoring.');
    }
  }

  console.log('[Auth] Requesting fresh Zoho Access Token...');
  
  try {
    const params = new URLSearchParams();
    params.append('refresh_token', process.env.ZOHO_REFRESH_TOKEN);
    params.append('client_id', process.env.ZOHO_CLIENT_ID);
    params.append('client_secret', process.env.ZOHO_CLIENT_SECRET);
    params.append('grant_type', 'refresh_token');

    const response = await axios.post(`${process.env.ZOHO_ACCOUNTS_URL}/oauth/v2/token`, params);
    
    if (response.data.access_token) {
      const newCache = {
        accessToken: response.data.access_token,
        expiry: now + (response.data.expires_in * 1000)
      };
      
      // 2. Save to file cache
      fs.writeFileSync(TOKEN_CACHE_PATH, JSON.stringify(newCache), 'utf8');
      
      return newCache.accessToken;
    } else {
      throw new Error(`Failed to get access token: ${JSON.stringify(response.data)}`);
    }
  } catch (error) {
    console.error('[Auth] Error fetching access token:', error.response ? error.response.data : error.message);
    throw error;
  }
};

module.exports = { getAccessToken };
