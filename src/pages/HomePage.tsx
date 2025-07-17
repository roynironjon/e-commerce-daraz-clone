
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, RotateCcw, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import ProductCard from '@/components/product/ProductCard';
import CountdownTimer from '@/components/ui/countdown-timer';
import { getFeaturedProducts, getBestSellers, getFlashDeals, categories } from '@/data/products';

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange to-orange-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Shop Smart,
                <br />
                <span className="text-yellow-300">Save More!</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Discover amazing deals on electronics, fashion, beauty products, and more. 
                Your one-stop destination for quality shopping.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/products">
                  <Button size="lg" className="bg-white text-orange hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/flash-deals">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange px-8 py-3 text-lg font-semibold">
                    Flash Deals
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
                alt="Shopping"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 animate-bounce-slow hidden lg:block">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-20 left-10 animate-bounce-slow hidden lg:block">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Truck className="h-8 w-8 text-white" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-orange text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="bg-orange text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment guarantee</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="bg-orange text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Headphones className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round the clock customer support</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="bg-orange text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <RotateCcw className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day hassle-free returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Categories</h2>
            <p className="text-gray-600 text-lg">Explore our wide range of product categories</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <Link
                key={category}
                to={`/products?category=${encodeURIComponent(category)}`}
                className={`hover-lift text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-orange/10 text-orange p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold">{category.charAt(0)}</span>
                </div>
                <h3 className="font-medium text-sm">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Deals Section */}
      {flashDeals.length > 0 && (
        <section className="py-16 bg-red/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red">⚡ Flash Deals</h2>
                <p className="text-gray-600">Limited time offers - grab them before they're gone!</p>
              </div>
              <CountdownTimer targetDate={new Date(Date.now() + 24 * 60 * 60 * 1000)} />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {flashDeals.slice(0, 4).map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className={`animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/flash-deals">
                <Button size="lg" className="bg-red hover:bg-red/90 text-white px-8">
                  View All Flash Deals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Handpicked items just for you</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/products?featured=true">
              <Button size="lg" variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white px-8">
                View All Featured Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🏆 Best Sellers</h2>
            <p className="text-gray-600 text-lg">Most popular products loved by our customers</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.slice(0, 4).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/products?bestseller=true">
              <Button size="lg" className="bg-green hover:bg-green/90 text-white px-8">
                View All Best Sellers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Real reviews from real customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`hover-glow animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue to-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-white/90">
            Subscribe to our newsletter and never miss out on exclusive deals and offers
          </p>
          
          <div className="max-w-md mx-auto flex">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="rounded-r-none bg-white text-gray-900"
            />
            <Button className="rounded-l-none bg-orange hover:bg-orange-dark px-8">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-white/70 mt-4">
            * We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
