import React from 'react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[var(--color-electric-blue)]/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[var(--color-neon-pink)]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--color-deep-purple)]/5 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold psychedelic-heading mb-8">
            Mycelial FunGuy
          </h1>

          {/* Hero Image */}
          <div className="relative max-w-md mx-auto mb-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="/images/general/hero-mushroom-psychedelic.jpg"
                alt="Psychedelic mushroom illustration"
                className="w-full h-64 object-cover"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/general/organic-texture.jpeg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-blue-400/20"></div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg sm:text-xl text-[var(--color-forest-brown)] leading-relaxed font-medium">
              Welcome to my personal journey through the fascinating world of mushroom cultivation. 
              Here I share my hands-on experiences, discoveries, and favorite products that have 
              transformed my growing practice. Whether you're a curious beginner or seasoned cultivator, 
              join me in exploring the magical realm of fungi.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/blog" className="cartoon-button-primary">
              <span className="flex items-center">
                📖 Explore the Blog
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            
            <Link to="/teks" className="cartoon-button-secondary">
              <span className="flex items-center">
                🔬 Learn Techniques
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Blog Highlight */}
            <div className="organic-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-electric-blue)] to-[var(--color-deep-purple)] flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-2">
                Personal Stories
              </h3>
              <p className="text-[var(--color-forest-brown)] text-sm">
                Read about my cultivation adventures, successes, failures, and everything I've learned along the way.
              </p>
            </div>

            {/* Teks Highlight */}
            <div className="organic-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-bright-orange)] to-[var(--color-neon-pink)] flex items-center justify-center">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-2">
                Proven Techniques
              </h3>
              <p className="text-[var(--color-forest-brown)] text-sm">
                Step-by-step tutorials and techniques that I've tested and refined in my own growing practice.
              </p>
            </div>

            {/* Community Highlight */}
            <div className="organic-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-earth-green)] to-[var(--color-forest-brown)] flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-2">
                Growing Community
              </h3>
              <p className="text-[var(--color-forest-brown)] text-sm">
                Connect with fellow cultivators and share your own experiences in this wonderful journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
