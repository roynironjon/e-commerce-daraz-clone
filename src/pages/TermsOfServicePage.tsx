
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, ShieldCheck, AlertTriangle, CreditCard, Truck, RefreshCw, Mail } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-orange text-white py-20">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center">
            <Scale className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using ShopMart, you agree to these terms.
            </p>
            <p className="mt-4 text-lg opacity-90">Effective Date: January 18, 2025</p>
          </div>
        </div>
      </section>

      {/* Agreement Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Agreement Overview</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This agreement governs your use of ShopMart's services and website
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-orange mx-auto mb-4" />
                <CardTitle>Acceptance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">By using our services, you accept these terms</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShieldCheck className="h-12 w-12 text-orange mx-auto mb-4" />
                <CardTitle>Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">You must comply with all applicable laws</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-orange mx-auto mb-4" />
                <CardTitle>Modifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We may update these terms at any time</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Scale className="h-12 w-12 text-orange mx-auto mb-4" />
                <CardTitle>Enforcement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">These terms are legally binding</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Account Terms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Account Terms</h2>
            <p className="text-lg text-gray-600">
              Requirements and responsibilities for your ShopMart account
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange">Account Creation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Must be 18 years or older</li>
                    <li>• Provide accurate and complete information</li>
                    <li>• One account per person</li>
                    <li>• Verify email address</li>
                    <li>• Choose a secure password</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange">Account Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Keep login credentials secure</li>
                    <li>• Notify us of unauthorized access</li>
                    <li>• Update information when needed</li>
                    <li>• Log out from shared devices</li>
                    <li>• Enable two-factor authentication</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Terms */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <CreditCard className="h-16 w-16 text-orange mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Purchase Terms</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Terms and conditions related to purchases and payments
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Order Placement</h3>
                  <p className="text-gray-600">Orders are subject to acceptance and availability. We reserve the right to refuse or cancel orders.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pricing</h3>
                  <p className="text-gray-600">Prices are subject to change without notice. All prices include applicable taxes unless stated otherwise.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Payment</h3>
                  <p className="text-gray-600">Payment is due at time of purchase. We accept major credit cards and other payment methods as listed.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Order Confirmation</h3>
                  <p className="text-gray-600">You will receive email confirmation of your order. Please review and contact us immediately if incorrect.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full flex-shrink-0">
                  <span className="font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Billing Issues</h3>
                  <p className="text-gray-600">Contact us within 30 days of any billing discrepancies or unauthorized charges.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full flex-shrink-0">
                  <span className="font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Failed Payments</h3>
                  <p className="text-gray-600">Orders with failed payments may be canceled. Additional fees may apply for returned payments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Delivery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <Truck className="h-16 w-16 text-orange mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Shipping & Delivery</h2>
            <p className="text-lg text-gray-600">
              Important information about shipping and delivery of your orders
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Delivery Times</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Estimated delivery times are not guaranteed and may vary based on location and product availability.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Standard: 5-7 business days</li>
                  <li>• Express: 2-3 business days</li>
                  <li>• Overnight: Next business day</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Shipping Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Shipping costs are calculated based on destination, weight, and shipping method selected.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Free shipping on orders over $50</li>
                  <li>• Standard shipping: $5.99</li>
                  <li>• Express shipping: $12.99</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Delivery Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Risk of loss passes to you upon delivery. Please inspect packages upon receipt.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Report damaged items within 48 hours</li>
                  <li>• Provide accurate delivery address</li>
                  <li>• Someone must be available to receive</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Returns & Refunds */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <RefreshCw className="h-16 w-16 text-orange mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Returns & Refunds</h2>
            <p className="text-lg text-gray-600">
              Our return and refund policy for your purchases
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange">Return Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li>• 30-day return window from delivery</li>
                    <li>• Items must be in original condition</li>
                    <li>• Original packaging required</li>
                    <li>• Return authorization needed</li>
                    <li>• Customer pays return shipping</li>
                    <li>• Some items are non-returnable</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange">Refund Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Refunds processed within 5-7 business days</li>
                    <li>• Refunded to original payment method</li>
                    <li>• Shipping costs are non-refundable</li>
                    <li>• Restocking fees may apply</li>
                    <li>• Email confirmation sent</li>
                    <li>• Partial refunds for damaged items</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Uses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <AlertTriangle className="h-16 w-16 text-orange mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Prohibited Uses</h2>
            <p className="text-lg text-gray-600">
              Activities that are not permitted when using our services
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange">You may not:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Use the service for illegal activities</li>
                  <li>• Violate any local, state, or federal laws</li>
                  <li>• Infringe on intellectual property rights</li>
                  <li>• Transmit harmful or malicious code</li>
                  <li>• Attempt to gain unauthorized access</li>
                  <li>• Interfere with service operation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange">Also prohibited:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Harass or abuse other users</li>
                  <li>• Post false or misleading information</li>
                  <li>• Spam or send unsolicited communications</li>
                  <li>• Reverse engineer our software</li>
                  <li>• Create multiple accounts</li>
                  <li>• Resell or redistribute products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-lg text-gray-600">
              Protection of intellectual property rights
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center mb-6">
                  All content, features, and functionality of ShopMart are owned by us and protected by copyright, trademark, and other laws.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Trademarks</h4>
                    <p className="text-gray-600 text-sm">Our logos, brand names, and trademarks are protected</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Copyrights</h4>
                    <p className="text-gray-600 text-sm">Website content, images, and text are copyrighted</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Patents</h4>
                    <p className="text-gray-600 text-sm">Our technology and processes may be patent-protected</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-lg text-gray-600">
              Important limitations on our liability to you
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <ShieldCheck className="h-12 w-12 text-orange mx-auto mb-4" />
                    <p className="text-gray-600 leading-relaxed">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHOPMART SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                      INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO 
                      LOST PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="font-semibold mb-2">Maximum Liability</h4>
                      <p className="text-gray-600 text-sm">Our total liability shall not exceed the amount paid by you for the specific product or service.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Warranty Disclaimer</h4>
                      <p className="text-gray-600 text-sm">Services are provided "as is" without warranties of any kind, express or implied.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-500 text-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <Mail className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Questions About Terms?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg mb-6">Email: legal@shopmart.com</p>
            <p className="text-lg mb-8">Phone: +1-234-567-8900</p>
            <Button variant="secondary" size="lg" className="bg-white text-orange hover:bg-gray-100">
              Contact Legal Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
