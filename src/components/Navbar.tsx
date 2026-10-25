import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Search, MessageCircle, Menu, X, Sparkles, Mail } from 'lucide-react';
import { CartItem, Artwork } from '../types';
import { SABA_EMAIL, SABA_WHATSAPP } from '../utils/orderDispatch';

interface NavbarProps {
  cart: CartItem[];
  wishlist: Artwork[];
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectCategory: (cat: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cart,
  wishlist,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  onSearchChange,
  onSelectCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0c10]/95 backdrop-blur-md border-b border-[#252836] py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#0b0c10]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#aa771c] via-[#d4af37] to-[#faee78] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-[#0b0c10] flex items-center justify-center">
                  <span className="font-serif text-[#faee78] font-bold text-lg">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#f3f4f6] group-hover:text-[#faee78] transition-colors">
                  SABA ART
                </span>
                <span className="text-[10px] text-[#d4af37] tracking-wider uppercase font-semibold">
                  Original Handmade Masterpieces
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#c5c6c7]">
              <a
                href="#collection"
                className="hover:text-[#faee78] transition-colors"
                onClick={() => onSelectCategory('All')}
              >
                Collection
              </a>
              <a
                href="#collection"
                className="hover:text-[#faee78] transition-colors"
                onClick={() => onSelectCategory('Islamic Calligraphy')}
              >
                Islamic Calligraphy
              </a>
              <a
                href="#collection"
                className="hover:text-[#faee78] transition-colors"
                onClick={() => onSelectCategory('Landscape')}
              >
                Landscapes
              </a>
              <a
                href="#custom-order"
                className="hover:text-[#faee78] transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                Custom Commission
              </a>
              <a href="#about" className="hover:text-[#faee78] transition-colors">
                The Artist
              </a>
              <a href="#reviews" className="hover:text-[#faee78] transition-colors">
                Reviews
              </a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Email direct link */}
              <a
                href={`mailto:${SABA_EMAIL}`}
                className="hidden xl:flex items-center gap-1.5 text-xs text-zinc-400 hover:text-[#faee78] transition-colors px-2.5 py-1 rounded-full border border-zinc-800"
                title="Send inquiry email"
              >
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{SABA_EMAIL}</span>
              </a>

              {/* Search Toggle */}
              <div className="relative">
                {showSearchInput ? (
                  <div className="flex items-center bg-[#1a1c23] border border-[#d4af37]/40 rounded-full px-3 py-1.5 animate-fadeIn">
                    <Search className="w-4 h-4 text-[#d4af37] mr-2" />
                    <input
                      type="text"
                      placeholder="Search paintings, verses..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="bg-transparent text-sm text-[#f3f4f6] placeholder-zinc-500 focus:outline-none w-36 sm:w-48"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        setShowSearchInput(false);
                        onSearchChange('');
                      }}
                      className="text-zinc-400 hover:text-white ml-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowSearchInput(true)}
                    className="p-2 text-zinc-300 hover:text-[#faee78] hover:bg-zinc-800/60 rounded-full transition-all"
                    title="Search artworks"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2 text-zinc-300 hover:text-rose-400 hover:bg-zinc-800/60 rounded-full transition-all"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2 text-zinc-300 hover:text-[#faee78] hover:bg-zinc-800/60 rounded-full transition-all"
                title="Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#d4af37] to-[#faee78] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </button>

              {/* WhatsApp direct CTA */}
              <a
                href={`https://wa.me/${SABA_WHATSAPP}?text=Hello%20Saba%20Art,%20I%20am%20interested%20in%20your%20handmade%20paintings%20collection.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 md:hidden text-zinc-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0b0c10]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col gap-6 animate-fadeIn">
          <nav className="flex flex-col gap-5 text-lg font-medium text-zinc-200">
            <a
              href="#collection"
              onClick={() => {
                onSelectCategory('All');
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-[#faee78] py-2 border-b border-zinc-800/80"
            >
              All Artworks (14)
            </a>
            <a
              href="#collection"
              onClick={() => {
                onSelectCategory('Islamic Calligraphy');
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-[#faee78] py-2 border-b border-zinc-800/80"
            >
              Islamic Calligraphy
            </a>
            <a
              href="#collection"
              onClick={() => {
                onSelectCategory('Landscape');
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-[#faee78] py-2 border-b border-zinc-800/80"
            >
              Landscapes & Nature
            </a>
            <a
              href="#custom-order"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#faee78] py-2 border-b border-zinc-800/80 flex items-center gap-2 text-[#d4af37]"
            >
              <Sparkles className="w-4 h-4" />
              Custom Commission Order
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#faee78] py-2 border-b border-zinc-800/80"
            >
              About Saba Art
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#faee78] py-2 border-b border-zinc-800/80"
            >
              Client Reviews
            </a>
          </nav>

          <a
            href={`mailto:${SABA_EMAIL}`}
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 text-zinc-200 text-xs font-semibold"
          >
            <Mail className="w-4 h-4 text-[#d4af37]" />
            <span>Email: {SABA_EMAIL}</span>
          </a>

          <a
            href={`https://wa.me/${SABA_WHATSAPP}?text=Hello%20Saba%20Art,%20I%20am%20interested%20in%20your%20handmade%20paintings%20collection.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-center shadow-lg shadow-emerald-900/30"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with Saba Art on WhatsApp
          </a>
        </div>
      )}
    </>
  );
};
