
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const CartPage = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, newQuantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: newQuantity }
    });
  };

  const removeItem = (id: string, name: string) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id
    });
    
    toast({
      title: "Item Removed",
      description: `${name} has been removed from your cart.`,
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="text-center py-12">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/products">
              <Button className="bg-orange hover:bg-orange-dark">
                Start Shopping
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/products">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <p className="text-gray-600">{state.itemCount} items in your cart</p>
            </div>
          </div>
          
          {state.items.length > 0 && (
            <Button variant="outline" onClick={clearCart} className="text-red border-red hover:bg-red hover:text-white">
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <div className="sm:w-32 sm:h-32 w-full h-48 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1 mb-4 sm:mb-0">
                          <Link
                            to={`/product/${item.id}`}
                            className="text-lg font-semibold hover:text-orange transition-colors block mb-2"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-600 mb-2">Category: {item.category}</p>
                          <p className="text-xl font-bold text-orange">${item.price}</p>
                        </div>

                        <div className="flex items-center space-x-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="px-3 py-1"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Remove Button */}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id, item.name)}
                            className="text-red hover:bg-red hover:text-white p-2"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="flex justify-between items-center mt-4 pt-4 border-t">
                        <span className="text-sm text-gray-600">Subtotal:</span>
                        <span className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({state.itemCount} items)</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green">
                    {state.total >= 50 ? 'FREE' : '$9.99'}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(state.total * 0.08).toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-orange">
                      ${(state.total + (state.total >= 50 ? 0 : 9.99) + (state.total * 0.08)).toFixed(2)}
                    </span>
                  </div>
                </div>

                {state.total < 50 && (
                  <div className="bg-orange/10 border border-orange/20 rounded-lg p-3">
                    <p className="text-sm text-orange">
                      Add ${(50 - state.total).toFixed(2)} more to get FREE shipping!
                    </p>
                  </div>
                )}

                <Link to="/checkout" className="block">
                  <Button className="w-full bg-orange hover:bg-orange-dark text-white font-semibold py-3 text-lg">
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="text-center">
                  <Link to="/products">
                    <Button variant="ghost" className="text-orange hover:text-orange-dark">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>

                {/* Security Badges */}
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <span>🔒</span>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mt-1">
                    <span>🛡️</span>
                    <span>Buyer Protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
