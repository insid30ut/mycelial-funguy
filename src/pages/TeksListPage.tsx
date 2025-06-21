import React, { useState, useEffect } from 'react';
import TekCard from '../components/TekCard';
import { TekTutorial, getAllTeks } from '../lib/teks';

const TeksListPage: React.FC = () => {
  const [teks, setTeks] = useState<TekTutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');

  useEffect(() => {
    const loadTeks = async () => {
      try {
        const tekTutorials = await getAllTeks();
        setTeks(tekTutorials);
      } catch (error) {
        console.error('Error loading teks:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTeks();
  }, []);

  const filteredTeks = filter === 'All' 
    ? teks 
    : teks.filter(tek => tek.difficulty === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mushroom-loading mx-auto mb-4"></div>
          <p className="text-[var(--color-forest-brown)]">Loading techniques...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold psychedelic-heading mb-6">
          Teks & Tips
        </h1>
        <p className="text-lg text-[var(--color-forest-brown)] max-w-2xl mx-auto leading-relaxed">
          Step-by-step techniques I've tested and refined through countless growing cycles. 
          From beginner-friendly setups to advanced cultivation methods.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level)}
            className={`cartoon-button text-sm ${
              filter === level 
                ? 'cartoon-button-primary' 
                : 'cartoon-button-secondary'
            }`}
          >
            {level}
            {level !== 'All' && (
              <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                {teks.filter(tek => tek.difficulty === level).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Teks Grid */}
      {filteredTeks.length > 0 ? (
        <div className="space-y-6">
          {filteredTeks.map((tek) => (
            <TekCard key={tek.slug} tek={tek} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="organic-card p-12 max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-electric-blue)] to-[var(--color-deep-purple)] flex items-center justify-center">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-2">
              No {filter !== 'All' ? filter : ''} Techniques Yet
            </h3>
            <p className="text-[var(--color-forest-brown)]">
              Check back soon for new cultivation techniques and tutorials!
            </p>
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="mt-16 pt-12 border-t border-[var(--color-earth-green)]/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Safety Notice */}
          <div className="organic-card p-6 border-l-4 border-yellow-400">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-forest-brown-dark)] mb-2">
                  Safety First
                </h3>
                <p className="text-sm text-[var(--color-forest-brown)]">
                  All techniques focus on culinary mushroom cultivation. Always research local laws and practice proper sterile technique.
                </p>
              </div>
            </div>
          </div>

          {/* Skill Building */}
          <div className="organic-card p-6 border-l-4 border-green-400">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-forest-brown-dark)] mb-2">
                  Progressive Learning
                </h3>
                <p className="text-sm text-[var(--color-forest-brown)]">
                  Start with beginner techniques and gradually work your way up. Each tutorial builds on previous skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeksListPage;
