import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const CLUSTERS_PATH = path.join(process.cwd(), 'clusters.json');
const BLOGS_INDEX_PATH = path.resolve(process.cwd(), '../../worklabs-website/src/content/blogs/index.json');
const BLOGS_DIR = path.resolve(process.cwd(), '../../worklabs-website/src/content/blogs');

async function callOpenAI(model, prompt) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: model,
            messages: [{ role: 'user', content: prompt }]
        })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(`OpenAI Error: ${JSON.stringify(data)}`);
    return data.choices[0].message.content;
}

async function callPerplexity(prompt) {
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${PERPLEXITY_API_KEY}`
        },
        body: JSON.stringify({
            model: 'sonar-pro',
            messages: [{ role: 'user', content: prompt }]
        })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(`Perplexity Error: ${JSON.stringify(data)}`);
    return data.choices[0].message.content;
}

async function callAnthropic(prompt) {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': ANTHROPIC_API_KEY,
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: 'claude-3-5-sonnet-20240620',
            max_tokens: 4000,
            messages: [{ role: 'user', content: prompt }]
        })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(`Anthropic Error: ${JSON.stringify(data)}`);
    return data.content[0].text;
}

async function runSEOAgent() {
    console.log("🚀 Starting WorkLabs Autonomous SEO Engine...");

    // 1. Read Clusters
    const clusters = JSON.parse(fs.readFileSync(CLUSTERS_PATH, 'utf-8'));
    const pendingClusterIndex = clusters.findIndex(c => !c.completed);

    if (pendingClusterIndex === -1) {
        console.log("✅ All SEO clusters have been completed. No work to do.");
        return;
    }

    const cluster = clusters[pendingClusterIndex];
    console.log(`\n🎯 Target Cluster Found: [${cluster.cluster}]`);
    console.log(`Keywords: ${cluster.keywords.join(', ')}`);

    // 2. Preliminary Plan (OpenAI o1-mini)
    console.log("\n⏳ Generating Preliminary Outline (o1-mini)...");
    const outlinePrompt = `You are a world-class SEO planner. Create a preliminary outline for a blog post based on these requirements:
Cluster: ${cluster.cluster}
Intent: ${cluster.intent}
Primary Keyword: ${cluster.primaryKeyword}
Other Keywords: ${cluster.keywords.join(', ')}

Output a highly structured, logical outline with headings.`;
    const preliminaryPlan = await callOpenAI('gpt-4o', outlinePrompt);
    console.log("✅ Preliminary Outline Generated.");

    // 3. Internet Research (Perplexity Sonar Pro)
    console.log("\n⏳ Conducting Live Internet Research & Sourcing (Perplexity)...");
    const researchPrompt = `You are an expert researcher helping build an authoritative SEO blog post.
Here is the preliminary plan:
${preliminaryPlan}

Please scour the live internet for factual data, statistics, recent news, and high-authority external sources (like Forbes, Gartner, HBR, etc.) related to this plan. Provide detailed research notes and exact URLs we can cite.`;
    const researchFindings = await callPerplexity(researchPrompt);
    console.log("✅ Research Completed.");

    // 4. Detailed Plan (OpenAI gpt-4o)
    console.log("\n⏳ Structuring Detailed Blog Blueprint (gpt-4o)...");
    const detailedPlanPrompt = `You are a master SEO architect. Merge the following preliminary plan and research findings into an incredibly detailed, comprehensive master plan for a blog post.
Preliminary Plan:
${preliminaryPlan}

Research Findings & Citations:
${researchFindings}

Provide the final, exact structure the copywriter must follow.`;
    const detailedPlan = await callOpenAI('gpt-4o', detailedPlanPrompt);
    console.log("✅ Detailed Blueprint Generated.");

    // 5. Copywriting (Claude 3.5 Sonnet)
    console.log("\n⏳ Writing the Blog Post (Claude 3.5 Sonnet)...");
    const copyPrompt = `You are an elite, world-class copywriter for a BPO & AI Automation agency called WorkLabs.
Your task is to write an engaging, high-converting, 2000+ word SEO blog post in Markdown format based EXACTLY on this detailed plan.

Detailed Plan:
${detailedPlan}

Requirements:
- Use short, punchy paragraphs.
- Inject the primary keyword (${cluster.primaryKeyword}) naturally, along with secondary keywords (${cluster.keywords.join(', ')}).
- Embed the external URL links from the research directly into the text as Markdown links (e.g. [According to Gartner](https://...)).
- The tone should be professional, visionary, yet highly accessible (Grade 8 reading level).
- Do not output any preamble or conversational filler. ONLY output the raw Markdown blog post starting with the # H1 title.`;
    let blogPost = await callOpenAI('gpt-4o', copyPrompt);
    console.log("✅ Blog Post Written.");

    // 6. Internal Linking (OpenAI gpt-4o)
    console.log("\n⏳ Injecting Internal Links (gpt-4o)...");
    const pastBlogs = JSON.parse(fs.readFileSync(BLOGS_INDEX_PATH, 'utf-8'));
    
    if (pastBlogs.length > 0) {
        const linkPrompt = `You are an SEO internal linking expert. 
Here is a newly written blog post:
${blogPost}

Here is a list of previously published blogs on our website:
${JSON.stringify(pastBlogs, null, 2)}

Your task is to naturally inject 2-3 internal Markdown links into the new blog post text, linking to the relevant previous blogs. 
Format: [relevant anchor text](/insights/SLUG_OF_PAST_BLOG)
DO NOT force links if they don't make sense. DO NOT change the rest of the text. ONLY output the final markdown text.`;
        blogPost = await callOpenAI('gpt-4o', linkPrompt);
        console.log("✅ Internal Links Injected.");
    } else {
        console.log("⏩ Skipping Internal Links (No previous blogs found).");
    }

    // 7. Save and Update Index
    console.log("\n⏳ Publishing to WorkLabs Website Codebase...");
    
    // Generate a simple slug from the title or cluster
    const slug = cluster.primaryKeyword.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const filePath = path.join(BLOGS_DIR, `${slug}.md`);
    fs.writeFileSync(filePath, blogPost, 'utf-8');

    // Update Index
    const titleMatch = blogPost.match(/^#\s+(.*)/m);
    const title = titleMatch ? titleMatch[1] : cluster.cluster;
    
    pastBlogs.push({
        id: Date.now().toString(),
        slug: slug,
        title: title,
        date: new Date().toISOString().split('T')[0],
        summary: cluster.intent
    });
    fs.writeFileSync(BLOGS_INDEX_PATH, JSON.stringify(pastBlogs, null, 2), 'utf-8');

    // Update Clusters
    clusters[pendingClusterIndex].completed = true;
    fs.writeFileSync(CLUSTERS_PATH, JSON.stringify(clusters, null, 2), 'utf-8');

    console.log(`🎉 SUCCESS! Blog Post saved to: /src/content/blogs/${slug}.md`);
}

export { runSEOAgent };
