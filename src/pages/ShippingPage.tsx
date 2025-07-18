
import React from 'react';
import { Truck, Clock, MapPin, Package, Shield, CreditCard, Globe, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ShippingPage = () => {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      time: "5-7 Business Days",
      cost: "Free on orders $35+",
      description: "Perfect for everyday purchases",
      icon: Truck
    },
    {
      name: "Express Shipping",
      time: "2-3 Business Days",
      cost: "$9.99",
      description: "Faster delivery for urgent orders",
      icon: Clock
    },
    {
      name: "Overnight Shipping",
      time: "Next Business Day",
      cost: "$19.99",
      description: "Get it tomorrow (order by 2 PM)",
      icon: Package
    },
    {
      name: "Same Day Delivery",
      time: "Within 4 Hours",
      cost: "$14.99",
      description: "Available in select metro areas",
      icon: MapPin
    }
  ];

  const internationalShipping = [
    { country: "Canada", time: "7-14 days", cost: "$15.99" },
    { country: "United Kingdom", time: "10-18 days", cost: "$25.99" },
    { country: "Australia", time: "12-21 days", cost: "$29.99" },
    { country: "European Union", time: "10-18 days", cost: "$22.99" },
    { country: "Japan", time: "10-16 days", cost: "$24.99" },
    { country: "Other Countries", time: "15-30 days", cost: "Calculated at checkout" }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-green to-green-dark text-white py-20">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Shipping Information</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Fast, reliable shipping options to get your orders to you quickly and safely
          </p>
        </div>
      </section>

      {/* 2. Shipping Options */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shipping Options</h2>
            <p className="text-gray-600">Choose the delivery speed that works best for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingOptions.map((option, index) => (
              <Card key={index} className="p-6 hover-glow">
                <CardContent>
                  <option.icon className="h-12 w-12 text-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-center">{option.name}</h3>
                  <p className="text-center text-green font-semibold mb-2">{option.time}</p>
                  <p className="text-center text-orange font-bold mb-3">{option.cost}</p>
                  <p className="text-gray-600 text-sm text-center">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Free Shipping Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Free Shipping</h2>
            <p className="text-gray-600">Save on shipping with these great offers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent>
                <Shield className="h-12 w-12 text-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Orders $35+</h3>
                <p className="text-gray-600">Get free standard shipping on all orders over $35</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <CreditCard className="h-12 w-12 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Prime Members</h3>
                <p className="text-gray-600">Free 2-day shipping on eligible items for Prime members</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <Package className="h-12 w-12 text-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bulk Orders</h3>
                <p className="text-gray-600">Free shipping on orders over $100, regardless of membership</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. International Shipping */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Globe className="mr-2 h-8 w-8 text-blue" />
              International Shipping
            </h2>
            <p className="text-gray-600">We ship to over 100 countries worldwide</p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {internationalShipping.map((location, index) => (
                  <div key={index} className="border-l-4 border-blue pl-4">
                    <h3 className="font-semibold mb-1">{location.country}</h3>
                    <p className="text-gray-600 text-sm">Delivery: {location.time}</p>
                    <p className="text-orange font-semibold text-sm">From {location.cost}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. Delivery Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Delivery Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Delivery Options</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Standard delivery to your door</li>
                  <li>• Apartment and office delivery</li>
                  <li>• Safe delivery (leave at door)</li>
                  <li>• Signature required delivery</li>
                  <li>• Pickup from carrier facility</li>
                  <li>• Weekend delivery (select areas)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Delivery Times</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Monday - Friday: 9 AM - 8 PM</li>
                  <li>• Saturday: 9 AM - 5 PM</li>
                  <li>• Sunday: 12 PM - 5 PM (select areas)</li>
                  <li>• Holiday delivery available</li>
                  <li>• SMS/Email delivery notifications</li>
                  <li>• Real-time tracking updates</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Packaging Information */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Packaging Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent>
                <Package className="h-12 w-12 text-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Packaging</h3>
                <p className="text-gray-600">All items are carefully packed to prevent damage during shipping</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <Shield className="h-12 w-12 text-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">We use recyclable and biodegradable packaging materials</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <Calendar className="h-12 w-12 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Sizing</h3>
                <p className="text-gray-600">Right-sized boxes to reduce waste and shipping costs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Shipping Restrictions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shipping Restrictions</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Items We Cannot Ship</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Hazardous Materials:</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Flammable liquids</li>
                      <li>• Compressed gases</li>
                      <li>• Batteries (certain types)</li>
                      <li>• Chemicals and acids</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Restricted Items:</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Perishable foods</li>
                      <li>• Live plants/animals</li>
                      <li>• Weapons and ammunition</li>
                      <li>• Prescription medications</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. Tracking Information */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Order Tracking</h2>
          <Card className="max-w-3xl mx-auto p-6">
            <CardContent>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Track Your Package</h3>
                <p className="text-gray-600">Stay updated on your order's journey from our warehouse to your door</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Tracking Features:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time location updates</li>
                    <li>• Estimated delivery time</li>
                    <li>• Delivery confirmation</li>
                    <li>• Photo proof of delivery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Notifications:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Order shipped confirmation</li>
                    <li>• Out for delivery alert</li>
                    <li>• Delivery confirmation</li>
                    <li>• Exception notifications</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <Button className="bg-blue hover:bg-blue-dark">
                  Track My Order
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 9. Contact Shipping Support */}
      <section className="py-16 bg-green text-white">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Shipping?</h2>
          <p className="text-xl opacity-90 mb-8">
            Our shipping specialists are here to help with any questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green hover:bg-gray-100">
              Contact Shipping Support
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green">
              View Shipping FAQ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPage;
