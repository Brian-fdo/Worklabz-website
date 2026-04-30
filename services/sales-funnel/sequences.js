/**
 * Worklabs Sales Funnel - Email Sequence Templates
 * A 4-touch, 7-day sequence to book qualified leads into discovery calls.
 */

const getSequence = (lead) => [
  {
    day: 0,
    subject: `I noticed your enquiry about ${lead.matches && lead.matches[0] ? lead.matches[0] : 'our services'} — here's how we can help`,
    body: `
<p>Hi ${lead.name || 'there'},</p>

<p>Thank you for reaching out to Worklabs. I've just reviewed your enquiry and I can see you're looking at <strong>${lead.matches ? lead.matches.join(' and ') : 'scaling your operations'}</strong>.</p>

<p>We work with ambitious founders and SMEs exactly like yourself — helping them eliminate bottlenecks, scale with offshore AI-powered teams, and free up their time to focus on growth.</p>

<p>I'd love to show you exactly what's possible for your business. Would a quick 20-minute call work for you this week?</p>

<p><a href="https://calendly.com/worklabs/discovery" style="background:#6c63ff;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">Book a Free Discovery Call →</a></p>

<p>Looking forward to connecting,<br/>
<strong>Lovelyn Mendis</strong><br/>
Worklabs | Operations Lead<br/>
enquiry@worklabz.co.uk</p>
`
  },
  {
    day: 2,
    subject: `How Worklabs helped a startup save 60+ hours/month`,
    body: `
<p>Hi ${lead.name || 'there'},</p>

<p>I wanted to follow up and share a quick case study that might be relevant to you.</p>

<p>One of our clients — a growing e-commerce brand — was spending over <strong>60 hours a month</strong> on manual data entry and customer support. We deployed our offshore AI-assisted team within 2 weeks:</p>

<ul>
  <li>✅ 60+ hours reclaimed per month</li>
  <li>✅ Response time cut from 24hrs to 2hrs</li>
  <li>✅ £3,000/month saved vs. local staffing</li>
</ul>

<p>This is exactly the kind of result we deliver for businesses looking at <strong>${lead.matches ? lead.matches[0] : 'AI automation'}</strong>.</p>

<p>Are you free for a 20-minute call to explore this for your business?</p>

<p><a href="https://calendly.com/worklabs/discovery" style="background:#6c63ff;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">Book Your Call →</a></p>

<p>Best,<br/><strong>Lovelyn</strong></p>
`
  },
  {
    day: 5,
    subject: `Ready to take the next step? (Let's find a time)`,
    body: `
<p>Hi ${lead.name || 'there'},</p>

<p>I'm reaching out one more time because I genuinely believe Worklabs can make a significant impact for your business.</p>

<p>We have a limited number of onboarding slots this month for new clients. I'd hate for you to miss out.</p>

<p>Our 20-minute discovery call is <strong>completely free</strong> — no commitment, just a clear picture of what's possible.</p>

<p><a href="https://calendly.com/worklabs/discovery" style="background:#6c63ff;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">Reserve My Spot →</a></p>

<p>Talk soon,<br/><strong>Lovelyn</strong></p>
`
  },
  {
    day: 7,
    subject: `Was this helpful? (Last message from me)`,
    body: `
<p>Hi ${lead.name || 'there'},</p>

<p>I don't want to keep filling your inbox, so this will be my last message.</p>

<p>If the timing just isn't right, no problem at all — feel free to reach out whenever you're ready and I'll be happy to help.</p>

<p>If you <em>are</em> interested in exploring how Worklabs can help you scale smarter, the door is always open.</p>

<p><a href="https://calendly.com/worklabs/discovery">Book a call anytime →</a></p>

<p>Wishing you all the best,<br/><strong>Lovelyn Mendis</strong><br/>Worklabs</p>
`
  }
];

module.exports = { getSequence };
