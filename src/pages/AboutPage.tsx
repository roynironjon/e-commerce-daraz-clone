
import React from 'react';
import { Shield, Truck, RotateCcw, Award, Users, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your transactions are protected with advanced security measures'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to your doorstep nationwide'
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: '30-day hassle-free return policy for your peace of mind'
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'Carefully curated products from trusted brands and sellers'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Our customer service team is always here to help you'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers worldwide with international shipping'
    }
  ];

  const stats = [
    { number: '10M+', label: 'Happy Customers' },
    { number: '50K+', label: 'Products' },
    { number: '100+', label: 'Brands' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange to-orange-dark text-white py-20">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About N ShopMart</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Your trusted shopping partner, bringing you the best products at the best prices. 
            We're committed to making online shopping simple, secure, and enjoyable for everyone.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2020, N ShopMart started with a simple mission: to make quality products 
                accessible to everyone, everywhere. What began as a small startup has grown into a 
                trusted marketplace serving millions of customers worldwide.
              </p>
              <p className="text-gray-700 mb-4">
                We believe in the power of technology to connect people with the products they love. 
                Our platform brings together sellers and buyers in a secure, user-friendly environment 
                that prioritizes trust, quality, and customer satisfaction.
              </p>
              <p className="text-gray-700">
                Today, we're proud to be a leading e-commerce platform, constantly innovating to 
                improve your shopping experience and expand our reach to serve you better.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Our team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose N ShopMart?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best online shopping experience possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover-glow">
                <CardContent className="p-6">
                  <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gradient-to-r from-blue to-blue-dark text-white">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            To democratize commerce by providing a platform where anyone can buy and sell products 
            safely, easily, and affordably. We strive to create economic opportunities for individuals 
            and businesses while delivering exceptional value to our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
