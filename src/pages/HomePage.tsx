import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Users, Truck, Shield, RotateCcw, Award, Smartphone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CountdownTimer from '@/components/ui/countdown-timer';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const HomePage = () => {
  // Product filtering logic
  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 8);
  const bestSellers = products.filter(product => product.isBestSeller).slice(0, 8);
  const flashDeals = products.filter(product => product.isFlashDeal).slice(0, 6);
  const categories = Array.from(new Set(products.map(product => product.category))).slice(0, 16);

  const brands = [
    { name: 'Apple', logo: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=100&h=60&fit=crop' },
    { name: 'Samsung', logo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&h=60&fit=crop' },
    { name: 'Nike', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=60&fit=crop' },
    { name: 'Adidas', logo: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=100&h=60&fit=crop' },
    { name: 'Sony', logo: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=60&fit=crop' },
    { name: 'LG', logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=60&fit=crop' },
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

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with solid background */}
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
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-orange px-8 py-4 text-lg backdrop-blur-sm"
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

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="h-8 w-8 text-green" />
              </div>
              <h3 className="font-semibold mb-1">Free Delivery</h3>
              <p className="text-sm text-gray-600">On orders over $50</p>
            </div>
            <div className="text-center">
              <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-8 w-8 text-blue" />
              </div>
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% protected</p>
            </div>
            <div className="text-center">
              <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <RotateCcw className="h-8 w-8 text-orange" />
              </div>
              <h3 className="font-semibold mb-1">Easy Returns</h3>
              <p className="text-sm text-gray-600">30-day return policy</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">Quality Guarantee</h3>
              <p className="text-sm text-gray-600">Premium products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Top Brands</h2>
            <p className="text-gray-600">We partner with the world's leading brands</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
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

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600">Discover products across all categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category}
                to={`/products?category=${encodeURIComponent(category)}`}
                className="group text-center animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-orange/10 to-orange/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-orange/20 group-hover:to-orange/10 transition-all duration-300">
                  <ShoppingBag className="h-8 w-8 text-orange" />
                </div>
                <h3 className="font-medium text-sm group-hover:text-orange transition-colors">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Deals Section */}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {flashDeals.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
            <div className="text-center mt-8">
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

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-white">
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

      {/* Best Sellers */}
      {bestSellers.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1160px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Best Sellers</h2>
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

      {/* Special Offer Banner */}
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

      {/* Testimonials */}
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

      {/* Newsletter Subscription */}
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

      {/* Mobile App Promotion */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Shop on the Go!</h2>
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
                  <Smartphone className="mr-2 h-5 w-5" />
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
    </div>
  );
};

export default HomePage;
