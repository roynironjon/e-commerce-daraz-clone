
import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const TrackOrderPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');

  const trackingSteps = [
    { step: 1, title: "Order Confirmed", description: "Your order has been received", completed: true, icon: CheckCircle },
    { step: 2, title: "Processing", description: "We're preparing your order", completed: true, icon: Package },
    { step: 3, title: "Shipped", description: "Your order is on the way", completed: true, icon: Truck },
    { step: 4, title: "Out for Delivery", description: "Your order is out for delivery", completed: false, icon: Truck },
    { step: 5, title: "Delivered", description: "Your order has been delivered", completed: false, icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-blue to-blue-dark text-white py-20">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Track Your Order</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Enter your order details below to track your package in real-time
          </p>
        </div>
      </section>

      {/* 2. Order Tracking Form */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8">
            <CardContent>
              <h2 className="text-2xl font-bold mb-6 text-center">Enter Order Information</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="orderNumber">Order Number</Label>
                  <Input
                    id="orderNumber"
                    placeholder="Enter your order number"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <Button className="w-full bg-blue hover:bg-blue-dark">
                  <Search className="mr-2 h-4 w-4" />
                  Track Order
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. Sample Tracking Result */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Order Status</h2>
          <Card className="max-w-4xl mx-auto p-8">
            <CardContent>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Order #NS123456789</h3>
                <p className="text-gray-600">Estimated Delivery: Tomorrow, Dec 19</p>
              </div>
              <div className="space-y-6">
                {trackingSteps.map((step) => (
                  <div key={step.step} className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      step.completed ? 'bg-green text-white' : 'bg-gray-200 text-gray-400'
                    }`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${step.completed ? 'text-green' : 'text-gray-400'}`}>
                        {step.title}
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {step.completed && <Clock className="h-4 w-4" />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Delivery Information */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Delivery Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue mr-2" />
                  <h3 className="text-xl font-semibold">Shipping Address</h3>
                </div>
                <p className="text-gray-600">
                  John Doe<br />
                  123 Main Street, Apt 4B<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <Truck className="h-6 w-6 text-green mr-2" />
                  <h3 className="text-xl font-semibold">Carrier Information</h3>
                </div>
                <p className="text-gray-600">
                  <strong>Carrier:</strong> FedEx<br />
                  <strong>Tracking Number:</strong> 1234567890<br />
                  <strong>Service:</strong> Ground
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tracking FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-2">Why isn't my tracking number working?</h3>
                <p className="text-gray-600">It can take 24-48 hours for tracking information to appear after your order ships.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-2">How long does shipping take?</h3>
                <p className="text-gray-600">Standard shipping takes 3-7 business days, while express shipping takes 1-2 business days.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-2">What if my package is delayed?</h3>
                <p className="text-gray-600">We'll notify you of any delays and provide updated delivery estimates via email.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Contact Support */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="p-6 text-center">
              <CardContent>
                <Phone className="h-8 w-8 text-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">1-800-SHOPMART</p>
                <Button variant="outline">Call Now</Button>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <Mail className="h-8 w-8 text-green mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">support@nshopmart.com</p>
                <Button variant="outline">Send Email</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Order History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Orders</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h3 className="font-semibold">Order #NS123456789</h3>
                    <p className="text-gray-600">Dec 15, 2024 • $299.99</p>
                  </div>
                  <span className="bg-green/10 text-green px-3 py-1 rounded-full text-sm">Shipped</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h3 className="font-semibold">Order #NS123456788</h3>
                    <p className="text-gray-600">Dec 10, 2024 • $149.99</p>
                  </div>
                  <span className="bg-blue/10 text-blue px-3 py-1 rounded-full text-sm">Delivered</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8. Mobile App Promotion */}
      <section className="py-16 bg-blue text-white">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Track on the Go</h2>
          <p className="text-xl opacity-90 mb-8">Download our mobile app for real-time tracking notifications</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue hover:bg-gray-100">
              Download iOS App
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue">
              Download Android App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackOrderPage;
