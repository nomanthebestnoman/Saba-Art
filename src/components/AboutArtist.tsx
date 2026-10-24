import React from 'react';
import { Palette, Heart, Award, ShieldCheck, Sparkles, Feather } from 'lucide-react';

export const AboutArtist: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0b0c10]">
      {/* Background radial orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Frame */}
              <div className="p-3 rounded-3xl bg-gradient-to-tr from-[#aa771c] via-[#d4af37] to-[#faee78] shadow-2xl gold-glow">
                <div className="relative rounded-2xl overflow-hidden bg-[#11131a] p-4 flex flex-col items-center">
                  <img
                    src="/images/products/sufi-whirling-dervish.jpg"
                    alt="Saba Art Painting Detail"
                    className="w-full max-h-[380px] object-contain rounded-xl shadow-lg"
                  />
                  <div className="w-full mt-4 p-3 rounded-xl bg-[#1a1c26] border border-zinc-800 text-center">
                    <p className="font-arabic text-[#faee78] text-lg font-bold">
                      "ہر نقش میں محبت، ہر لفظ میں عقیدت"
                    </p>
                    <p className="font-serif text-xs text-zinc-400 mt-0.5 tracking-wider uppercase">
                      Handcrafted with Soul • Saba Art
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Artist Signature Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-[#161824] border border-[#d4af37]/60 rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#faee78]">
                  <Feather className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif text-white font-bold text-xs">Authentic Original</p>
                  <p className="font-arabic text-[#d4af37] text-xs font-semibold">دستخط شدہ اصلی شاہکار</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Story */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e202b] border border-[#d4af37]/40 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#faee78]" />
              <span className="font-serif text-[#faee78] text-xs font-semibold tracking-wider uppercase">
                Behind the Easel
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              The Passion of <span className="gold-gradient-text">Saba Art</span>
            </h2>

            <p className="font-arabic text-[#d4af37] text-xl font-bold mb-4">
              صبا آرٹ کا مقصد گھروں اور دلوں کو اللہ کے بابرکت کلام اور قدرتی حسن سے منور کرنا ہے۔
            </p>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              Founded on a lifelong devotion to Islamic calligraphy and fine painting, Saba Art transforms raw stretched canvas into breathing spiritual sanctuaries. Unlike mass-produced digital prints, every painting is hand-drawn, sculpted with heavy-body acrylics, and finished with authentic brushstrokes you can feel with your fingertips.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              From majestic Thuluth script celebrating sacred verses like <em>Surah Ar-Rahman</em> and <em>Hasbunallahu Wa Ni'mal Wakeel</em> to evocative romantic Mediterranean landscapes and ethereal Sufi dancers, each piece tells an intimate story of grace, devotion, and timeless aesthetic beauty.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-2xl bg-[#141620] border border-zinc-800/80 flex items-start gap-3">
                <Palette className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-white font-semibold text-sm">Museum-Grade Materials</h4>
                  <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                    Heavyweight 380 GSM pure cotton stretched canvas with warp-resistant kiln-dried pine wood frames.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#141620] border border-zinc-800/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-white font-semibold text-sm">Double UV Varnish</h4>
                  <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                    Protective archival seal guarding your artwork against moisture, humidity, dust, and yellowing.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#141620] border border-zinc-800/80 flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-white font-semibold text-sm">Soulful & Spiritual</h4>
                  <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                    Each calligraphy stroke is performed with reverence, turning walls into daily sources of peace and Dhikr.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#141620] border border-zinc-800/80 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-white font-semibold text-sm">Collector Certified</h4>
                  <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                    Delivered with an official Certificate of Authenticity signed directly by the artist Saba.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
