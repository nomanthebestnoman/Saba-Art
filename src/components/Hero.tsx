import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Truck, Palette, Eye } from 'lucide-react';
import { Artwork } from '../types';

interface HeroProps {
  featuredArtworks: Artwork[];
  onSelectArtwork: (art: Artwork) => void;
  onExploreClick: () => void;
  onCustomOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  featuredArtworks,
  onSelectArtwork,
  onExploreClick,
  onCustomOrderClick
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (featuredArtworks.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredArtworks.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [featuredArtworks]);

  const activeArt = featuredArtworks[activeIndex] || featuredArtworks[0];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden canvas-texture">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Story */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Urdu Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e2029] border border-[#d4af37]/40 mb-6 shadow-md">
              <Sparkles className="w-4 h-4 text-[#faee78] animate-spin" style={{ animationDuration: '6s' }} />
              <span className="font-arabic text-[#faee78] text-sm tracking-wide font-medium">
                دستکاری اور خطاطی کا منفرد انداز — صبا آرٹ
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              Timeless <span className="gold-gradient-text">Islamic Calligraphy</span> & Fine Canvas Art
            </h1>

            {/* Description */}
            <p className="text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed mb-4">
              Hand-painted bespoke masterpieces crafted with textured acrylics, vibrant pigment layers, and sacred Arabic calligraphy. Every piece is an authentic original designed to elevate your sanctuary.
            </p>

            <p className="font-arabic text-zinc-400 text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
              گھر اور دفتر کی خوبصورتی کے لیے خصوصی طور پر تیار کردہ اصلی کینوس پینٹنگز۔ ہر برش اسٹروک میں نفاست اور روحانی سکون۔
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#faee78] to-[#aa771c] text-black font-bold text-sm tracking-wider uppercase hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Explore 14 Masterpieces</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onCustomOrderClick}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#171923] border border-[#d4af37]/40 text-zinc-200 font-semibold text-sm hover:bg-[#202330] hover:border-[#d4af37] transition-all duration-300"
              >
                <Palette className="w-4 h-4 text-[#d4af37]" />
                <span>Custom Commission</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 w-full max-w-lg">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-xs text-zinc-400 font-medium">100% Hand-Painted Originals</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Palette className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-xs text-zinc-400 font-medium">Archival Cotton Canvas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-xs text-zinc-400 font-medium">Safe Express Pakistan Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Artwork Floating Display */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {activeArt && (
              <div className="relative w-full max-w-md mx-auto">
                {/* Outer frame & glow */}
                <div className="relative p-3 rounded-2xl bg-gradient-to-b from-[#2a2d3d] to-[#12131a] border border-[#d4af37]/50 shadow-2xl gold-glow group transition-all duration-500">
                  
                  {/* Cropped Painting with no background */}
                  <div
                    onClick={() => onSelectArtwork(activeArt)}
                    className="relative overflow-hidden rounded-xl cursor-pointer bg-[#0e1017] flex items-center justify-center shadow-inner"
                    style={{ minHeight: '380px' }}
                  >
                    <img
                      src={activeArt.image}
                      alt={activeArt.title}
                      className="w-full h-full max-h-[460px] object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <p className="font-serif text-white font-semibold text-sm">{activeArt.title}</p>
                          <p className="font-arabic text-[#faee78] text-xs font-medium">{activeArt.urduTitle}</p>
                        </div>
                        <span className="flex items-center gap-1 text-xs text-[#faee78] bg-[#0b0c10]/90 px-3 py-1.5 rounded-full border border-[#d4af37]/40">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Detail</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Artwork quick info below image */}
                  <div className="mt-3.5 px-2 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold tracking-wider text-[#d4af37] uppercase">
                        {activeArt.category}
                      </span>
                      <h3 className="font-serif text-white font-medium text-sm truncate max-w-[220px]">
                        {activeArt.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-bold text-[#faee78]">PKR {activeArt.pricePKR.toLocaleString()}</p>
                      <p className="text-[11px] text-zinc-400 font-medium">${activeArt.priceUSD} USD</p>
                    </div>
                  </div>
                </div>

                {/* Thumbnail dots selector */}
                <div className="flex items-center justify-center gap-2.5 mt-5">
                  {featuredArtworks.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === activeIndex
                          ? 'w-8 h-2.5 bg-gradient-to-r from-[#d4af37] to-[#faee78]'
                          : 'w-2.5 h-2.5 bg-zinc-700 hover:bg-zinc-500'
                      }`}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
