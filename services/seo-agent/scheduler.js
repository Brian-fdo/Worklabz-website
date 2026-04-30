import cron from 'node-cron';
import { runSEOAgent } from './index.js';

console.log("⏰ SEO Background Scheduler Initialized.");
console.log("📅 Schedule: Running every Tuesday and Thursday at 09:00 AM.");

// The cron string '0 9 * * 2,4' translates to:
// 0th minute, 9th hour (9:00 AM), every month, every day of month, on Tuesday (2) and Thursday (4)
cron.schedule('0 9 * * 2,4', async () => {
    console.log("⏱️ Cron Triggered: Booting up Autonomous SEO Engine...");
    try {
        await runSEOAgent();
        console.log("✅ Scheduled SEO Run Completed.");
    } catch (err) {
        console.error("❌ Scheduled SEO Run Failed:", err);
    }
});
