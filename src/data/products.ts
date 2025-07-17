
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  rating: number;
  reviews: number;
  description: string;
  stock: number;
  features?: string[];
  brand?: string;
  isFlashDeal?: boolean;
  flashDealEndTime?: Date;
  isBestSeller?: boolean;
  isFeatured?: boolean;
}

export const categories = [
  'Electronics',
  'Fashion',
  'Beauty',
  'Home & Garden',
  'Sports',
  'Books',
  'Toys',
  'Automotive'
];

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 1299,
    originalPrice: 1399,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400'
    ],
    category: 'Electronics',
    rating: 4.8,
    reviews: 1250,
    description: 'Latest iPhone with titanium design, A17 Pro chip, and advanced camera system.',
    stock: 25,
    features: ['A17 Pro Chip', '48MP Camera', 'Titanium Design', '5G Ready'],
    brand: 'Apple',
    isFlashDeal: true,
    flashDealEndTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    isFeatured: true
  },
  {
    id: '2',
    name: 'Samsung Galaxy Tab S9',
    price: 899,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    category: 'Electronics',
    rating: 4.6,
    reviews: 890,
    description: 'Premium Android tablet with S Pen included and beautiful AMOLED display.',
    stock: 15,
    features: ['11-inch Display', 'S Pen Included', '8GB RAM', 'Android 13'],
    brand: 'Samsung',
    isBestSeller: true
  },
  {
    id: '3',
    name: 'MacBook Pro 14"',
    price: 2299,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    category: 'Electronics',
    rating: 4.9,
    reviews: 2100,
    description: 'Professional laptop with M3 Pro chip, stunning Retina display.',
    stock: 8,
    features: ['M3 Pro Chip', '14-inch Retina', '16GB RAM', '512GB SSD'],
    brand: 'Apple',
    isFeatured: true
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5',
    price: 399,
    originalPrice: 449,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    category: 'Electronics',
    rating: 4.7,
    reviews: 1520,
    description: 'Industry-leading noise canceling wireless headphones.',
    stock: 30,
    features: ['Noise Canceling', '30hr Battery', 'Touch Controls', 'Hi-Res Audio'],
    brand: 'Sony',
    isFlashDeal: true,
    flashDealEndTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
  },

  // Fashion
  {
    id: '5',
    name: 'Designer Leather Jacket',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
    category: 'Fashion',
    rating: 4.5,
    reviews: 680,
    description: 'Premium leather jacket with modern cut and stylish design.',
    stock: 20,
    features: ['Genuine Leather', 'Modern Fit', 'Multiple Pockets', 'Water Resistant'],
    brand: 'StyleCo',
    isBestSeller: true
  },
  {
    id: '6',
    name: 'Summer Floral Dress',
    price: 89,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
    category: 'Fashion',
    rating: 4.3,
    reviews: 340,
    description: 'Elegant floral dress perfect for summer occasions.',
    stock: 45,
    features: ['Floral Pattern', 'Breathable Fabric', 'Midi Length', 'Machine Washable'],
    brand: 'FlowerPower'
  },
  {
    id: '7',
    name: 'Classic Denim Jeans',
    price: 79,
    originalPrice: 99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    category: 'Fashion',
    rating: 4.4,
    reviews: 890,
    description: 'Comfortable classic fit denim jeans for everyday wear.',
    stock: 60,
    features: ['Classic Fit', '100% Cotton', 'Fade Resistant', 'Multiple Sizes'],
    brand: 'DenimCo',
    isFeatured: true
  },

  // Beauty
  {
    id: '8',
    name: 'Anti-Aging Serum',
    price: 149,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    category: 'Beauty',
    rating: 4.6,
    reviews: 1200,
    description: 'Advanced anti-aging serum with vitamin C and hyaluronic acid.',
    stock: 35,
    features: ['Vitamin C', 'Hyaluronic Acid', 'Anti-Aging', 'Dermatologist Tested'],
    brand: 'BeautyLux',
    isFlashDeal: true,
    flashDealEndTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
  },
  {
    id: '9',
    name: 'Professional Makeup Set',
    price: 199,
    originalPrice: 249,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
    category: 'Beauty',
    rating: 4.7,
    reviews: 750,
    description: 'Complete professional makeup set with brushes and premium cosmetics.',
    stock: 18,
    features: ['Professional Grade', 'Includes Brushes', '24 Colors', 'Travel Case'],
    brand: 'ProMakeup',
    isBestSeller: true
  },

  // Home & Garden
  {
    id: '10',
    name: 'Smart Home Thermostat',
    price: 249,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    category: 'Home & Garden',
    rating: 4.5,
    reviews: 920,
    description: 'WiFi-enabled smart thermostat with energy saving features.',
    stock: 40,
    features: ['WiFi Enabled', 'Energy Saving', 'App Control', 'Voice Compatible'],
    brand: 'SmartHome',
    isFeatured: true
  },
  {
    id: '11',
    name: 'Ceramic Plant Pots Set',
    price: 59,
    originalPrice: 79,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400',
    category: 'Home & Garden',
    rating: 4.4,
    reviews: 280,
    description: 'Beautiful ceramic plant pots set in various sizes.',
    stock: 50,
    features: ['Set of 3', 'Drainage Holes', 'Modern Design', 'Indoor/Outdoor'],
    brand: 'GardenStyle'
  },

  // Sports
  {
    id: '12',
    name: 'Professional Tennis Racket',
    price: 299,
    originalPrice: 349,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
    category: 'Sports',
    rating: 4.8,
    reviews: 450,
    description: 'Professional grade tennis racket used by tournament players.',
    stock: 12,
    features: ['Professional Grade', 'Carbon Fiber', 'Perfect Balance', 'Grip Included'],
    brand: 'TennisPro',
    isBestSeller: true
  },
  {
    id: '13',
    name: 'Yoga Mat Premium',
    price: 79,
    originalPrice: 99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
    category: 'Sports',
    rating: 4.6,
    reviews: 820,
    description: 'Premium non-slip yoga mat perfect for all yoga practices.',
    stock: 75,
    features: ['Non-Slip', 'Eco-Friendly', '6mm Thick', 'Carrying Strap'],
    brand: 'YogaLife',
    isFlashDeal: true,
    flashDealEndTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)
  },

  // Books
  {
    id: '14',
    name: 'Programming Fundamentals',
    price: 49,
    originalPrice: 69,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
    category: 'Books',
    rating: 4.7,
    reviews: 1100,
    description: 'Comprehensive guide to programming fundamentals and best practices.',
    stock: 85,
    features: ['500+ Pages', 'Code Examples', 'Exercise Solutions', 'Latest Edition'],
    brand: 'TechBooks'
  },
  {
    id: '15',
    name: 'Cooking Masterclass',
    price: 39,
    originalPrice: 59,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400',
    category: 'Books',
    rating: 4.5,
    reviews: 630,
    description: 'Learn professional cooking techniques from world-class chefs.',
    stock: 90,
    features: ['200+ Recipes', 'Step-by-Step Photos', 'Chef Tips', 'Hardcover'],
    brand: 'CulinaryPress'
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured);
};

export const getBestSellers = () => {
  return products.filter(product => product.isBestSeller);
};

export const getFlashDeals = () => {
  return products.filter(product => product.isFlashDeal);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
