import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogPost, getBlogPost } from '../lib/blog';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setError('Post not found');
        setLoading(false);
        return;
      }

      try {
        const blogPost = await getBlogPost(slug);
        if (blogPost) {
          setPost(blogPost);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mushroom-loading mx-auto mb-4"></div>
          <p className="text-[var(--color-forest-brown)]">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="organic-card p-12 max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
              <span className="text-2xl">😕</span>
            </div>
            <h2 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-2">
              Post Not Found
            </h2>
            <p className="text-[var(--color-forest-brown)] mb-6">
              {error || 'The blog post you\'re looking for doesn\'t exist.'}
            </p>
            <Link to="/blog" className="cartoon-button-primary">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link 
          to="/blog"
          className="inline-flex items-center text-[var(--color-electric-blue)] hover:text-[var(--color-deep-purple)] transition-colors duration-300"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className="organic-card p-8 lg:p-12">
        {/* Featured Image */}
        <div className="relative overflow-hidden rounded-xl mb-8">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-64 sm:h-80 object-cover"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/general/hero-mushroom-psychedelic.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-forest-brown-dark)] mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-forest-brown)]/70 mb-6">
            <time dateTime={post.date} className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(post.date)}
            </time>
            <span>•</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              by {post.author}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[var(--color-earth-green)]/10 text-[var(--color-earth-green-dark)] text-sm rounded-full border border-[var(--color-earth-green)]/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="markdown-content">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-[var(--color-forest-brown-dark)] mb-6 mt-8 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-[var(--color-forest-brown-dark)] mb-4 mt-8">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-3 mt-6">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 text-[var(--color-forest-brown)] leading-relaxed">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="text-[var(--color-forest-brown-dark)] font-semibold">
                  {children}
                </strong>
              ),
              ul: ({ children }) => (
                <ul className="mb-4 pl-6 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-4 pl-6 space-y-2 list-decimal">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-[var(--color-forest-brown)] leading-relaxed">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[var(--color-electric-blue)] pl-4 italic bg-blue-50/50 p-4 rounded-r-xl mb-4">
                  {children}
                </blockquote>
              ),
              em: ({ children }) => (
                <em className="italic text-[var(--color-forest-brown)]/80">
                  {children}
                </em>
              )
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Navigation */}
      <div className="mt-12 text-center">
        <Link to="/blog" className="cartoon-button-secondary">
          ← More Blog Posts
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;
