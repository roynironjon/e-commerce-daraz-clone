
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Heart, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';
import { categories } from '@/data/products';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { state: cartState } = useCart();
  const { state: wishlistState } = useWishlist();
  const { state: authState, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-orange text-white py-2">
        <div className="max-w-[1160px] mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+8801717391532</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>Free shipping nationwide</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <Link to="/about" className="hover:text-orange-light transition-colors">About</Link>
            <Link to="/contact" className="hover:text-orange-light transition-colors">Contact</Link>
            <Link to="/track-order" className="hover:text-orange-light transition-colors">Track Order</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-[1160px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-orange to-orange-dark text-white p-3 rounded-xl font-bold text-2xl shadow-lg">
              N
            </div>
            <div>
              <span className="text-3xl font-bold text-gray-800">ShopMart</span>
              <div className="text-xs text-orange font-medium">Your Shopping Partner</div>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-l-lg focus:border-orange focus:ring-0"
              />
              <Button
                type="submit"
                className="absolute right-0 top-0 h-full px-6 bg-orange hover:bg-orange-dark rounded-l-none"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Link to="/wishlist">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-1 relative">
                <Heart className="h-5 w-5" />
                <span className="hidden lg:inline">Wishlist</span>
                {wishlistState.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistState.itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative flex items-center space-x-1">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden lg:inline">Cart</span>
                {cartState.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartState.itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* User Account */}
            <div className="relative">
              {authState.isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <span className="hidden md:inline text-sm">Hi, {authState.user?.name}</span>
                  <Button variant="ghost" size="sm" onClick={logout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                    <User className="h-5 w-5" />
                    <span className="hidden lg:inline">Login</span>
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="mt-4 md:hidden">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-orange focus:ring-0"
            />
            <Button
              type="submit"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange hover:bg-orange-dark"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            {/* Categories Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              <Button variant="ghost" className="flex items-center space-x-1 font-medium">
                <Menu className="h-4 w-4" />
                <span>All Categories</span>
              </Button>
              
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border z-50">
                  <div className="py-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/products?category=${encodeURIComponent(category)}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange hover:text-white transition-colors"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/flash-deals" className="text-sm font-medium text-red hover:text-red/80 transition-colors">
                Flash Deals
              </Link>
              <Link to="/products?featured=true" className="text-sm font-medium text-gray-700 hover:text-orange transition-colors">
                Featured
              </Link>
              <Link to="/products?bestseller=true" className="text-sm font-medium text-gray-700 hover:text-orange transition-colors">
                Best Sellers
              </Link>
              <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-orange transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-orange transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="max-w-[1160px] mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Categories</h3>
              {categories.slice(0, 8).map((category) => (
                <Link
                  key={category}
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className="block text-sm text-gray-600 hover:text-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
            
            <div className="border-t pt-4 space-y-2">
              <Link to="/flash-deals" className="block text-sm font-medium text-red hover:text-red/80 transition-colors">
                Flash Deals
              </Link>
              <Link to="/products?featured=true" className="block text-sm font-medium text-gray-700 hover:text-orange transition-colors">
                Featured Products
              </Link>
              <Link to="/products?bestseller=true" className="block text-sm font-medium text-gray-700 hover:text-orange transition-colors">
                Best Sellers
              </Link>
              <Link to="/wishlist" className="block text-sm font-medium text-gray-700 hover:text-orange transition-colors">
                Wishlist ({wishlistState.itemCount})
              </Link>
              <Link to="/about" className="block text-sm font-medium text-gray-700 hover:text-orange transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm font-medium text-gray-700 hover:text-orange transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
