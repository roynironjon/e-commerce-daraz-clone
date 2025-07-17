
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, RotateCcw, Star, Gift, Zap, Crown, Award, TrendingUp, Users, Globe, CheckCircle, Sparkles } from 'lucide-react';
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
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing shopping experience! Fast delivery and excellent customer service.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
    },
    {
      id: 2,
      name: "Mike Chen", 
      rating: 5,
      comment: "Great prices and authentic products. Will definitely shop here again!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    {
      id: 3,
      name: "Emily Davis",
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
    <div className="min-h-screen">
      {/* 1. Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-orange via-orange-dark to-red text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-400/20 rounded-full blur-2xl animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue/30 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-white text-orange p-3 rounded-xl font-bold text-3xl shadow-lg">
                  N
                </div>
                <span className="text-4xl font-bold">ShopMart</span>
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
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
                  <Button size="lg" className="bg-white text-orange hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <Sparkles className="mr-2 h-6 w-6" />
                    Shop Now
                  </Button>
                </Link>
                <Link to="/flash-deals">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange px-10 py-4 text-lg font-bold rounded-xl shadow-lg backdrop-blur-sm">
                    <Zap className="mr-2 h-6 w-6" />
                    Flash Deals
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Crown className="h-5 w-5 text-yellow-400" />
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
                  alt="Shopping"
                  className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"  
                />
                <div className="absolute -top-6 -right-6 bg-red text-white p-4 rounded-xl font-bold text-center shadow-lg animate-bounce">
                  <div className="text-2xl">50%</div>
                  <div className="text-sm">OFF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Showcase */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Trusted by Leading Brands</h2>
            <p className="text-gray-600">Shop from the world's most popular brands</p>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4 opacity-60 hover:opacity-100 transition-opacity">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand.logo}
                alt={brand.name}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue to-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose N ShopMart?</h2>
            <p className="text-gray-600 text-lg">Experience the best online shopping with our premium services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in hover-lift">
              <div className="bg-gradient-to-br from-orange to-orange-dark text-white p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Truck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50 worldwide</p>
            </div>
            
            <div className="text-center animate-fade-in hover-lift">
              <div className="bg-gradient-to-br from-green to-green/80 text-white p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment with SSL encryption</p>
            </div>
            
            <div className="text-center animate-fade-in hover-lift">
              <div className="bg-gradient-to-br from-blue to-blue-dark text-white p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Headphones className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round the clock customer support</p>
            </div>
            
            <div className="text-center animate-fade-in hover-lift">
              <div className="bg-gradient-to-br from-red to-red/80 text-white p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <RotateCcw className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Returns</h3>
              <p className="text-gray-600">30-day hassle-free return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Categories Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Categories</h2>
            <p className="text-gray-600 text-lg">Explore our wide range of 16 product categories</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category}
                to={`/products?category=${encodeURIComponent(category)}`}
                className={`group hover-lift text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all animate-fade-in border border-gray-100`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative mb-4">
                  <img
                    src={categoryImages[category]}
                    alt={category}
                    className="w-16 h-16 mx-auto rounded-xl object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full px-2 py-1 font-bold">
                    60+
                  </div>
                </div>
                <h3 className="font-semibold text-sm group-hover:text-orange transition-colors">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Flash Deals Section */}
      {flashDeals.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-red/10 to-red/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="h-8 w-8 text-red" />
                  <h2 className="text-3xl md:text-4xl font-bold text-red">Flash Deals</h2>
                  <div className="bg-red text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    LIMITED TIME
                  </div>
                </div>
                <p className="text-gray-600 text-lg">Grab these incredible offers before they're gone!</p>
              </div>
              <CountdownTimer targetDate={new Date(Date.now() + 24 * 60 * 60 * 1000)} />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {flashDeals.slice(0, 8).map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/flash-deals">
                <Button size="lg" className="bg-red hover:bg-red/90 text-white px-10 py-4 text-lg font-bold rounded-xl shadow-lg">
                  View All Flash Deals
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 7. Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Star className="h-8 w-8 text-orange" />
              <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
            </div>
            <p className="text-gray-600 text-lg">Handpicked premium products just for you</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.slice(0, 12).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products?featured=true">
              <Button size="lg" variant="outline" className="border-2 border-orange text-orange hover:bg-orange hover:text-white px-10 py-4 text-lg font-bold rounded-xl">
                View All Featured Products
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Best Sellers Section */}
      <section className="py-20 bg-gradient-to-br from-green/10 to-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Crown className="h-8 w-8 text-green" />
              <h2 className="text-3xl md:text-4xl font-bold text-green">Best Sellers</h2>
            </div>
            <p className="text-gray-600 text-lg">Most popular products loved by our customers</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {bestSellers.slice(0, 8).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products?bestseller=true">
              <Button size="lg" className="bg-green hover:bg-green/90 text-white px-10 py-4 text-lg font-bold rounded-xl shadow-lg">
                View All Best Sellers
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Special Offers Banner */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Gift className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Special Weekend Offer!</h2>
            <p className="text-xl mb-8">Get up to 70% off on selected items. Limited time offer!</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-xl">
              Shop Special Offers
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Real reviews from real customers worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`hover-glow animate-fade-in border-l-4 border-l-orange`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-orange/20"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg">"{testimonial.comment}"</p>
                  <h4 className="font-bold text-xl text-gray-800">{testimonial.name}</h4>
                  <p className="text-orange font-medium">Verified Customer</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue to-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with N ShopMart</h2>
          <p className="text-xl mb-8 text-white/90">
            Subscribe to our newsletter and never miss out on exclusive deals, new arrivals, and special offers
          </p>
          
          <div className="max-w-md mx-auto flex mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="rounded-r-none bg-white text-gray-900 border-0 text-lg py-6"
            />
            <Button className="rounded-l-none bg-orange hover:bg-orange-dark px-8 py-6 text-lg font-bold">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-white/70">
            🔒 We respect your privacy. Unsubscribe at any time. Join 100,000+ happy subscribers!
          </p>
        </div>
      </section>

      {/* 12. Mobile App Promotion */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Shop on the Go!</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Download our mobile app for exclusive deals, faster checkout, and seamless shopping experience.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-black text-white px-6 py-3 rounded-lg">
                  Download for iOS
                </Button>
                <Button className="bg-black text-white px-6 py-3 rounded-lg">
                  Download for Android
                </Button>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400"
                alt="Mobile App"
                className="mx-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
