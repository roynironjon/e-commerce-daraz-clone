
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
  'Fashion & Clothing',
  'Beauty & Health',
  'Home & Garden',
  'Sports & Outdoor',
  'Books & Media',
  'Toys & Games',
  'Automotive',
  'Jewelry & Watches',
  'Baby & Kids',
  'Groceries & Food',
  'Pet Supplies',
  'Travel & Luggage',
  'Office Supplies',
  'Musical Instruments',
  'Art & Crafts'
];

export const categoryImages = {
  'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
  'Fashion & Clothing': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
  'Beauty & Health': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
  'Home & Garden': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
  'Sports & Outdoor': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
  'Books & Media': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
  'Toys & Games': 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400',
  'Automotive': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
  'Jewelry & Watches': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
  'Baby & Kids': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
  'Groceries & Food': 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
  'Pet Supplies': 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
  'Travel & Luggage': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400',
  'Office Supplies': 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400',
  'Musical Instruments': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
  'Art & Crafts': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400'
};

// Generate comprehensive product data for all categories
const generateProducts = () => {
  const products: Product[] = [];
  
  // Electronics Products (60 items)
  const electronicsProducts = [
    {
      name: 'iPhone 15 Pro Max',
      price: 1299,
      originalPrice: 1399,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      rating: 4.8,
      reviews: 1250,
      description: 'Latest iPhone with titanium design, A17 Pro chip, and advanced camera system.',
      stock: 25,
      brand: 'Apple',
      isFlashDeal: true,
      isFeatured: true
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      price: 1199,
      originalPrice: 1299,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      rating: 4.7,
      reviews: 980,
      description: 'Premium Android smartphone with S Pen and 200MP camera.',
      stock: 30,
      brand: 'Samsung',
      isBestSeller: true
    },
    // ... (generate 58 more electronics products)
  ];

  // Generate products for each category (40-50 products each)
  categories.forEach((category, categoryIndex) => {
    const productCount = Math.floor(Math.random() * 11) + 40; // 40-50 products
    for (let i = 0; i < productCount; i++) {
      const productId = `${categoryIndex + 1}-${i + 1}`;
      const basePrice = Math.floor(Math.random() * 1500) + 50;
      const discount = Math.random() > 0.6 ? Math.floor(Math.random() * 30) + 10 : 0;
      const originalPrice = discount > 0 ? Math.floor(basePrice / (1 - discount / 100)) : undefined;
      
      products.push({
        id: productId,
        name: `${category} Product ${i + 1}`,
        price: basePrice,
        originalPrice,
        image: categoryImages[category] || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
        category,
        rating: Number((Math.random() * 2 + 3).toFixed(1)),
        reviews: Math.floor(Math.random() * 2000) + 100,
        description: `High-quality ${category.toLowerCase()} product with excellent features and great value.`,
        stock: Math.floor(Math.random() * 100) + 10,
        brand: `Brand${Math.floor(Math.random() * 10) + 1}`,
        isFlashDeal: Math.random() > 0.8,
        flashDealEndTime: Math.random() > 0.8 ? new Date(Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000) : undefined,
        isBestSeller: Math.random() > 0.7,
        isFeatured: Math.random() > 0.6
      });
    }
  });

  return products;
};

export const products = generateProducts();

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

export const getCategoryProductCount = (category: string) => {
  return products.filter(product => product.category === category).length;
};

export const getAllCategoriesWithCounts = () => {
  return categories.map(category => ({
    name: category,
    count: getCategoryProductCount(category),
    products: getProductsByCategory(category)
  }));
};
