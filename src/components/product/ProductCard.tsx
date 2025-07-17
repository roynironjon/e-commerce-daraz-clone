
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/data/products';
import CountdownTimer from '@/components/ui/countdown-timer';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category
      }
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className={`product-card group overflow-hidden ${className}`}>
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isFlashDeal && (
            <Badge className="bg-red text-white text-xs font-bold">Flash Deal</Badge>
          )}
          {product.isBestSeller && (
            <Badge className="bg-green text-white text-xs font-bold">Best Seller</Badge>
          )}
          {discountPercentage > 0 && (
            <Badge className="bg-orange text-white text-xs font-bold">-{discountPercentage}%</Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="secondary" className="p-2 rounded-full">
            <Heart className="h-4 w-4" />
          </Button>
          <Link to={`/product/${product.id}`}>
            <Button size="sm" variant="secondary" className="p-2 rounded-full">
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Flash Deal Timer */}
        {product.isFlashDeal && product.flashDealEndTime && (
          <div className="absolute bottom-2 left-2">
            <CountdownTimer targetDate={product.flashDealEndTime} />
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-sm md:text-base mb-2 line-clamp-2 group-hover:text-orange transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold text-orange">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Stock Status */}
        <div className="mb-3">
          {product.stock > 0 ? (
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green rounded-full"></div>
              <span className="text-xs text-green">In Stock ({product.stock} left)</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-red rounded-full"></div>
              <span className="text-xs text-red">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full bg-orange hover:bg-orange-dark text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
