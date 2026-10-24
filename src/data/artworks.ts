import { Artwork, Testimonial } from '../types';

export const ARTWORKS: Artwork[] = [
  {
    id: 'hasbunallah-tricolor',
    title: 'Hasbunallahu Wa Ni\'mal Wakeel',
    urduTitle: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
    category: 'Islamic Calligraphy',
    medium: 'Handmade Acrylic & Ink on Stretched Cotton Canvas',
    dimensions: '24" x 16" (60 x 40 cm)',
    pricePKR: 14500,
    priceUSD: 52,
    image: '/images/products/hasbunallah-tricolor.jpg',
    aspectRatio: '16/10',
    featured: true,
    bestSeller: true,
    inStock: true,
    description: 'A striking sacred calligraphy composition rendered in traditional Arabic Thuluth script over a vibrant tricolor background of magenta rose, sunlight gold, and radiant jade green. Hand-signed by Saba Art.',
    urduDescription: 'خوبصورت ہاتھ سے تیار کردہ اسلامی خطاطی، جس میں گلابی، زرد اور سبز پس منظر پر حسبنا اللہ و نعم الوکیل انتہائی نفاست سے تحریر کیا گیا ہے۔ صبا آرٹ کے اصلی دستخط کے ساتھ۔',
    details: [
      'Original handmade artwork with textured paint layers',
      'High-grade archival acrylic paints resistant to fading',
      'Varnished with UV protection gloss',
      'Ready to hang with pre-installed hardware'
    ]
  },
  {
    id: 'sufi-whirling-dervish',
    title: 'Sufi Whirling Dervish - Celestial Dance',
    urduTitle: 'صوفی رقصِ درویش - وجد',
    category: 'Spiritual & Sufi',
    medium: 'Impasto Textured Acrylic & Palette Knife on Canvas',
    dimensions: '18" x 24" (45 x 60 cm)',
    pricePKR: 16500,
    priceUSD: 59,
    image: '/images/products/sufi-whirling-dervish.jpg',
    aspectRatio: '3/4',
    featured: true,
    bestSeller: true,
    inStock: true,
    description: 'A mystical Sufi whirling dervish depicted in a glowing saffron yellow robe, caught in sublime motion amidst a cascade of multi-hued brushstrokes and Arabic spiritual calligraphy at the apex.',
    urduDescription: 'تصوف اور روحانیت سے سرشار شاہکار، جس میں گھومتے ہوئے درویش کا زریں لباس اور پس منظر کی رنگ برنگی تجریدی لہریں وجد کی کیفیت کو بیان کرتی ہیں۔',
    details: [
      'Dynamic vertical composition evoking transcendence and peace',
      'Heavy-body acrylic textured strokes with palette knife finish',
      'Original hand-painted piece by Saba Art',
      'Ships in protective museum-grade packaging'
    ]
  },
  {
    id: 'surah-rahman-splatter',
    title: 'Fabi Ayyi Ala\'i Rabbikuma Tukadhdhiban',
    urduTitle: 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ',
    category: 'Islamic Calligraphy',
    medium: 'Contemporary Splatter & Calligraphy on Canvas',
    dimensions: '30" x 16" (76 x 40 cm)',
    pricePKR: 18000,
    priceUSD: 65,
    image: '/images/products/surah-rahman-splatter.jpg',
    aspectRatio: '16/9',
    featured: true,
    bestSeller: true,
    inStock: true,
    description: 'The iconic verse from Surah Ar-Rahman executed in bold charcoal black calligraphy against an expressive backdrop of gold, neon magenta, cerulean blue, and amber action splatter.',
    urduDescription: 'سورۃ الرحمن کی بابرکت آیت "فبای الاء ربکما تکذبان" جدید ایکشن سپلیٹر آرٹ اور روایتی خطاطی کے منفرد امتزاج کے ساتھ۔',
    details: [
      'Modern abstract splatter texture with deep tactile feel',
      'Gold mica highlights that catch ambient light beautifully',
      'Perfect focal statement piece for contemporary living rooms',
      '100% handmade authentic piece'
    ]
  },
  {
    id: 'santorini-bougainvillea-balcony',
    title: 'Mediterranean Balcony at Sunset',
    urduTitle: 'بحیرہ روم کا غروبِ آفتاب اور بوگن ویلیا',
    category: 'Landscape',
    medium: 'Fine Acrylic Landscape on Canvas',
    dimensions: '18" x 24" (45 x 60 cm)',
    pricePKR: 15500,
    priceUSD: 55,
    image: '/images/products/santorini-bougainvillea-balcony.jpg',
    aspectRatio: '3/4',
    featured: true,
    bestSeller: false,
    inStock: true,
    description: 'A romantic coastal veranda overlooking tranquil purple mountain silhouettes and a setting sun. Cascading hot-pink bougainvillea blooms frame the view above classical balustrades and tiled floor.',
    urduDescription: 'ایک خوبصورت بحیرہ رومی بالکونی کا منظر جس میں پہاڑوں کے پیچھے ڈوبتا سورج اور کھلتی ہوئی گلابی بوگن ویلیا کی بیلیں روح پرور تاثر دیتی ہیں۔',
    details: [
      'Rich atmospheric perspective and pastel dusk colors',
      'Detailed floral petal work with vivid botanical highlights',
      'Brings warmth, tranquility, and scenic depth to interior spaces',
      'Ready to hang'
    ]
  },
  {
    id: 'alpine-bloom-sunset',
    title: 'Alpine Blossom Meadow & Sunset',
    urduTitle: 'کوہسار اور گلِ لالہ کا غروب',
    category: 'Landscape',
    medium: 'Acrylic Fine Art on Canvas',
    dimensions: '20" x 20" (50 x 50 cm)',
    pricePKR: 15000,
    priceUSD: 54,
    image: '/images/products/alpine-bloom-sunset.jpg',
    aspectRatio: '1/1',
    featured: true,
    bestSeller: false,
    inStock: true,
    description: 'A panoramic mountain valley bathed in golden sunset glow, with a sea of wild pink blossoms cascading down lush green slopes beneath soft lilac clouds.',
    urduDescription: 'پہاڑوں کی گود میں ڈوبتے سورج کا دلکش منظر، جہاں سرسبز ڈھلوانوں پر کھلے گلابی پھول ایک قدرتی جنت کا سماں باندھتے ہیں۔',
    details: [
      'Square format ideal for modern gallery walls',
      'Luminous sunset gradient with subtle cloud reflections',
      'Intricate impressionist floral field brushwork',
      'Certificate of Authenticity from Saba Art'
    ]
  },
  {
    id: 'muhammad-rasulullah-medallion',
    title: 'Muhammad ﷺ Medallion with Arabesque Illumination',
    urduTitle: 'محمد رسول اللہ ﷺ - شمسہ و تذہیب',
    category: 'Islamic Calligraphy',
    medium: 'Classical Islamic Illumination & Calligraphy on Canvas',
    dimensions: '20" x 20" (50 x 50 cm)',
    pricePKR: 17500,
    priceUSD: 62,
    image: '/images/products/muhammad-rasulullah-medallion.jpg',
    aspectRatio: '1/1',
    featured: true,
    bestSeller: true,
    inStock: true,
    description: 'An auspicious illuminated medallion featuring the blessed name of the Prophet Muhammad ﷺ at its center, encircled by Durood Sharif in fine script and flanked by teal arabesque palmette motifs and an imperial red frame.',
    urduDescription: 'اسمِ گرامی "محمد ﷺ" کا دلکش تمغہ نما نقش، جس کے گرد درودِ پاک کا دائرہ اور نفاست سے سجے اسلیمی بیل بوٹے شاہانہ سرخ فریم کے ساتھ ہیں۔',
    details: [
      'Traditional Ottoman/Mughal inspired circular illumination (Shamsa)',
      'Rich contrast of imperial red, soft lavender, and Persian turquoise',
      'Spiritual centerpiece designed to invite blessings into the home',
      'Handcrafted by Saba Art'
    ]
  },
  {
    id: 'allahu-akbar-ornate',
    title: 'Allahu Akbar - Royal Lavender & Gold',
    urduTitle: 'اللہ اکبر - شاہانہ طلائی و بنفشی کینوس',
    category: 'Islamic Calligraphy',
    medium: 'Acrylic & Metallic Gold on Stretched Canvas',
    dimensions: '20" x 20" (50 x 50 cm)',
    pricePKR: 16000,
    priceUSD: 57,
    image: '/images/products/allahu-akbar-ornate.jpg',
    aspectRatio: '1/1',
    featured: false,
    bestSeller: false,
    inStock: true,
    description: 'An elegant square canvas showcasing "Allahu Akbar" in commanding calligraphy framed within an ornate Renaissance gold filigree border over calm mint turquoise and royal lavender margins.',
    urduDescription: 'شاہانہ بنفشی اور فیروزی کینوس پر سنہری نقش و نگار کے درمیان اللہ اکبر کی خوبصورت اور پُروقار خطاطی۔',
    details: [
      'Metallic gold painted baroque corners with lustrous sheen',
      'Complementary bilingual titling ("Allahu Akbar" cursive script below)',
      'Clean square format for versatile wall arrangement',
      'Original work by Saba Art'
    ]
  },
  {
    id: 'la-hawla-wala-quwwata',
    title: 'La Hawla Wa La Quwwata Illa Billah',
    urduTitle: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    category: 'Islamic Calligraphy',
    medium: 'Sponged Texture Acrylic on Canvas',
    dimensions: '20" x 20" (50 x 50 cm)',
    pricePKR: 15000,
    priceUSD: 54,
    image: '/images/products/la-hawla-wala-quwwata.jpg',
    aspectRatio: '1/1',
    featured: false,
    bestSeller: false,
    inStock: true,
    description: 'The declaration of complete reliance on Divine Power, masterfully penned in Thuluth Jali script over a soft sponge-textured backdrop of sky turquoise, bubblegum rose, and golden dust.',
    urduDescription: 'لا حول ولا قوۃ الا باللہ کا پُرتاثیر کلام، جو فیروزی اور گلابی ٹیکسچر والے کینوس پر خوبصورتی سے سجایا گیا ہے۔',
    details: [
      'Multi-layered sponge texture providing organic depth',
      'Deep black pigment script with sharp calligraphy lines',
      'Brings spiritual strength and peace to any sanctuary',
      'Signed original'
    ]
  },
  {
    id: 'hasbunallah-pastel-panorama',
    title: 'Hasbunallahu Wa Ni\'mal Wakeel - Pastel Panorama',
    urduTitle: 'حسبنا اللہ و نعم الوکیل - افقی پینوراما',
    category: 'Islamic Calligraphy',
    medium: 'Horizontal Pastel Acrylic on Canvas',
    dimensions: '36" x 18" (90 x 45 cm)',
    pricePKR: 19500,
    priceUSD: 70,
    image: '/images/products/hasbunallah-pastel-panorama.jpg',
    aspectRatio: '2/1',
    featured: true,
    bestSeller: true,
    inStock: true,
    description: 'A grand panoramic landscape canvas featuring the sacred verse stretched gracefully over dreamlike clouds of soft amber, lavender twilight, pastel mint, and dawn rose.',
    urduDescription: 'وسیع پینورامک کینوس پر افقی انداز میں لکھی گئی باوقار خطاطی، جس میں بادلوں جیسے نرم پیسٹل رنگوں کا حسین سنگم ہے۔',
    details: [
      'Extra-wide horizontal format perfect over sofas or headboards',
      'Soft diffused cloud transitions that evoke serenity and light',
      'Solid wooden chassis frame with gallery wrap',
      'Hand-crafted original piece'
    ]
  },
  {
    id: 'kun-faya-kun-yellow',
    title: 'Kun Faya Kun - Aurora Nebula',
    urduTitle: 'کُن فَيَكُون - تجلیاتِ قدرت',
    category: 'Islamic Calligraphy',
    medium: 'Soft Acrylic Cloudscape on Lemon Canvas',
    dimensions: '32" x 14" (80 x 35 cm)',
    pricePKR: 17000,
    priceUSD: 61,
    image: '/images/products/kun-faya-kun-yellow.jpg',
    aspectRatio: '16/7',
    featured: false,
    bestSeller: false,
    inStock: true,
    description: 'The sacred divine command "Be, and it is" (Kun Faya Kun) painted with floating calligraphic grace over a cosmic cloud of turquoise, lilac, and crimson flecks on a luminous yellow field.',
    urduDescription: 'اللہ تعالیٰ کا مبارک فرمان "کُن فَيَكُون"، جو نیلی اور گلابی کہکشاں جیسی تجریدی روشنی کے ساتھ زرد کینوس پر جگمگا رہا ہے۔',
    details: [
      'Expressive fluid lettering with double-stroke contouring',
      'Cosmic cloud color palette bringing creative energy to the room',
      'Finished with satin archival coat',
      'Original by Saba Art'
    ]
  },
  {
    id: 'allahumma-salli-crimson',
    title: 'Allahumma Salli Ala Muhammad - Radiant Duo',
    urduTitle: 'اللهم صل على سيدنا ومولانا محمد',
    category: 'Islamic Calligraphy',
    medium: 'Bold Dual-Tone Acrylic on Canvas',
    dimensions: '28" x 18" (70 x 45 cm)',
    pricePKR: 15500,
    priceUSD: 55,
    image: '/images/products/allahumma-salli-crimson.jpg',
    aspectRatio: '16/10',
    featured: false,
    bestSeller: false,
    inStock: true,
    description: 'A high-contrast modern graphic composition splitting vibrant crimson red and sunshine yellow, celebrating prayers upon the Prophet Muhammad ﷺ in monumental calligraphy.',
    urduDescription: 'سرخ اور زرد کے شوخ امتزاج میں درود و سلام کا منفرد اور دیدہ زیب کینوس، جو ہر دیکھنے والے کی توجہ کھینچ لیتا ہے۔',
    details: [
      'Bold contemporary two-tone background division',
      'Flowing calligraphic ligature and Arabic Diwani flourishes',
      'Signed by Saba Art in the lower corner',
      'Ready to display'
    ]
  },
  {
    id: 'desert-caravan-dunes',
    title: 'Silk Route Desert Caravan Sunset',
    urduTitle: 'صحرائی قافلہ اور شفق کے رنگ',
    category: 'Landscape',
    medium: 'Stylized Acrylic Landscape on Canvas',
    dimensions: '18" x 24" (45 x 60 cm)',
    pricePKR: 14000,
    priceUSD: 50,
    image: '/images/products/desert-caravan-dunes.jpg',
    aspectRatio: '3/4',
    featured: false,
    bestSeller: false,
    inStock: true,
    description: 'A poetic procession of camels traversing undulating pastel sand dunes under a dramatic dreamscape sunset sky with swirls of turquoise, magenta, and amber sunlight.',
    urduDescription: 'صحرائی ٹیلوں پر رواں دواں اونٹوں کا قافلہ اور آسمان پر قوسِ قزح جیسے شفق کے رنگ۔ ایک پُراسرار اور خوبصورت لینڈسکیپ۔',
    details: [
      'Contemporary layered color banding technique for the desert dunes',
      'Rich storytelling and atmospheric tranquility',
      'Matte-satin protective finish',
      'Original work from Saba Art'
    ]
  },
  {
    id: 'ocean-sunset-tides',
    title: 'Coastal Twilight & Ocean Breakers',
    urduTitle: 'ساحلِ سمندر، لہریں اور غروبِ آفتاب',
    category: 'Seascape',
    medium: 'Acrylic Seascape on Canvas',
    dimensions: '18" x 24" (45 x 60 cm)',
    pricePKR: 14500,
    priceUSD: 52,
    image: '/images/products/ocean-sunset-tides.jpg',
    aspectRatio: '3/4',
    featured: false,
    bestSeller: false,
    inStock: true,
    description: 'A serene seascape capturing rhythmic ocean waves breaking along a wet sandy shore, bathed in peach sunset light as a flock of seagulls glides gracefully overhead.',
    urduDescription: 'سمندر کی جھاگ دار لہریں، ریت کا گیلا ساحل اور شفق کے آسمان میں اڑتے ہوئے پرندے—ایک پُرسکون اور دلنواز منظر۔',
    details: [
      'Realistic water transparency and foaming wave textures',
      'Warm sunset gradient with reflections dancing on water surface',
      'Creates a calming, meditative atmosphere in any space',
      'Original artwork by Saba Art'
    ]
  },
  {
    id: 'cozy-coffee-cookie',
    title: 'Artisan Latte & Smiley Cookie',
    urduTitle: 'گرما گرم کافی اور ہنستا کوکی',
    category: 'Modern Art',
    medium: 'Handmade Colored Pencil & Mixed Media on Art Paper',
    dimensions: '12" x 16" (30 x 40 cm)',
    pricePKR: 7500,
    priceUSD: 27,
    image: '/images/products/cozy-coffee-cookie.jpg',
    aspectRatio: '3/4',
    featured: false,
    bestSeller: false,
    inStock: true,
    description: 'A whimsical and heartwarming cozy artwork featuring a steaming cup of latte with heart foam art accompanied by an adorable smiling chocolate chip cookie. Perfect for kitchens, cafes, or breakfast nooks.',
    urduDescription: 'دل کی شکل والے فوم کے ساتھ کافی کا خوبصورت کپ اور ہنستا مسکراتا چاکلیٹ چپ کوکی۔ کچن، ڈائننگ یا کیفے کارنر کے لیے ایک پرلطف اور خوشگوار آرٹ۔',
    details: [
      'Warm textured shading with fine colored pencil layering',
      'Cute, cheerful character art bringing smiles to daily moments',
      'Mounted and presented ready for framing',
      'Hand-drawn original by Saba Art'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ayesha Siddiqui',
    location: 'DHA Phase 6, Lahore',
    quote: ' صبا آرٹ سے میں نے سورۃ الرحمن کا کینوس آرڈر کیا تھا۔ جب پارسل کھولا تو حقیقت تصویر سے بھی کہیں زیادہ خوبصورت تھی! رنگوں کی چمک اور نفاست کمال کی ہے۔ جزاک اللہ!',
    rating: 5,
    artworkPurchased: 'Surah Ar-Rahman - Vibrant Splatter',
    date: 'October 2026'
  },
  {
    id: 't2',
    name: 'Dr. Tariq Mahmood',
    location: 'F-8/2, Islamabad',
    quote: 'The Sufi Whirling Dervish painting is the centerpiece of our clinic\'s executive lounge. Every visitor asks where we got it from. The texture and spiritual aura is breathtaking.',
    rating: 5,
    artworkPurchased: 'Sufi Whirling Dervish - Golden Ecstasy',
    date: 'September 2026'
  },
  {
    id: 't3',
    name: 'Fatima & Hamza Raza',
    location: 'Clifton, Karachi',
    quote: 'We ordered the Hasbunallahu Wa Ni\'mal Wakeel pastel panorama for our new home. The packing was ultra secure, delivered in 3 days, and it looks like a museum masterpiece above our sofa.',
    rating: 5,
    artworkPurchased: 'Hasbunallahu Wa Ni\'mal Wakeel - Pastel Panorama',
    date: 'October 2026'
  },
  {
    id: 't4',
    name: 'Zainab Qasim',
    location: 'Dubai Marina, UAE',
    quote: 'International delivery to Dubai was seamless! The Muhammad ﷺ illuminated medallion was so delicately created. Saba Art is true artistic mastery.',
    rating: 5,
    artworkPurchased: 'Muhammad ﷺ Medallion with Arabesque Illumination',
    date: 'September 2026'
  }
];
