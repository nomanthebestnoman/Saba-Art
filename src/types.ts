export interface Artwork {
  id: string;
  title: string;
  urduTitle: string;
  category: 'Islamic Calligraphy' | 'Landscape' | 'Seascape' | 'Spiritual & Sufi' | 'Modern Art';
  medium: string;
  dimensions: string;
  pricePKR: number;
  priceUSD: number;
  image: string;
  aspectRatio: string;
  featured?: boolean;
  bestSeller?: boolean;
  inStock: boolean;
  description: string;
  urduDescription: string;
  details: string[];
}

export interface CartItem {
  artwork: Artwork;
  quantity: number;
  frameOption: 'Frameless Stretched Canvas' | 'Gold Floating Frame' | 'Onyx Black Floating Frame';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  artworkPurchased: string;
  date: string;
}
