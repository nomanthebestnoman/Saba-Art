import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/artworks';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 relative bg-[#0e1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-serif text-[#d4af37] text-xs font-semibold tracking-wider uppercase block mb-2">
            Collector Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
            Loved by Art Connoisseurs
          </h2>
          <p className="text-zinc-400 text-sm">
            Hear directly from collectors across Pakistan and internationally about their custom pieces.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-[#141620] border border-zinc-800/90 hover:border-[#d4af37]/50 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/5"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#faee78] text-[#faee78]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Artwork Info */}
              <div className="pt-4 border-t border-zinc-800/80">
                <p className="font-serif text-white font-bold text-sm">{t.name}</p>
                <div className="flex items-center gap-1 text-[11px] text-zinc-400 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#d4af37]" />
                  <span>{t.location}</span>
                </div>
                <div className="mt-2 text-[10px] text-[#faee78] font-medium bg-[#1e202c] px-2 py-1 rounded inline-block truncate max-w-full">
                  Acquired: {t.artworkPurchased}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
