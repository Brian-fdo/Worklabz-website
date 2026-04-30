const axios = require('axios');
const { getAccessToken } = require('./auth');
require('dotenv').config();

/**
 * Note: Modifying CRM layouts via API often requires ZohoCRM.settings.ALL.
 * This service ensures LeadGuard knows the correct field names for the Worklabs schema.
 */

/**
 * Verify if the required custom fields exist in the Leads module.
 * If they don't exist, we will log a warning for the user to create them,
 * or attempt creation if scopes allow.
 */
const verifyWorklabsSchema = async () => {
  const token = await getAccessToken();
  console.log(`[Schema] Verifying Worklabs CRM Fields...`);

  try {
    const response = await axios.get(`${process.env.ZOHO_API_URL}/settings/fields`, {
      headers: { Authorization: `Zoho-oauthtoken ${token}` },
      params: { module: 'Leads' }
    });

    const fields = response.data.fields;
    const requiredFields = [
      'Service_Interest',
      'AI_Qualification_Score',
      'AI_Analysis'
    ];

    const missing = requiredFields.filter(req => !fields.find(f => f.api_name === req));

    if (missing.length > 0) {
      console.warn(`[Schema] WARNING: Missing fields in Zoho CRM: ${missing.join(', ')}`);
      console.log(`[Schema] Please ensure these fields are created in the Leads module as per the implementation plan.`);
    } else {
      console.log(`[Schema] SUCCESS: All Worklabs custom fields verified.`);
    }

    return { success: missing.length === 0, missing };
  } catch (error) {
    console.error(`[Schema] Error verifying fields:`, error.message);
    // If settings scope is missing, we proceed assuming fields are created/being-created
    return { success: false, error: 'Scope or API issue' };
  }
};

module.exports = { verifyWorklabsSchema };
