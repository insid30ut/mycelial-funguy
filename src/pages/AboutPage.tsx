import React from 'react';
import ContactForm from '../components/ContactForm';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold psychedelic-heading mb-6">
          About the FunGuy
        </h1>
        <p className="text-lg text-[var(--color-forest-brown)] max-w-2xl mx-auto leading-relaxed">
          Welcome to my corner of the mycological universe! Let me share my journey from curious beginner to passionate cultivator.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Personal Story */}
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--color-electric-blue)] shadow-lg mx-auto lg:mx-0">
                <img
                  src="/images/general/hero-mushroom-psychedelic.jpg"
                  alt="The FunGuy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/general/organic-texture.jpeg';
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-neon-pink)] to-[var(--color-deep-purple)] flex items-center justify-center">
                <span className="text-2xl">🍄</span>
              </div>
            </div>
          </div>

          {/* Personal Story */}
          <div className="organic-card p-8">
            <h2 className="text-3xl font-bold text-[var(--color-forest-brown-dark)] mb-6">
              My Journey into Mycology
            </h2>
            
            <div className="space-y-6 text-[var(--color-forest-brown)] leading-relaxed">
              <p>
                My fascination with mushrooms began during a particularly stressful period in my life. I was working in tech, 
                spending long hours staring at screens, feeling disconnected from the natural world. A friend gave me a simple 
                oyster mushroom kit for my birthday, and everything changed.
              </p>
              
              <p>
                Watching those first tiny pins emerge from what looked like coffee grounds was pure magic. There was something 
                deeply satisfying about nurturing life, working with my hands, and being part of a process that had been 
                sustaining humanity for thousands of years. I was hooked immediately.
              </p>
              
              <p>
                What started as a single mushroom kit has evolved into a full cultivation setup in my basement. I've experimented 
                with over a dozen species, from the forgiving oyster mushrooms to the more challenging shiitakes and lion's mane. 
                Each species has taught me something new about patience, observation, and the incredible complexity of fungal biology.
              </p>
              
              <p>
                My current setup includes multiple fruiting chambers, a dedicated sterile workspace, and enough agar plates to 
                stock a small laboratory. I source materials locally when possible, building relationships with coffee shops for 
                spent grounds and arborists for fresh logs. Sustainability isn't just a buzzword for me—it's a core part of how 
                I approach cultivation.
              </p>
              
              <p>
                Through this blog, I want to share the real, unfiltered experience of home cultivation. The successes and failures, 
                the unexpected discoveries, and the deep satisfaction that comes from growing your own food. Whether you're just 
                starting out or looking to refine your techniques, I hope my experiences can help guide your own mycological journey.
              </p>
            </div>
          </div>

          {/* Current Focus */}
          <div className="organic-card p-6 border-l-4 border-[var(--color-electric-blue)]">
            <h3 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-4">
              Current Focus
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[var(--color-electric-blue)] mr-3"></div>
                <span className="text-[var(--color-forest-brown)]">Perfecting liquid culture techniques</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[var(--color-neon-pink)] mr-3"></div>
                <span className="text-[var(--color-forest-brown)]">Experimenting with wine cap outdoor cultivation</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[var(--color-deep-purple)] mr-3"></div>
                <span className="text-[var(--color-forest-brown)]">Building a climate-controlled growing environment</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[var(--color-bright-orange)] mr-3"></div>
                <span className="text-[var(--color-forest-brown)]">Documenting strain variations and performance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact */}
        <div className="space-y-8">
          <ContactForm />
          
          {/* Community & Social */}
          <div className="organic-card p-6">
            <h3 className="text-2xl font-bold text-[var(--color-forest-brown-dark)] mb-4 text-center">
              Let's Connect!
            </h3>
            <p className="text-[var(--color-forest-brown)] text-center mb-6">
              I love connecting with fellow cultivators, sharing experiences, and learning from the community.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-[var(--color-warm-cream-light)] to-[var(--color-warm-cream)] rounded-xl">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-[var(--color-electric-blue)] to-[var(--color-deep-purple)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[var(--color-forest-brown-dark)]">Questions</h4>
                <p className="text-xs text-[var(--color-forest-brown)]">Technique help</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-[var(--color-warm-cream-light)] to-[var(--color-warm-cream)] rounded-xl">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-[var(--color-bright-orange)] to-[var(--color-neon-pink)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[var(--color-forest-brown-dark)]">Collaboration</h4>
                <p className="text-xs text-[var(--color-forest-brown)]">Projects & ideas</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-[var(--color-warm-cream-light)] to-[var(--color-warm-cream)] rounded-xl">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-[var(--color-earth-green)] to-[var(--color-forest-brown)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[var(--color-forest-brown-dark)]">Share</h4>
                <p className="text-xs text-[var(--color-forest-brown)]">Your experiences</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-[var(--color-warm-cream-light)] to-[var(--color-warm-cream)] rounded-xl">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-[var(--color-deep-purple)] to-[var(--color-neon-pink)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[var(--color-forest-brown-dark)]">Recommendations</h4>
                <p className="text-xs text-[var(--color-forest-brown)]">Product suggestions</p>
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="organic-card p-6 bg-gradient-to-r from-[var(--color-electric-blue)]/10 to-[var(--color-deep-purple)]/10">
            <h3 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-4 text-center">
              Fun Cultivation Facts
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                <span className="text-[var(--color-forest-brown)]">Species successfully grown:</span>
                <span className="font-bold text-[var(--color-electric-blue)]">12+</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                <span className="text-[var(--color-forest-brown)]">Years cultivating:</span>
                <span className="font-bold text-[var(--color-bright-orange)]">2.5</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                <span className="text-[var(--color-forest-brown)]">Favorite to grow:</span>
                <span className="font-bold text-[var(--color-deep-purple)]">Oyster mushrooms</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                <span className="text-[var(--color-forest-brown)]">Biggest challenge:</span>
                <span className="font-bold text-[var(--color-neon-pink)]">Lion's mane</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
