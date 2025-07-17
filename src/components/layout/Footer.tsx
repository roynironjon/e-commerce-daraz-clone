
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-orange">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">Subscribe to our Newsletter</h3>
              <p className="text-white/90">Get the latest deals and offers directly in your inbox</p>
            </div>
            <div className="flex w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-r-none bg-white text-gray-900 min-w-[300px]"
              />
              <Button variant="secondary" className="rounded-l-none bg-white text-orange hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange text-white p-2 rounded-lg font-bold text-xl">
                E
              </div>
              <span className="text-xl font-bold">ShopMart</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted online shopping destination with quality products, competitive prices, and excellent customer service.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-orange">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-orange">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-orange">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-orange">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-orange transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-orange transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-orange transition-colors">Press</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-orange transition-colors">Blog</Link></li>
              <li><Link to="/affiliate" className="text-gray-400 hover:text-orange transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-orange transition-colors">Help Center</Link></li>
              <li><Link to="/track-order" className="text-gray-400 hover:text-orange transition-colors">Track Your Order</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-orange transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-orange transition-colors">Shipping Info</Link></li>
              <li><Link to="/warranty" className="text-gray-400 hover:text-orange transition-colors">Warranty</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-orange transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange" />
                <div>
                  <p className="text-gray-400">Customer Service</p>
                  <p className="text-white font-medium">+1-234-567-8900</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange" />
                <div>
                  <p className="text-gray-400">Email Support</p>
                  <p className="text-white font-medium">support@shopmart.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white font-medium">123 Commerce St, NYC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; 2024 ShopMart. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link to="/privacy" className="hover:text-orange transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-orange transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-orange transition-colors">Cookie Policy</Link>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                Secure payments powered by industry leaders
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
