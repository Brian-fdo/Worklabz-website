import { runSEOAgent } from './index.js';

runSEOAgent().catch(err => {
    console.error("❌ SEO Engine Failed:", err);
});
