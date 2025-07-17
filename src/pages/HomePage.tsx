import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Truck, Shield, Headphones, RotateCcw, 
  Star, Gift, Zap, Crown, Award, TrendingUp, 
  Users, Globe, CheckCircle, Sparkles, ShoppingCart,
  ShoppingBag, CreditCard, Package, Tag, Percent,
  Heart, Smile, ThumbsUp, Aperture, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import ProductCard from '@/components/product/ProductCard';
import CountdownTimer from '@/components/ui/countdown-timer';
import { getFeaturedProducts, getBestSellers, getFlashDeals, categories, categoryImages } from '@/data/products';

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  const bestSellers = getBestSellers();
  const flashDeals = getFlashDeals();

  const testimonials = [
    {
      id: 1,
      name: "Nironjon",
      rating: 5,
      comment: "Amazing shopping experience! Fast delivery and excellent customer service.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
    },
    {
      id: 2,
      name: "Asif", 
      rating: 5,
      comment: "Great prices and authentic products. Will definitely shop here again!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    {
      id: 3,
      name: "Emily",
      rating: 5,
      comment: "Love the variety of products available. Found everything I needed in one place.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    }
  ];

  const brands = [
    { name: 'Apple', logo: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=150' },
    { name: 'Samsung', logo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=150' },
    { name: 'Nike', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150' },
    { name: 'Sony', logo: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=150' },
    { name: 'LG', logo: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=150' },
    { name: 'Adidas', logo: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=150' }
  ];

  const stats = [
    { icon: Users, value: '2M+', label: 'Happy Customers' },
    { icon: Award, value: '50K+', label: 'Products' },
    { icon: Globe, value: '100+', label: 'Countries' },
    { icon: TrendingUp, value: '99%', label: 'Satisfaction' }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* 1. Hero Section - Enhanced with floating icons */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
        {/* Floating e-commerce icons */}
        <div className="absolute inset-0 overflow-hidden">
          <ShoppingCart className="absolute top-1/4 left-1/6 text-white/10 h-32 w-32 animate-float-slow" />
          <ShoppingBag className="absolute top-1/3 right-1/5 text-white/10 h-28 w-28 animate-float" />
          <CreditCard className="absolute bottom-1/4 left-1/4 text-white/10 h-24 w-24 animate-float-slower" />
          <Package className="absolute bottom-1/3 right-1/6 text-white/10 h-20 w-20 animate-float-slow" />
          <Tag className="absolute top-1/5 right-1/4 text-white/10 h-16 w-16 animate-float" />
          <Percent className="absolute bottom-1/5 left-1/5 text-white/10 h-14 w-14 animate-float-slower" />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-white text-orange-600 p-3 rounded-xl font-bold text-3xl shadow-lg animate-bounce">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <span className="text-4xl font-bold">ShopMart</span>
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  #1 Choice
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Shop Smart,
                <br />
                <span className="text-yellow-300 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  Save Big!
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Discover incredible deals on premium products. Your ultimate destination 
                for quality shopping with unbeatable prices and lightning-fast delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <Link to="/products">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all group">
                    <Sparkles className="mr-2 h-6 w-6 group-hover:animate-spin" />
                    Shop Now
                  </Button>
                </Link>
                <Link to="/flash-deals">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-4 text-lg font-bold rounded-xl shadow-lg backdrop-blur-sm group">
                    <Zap className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                    Flash Deals
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Truck className="h-5 w-5 text-green-400" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Crown className="h-5 w-5 text-yellow-400" />
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl opacity-75 blur-xl -z-10 animate-pulse"></div>
                <div className="relative bg-white p-1 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-br from-orange-100 to-pink-100 p-6 rounded-2xl">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        HOT DEAL
                      </div>
                      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        50% OFF
                      </div>
                    </div>
                    <div className="flex justify-center items-center h-64">
                      <ShoppingBag className="h-48 w-48 text-orange-600" />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="font-bold text-xl text-gray-800">Premium Shopping</h3>
                      <p className="text-orange-600 font-medium">Limited Time Offer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Showcase - Enhanced with hover effects */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Trusted by Leading Brands</h2>
            <p className="text-gray-600">Shop from the world's most popular brands</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="relative group transition-all duration-300 hover:scale-110"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 relative"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Stats Section - Enhanced with gradient cards */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center animate-fade-in hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-white/20 to-white/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Section - Enhanced with gradient backgrounds */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ShopMart?</h2>
            <p className="text-gray-600 text-lg">Experience the best online shopping with our premium services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl text-center animate-fade-in hover-lift shadow-lg hover:shadow-xl transition-all">
              <div className="bg-white/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Truck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free Shipping</h3>
              <p className="text-white/90">Free shipping on orders over $50 worldwide</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl text-center animate-fade-in hover-lift shadow-lg hover:shadow-xl transition-all">
              <div className="bg-white/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Payment</h3>
              <p className="text-white/90">100% secure payment with SSL encryption</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl text-center animate-fade-in hover-lift shadow-lg hover:shadow-xl transition-all">
              <div className="bg-white/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Headphones className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-white/90">Round the clock customer support</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-2xl text-center animate-fade-in hover-lift shadow-lg hover:shadow-xl transition-all">
              <div className="bg-white/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <RotateCcw className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Returns</h3>
              <p className="text-white/90">30-day hassle-free return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Categories Section - Enhanced with hover animations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Categories</h2>
            <p className="text-gray-600 text-lg">Explore our wide range of product categories</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={category}
                to={`/products?category=${encodeURIComponent(category)}`}
                className={`group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in border border-gray-100 hover:border-orange-500`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-16 h-16 mx-auto rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img
                        src={categoryImages[category]}
                        alt={category}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-2 py-1 font-bold shadow-sm">
                      60+
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm group-hover:text-orange-600 transition-colors">
                    {category}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/categories">
              <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg group">
                View All Categories
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Flash Deals Section - Enhanced with urgency elements */}
      {flashDeals.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-600 text-white p-3 rounded-xl shadow-lg">
                  <Zap className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-red-600">Flash Deals</h2>
                  <p className="text-gray-600">Grab these incredible offers before they're gone!</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border border-red-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-600">Ending in:</span>
                  <CountdownTimer targetDate={new Date(Date.now() + 24 * 60 * 60 * 1000)} />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {flashDeals.slice(0, 8).map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="animate-fade-in hover:border-red-500 hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  badge={
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                      {Math.floor(Math.random() * 30) + 30}% OFF
                    </div>
                  }
                />
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/flash-deals">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group">
                  View All Flash Deals
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 7. Featured Products Section - Enhanced with ribbon */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center relative mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur opacity-20"></div>
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-3 rounded-xl shadow-lg relative">
                <Star className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Handpicked premium products just for you</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.slice(0, 12).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                className="animate-fade-in hover:border-orange-500 hover:shadow-lg transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
                ribbon={
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 text-xs font-bold transform rotate-12 translate-x-2 -translate-y-1 shadow-md">
                    Featured
                  </div>
                }
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products?featured=true">
              <Button variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-10 py-4 text-lg font-bold rounded-xl shadow-sm hover:shadow-md transition-all group">
                View All Featured Products
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Best Sellers Section - Enhanced with crown badge */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center relative mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-full blur opacity-20"></div>
              <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-3 rounded-xl shadow-lg relative">
                <Crown className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Best Sellers</h2>
            <p className="text-gray-600 text-lg">Most popular products loved by our customers</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {bestSellers.slice(0, 8).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                className="animate-fade-in hover:border-green-500 hover:shadow-lg transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
                badge={
                  <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                    <Crown className="h-3 w-3" />
                    Bestseller
                  </div>
                }
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products?bestseller=true">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-10 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group">
                View All Best Sellers
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Special Offers Banner - Enhanced with floating gifts */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Gift className="absolute top-1/4 left-1/6 text-white/10 h-32 w-32 animate-float-slow" />
          <Gift className="absolute top-1/3 right-1/5 text-white/10 h-28 w-28 animate-float" />
          <Gift className="absolute bottom-1/4 left-1/4 text-white/10 h-24 w-24 animate-float-slower" />
          <Gift className="absolute bottom-1/3 right-1/6 text-white/10 h-20 w-20 animate-float-slow" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center relative mb-6">
              <div className="absolute -inset-4 bg-white/20 rounded-full blur"></div>
              <Gift className="h-16 w-16 text-yellow-300 relative" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Special Weekend Offer!</h2>
            <p className="text-xl mb-8">Get up to 70% off on selected items. Limited time offer!</p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <Sparkles className="mr-2 h-6 w-6 group-hover:animate-spin" />
              Shop Special Offers
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Testimonials Section - Enhanced with floating avatars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Real reviews from real customers worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <Card className="relative h-full hover:shadow-lg transition-all border-l-4 border-l-orange-500">
                  <CardContent className="p-8 text-center">
                    <div className="relative inline-block mb-6">
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="relative w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-md"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic text-lg relative">
                      <span className="absolute top-0 left-0 text-3xl text-gray-300">"</span>
                      {testimonial.comment}
                      <span className="absolute bottom-0 right-0 text-3xl text-gray-300">"</span>
                    </p>
                    <h4 className="font-bold text-xl text-gray-800">{testimonial.name}</h4>
                    <p className="text-orange-600 font-medium">Verified Customer</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Newsletter Section - Enhanced with floating checkmarks */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <CheckCircle className="absolute top-1/4 left-1/6 text-white/10 h-32 w-32 animate-float-slow" />
          <CheckCircle className="absolute top-1/3 right-1/5 text-white/10 h-28 w-28 animate-float" />
          <CheckCircle className="absolute bottom-1/4 left-1/4 text-white/10 h-24 w-24 animate-float-slower" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with ShopMart</h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our newsletter and never miss out on exclusive deals, new arrivals, and special offers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="rounded-xl bg-white/20 text-white placeholder-white/70 border-0 text-lg py-6 backdrop-blur-sm focus:ring-2 focus:ring-white"
              />
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-8 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-white/70">
              🔒 We respect your privacy. Unsubscribe at any time. Join 100,000+ happy subscribers!
            </p>
          </div>
        </div>
      </section>

      {/* 12. Mobile App Promotion - Enhanced with phone mockup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Shop on the Go!</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Download our mobile app for exclusive deals, faster checkout, and seamless shopping experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all group">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.5 3.5A2.5 2.5 0 016 1h12a2.5 2.5 0 012.5 2.5v17a2.5 2.5 0 01-2.5 2.5H6a2.5 2.5 0 01-2.5-2.5v-17zM6 2.5a1 1 0 00-1 1v17a1 1 0 001 1h12a1 1 0 001-1v-17a1 1 0 00-1-1H6z"></path>
                    <path d="M12 17a1 1 0 100-2 1 1 0 000 2z"></path>
                  </svg>
                  Download for iOS
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                </Button>
                <Button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all group">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6z"></path>
                    <path d="M12 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  Download for Android
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-br from-orange-100 to-pink-100 p-6 rounded-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-orange-600" />
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="font-bold text-xl text-gray-800">ShopMart App</h3>
                    <p className="text-orange-600 font-medium">Your Shopping Companion</p>
                  </div>
                  <div className="flex justify-center items-center h-48">
                    <ShoppingCart className="h-32 w-32 text-orange-600" />
                  </div>
                  <div className="flex justify-center mt-6">
                    <div className="w-16 h-1 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;