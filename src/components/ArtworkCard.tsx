import React from 'react';
import { Eye, Heart, ShoppingBag, MessageCircle, Maximize2, Sparkles } from 'lucide-react';
import { Artwork } from '../types';
import { SABA_WHATSAPP } from '../utils/orderDispatch';

interface ArtworkCardProps {
  artwork: Artwork;
  isWishlisted: boolean;
  onToggleWishlist: (art: Artwork) => void;
  onQuickView: (art: Artwork) => void;
  onViewInRoom: (art: Artwork) => void;
  onAddToCart: (art: Artwork) => void;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({
  artwork,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onViewInRoom,
  onAddToCart
}) => {
  const whatsappUrl = `https://wa.me/${SABA_WHATSAPP}?text=${encodeURIComponent(
    `Hello Saba Art, I would like to inquire about/order: "${artwork.title}" (${artwork.dimensions}) - Price: PKR ${artwork.pricePKR.toLocaleString()}. Is this piece available?`
  )}`;

  return (
    <div className="group relative bg-[#13151c] rounded-2xl border border-zinc-800/90 hover:border-[#d4af37]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/10 flex flex-col overflow-hidden">
      
      {/* Top Media Area with Cropped Painting */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#1c1f2b] to-[#0e1017] p-4 flex items-center justify-center overflow-hidden cursor-pointer">
        
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {artwork.bestSeller && (
            <span className="px-2.5 py-1 rounded-md bg-[#d4af37] text-black text-[10px] font-extrabold uppercase tracking-wider shadow-md">
              Best Seller
            </span>
          )}
          {artwork.featured && (
            <span className="px-2.5 py-1 rounded-md bg-[#1f2230] border border-[#d4af37]/40 text-[#faee78] text-[10px] font-semibold flex items-center gap-1 shadow-sm">
              <Sparkles className="w-2.5 h-2.5" />
              Masterpiece
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(artwork);
          }}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
            isWishlisted
              ? 'bg-rose-500 text-white'
              : 'bg-black/50 text-zinc-300 hover:text-rose-400 hover:bg-black/80'
          }`}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* The Cropped Painting Artwork (WebP ultra fast loading) */}
        <div
          onClick={() => onQuickView(artwork)}
          className="relative w-full h-full flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-500"
        >
          <img
            src={artwork.thumbnail || artwork.image}
            alt={artwork.title}
            className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.7)]"
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
          />
        </div>

        {/* Quick Action Overlay on Card Hover */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={() => onQuickView(artwork)}
            className="px-3 py-1.5 rounded-lg bg-zinc-800/90 hover:bg-[#d4af37] text-zinc-200 hover:text-black text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
          
          <button
            onClick={() => onViewInRoom(artwork)}
            className="px-3 py-1.5 rounded-lg bg-zinc-800/90 hover:bg-[#d4af37] text-zinc-200 hover:text-black text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>View on Wall</span>
          </button>
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Category Tag */}
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
            <span className="text-[#d4af37] font-medium tracking-wider uppercase text-[11px]">
              {artwork.category}
            </span>
            <span>{artwork.dimensions}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(artwork)}
            className="font-serif text-white font-bold text-base hover:text-[#faee78] transition-colors cursor-pointer line-clamp-1 mb-2"
          >
            {artwork.title}
          </h3>

          <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed mb-4">
            {artwork.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
          <div>
            <span className="text-lg font-extrabold text-[#faee78] block">
              PKR {artwork.pricePKR.toLocaleString()}
            </span>
            <span className="text-[11px] text-zinc-400">
              ${artwork.priceUSD} USD • Free Delivery
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* WhatsApp direct purchase button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 transition-all duration-300"
              title="Inquire / Order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Add to Bag button */}
            <button
              onClick={() => onAddToCart(artwork)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#faee78] text-black font-bold text-xs tracking-wide hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300 hover:scale-105"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
