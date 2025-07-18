
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const WishlistPage = () => {
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();

  const handleRemoveFromWishlist = (id: string) => {
    wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
    toast({
      title: "Removed from Wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const handleAddToCart = (item: any) => {
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category
      }
    });
    
    toast({
      title: "Added to Cart",
      description: `${item.name} added to your cart.`,
    });
  };

  const handleClearWishlist = () => {
    wishlistDispatch({ type: 'CLEAR_WISHLIST' });
    toast({
      title: "Wishlist Cleared",
      description: "All items have been removed from your wishlist.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1160px] mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
            <p className="text-gray-600">
              {wishlistState.itemCount} item{wishlistState.itemCount !== 1 ? 's' : ''} in your wishlist
            </p>
          </div>
          
          {wishlistState.items.length > 0 && (
            <Button
              variant="outline"
              onClick={handleClearWishlist}
              className="text-red hover:bg-red hover:text-white"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>

        {/* Wishlist Items */}
        {wishlistState.items.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-6">
              <Heart className="h-24 w-24 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Your wishlist is empty</h3>
            <p className="text-gray-600 mb-8">
              Explore our products and add items you love to your wishlist
            </p>
            <Link to="/products">
              <Button className="bg-orange hover:bg-orange-dark text-white px-8 py-3">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistState.items.map((item, index) => (
              <Card key={item.id} className="product-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="relative group">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </Link>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red hover:text-red shadow-md"
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                  
                  <div className="p-4">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(item.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          >
                            ★
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({item.rating})</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-orange">${item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleAddToCart(item)}
                        className="flex-1 bg-orange hover:bg-orange-dark text-white"
                        size="sm"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveFromWishlist(item.id)}
                        className="text-red hover:bg-red hover:text-white"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
