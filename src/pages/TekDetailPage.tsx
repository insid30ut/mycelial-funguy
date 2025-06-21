import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { TekTutorial, getTek, getDifficultyColor } from '../lib/teks';

const TekDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [tek, setTek] = useState<TekTutorial | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTek = async () => {
      if (!slug) {
        setError('Technique not found');
        setLoading(false);
        return;
      }

      try {
        const tekTutorial = await getTek(slug);
        if (tekTutorial) {
          setTek(tekTutorial);
        } else {
          setError('Technique not found');
        }
      } catch (err) {
        console.error('Error loading tek:', err);
        setError('Failed to load technique');
      } finally {
        setLoading(false);
      }
    };

    loadTek();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mushroom-loading mx-auto mb-4"></div>
          <p className="text-[var(--color-forest-brown)]">Loading technique...</p>
        </div>
      </div>
    );
  }

  if (error || !tek) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="organic-card p-12 max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
              <span className="text-2xl">😕</span>
            </div>
            <h2 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-2">
              Technique Not Found
            </h2>
            <p className="text-[var(--color-forest-brown)] mb-6">
              {error || 'The technique you\'re looking for doesn\'t exist.'}
            </p>
            <Link to="/teks" className="cartoon-button-primary">
              ← Back to Techniques
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const difficultyColor = getDifficultyColor(tek.difficulty);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link 
          to="/teks"
          className="inline-flex items-center text-[var(--color-electric-blue)] hover:text-[var(--color-deep-purple)] transition-colors duration-300"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Techniques
        </Link>
      </div>

      {/* Article */}
      <article className="organic-card p-8 lg:p-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-forest-brown-dark)] mb-6 leading-tight">
            {tek.title}
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`difficulty-badge ${difficultyColor}`}>
              {tek.difficulty}
            </span>
            
            <div className="flex items-center text-sm text-[var(--color-forest-brown)]/70">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              {tek.time}
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-[var(--color-forest-brown)] leading-relaxed mb-8">
            {tek.description}
          </p>

          {/* Materials List */}
          <div className="bg-gradient-to-r from-[var(--color-warm-cream-light)] to-[var(--color-warm-cream)] p-6 rounded-xl border border-[var(--color-earth-green)]/20">
            <h3 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              What You'll Need
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tek.materials.map((material, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--color-electric-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-forest-brown)]">{material}</span>
                </div>
              ))}
            </div>
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
                <h2 className="text-2xl font-bold text-[var(--color-forest-brown-dark)] mb-4 mt-8 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-electric-blue)] to-[var(--color-deep-purple)] flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">●</span>
                  </div>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-3 mt-6">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-lg font-semibold text-[var(--color-forest-brown-dark)] mb-2 mt-4">
                  {children}
                </h4>
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
                <blockquote className="border-l-4 border-[var(--color-bright-orange)] pl-4 bg-orange-50/50 p-4 rounded-r-xl mb-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-[var(--color-bright-orange)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div className="text-[var(--color-forest-brown-dark)]">
                      {children}
                    </div>
                  </div>
                </blockquote>
              ),
              em: ({ children }) => (
                <em className="italic text-[var(--color-forest-brown)]/80">
                  {children}
                </em>
              )
            }}
          >
            {tek.content}
          </ReactMarkdown>
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-[var(--color-earth-green)]/20 text-center">
          <div className="organic-card p-6 bg-gradient-to-r from-[var(--color-electric-blue)]/10 to-[var(--color-deep-purple)]/10">
            <h3 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-2">
              Try This Technique!
            </h3>
            <p className="text-[var(--color-forest-brown)] mb-4">
              Have you tried this technique? Share your results and any modifications you discovered!
            </p>
            <Link to="/about" className="cartoon-button-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <div className="mt-12 text-center">
        <Link to="/teks" className="cartoon-button-secondary">
          ← More Techniques
        </Link>
      </div>
    </div>
  );
};

export default TekDetailPage;
