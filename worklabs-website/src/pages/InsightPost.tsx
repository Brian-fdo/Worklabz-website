import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import indexData from '../content/blogs/index.json';

// Import all markdown files eagerly as raw text
const mdFiles = import.meta.glob('../content/blogs/*.md', { as: 'raw', eager: true });

export default function InsightPost() {
  const { slug } = useParams();
  const [content, setContent] = useState<string | null>(null);
  const [meta, setMeta] = useState<any>(null);

  useEffect(() => {
    // Find metadata from index.json
    const blogMeta = indexData.find((b: any) => b.slug === slug);
    if (blogMeta) {
      setMeta(blogMeta);
    }

    // Load content from imported files
    const filePath = `../content/blogs/${slug}.md`;
    if (mdFiles[filePath]) {
      // If it exists, it's a string because we used { as: 'raw', eager: true }
      setContent(mdFiles[filePath]);
    } else {
      setContent(null);
    }
  }, [slug]);

  if (!content) {
    return (
      <div className="min-h-screen bg-dark-surface pt-32 pb-16 font-outfit text-white text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link to="/insights" className="text-primary-400 hover:text-primary-300">
          <ArrowLeft className="w-4 h-4 inline mr-2" /> Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-dark-surface min-h-screen pt-24 pb-16 font-outfit">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/insights" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-primary-400 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Knowledge Base
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {meta && (
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-6 font-bold tracking-wide">
              <span>{new Date(meta.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 8 min read</span>
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to automate your business?</h3>
            <Link to="/audit" className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Get Your Free AI Audit
            </Link>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
