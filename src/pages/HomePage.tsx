
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Users, Truck, Shield, RotateCcw, Award, Smartphone, Download, Percent, Gift, Clock, TrendingUp, CheckCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CountdownTimer from '@/components/ui/countdown-timer';
import ProductCard from '@/components/product/ProductCard';
import { products, categories, categoryImages, getAllCategoriesWithCounts } from '@/data/products';

const HomePage = () => {
  // Product filtering logic
  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 8);
  const bestSellers = products.filter(product => product.isBestSeller).slice(0, 8);
  const flashDeals = products.filter(product => product.isFlashDeal);
  const flashDealsTop4 = flashDeals.slice(0, 4);
  const flashDealsNext8 = flashDeals.slice(4, 12);
  
  // Create discount products (products with originalPrice)
  const discountProducts = products.filter(product => product.originalPrice && product.originalPrice > product.price).slice(0, 8);
  
  // Get all categories with their product counts and products
  const categoriesWithCounts = getAllCategoriesWithCounts();

  const brands = [
    { name: 'Apple', logo: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=100&h=60&fit=crop' },
    { name: 'Samsung', logo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&h=60&fit=crop' },
    { name: 'Nike', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=60&fit=crop' },
    { name: 'Adidas', logo: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=100&h=60&fit=crop' },
    { name: 'Sony', logo: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=60&fit=crop' },
    { name: 'LG', logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=60&fit=crop' },
    { name: 'Dell', logo: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=100&h=60&fit=crop' },
    { name: 'HP', logo: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100&h=60&fit=crop' },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing shopping experience! Fast delivery and great quality products.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Best prices and excellent customer service. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment: "Love the variety of products and the easy return policy.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free delivery on orders over $50 worldwide",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure payment with SSL encryption",
      color: "text-blue-600"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free return policy",
      color: "text-orange-600"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "Premium quality products guaranteed",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-orange via-orange-dark to-red text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-[1160px] mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-white/20 text-white mb-4 backdrop-blur-sm">
                🔥 Special Launch Offer
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Ultimate
                <span className="block text-yellow-300">Shopping Destination</span>
              </h1>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Discover amazing products at unbeatable prices. From electronics to fashion, 
                we have everything you need with fast delivery and guaranteed quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-white text-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/flash-deals">
                  <Button 
                    size="lg" 
                    className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-4 text-lg font-semibold"
                  >
                    Flash Deals
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex items-center space-x-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold">10M+</div>
                  <div className="text-sm opacity-80">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm opacity-80">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-sm opacity-80">Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                  alt="Shopping Experience"
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black p-4 rounded-xl shadow-lg">
                  <div className="font-bold text-lg">50% OFF</div>
                  <div className="text-sm">Flash Sale Today!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Brand Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Top Brands</h2>
            <p className="text-gray-600">We partner with the world's leading brands</p>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="text-center grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto mx-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600">Discover products across all categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.slice(0, 16).map((category, index) => (
              <Link
                key={category}
                to={`/products?category=${encodeURIComponent(category)}`}
                className="group text-center animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-3 group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={categoryImages[category] || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop'}
                    alt={category}
                    className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-1 left-1 right-1">
                    <h3 className="font-medium text-xs text-white text-center truncate">
                      {category}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Flash Deals Section */}
      {flashDeals.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-red/5 to-orange/5">
          <div className="max-w-[1160px] mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2 text-red">⚡ Flash Deals</h2>
                <p className="text-gray-600">Limited time offers - Hurry up!</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Ends in:</p>
                <CountdownTimer targetDate={new Date(Date.now() + 24 * 60 * 60 * 1000)} />
              </div>
            </div>
            
            {/* Top 4 Flash Deals in 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {flashDealsTop4.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>

            {/* Next 8 Flash Deals in 3 columns */}
            {flashDealsNext8.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {flashDealsNext8.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    className="animate-fade-in"
                    style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                  />
                ))}
              </div>
            )}

            <div className="text-center">
              <Link to="/flash-deals">
                <Button variant="outline" className="border-red text-red hover:bg-red hover:text-white">
                  View All Flash Deals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 6. Discount Products Section */}
      {discountProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-[1160px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <Percent className="mr-2 h-8 w-8 text-orange" />
                Discount Products
              </h2>
              <p className="text-gray-600">Save big on these amazing deals</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {discountProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1160px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
              <p className="text-gray-600">Hand-picked products just for you</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/products?featured=true">
                <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                  View All Featured Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 8. Best Sellers */}
      {bestSellers.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-[1160px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <TrendingUp className="mr-2 h-8 w-8 text-green-600" />
                Best Sellers
              </h2>
              <p className="text-gray-600">Most popular products loved by customers</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {bestSellers.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/products?bestseller=true">
                <Button variant="outline" className="border-green text-green hover:bg-green hover:text-white">
                  View All Best Sellers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 9. Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose N ShopMart?</h2>
            <p className="text-gray-600">Experience the difference with our premium service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover-glow">
              <CardContent>
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-600">Every product is carefully inspected to ensure premium quality and customer satisfaction.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover-glow">
              <CardContent>
                <div className="bg-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-gray-600">Your satisfaction is our priority. We go above and beyond to exceed expectations.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover-glow">
              <CardContent>
                <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Exclusive Deals</h3>
                <p className="text-gray-600">Get access to exclusive discounts and special offers available only to our customers.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 10. Special Offer Banner */}
      <section className="py-16 bg-gradient-to-r from-blue to-blue-dark text-white">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">🎉 Special Weekend Offer!</h2>
          <p className="text-xl mb-8 opacity-90">
            Get up to 70% OFF on selected items. Limited time only!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-white text-blue hover:bg-gray-100 px-8">
                Shop Now & Save
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* 11. Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Join thousands of satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-glow animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">Verified Customer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Statistics Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">10M+</div>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green mb-2">50K+</div>
              <p className="text-gray-300">Products Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue mb-2">100+</div>
              <p className="text-gray-300">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <p className="text-gray-300">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-orange to-orange-dark text-white">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Deals</h2>
          <p className="text-xl opacity-90 mb-8">
            Subscribe to our newsletter and never miss amazing offers
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-orange hover:bg-gray-100 px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-80 mt-3">
              Join 100,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* 14. Mobile App Promotion */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 flex items-center">
                <Smartphone className="mr-3 h-10 w-10 text-orange" />
                Shop on the Go!
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Download our mobile app for exclusive deals, faster checkout, 
                and seamless shopping experience anywhere, anytime.
              </p>
              <div className="flex gap-4">
                <Button className="bg-white text-gray-900 hover:bg-gray-100">
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Clock className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
                alt="Mobile App"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 15. All Categories with Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">All Categories & Products</h2>
            <p className="text-gray-600">Explore our complete product catalog across all categories</p>
          </div>
          
          {categoriesWithCounts.map((categoryData, categoryIndex) => (
            <div key={categoryData.name} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={categoryImages[categoryData.name] || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop'}
                      alt={categoryData.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 bg-orange text-white text-xs font-bold px-2 py-1 rounded-full">
                      {categoryData.count}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{categoryData.name}</h3>
                    <p className="text-gray-600">{categoryData.count} products available</p>
                  </div>
                </div>
                <Link 
                  to={`/products?category=${encodeURIComponent(categoryData.name)}`}
                  className="text-orange hover:text-orange-dark font-semibold flex items-center group"
                >
                  View All
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryData.products.slice(0, 8).map((product, productIndex) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    className="animate-fade-in"
                    style={{ animationDelay: `${productIndex * 0.05}s` }}
                  />
                ))}
              </div>

              {/* Show more products if available */}
              {categoryData.products.length > 8 && (
                <div className="text-center mt-6">
                  <Link to={`/products?category=${encodeURIComponent(categoryData.name)}`}>
                    <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                      View All {categoryData.count} {categoryData.name} Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 16. Security & Trust */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop with Confidence</h2>
            <p className="text-gray-600">Your security and privacy are our top priorities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green" />
              </div>
              <h3 className="font-semibold mb-2">SSL Encrypted</h3>
              <p className="text-sm text-gray-600">Bank-level security</p>
            </div>
            <div className="text-center">
              <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue" />
              </div>
              <h3 className="font-semibold mb-2">Trusted by Millions</h3>
              <p className="text-sm text-gray-600">10M+ happy customers</p>
            </div>
            <div className="text-center">
              <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange" />
              </div>
              <h3 className="font-semibold mb-2">Award Winning</h3>
              <p className="text-sm text-gray-600">Best e-commerce 2024</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Verified Reviews</h3>
              <p className="text-sm text-gray-600">100% authentic reviews</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
