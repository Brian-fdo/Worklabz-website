import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const articles = [
  {
    slug: 'automate-lead-follow-ups',
    category: 'Lead Generation',
    readTime: '7 min read',
    title: 'How to Automate Lead Follow-Ups (So Nothing Ever Falls Through the Cracks)',
    excerpt: 'The average business loses 78% of leads due to slow or inconsistent follow-up. Here\'s how to build a system that responds instantly, nurtures automatically, and books calls while you sleep.',
    keywords: 'lead follow-up automation, automate sales follow-up, CRM automation, lead nurturing system',
    content: `Most businesses lose leads not because their product is bad — but because they're too slow. Studies show that responding to a lead within 5 minutes makes you 21x more likely to qualify them. Waiting 24 hours? That drops to near zero.

The solution isn't hiring another sales rep. It's building a system.

**The Anatomy of an Automated Lead Follow-Up System**

A properly built lead follow-up system has four components:

1. **Instant acknowledgement** — The second a lead fills in a form or sends an enquiry, they receive an email (personalised, not generic) within 30 seconds. This sets the expectation that your business is professional and responsive.

2. **Smart qualification** — Using logic-based scoring (based on company size, budget, urgency), your system automatically routes the lead into the right follow-up track. A solopreneur gets different messaging than a 50-person agency.

3. **Multi-step nurture sequence** — Over 7–14 days, the lead receives a series of emails sharing case studies, addressing common objections, and providing value. Each email is triggered by behaviour (did they open? click? visit your pricing page?).

4. **Calendar integration** — At the right moment, the system surfaces a booking link. High-intent leads get fast-tracked to a call; lower-intent leads continue to be nurtured.

**The Tools We Use at Worklabz**

We typically build these systems with Make.com as the automation backbone, HubSpot or Pipedrive as the CRM, and custom webhooks to connect your intake forms. The whole setup takes 1–2 weeks.

**What This Looks Like in Practice**

For one of our UK agency clients, we built a system where:
- New leads are scored within 60 seconds of submission
- High-score leads are tagged "Priority" and get an immediate personalised email
- A 7-day sequence follows, with a booking CTA on day 3
- If the lead books, the sequence stops and the CRM updates automatically

The result? Their lead response time went from 4 hours to 45 seconds. Booked calls increased by 62% in the first month.

**How to Get Started**

You don't need to build this yourself. Book a free Worklabz audit and we'll map out exactly what your current lead process looks like, where the leaks are, and what an automated system would save you.`,
    featured: true,
  },
  {
    slug: 'offshore-virtual-assistants-agencies',
    category: 'Offshore Operations',
    readTime: '8 min read',
    title: 'Offshore Virtual Assistants for Agencies: The Complete Guide (2025)',
    excerpt: 'Everything UK agencies need to know about hiring, managing, and getting results from offshore virtual assistants in Sri Lanka — without the horror stories.',
    keywords: 'offshore virtual assistants UK, virtual assistants Sri Lanka, offshore team agency, hire remote team',
    content: `Hiring locally is expensive. Hiring badly offshore is even more expensive. This guide will show you how to do it right.

**Why Sri Lanka?**

Sri Lanka has emerged as one of the world's strongest talent hubs for business operations. The reasons:
- **Education**: English-medium university education is standard. 92% university literacy rate.
- **Time zone**: 5.5 hours ahead of UK. This means your team starts work while you sleep and can be briefed each morning.
- **Cost**: A skilled operations manager in Sri Lanka earns £400–£700/month. The equivalent in the UK: £3,000–£4,500.
- **Culture**: Strong work ethic, high loyalty, low attrition when managed well.

**The Mistakes Agencies Make**

Most hiring failures with offshore teams come from three mistakes:

1. **Hiring individuals instead of managed teams** — Finding a freelancer on Upwork is a lottery. A managed team comes with quality assurance, training, and backup coverage.

2. **Not systematising first** — Offshore teams need clear SOPs (Standard Operating Procedures). If you can't document it, don't outsource it yet.

3. **Treating it like an experiment** — Companies who get the most from offshore talent commit properly. They integrate their offshore team into Slack, have regular standups, and treat them as colleagues.

**What Can You Actually Offshore?**

At Worklabz, our agency clients typically offshore:
- Client reporting and data pulling
- CRM management and lead entry
- Email management and first-line client communication
- Social media scheduling
- Project coordination and task management
- Invoice and payment chasing

**The Worklabz Model**

We don't just source talent — we manage it. Your Worklabz team comes with a UK-based architect who designs the SOPs, trains the team, and quality-checks output. You get a Slack channel, weekly performance reports, and no management overhead.

Most clients save £8,000–£15,000/month vs. equivalent UK hires.`,
    featured: false,
  },
  {
    slug: 'best-automation-tools-ecommerce-2025',
    category: 'E-Commerce',
    readTime: '9 min read',
    title: 'Best Automation Tools for E-Commerce Brands in 2025 (Ranked & Reviewed)',
    excerpt: 'From Shopify to Klaviyo, Make.com to Zapier — here\'s our honest ranking of the automation tools that actually move the needle for e-commerce brands.',
    keywords: 'ecommerce automation tools 2025, best Shopify automation, e-commerce workflow tools, automated ecommerce operations',
    content: `The average e-commerce brand uses 12 different tools. The best ones connect them all. Here's what we recommend after building automation systems for dozens of e-commerce clients.

**Tier 1: Must-Have (You're Losing Money Without These)**

**Make.com (formerly Integromat)**
The most powerful visual automation platform available. More flexible than Zapier, more user-friendly than n8n. We build 80% of our e-commerce automations on Make.com. It handles everything from inventory alerts to supplier emails.
- Cost: £9–£29/month
- Best for: Multi-step workflows, data transformation, API integrations

**Klaviyo**
The gold standard for email automation in e-commerce. If you're using Mailchimp, switch immediately. Klaviyo's segmentation and flow logic is unmatched.
- Cost: Based on contacts (free to £150/month for most brands)
- Best for: Post-purchase sequences, abandoned cart recovery, win-back campaigns

**Gorgias**
Customer service platform purpose-built for Shopify. Auto-tags tickets, suggests responses, and integrates with your order data. Cuts CS handling time by 40%.
- Cost: £10–£60/month
- Best for: E-commerce brands doing 500+ orders/month

**Tier 2: High-Impact Depending on Your Stack**

**Zapier** — Good for simple connections, expensive for complex flows
**Inventory Planner** — Essential for brands with SKU complexity
**ShipHero / Linnworks** — For multi-warehouse, multi-channel fulfilment

**What We Always Tell Clients**

Tools are only as good as the workflows behind them. The most common mistake we see is buying the right tool but building the wrong workflow. That's why every Worklabz engagement starts with mapping your current process before touching any software.

Book a free audit and we'll review your entire tech stack and tell you exactly what to add, remove, and connect.`,
    featured: false,
  },
  {
    slug: 'ai-automation-roi-what-to-expect',
    category: 'AI Automation',
    readTime: '6 min read',
    title: 'AI Automation ROI: What to Realistically Expect (And When)',
    excerpt: 'Before you invest in automation, you need honest numbers. Here\'s what Worklabz clients actually see — and the timeline for seeing it.',
    keywords: 'AI automation ROI, business automation return on investment, automation payback period, cost of AI automation',
    content: `Everyone talks about automation like it's a magic wand. Let's look at the real numbers.

**Typical ROI Timeline**

Week 1–2: Systems are built and deployed. No cost savings yet, but you start getting visibility on where time is being wasted.

Week 3–4: First automations go live. Usually this is lead follow-up or reporting. You'll immediately see time savings — but financial ROI takes a few weeks to compound.

Month 2–3: The savings become tangible. A team that was spending 15 hours/week on admin tasks is now spending 3. If that team costs £30k/year, you've freed up £22k of capacity.

Month 4–6: The compounding effect. Your team is doing more revenue-generating work, conversion rates improve, and the cost of the automation system looks tiny vs. the output.

**Real Numbers From Our Clients**

| Business Size | Monthly Cost (Worklabz) | Monthly Savings | Payback Period |
|---|---|---|---|
| 1–5 people | £1,500 | £3,000–£5,000 | Week 3 |
| 6–15 people | £2,500 | £6,000–£12,000 | Month 2 |
| 16–50 people | £4,000 | £15,000–£30,000 | Month 2 |

**What Drives The Variance?**

The biggest factor is how manual your current process is. Businesses that run entirely on spreadsheets and emails see the highest initial ROI because there's so much to automate. Businesses that already use some tools see more incremental gains.

**Is It Always Worth It?**

Not always. If your business processes are already highly systematised and your team is already efficient, the gains are smaller. That's why we start with a free audit — to tell you honestly whether automation will have material impact, and what that impact will be.`,
    featured: false,
  },
  {
    slug: 'build-scalable-offshore-team',
    category: 'Offshore Operations',
    readTime: '10 min read',
    title: 'How to Build a Scalable Offshore Team That Actually Works (Step-by-Step)',
    excerpt: 'A practical guide to building, managing, and scaling an offshore operations team — without the management headache, quality issues, or communication nightmares.',
    keywords: 'how to build offshore team, offshore team management, scale offshore operations, BPO team setup',
    content: `Building an offshore team is one of the highest-leverage things a growing business can do. Done well, it can 3x your operational capacity. Done badly, it costs you time, money, and sanity.

Here's the honest guide — based on what we've learned building and managing offshore teams for dozens of UK businesses.

**Step 1: Systematise Before You Outsource**

The most common mistake: outsourcing chaos. If you can't explain a task clearly to a colleague, you can't outsource it. Every role needs an SOP — a step-by-step document with examples, screenshots, and expected outputs.

This isn't glamorous work. But it's the foundation everything else sits on.

**Step 2: Define the Right Roles**

Not every role is suitable for offshore. The best candidates:
- Roles with clear, measurable outputs (processing, reporting, data management)
- Roles that follow defined processes (customer service, admin, scheduling)
- Roles that don't require deep cultural context (most operational roles)

The worst candidates for offshore:
- Senior strategic decision-making
- Client-facing relationships in highly regulated industries
- Roles that require unstructured creativity

**Step 3: Hire for Attitude, Train for Skills**

We scout for intelligence, English proficiency, and work ethic. Specific technical skills (like Shopify, HubSpot, or particular software) can be learned in days. Attitude cannot be trained.

**Step 4: Build Communication Infrastructure**

Successful offshore teams have:
- A dedicated Slack workspace (not email)
- Clear daily briefing format (what's priority today, what was done yesterday)
- Weekly video call for performance review and alignment
- A UK-based QA contact (at Worklabz, this is your Architect)

**Step 5: Start Small, Scale Fast**

Start with 1–2 roles to test the model. Once the SOPs, communication, and quality standards are proven, scaling to 5–10 people is straightforward.

**The Worklabz Managed Model**

We handle everything: recruitment, onboarding, training, day-to-day management, and quality assurance. You get a team that feels like your own, without any of the HR overhead.

Most clients are live with their offshore team in 4–6 weeks. Book a free audit to see what roles would be right for your business.`,
    featured: false,
  },
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [...new Set(articles.map(a => a.category))];
  const featured = articles[0];
  const rest = articles.slice(1);
  const displayed = selectedCategory ? rest.filter(a => a.category === selectedCategory) : rest;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-dark-surface min-h-screen pt-24 pb-16 font-outfit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-4">Knowledge Base</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Insights & <span className="text-gradient">Research</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Practical guides, case insights, and automation playbooks for agencies, e-commerce brands, and SaaS companies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${!selectedCategory ? 'bg-primary-600 text-white' : 'text-gray-400 border border-white/10 hover:border-white/20'}`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === cat ? 'bg-primary-600 text-white' : 'text-gray-400 border border-white/10 hover:border-white/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {!selectedCategory && (
          <motion.div {...fadeInUp} className="mb-12">
            <div className="bg-[#12151c] border border-white/5 rounded-3xl p-8 sm:p-12 hover:border-primary-500/20 transition-colors group">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">Featured</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20">{featured.category}</span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500"><Clock className="w-3 h-3" />{featured.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors leading-snug">{featured.title}</h2>
              <p className="text-gray-400 leading-relaxed mb-4 text-lg">{featured.excerpt}</p>
              <div className="text-xs text-gray-600 mb-6 italic">Keywords: {featured.keywords}</div>
              <div className="flex items-center gap-2 text-primary-400 font-bold text-sm group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Article Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {displayed.map((article, i) => (
            <motion.div
              key={article.slug}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="bg-[#12151c] border border-white/5 rounded-2xl p-7 hover:border-primary-500/20 transition-colors group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-1.5 text-xs font-bold text-primary-400 uppercase tracking-wider">
                  <Tag className="w-3 h-3" /> {article.category}
                </span>
                <span className="text-gray-600">·</span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-300 transition-colors leading-snug">{article.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">{article.excerpt}</p>
              <div className="flex items-center gap-2 text-primary-400 font-bold text-sm group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          {...fadeInUp}
          className="mt-16 bg-gradient-to-br from-primary-600/10 to-blue-600/10 border border-primary-500/20 rounded-3xl p-10 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-3">Want a custom automation playbook for your business?</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">Book a free audit and we'll build one specifically for you — mapping out every automation opportunity in your current workflow.</p>
          <Link to="/audit" className="inline-flex items-center gap-2 bg-white text-dark-surface font-bold px-7 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-xl">
            Get My Free Playbook <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
