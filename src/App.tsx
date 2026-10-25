import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArtworkCard } from './components/ArtworkCard';
import { ArtworkModal } from './components/ArtworkModal';
import { RoomPreviewModal } from './components/RoomPreviewModal';
import { CustomCommission } from './components/CustomCommission';
import { AboutArtist } from './components/AboutArtist';
import { Testimonials } from './components/Testimonials';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { ARTWORKS } from './data/artworks';
import { Artwork, CartItem } from './types';
import { Sparkles, Filter, SlidersHorizontal, MessageCircle, Heart, X, ShoppingBag } from 'lucide-react';
import { SABA_WHATSAPP } from './utils/orderDispatch';

export const App: React.FC = () => {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('saba_art_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState<Artwork[]>(() => {
    try {
      const saved = localStorage.getItem('saba_art_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('saba_art_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('saba_art_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Modal states
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [roomPreviewArtwork, setRoomPreviewArtwork] = useState<Artwork | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  const categories = [
    'All',
    'Islamic Calligraphy',
    'Landscape',
    'Seascape',
    'Spiritual & Sufi',
    'Modern Art'
  ];

  // Filtered & Sorted Artworks
  const filteredArtworks = useMemo(() => {
    return ARTWORKS.filter((art) => {
      const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        art.title.toLowerCase().includes(q) ||
        art.description.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q) ||
        art.medium.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.pricePKR - b.pricePKR;
      if (sortBy === 'price-desc') return b.pricePKR - a.pricePKR;
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      // default: featured first, then bestsellers
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  // Cart operations
  const handleAddToCart = (
    artwork: Artwork,
    frameOption: 'Frameless Stretched Canvas' | 'Gold Floating Frame' | 'Onyx Black Floating Frame' = 'Frameless Stretched Canvas'
  ) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.artwork.id === artwork.id && item.frameOption === frameOption
      );
      if (existing) {
        return prev.map((item) =>
          item.artwork.id === artwork.id && item.frameOption === frameOption
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { artwork, quantity: 1, frameOption }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (artworkId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(artworkId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.artwork.id === artworkId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (artworkId: string) => {
    setCart((prev) => prev.filter((item) => item.artwork.id !== artworkId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist toggle
  const handleToggleWishlist = (artwork: Artwork) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === artwork.id);
      if (exists) {
        return prev.filter((item) => item.id !== artwork.id);
      }
      return [...prev, artwork];
    });
  };

  const featuredList = useMemo(() => ARTWORKS.filter((a) => a.featured), []);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] flex flex-col font-sans">
      
      {/* Top Navigation */}
      <Navbar
        cart={cart}
        wishlist={wishlist}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          const el = document.getElementById('collection');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Hero Section */}
      <Hero
        featuredArtworks={featuredList}
        onSelectArtwork={(art) => setSelectedArtwork(art)}
        onExploreClick={() => {
          const el = document.getElementById('collection');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onCustomOrderClick={() => {
          const el = document.getElementById('custom-order');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Art Collection Section */}
      <section id="collection" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e202b] border border-[#d4af37]/40 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#faee78]" />
                <span className="font-serif text-[#faee78] text-xs font-semibold tracking-wider uppercase">
                  Curated Catalog
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Original <span className="gold-gradient-text">Handmade Paintings</span>
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Authentic textured canvas paintings crafted with archival acrylics and pure dedication.
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-4 h-4 text-zinc-400" />
              <span className="text-xs text-zinc-400 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#161823] border border-zinc-800 text-xs text-zinc-200 rounded-xl px-3.5 py-2 focus:outline-none focus:border-[#d4af37]"
              >
                <option value="featured">Featured Masterpieces</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#faee78] text-black shadow-lg shadow-[#d4af37]/15 font-bold scale-105'
                    : 'bg-[#151722] hover:bg-[#1f2232] text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
                {cat === 'All' && ` (${ARTWORKS.length})`}
                {cat === 'Islamic Calligraphy' && ' (7)'}
                {cat === 'Landscape' && ' (3)'}
              </button>
            ))}
          </div>

          {/* Active filter count info */}
          <div className="flex items-center justify-between text-xs text-zinc-500 mb-6 px-1">
            <span>
              Showing {filteredArtworks.length} of {ARTWORKS.length} hand-painted artworks
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#d4af37] hover:underline"
              >
                Clear search filter
              </button>
            )}
          </div>

          {/* Artworks Grid (All 14 Cropped Pieces) */}
          {filteredArtworks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {filteredArtworks.map((art) => (
                <ArtworkCard
                  key={art.id}
                  artwork={art}
                  isWishlisted={wishlist.some((w) => w.id === art.id)}
                  onToggleWishlist={handleToggleWishlist}
                  onQuickView={(a) => setSelectedArtwork(a)}
                  onViewInRoom={(a) => setRoomPreviewArtwork(a)}
                  onAddToCart={(a) => handleAddToCart(a)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#12141c] rounded-3xl border border-zinc-800/80 p-8">
              <Filter className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-white">No paintings found</h3>
              <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
                No artworks matched your search or category filter. Try clearing your search or browsing all categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-5 px-5 py-2 rounded-xl bg-[#d4af37] text-black text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Custom Commission Studio */}
      <CustomCommission />

      {/* About the Artist */}
      <AboutArtist />

      {/* Collector Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Artwork Deep Zoom & Detail Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        isWishlisted={selectedArtwork ? wishlist.some((w) => w.id === selectedArtwork.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onViewInRoom={(art) => {
          setSelectedArtwork(null);
          setRoomPreviewArtwork(art);
        }}
      />

      {/* Virtual Wall Preview Modal */}
      <RoomPreviewModal
        artwork={roomPreviewArtwork}
        onClose={() => setRoomPreviewArtwork(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Wishlist Drawer Modal */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div className="relative w-full max-w-md bg-[#12141c] border-l border-zinc-800 shadow-2xl flex flex-col h-full animate-slideInRight">
            
            <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-[#161822]">
              <div className="flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-rose-500 fill-current" />
                <h3 className="font-serif text-white font-bold text-lg">Your Wishlist</h3>
                <span className="text-xs text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full font-semibold">
                  {wishlist.length}
                </span>
              </div>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {wishlist.length === 0 ? (
                <div className="text-center py-20 px-4 space-y-3">
                  <Heart className="w-10 h-10 text-zinc-600 mx-auto" />
                  <p className="font-serif text-white text-sm">No saved paintings yet</p>
                  <p className="text-xs text-zinc-500">
                    Click the heart icon on any artwork to save it to your curated favorites.
                  </p>
                </div>
              ) : (
                wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl bg-[#171924] border border-zinc-800/80 flex items-center gap-3.5"
                  >
                    <div className="w-16 h-16 rounded-xl bg-[#0b0c10] p-1 flex-shrink-0 flex items-center justify-center border border-zinc-800">
                      <img src={item.thumbnail || item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif text-white font-bold text-xs truncate">{item.title}</h5>
                      <p className="text-xs text-[#faee78] font-medium">{item.category}</p>
                      <p className="text-xs font-bold text-white mt-1">PKR {item.pricePKR.toLocaleString()}</p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <button
                        onClick={() => {
                          handleAddToCart(item);
                          setIsWishlistOpen(false);
                        }}
                        className="p-2 rounded-lg bg-[#d4af37] text-black hover:bg-[#faee78] transition-all"
                        title="Add to Bag"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleToggleWishlist(item)}
                        className="p-2 rounded-lg text-zinc-500 hover:text-rose-400"
                        title="Remove"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      )}

      {/* Floating Instant WhatsApp Button */}
      <a
        href={`https://wa.me/${SABA_WHATSAPP}?text=Hello%20Saba%20Art,%20I%20am%20browsing%20your%20website%20and%20have%20an%20inquiry%20about%20your%20paintings.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-2xl shadow-emerald-950/60 transition-all duration-300 hover:scale-105 border border-emerald-400/30 group"
      >
        <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
        <span className="hidden sm:inline">Chat with Saba Art</span>
      </a>

    </div>
  );
};

export default App;
