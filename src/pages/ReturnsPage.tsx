
import React from 'react';
import { RotateCcw, Calendar, Package, CreditCard, CheckCircle, AlertCircle, Phone, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ReturnsPage = () => {
  const returnSteps = [
    { step: 1, title: "Start Return", description: "Initiate your return online", icon: RotateCcw },
    { step: 2, title: "Print Label", description: "Download and print shipping label", icon: FileText },
    { step: 3, title: "Pack Items", description: "Securely pack your items", icon: Package },
    { step: 4, title: "Ship Back", description: "Drop off at any carrier location", icon: Package },
    { step: 5, title: "Get Refund", description: "Receive refund within 5-7 days", icon: CreditCard }
  ];

  const returnReasons = [
    "Item doesn't fit",
    "Item damaged or defective",
    "Wrong item received",
    "Changed my mind",
    "Item not as described",
    "Found better price elsewhere"
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-orange to-orange-dark text-white py-20">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Returns & Exchanges</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Easy returns within 30 days. We're here to make your return process simple and hassle-free.
          </p>
          <Button size="lg" className="bg-white text-orange hover:bg-gray-100">
            Start a Return
          </Button>
        </div>
      </section>

      {/* 2. Return Policy Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Return Policy</h2>
            <p className="text-gray-600">Simple, fair, and customer-friendly</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <Calendar className="h-12 w-12 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">30-Day Returns</h3>
                <p className="text-gray-600">Return most items within 30 days of purchase for a full refund</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <RotateCcw className="h-12 w-12 text-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Free Returns</h3>
                <p className="text-gray-600">We provide free return shipping labels for most items</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <CreditCard className="h-12 w-12 text-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Refunds</h3>
                <p className="text-gray-600">Refunds processed within 5-7 business days after we receive your return</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Return Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Return an Item</h2>
          <div className="max-w-4xl mx-auto">
            {returnSteps.map((step, index) => (
              <div key={step.step} className="flex items-center mb-8 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center mr-6">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Step {step.step}: {step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < returnSteps.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-gray-300 ml-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Return Eligibility */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Can Be Returned?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green mr-2" />
                  <h3 className="text-xl font-semibold">Returnable Items</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Most new, unopened items</li>
                  <li>• Items in original packaging</li>
                  <li>• Clothing with tags attached</li>
                  <li>• Electronics in original condition</li>
                  <li>• Books, movies, and music</li>
                  <li>• Home and garden items</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
                  <h3 className="text-xl font-semibold">Non-Returnable Items</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personal care items</li>
                  <li>• Perishable goods</li>
                  <li>• Digital downloads</li>
                  <li>• Customized or personalized items</li>
                  <li>• Items without original packaging</li>
                  <li>• Hazardous materials</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Exchange Policy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Exchanges</h2>
          <Card className="max-w-3xl mx-auto p-8">
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">Size & Color Exchanges</h3>
              <p className="text-gray-600 mb-6">
                Need a different size or color? We offer free exchanges for the same item in a different size or color, 
                subject to availability. Simply select "Exchange" when starting your return.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Exchange Process:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>1. Start exchange online</li>
                    <li>2. Ship original item back</li>
                    <li>3. New item ships automatically</li>
                    <li>4. No additional shipping charges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Exchange Timeline:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Processing: 1-2 business days</li>
                    <li>• Shipping: 3-7 business days</li>
                    <li>• Total time: 4-9 business days</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 6. Return Reasons */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common Return Reasons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {returnReasons.map((reason, index) => (
              <Card key={index} className="p-4 hover-glow cursor-pointer">
                <CardContent>
                  <p className="text-center font-medium">{reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Refund Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Refund Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Refund Methods</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CreditCard className="h-5 w-5 text-blue mr-2" />
                    Original payment method (preferred)
                  </li>
                  <li className="flex items-center">
                    <CreditCard className="h-5 w-5 text-green mr-2" />
                    Store credit (faster processing)
                  </li>
                  <li className="flex items-center">
                    <CreditCard className="h-5 w-5 text-orange mr-2" />
                    Gift card (for gift purchases)
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Processing Times</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Credit/Debit Cards: 5-7 business days</li>
                  <li>• PayPal: 3-5 business days</li>
                  <li>• Store Credit: Immediate</li>
                  <li>• Gift Cards: 1-2 business days</li>
                  <li>• Bank Transfers: 7-10 business days</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. Contact Support */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Need Help with Returns?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <Phone className="h-8 w-8 text-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Returns Team</h3>
                <p className="text-gray-600 mb-4">1-800-RETURNS (Mon-Fri 9AM-6PM)</p>
                <Button className="bg-blue hover:bg-blue-dark">Call Now</Button>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <Mail className="h-8 w-8 text-green mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Returns Team</h3>
                <p className="text-gray-600 mb-4">returns@nshopmart.com</p>
                <Button className="bg-green hover:bg-green-dark">Send Email</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="py-16 bg-orange text-white">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Return?</h2>
          <p className="text-xl opacity-90 mb-8">
            It only takes a few minutes to initiate your return online
          </p>
          <Button size="lg" className="bg-white text-orange hover:bg-gray-100">
            Start Return Process
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ReturnsPage;
