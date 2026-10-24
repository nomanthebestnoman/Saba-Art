import React, { useState, useEffect } from 'react';
import { X, Heart, ShoppingBag, MessageCircle, Maximize2, ShieldCheck, Sparkles, Check, ZoomIn } from 'lucide-react';
import { Artwork } from '../types';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (art: Artwork) => void;
  onAddToCart: (art: Artwork, frame: 'Frameless Stretched Canvas' | 'Gold Floating Frame' | 'Onyx Black Floating Frame') => void;
  onViewInRoom: (art: Artwork) => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  artwork,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onViewInRoom
}) => {
  const [selectedFrame, setSelectedFrame] = useState<'Frameless Stretched Canvas' | 'Gold Floating Frame' | 'Onyx Black Floating Frame'>('Frameless Stretched Canvas');
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!artwork) return null;

  const framePriceAdjustment = selectedFrame === 'Frameless Stretched Canvas' ? 0 : 3500;
  const currentPrice = artwork.pricePKR + framePriceAdjustment;

  const whatsappUrl = `https://wa.me/923000000000?text=${encodeURIComponent(
    `Hello Saba Art, I would like to order: "${artwork.title}" (${artwork.urduTitle})\nFrame Choice: ${selectedFrame}\nTotal: PKR ${currentPrice.toLocaleString()}\nPlease provide details for delivery.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl bg-[#11131a] border border-[#d4af37]/40 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 text-zinc-300 hover:text-white hover:bg-black/90 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          
          {/* Left: Interactive Canvas Image View */}
          <div className="lg:col-span-7 bg-[#0b0c10] p-6 sm:p-10 flex flex-col items-center justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-zinc-800/80">
            
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <button
                onClick={() => onViewInRoom(artwork)}
                className="px-3 py-1.5 rounded-lg bg-[#1a1c24] hover:bg-[#d4af37] text-zinc-300 hover:text-black border border-zinc-700/80 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View on Wall</span>
              </button>

              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md ${
                  isZoomed
                    ? 'bg-[#d4af37] text-black'
                    : 'bg-[#1a1c24] hover:bg-zinc-800 text-zinc-300 border border-zinc-700/80'
                }`}
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>{isZoomed ? 'Reset Zoom' : 'Deep Zoom'}</span>
              </button>
            </div>

            {/* Frame Wrapper Simulation */}
            <div
              className={`transition-all duration-500 max-w-full max-h-[500px] flex items-center justify-center p-2 rounded-lg cursor-zoom-in ${
                selectedFrame === 'Gold Floating Frame'
                  ? 'border-[10px] border-[#cda250] shadow-[0_20px_50px_rgba(205,162,80,0.25)] bg-[#1a1608]'
                  : selectedFrame === 'Onyx Black Floating Frame'
                  ? 'border-[10px] border-[#18181b] shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black'
                  : 'shadow-[0_25px_50px_rgba(0,0,0,0.7)]'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className={`max-h-[460px] max-w-full object-contain rounded transition-transform duration-500 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'
                }`}
              />
            </div>

            <p className="text-[11px] text-zinc-500 mt-4 flex items-center gap-1">
              <span>Original Cropped Canvas — Pure Artwork with 0% Background</span>
            </p>
          </div>

          {/* Right: Artwork Details & Purchasing */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Badge & Category */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold tracking-wider text-[#d4af37] uppercase">
                  {artwork.category}
                </span>
                {artwork.bestSeller && (
                  <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#faee78] text-[10px] font-bold border border-[#d4af37]/30 uppercase">
                    Collector's Pick
                  </span>
                )}
              </div>

              {/* Title in English and Urdu */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                {artwork.title}
              </h2>
              <p className="font-arabic text-[#faee78] text-xl font-bold mb-4 text-right">
                {artwork.urduTitle}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 p-3 rounded-xl bg-[#171923] border border-zinc-800">
                <span className="text-2xl font-black text-[#faee78]">
                  PKR {currentPrice.toLocaleString()}
                </span>
                <span className="text-xs text-zinc-400">
                  (${artwork.priceUSD} USD approx.)
                </span>
                <span className="ml-auto text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  Free Express Delivery
                </span>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                {artwork.description}
              </p>
              <p className="font-arabic text-zinc-400 text-sm leading-relaxed mb-6 text-right">
                {artwork.urduDescription}
              </p>

              {/* Frame Selection */}
              <div className="mb-6">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block mb-2.5">
                  Select Framing Style:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'Frameless Stretched Canvas', label: 'Gallery Wrap (Free)', price: 0 },
                    { id: 'Gold Floating Frame', label: 'Gold Floating (+3.5k)', price: 3500 },
                    { id: 'Onyx Black Floating Frame', label: 'Onyx Frame (+3.5k)', price: 3500 },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFrame(f.id as any)}
                      className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                        selectedFrame === f.id
                          ? 'border-[#d4af37] bg-[#d4af37]/15 text-[#faee78]'
                          : 'border-zinc-800 bg-[#161821] text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span className="block font-medium truncate">{f.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Specifications List */}
              <div className="space-y-2 mb-6 p-4 rounded-xl bg-[#14161f] border border-zinc-800/80 text-xs">
                <div className="flex justify-between text-zinc-300 py-1 border-b border-zinc-800/50">
                  <span className="text-zinc-500">Dimensions:</span>
                  <span className="font-medium">{artwork.dimensions}</span>
                </div>
                <div className="flex justify-between text-zinc-300 py-1 border-b border-zinc-800/50">
                  <span className="text-zinc-500">Medium:</span>
                  <span className="font-medium text-right max-w-[200px]">{artwork.medium}</span>
                </div>
                <div className="flex justify-between text-zinc-300 py-1">
                  <span className="text-zinc-500">Authenticity:</span>
                  <span className="font-medium text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Hand-Signed by Saba Art
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-zinc-800">
              {/* WhatsApp Checkout Direct Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant Order via WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    onAddToCart(artwork, selectedFrame);
                    onClose();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#faee78] text-black font-bold text-xs tracking-wider uppercase hover:shadow-lg transition-all"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={() => onToggleWishlist(artwork)}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl border text-xs font-semibold transition-all ${
                    isWishlisted
                      ? 'border-rose-500 bg-rose-500/20 text-rose-400'
                      : 'border-zinc-800 hover:border-zinc-700 bg-[#171923] text-zinc-300'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                  <span>{isWishlisted ? 'Saved' : 'Save'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
