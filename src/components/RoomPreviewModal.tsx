import React, { useState } from 'react';
import { X, Sun, Check, MessageCircle, ShoppingBag } from 'lucide-react';
import { Artwork } from '../types';

interface RoomPreviewModalProps {
  artwork: Artwork | null;
  onClose: () => void;
  onAddToCart: (art: Artwork) => void;
}

export const RoomPreviewModal: React.FC<RoomPreviewModalProps> = ({
  artwork,
  onClose,
  onAddToCart
}) => {
  const [wallColor, setWallColor] = useState<{ id: string; name: string; bg: string; textColor: string }>({
    id: 'charcoal',
    name: 'Modern Charcoal',
    bg: '#1b1d24',
    textColor: '#e4e4e7'
  });
  const [frameStyle, setFrameStyle] = useState<'none' | 'gold' | 'black'>('gold');
  const [scale, setScale] = useState<'normal' | 'large'>('normal');

  if (!artwork) return null;

  const wallColors = [
    { id: 'charcoal', name: 'Modern Charcoal', bg: '#1b1d24', textColor: '#e4e4e7' },
    { id: 'warm-linen', name: 'Warm Alabaster', bg: '#e8e5dc', textColor: '#27272a' },
    { id: 'midnight-navy', name: 'Regal Navy', bg: '#101c30', textColor: '#e4e4e7' },
    { id: 'sage-olive', name: 'Serene Sage', bg: '#233129', textColor: '#e4e4e7' },
    { id: 'terracotta', name: 'Warm Terracotta', bg: '#3d251e', textColor: '#e4e4e7' }
  ];

  const whatsappUrl = `https://wa.me/923000000000?text=${encodeURIComponent(
    `Hello Saba Art, I visualized "${artwork.title}" in the Room Preview. I would like to order it. Can you confirm availability and framing options?`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#11131a] border border-[#d4af37]/40 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#161822]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
            <h3 className="font-serif text-white font-bold text-base sm:text-lg">
              Virtual Wall Visualizer: <span className="text-[#faee78] font-normal">{artwork.title}</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* The Virtual Room Canvas */}
        <div
          className="relative w-full h-[400px] sm:h-[480px] transition-colors duration-700 flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: wallColor.bg }}
        >
          {/* Overhead Spotlight Light Beam */}
          <div className="absolute top-0 w-80 h-96 bg-gradient-to-b from-amber-100/15 via-amber-100/5 to-transparent blur-2xl pointer-events-none rounded-full" />

          {/* Wall Lamp Fixture (Stylized Minimalist Brass Fixture) */}
          <div className="absolute top-4 flex flex-col items-center opacity-80 pointer-events-none">
            <div className="w-1.5 h-6 bg-[#cda250]" />
            <div className="w-16 h-2.5 rounded-full bg-[#cda250] shadow-md" />
            <div className="w-8 h-2 rounded-full bg-amber-200 blur-[2px]" />
          </div>

          {/* Mounted Painting Artwork */}
          <div
            className={`relative z-10 transition-all duration-500 flex items-center justify-center ${
              scale === 'large' ? 'max-w-[400px] sm:max-w-[480px]' : 'max-w-[300px] sm:max-w-[360px]'
            } ${
              frameStyle === 'gold'
                ? 'border-[8px] sm:border-[12px] border-[#cda250] shadow-[0_30px_60px_rgba(0,0,0,0.65)] bg-[#1a1608]'
                : frameStyle === 'black'
                ? 'border-[8px] sm:border-[12px] border-[#18181b] shadow-[0_30px_60px_rgba(0,0,0,0.75)] bg-black'
                : 'border border-black/15 shadow-[0_25px_50px_rgba(0,0,0,0.6)]'
            }`}
          >
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full max-h-[220px] sm:max-h-[270px] object-contain"
            />
          </div>

          {/* Modern Sideboard / Console Table underneath for realistic perspective */}
          <div className="absolute bottom-0 w-full flex flex-col items-center pointer-events-none">
            {/* Table Top */}
            <div className="w-4/5 max-w-xl h-4 bg-gradient-to-b from-[#2e1d15] to-[#1a110c] rounded-t-sm shadow-xl flex items-center justify-between px-6">
              {/* Decorative vase and plant on console */}
              <div className="w-6 h-8 bg-amber-100/40 rounded-t-full -mt-8 shadow-sm backdrop-blur-sm" />
              <div className="w-4 h-6 bg-zinc-300/30 rounded-t-md -mt-6 backdrop-blur-sm" />
            </div>
            {/* Table Body / Legs */}
            <div className="w-4/5 max-w-xl h-10 bg-[#160d09] flex justify-between px-10">
              <div className="w-2.5 h-full bg-[#0d0705]" />
              <div className="w-2.5 h-full bg-[#0d0705]" />
            </div>
            {/* Floor Plane */}
            <div className="w-full h-8 bg-gradient-to-t from-stone-900 to-stone-800 border-t border-black/20" />
          </div>
        </div>

        {/* Controls Bar */}
        <div className="p-5 sm:p-6 bg-[#13151c] border-t border-zinc-800 flex flex-wrap items-center justify-between gap-5">
          
          {/* Wall Color Chooser */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Wall Paint Color:
            </span>
            <div className="flex items-center gap-2">
              {wallColors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setWallColor(c)}
                  className={`w-7 h-7 rounded-full border-2 transition-transform ${
                    wallColor.id === c.id
                      ? 'border-[#faee78] scale-110 shadow-md'
                      : 'border-zinc-700 hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.bg }}
                  title={c.name}
                />
              ))}
              <span className="text-xs text-zinc-300 ml-1 font-medium">{wallColor.name}</span>
            </div>
          </div>

          {/* Frame Style Chooser */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Frame Option:
            </span>
            <div className="flex items-center gap-2">
              {[
                { id: 'none', label: 'Canvas Only' },
                { id: 'gold', label: 'Gold Frame' },
                { id: 'black', label: 'Black Frame' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFrameStyle(f.id as any)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                    frameStyle === f.id
                      ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#faee78]'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 ml-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire via WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onAddToCart(artwork);
                onClose();
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#faee78] text-black font-bold text-xs tracking-wide transition-all hover:scale-105 shadow-md"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Bag</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
