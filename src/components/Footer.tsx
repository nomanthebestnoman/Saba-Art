import React from 'react';
import { MessageCircle, Heart, ShieldCheck, Truck, Sparkles, Instagram, Facebook, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090d] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#aa771c] to-[#faee78] p-[1.5px]">
                <div className="w-full h-full rounded-full bg-[#0b0c10] flex items-center justify-center">
                  <span className="font-serif text-[#faee78] font-bold text-sm">S</span>
                </div>
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-widest text-white block">
                  SABA ART
                </span>
                <span className="font-arabic text-xs text-[#d4af37] font-semibold -mt-1 block">
                  صبا آرٹ — ہاتھ سے تیار کردہ شاہکار
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Discover bespoke original paintings, timeless Quranic calligraphy, and inspiring landscapes hand-painted on premium cotton canvas. Crafted with love to bring peace and elegance into your living space.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition-all font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Helpline: +92 300 0000000</span>
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="font-serif text-white font-bold text-sm tracking-wider uppercase mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#collection" className="hover:text-[#faee78] transition-colors">
                  Surah Ar-Rahman Canvas
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#faee78] transition-colors">
                  Hasbunallahu Wa Ni'mal Wakeel
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#faee78] transition-colors">
                  Whirling Dervish Sufi Art
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#faee78] transition-colors">
                  Muhammad ﷺ Illuminated Medallion
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#faee78] transition-colors">
                  Mediterranean & Alpine Landscapes
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-white font-bold text-sm tracking-wider uppercase mb-4">
              Bespoke Service
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#custom-order" className="hover:text-[#faee78] transition-colors">
                  Custom Ayah Commission
                </a>
              </li>
              <li>
                <a href="#custom-order" className="hover:text-[#faee78] transition-colors">
                  Custom Size Inquiries
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#faee78] transition-colors">
                  Packaging & Hanging Guide
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#faee78] transition-colors">
                  Collector Reviews
                </a>
              </li>
              <li>
                <span className="text-zinc-500">Free Delivery Across Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Trust Guarantees */}
          <div>
            <h4 className="font-serif text-white font-bold text-sm tracking-wider uppercase mb-4">
              Our Promise
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-[11px] text-zinc-300">
                  100% Authentic Hand-Painted Originals with Signature
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-[11px] text-zinc-300">
                  Bubble-wrapped 5-layer wood-shield protective dispatch
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-[11px] text-zinc-300">
                  Cash on Delivery & Bank Transfer Accepted
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-[11px]">
            © {new Date().getFullYear()} Saba Art (صبا آرٹ). All Rights Reserved. Curated with passion.
          </p>
          <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
            <span>Handmade in Pakistan</span>
            <span>•</span>
            <span className="text-rose-400 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 fill-current" /> by Saba Art
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
