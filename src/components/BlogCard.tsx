import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <article className="organic-card p-6 h-full">
        {/* Featured Image */}
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-48 object-cover hover-lift"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/general/hero-mushroom-psychedelic.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Post Content */}
        <div className="space-y-3">
          {/* Title */}
          <h2 className="text-xl font-bold text-[var(--color-forest-brown-dark)] group-hover:text-[var(--color-electric-blue)] transition-colors duration-300 line-clamp-2">
            {post.title}
          </h2>

          {/* Date and Author */}
          <div className="flex items-center space-x-4 text-sm text-[var(--color-forest-brown)]/70">
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span>•</span>
            <span>by {post.author}</span>
          </div>

          {/* Excerpt */}
          <p className="text-[var(--color-forest-brown)] leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-[var(--color-earth-green)]/10 text-[var(--color-earth-green-dark)] text-xs rounded-full border border-[var(--color-earth-green)]/20"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>

          {/* Read More Link */}
          <div className="pt-4">
            <span className="inline-flex items-center text-[var(--color-electric-blue)] font-medium group-hover:text-[var(--color-deep-purple)] transition-colors duration-300">
              Read more
              <svg 
                className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
