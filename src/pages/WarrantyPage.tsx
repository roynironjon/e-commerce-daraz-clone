
import React from 'react';
import { Shield, Clock, Wrench, FileText, CheckCircle, Phone, Mail, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WarrantyPage = () => {
  const warrantyTypes = [
    {
      name: "Standard Warranty",
      duration: "1 Year",
      coverage: "Manufacturing defects and material failures",
      items: "Most electronics and appliances",
      icon: Shield
    },
    {
      name: "Extended Warranty",
      duration: "2-5 Years",
      coverage: "Comprehensive coverage including accidental damage",
      items: "Available for premium products",
      icon: Clock
    },
    {
      name: "Lifetime Warranty",
      duration: "Product Lifetime",
      coverage: "Full replacement guarantee",
      items: "Select premium brands only",
      icon: CheckCircle
    }
  ];

  const warrantySteps = [
    { step: 1, title: "Contact Support", description: "Call or email our warranty team", icon: Phone },
    { step: 2, title: "Provide Details", description: "Share order number and issue description", icon: FileText },
    { step: 3, title: "Assessment", description: "Our team evaluates your warranty claim", icon: Wrench },
    { step: 4, title: "Resolution", description: "Repair, replace, or refund as appropriate", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Product Warranty</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Comprehensive warranty protection for your peace of mind. We stand behind every product we sell.
          </p>
        </div>
      </section>

      {/* 2. Warranty Types */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Warranty Coverage</h2>
            <p className="text-gray-600">Choose the protection level that's right for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warrantyTypes.map((warranty, index) => (
              <Card key={index} className="p-6 hover-glow">
                <CardContent>
                  <warranty.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-center">{warranty.name}</h3>
                  <p className="text-center text-purple-600 font-bold text-lg mb-3">{warranty.duration}</p>
                  <p className="text-gray-600 text-sm mb-3">{warranty.coverage}</p>
                  <p className="text-gray-500 text-xs text-center">{warranty.items}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What's Covered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What's Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green mr-2" />
                  <h3 className="text-xl font-semibold">Covered Issues</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Manufacturing defects</li>
                  <li>• Material failures</li>
                  <li>• Functional malfunctions</li>
                  <li>• Premature component failure</li>
                  <li>• Software issues (electronics)</li>
                  <li>• Power-related problems</li>
                  <li>• Normal wear and tear (extended warranty)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                  <h3 className="text-xl font-semibold">Not Covered</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Accidental damage (standard warranty)</li>
                  <li>• Water damage</li>
                  <li>• Physical abuse or misuse</li>
                  <li>• Modifications or alterations</li>
                  <li>• Consumable parts (batteries, filters)</li>
                  <li>• Cosmetic damage</li>
                  <li>• Loss or theft</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Warranty Process */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Claim Your Warranty</h2>
          <div className="max-w-4xl mx-auto">
            {warrantySteps.map((step, index) => (
              <div key={step.step} className="flex items-center mb-8 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mr-6">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Step {step.step}: {step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Warranty by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Warranty by Product Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-3">Electronics</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Smartphones: 1 year</li>
                  <li>• Laptops: 1-2 years</li>
                  <li>• TVs: 2 years</li>
                  <li>• Audio devices: 1 year</li>
                  <li>• Gaming consoles: 1 year</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-3">Appliances</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Kitchen appliances: 2 years</li>
                  <li>• Washers/Dryers: 3 years</li>
                  <li>• Refrigerators: 5 years</li>
                  <li>• Small appliances: 1 year</li>
                  <li>• HVAC units: 5 years</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-3">Home & Garden</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Power tools: 2-3 years</li>
                  <li>• Garden equipment: 2 years</li>
                  <li>• Furniture: 1-5 years</li>
                  <li>• Outdoor items: 1 year</li>
                  <li>• Security systems: 2 years</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Extended Warranty Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Extended Warranty Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <CardContent>
                <Shield className="h-12 w-12 text-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Accident Protection</h3>
                <p className="text-gray-600 text-sm">Coverage for drops, spills, and accidents</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <Wrench className="h-12 w-12 text-green mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Free Repairs</h3>
                <p className="text-gray-600 text-sm">No-cost repairs by certified technicians</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <Phone className="h-12 w-12 text-orange mx-auto mb-4" />
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Round-the-clock technical support</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Replacement</h3>
                <p className="text-gray-600 text-sm">Quick replacement if repair isn't possible</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Registration */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Product Registration</h2>
          <Card className="max-w-3xl mx-auto p-8">
            <CardContent>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Register Your Product</h3>
                <p className="text-gray-600">Registering your product ensures faster warranty service and important updates</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Registration Benefits:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Faster warranty claims</li>
                    <li>• Product recall notifications</li>
                    <li>• Software update alerts</li>
                    <li>• Extended warranty offers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Required Information:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Product model number</li>
                    <li>• Serial number</li>
                    <li>• Purchase date</li>
                    <li>• Proof of purchase</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Register Product
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8. Warranty Support */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Warranty Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <Phone className="h-8 w-8 text-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Warranty Team</h3>
                <p className="text-gray-600 mb-4">1-800-WARRANTY (Mon-Fri 8AM-8PM)</p>
                <Button className="bg-blue hover:bg-blue-dark">Call Now</Button>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <Mail className="h-8 w-8 text-green mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">warranty@nshopmart.com</p>
                <Button className="bg-green hover:bg-green-dark">Send Email</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Investment</h2>
          <p className="text-xl opacity-90 mb-8">
            Consider extended warranty protection for complete peace of mind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              View Extended Warranties
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
              File Warranty Claim
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarrantyPage;
