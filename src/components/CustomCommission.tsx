import React, { useState } from 'react';
import { Sparkles, MessageCircle, Send, CheckCircle2, Palette, Ruler } from 'lucide-react';

export const CustomCommission: React.FC = () => {
  const [artType, setArtType] = useState('Islamic Calligraphy');
  const [customText, setCustomText] = useState('');
  const [size, setSize] = useState('24" x 36" (Medium Statement)');
  const [colorTheme, setColorTheme] = useState('Gold & Deep Charcoal');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const sizes = [
    '18" x 24" (Compact)',
    '24" x 36" (Medium Statement)',
    '30" x 45" (Large Gallery Size)',
    '36" x 60" (Grand Centerpiece)',
    'Custom Dimensions (Specify in notes)'
  ];

  const colorThemes = [
    'Gold, Black & Emerald Green',
    'Pastel Clouds & Rose Lavender',
    'Vibrant Splash & Modern Colors',
    'Earthy Terracotta & Sand Warmth',
    'Custom Palette (Specify in notes)'
  ];

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Custom Artwork Commission Inquiry - Saba Art*\n\n` +
      `🎨 *Style:* ${artType}\n` +
      `📝 *Requested Verse/Inscription:* ${customText || 'Standard selection / discuss with artist'}\n` +
      `📏 *Preferred Canvas Size:* ${size}\n` +
      `🌈 *Color Theme:* ${colorTheme}\n` +
      `💬 *Additional Notes:* ${additionalNotes || 'None'}\n\n` +
      `Please let me know estimated pricing and timeline. Thank you!`;

    const url = `https://wa.me/923000000000?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="custom-order" className="py-20 relative bg-[#0e1017] border-t border-b border-zinc-800/80">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e202b] border border-[#d4af37]/40 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#faee78]" />
            <span className="font-serif text-[#faee78] text-xs font-semibold tracking-wider uppercase">
              Bespoke Studio Service
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Commission a <span className="gold-gradient-text">Custom Masterpiece</span>
          </h2>
          
          <p className="font-arabic text-[#d4af37] text-xl font-bold mb-3">
            اپنی مرضی کی قرآنی آیت، نام یا پسندیدہ سائز میں کسٹم پینٹنگ تیار کروائیں
          </p>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Have a specific Quranic Surah, family name calligraphy, or personalized color scheme in mind? Saba Art handcrafts custom commissioned paintings tailored to fit your wall dimensions and aesthetic.
          </p>
        </div>

        {/* Commission Form Container */}
        <div className="max-w-3xl mx-auto bg-[#141620] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl gold-glow">
          <form onSubmit={handleSendToWhatsApp} className="space-y-6">
            
            {/* Category of Art */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2.5">
                Artwork Type:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  'Islamic Calligraphy',
                  'Landscape & Nature',
                  'Sufi Whirling Art',
                  'Modern Abstract'
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setArtType(type)}
                    className={`py-3 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      artType === type
                        ? 'border-[#d4af37] bg-[#d4af37]/15 text-[#faee78]'
                        : 'border-zinc-800 bg-[#1a1c26] text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Text / Ayah Inscription */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                Custom Quranic Verse / Text / Inscription:
              </label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="e.g., Ayatul Kursi, 4 Quls, Dua e Yunus, or Family Name..."
                className="w-full bg-[#1b1e2a] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Canvas Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Canvas Dimensions:</span>
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full bg-[#1b1e2a] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {sizes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Color Theme:</span>
                </label>
                <select
                  value={colorTheme}
                  onChange={(e) => setColorTheme(e.target.value)}
                  className="w-full bg-[#1b1e2a] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {colorThemes.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                Special Requests & Notes (Optional):
              </label>
              <textarea
                rows={3}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="Share any preferred textures, deadlines, or interior room wall details..."
                className="w-full bg-[#1b1e2a] border border-zinc-800 rounded-xl p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-950/30 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Commission Brief to Saba Art via WhatsApp</span>
              </button>
            </div>

            {submitted && (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/40 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Your commission request has been opened in WhatsApp! We will reply promptly.</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};
