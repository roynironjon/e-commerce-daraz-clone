
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, Users, Database, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-orange text-white py-20">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="mt-4 text-lg opacity-90">Last updated: January 18, 2025</p>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collect information to provide better services to our users
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="h-12 w-12 text-orange mb-4" />
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Name and contact information</li>
                  <li>• Email address and phone number</li>
                  <li>• Billing and shipping addresses</li>
                  <li>• Payment information</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="h-12 w-12 text-orange mb-4" />
                <CardTitle>Usage Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pages visited and time spent</li>
                  <li>• Products viewed and purchased</li>
                  <li>• Search queries and preferences</li>
                  <li>• Device and browser information</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-orange mb-4" />
                <CardTitle>Social Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Social media profiles (if connected)</li>
                  <li>• Reviews and ratings</li>
                  <li>• Communication preferences</li>
                  <li>• Account activity</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-lg text-gray-600">
              We use your information to improve our services and your shopping experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Order Processing</h3>
                  <p className="text-gray-600">Process and fulfill your orders, handle payments, and provide customer support.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalization</h3>
                  <p className="text-gray-600">Customize your shopping experience with personalized recommendations and content.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Communication</h3>
                  <p className="text-gray-600">Send you order updates, promotional offers, and important account information.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analytics</h3>
                  <p className="text-gray-600">Analyze usage patterns to improve our website performance and user experience.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full">
                  <span className="font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Security</h3>
                  <p className="text-gray-600">Protect against fraud, unauthorized access, and maintain account security.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full">
                  <span className="font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Legal Compliance</h3>
                  <p className="text-gray-600">Comply with legal obligations and enforce our terms of service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <Lock className="h-16 w-16 text-orange mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Data Protection & Security</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We implement industry-standard security measures to protect your personal information
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange" />
                </div>
                <CardTitle className="text-lg">SSL Encryption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">All data transmitted is encrypted using SSL technology</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Lock className="h-8 w-8 text-orange" />
                </div>
                <CardTitle className="text-lg">Secure Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your data is stored in secure, encrypted databases</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Eye className="h-8 w-8 text-orange" />
                </div>
                <CardTitle className="text-lg">Access Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Limited access to authorized personnel only</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Database className="h-8 w-8 text-orange" />
                </div>
                <CardTitle className="text-lg">Regular Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Regular security audits and updates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="text-lg text-gray-600">
              You have control over your personal information
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange rounded-full"></div>
                <span className="font-semibold">Access your personal data</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange rounded-full"></div>
                <span className="font-semibold">Correct inaccurate information</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange rounded-full"></div>
                <span className="font-semibold">Request data deletion</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange rounded-full"></div>
                <span className="font-semibold">Opt-out of marketing communications</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange rounded-full"></div>
                <span className="font-semibold">Data portability</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange rounded-full"></div>
                <span className="font-semibold">Restrict data processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange rounded-full"></div>
                <span className="font-semibold">Object to data processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange rounded-full"></div>
                <span className="font-semibold">File a complaint with authorities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cookies & Tracking</h2>
            <p className="text-lg text-gray-600">
              Learn about how we use cookies and similar technologies
            </p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-3">Essential Cookies</h3>
                  <p className="text-gray-600">Required for basic website functionality and security</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-3">Analytics Cookies</h3>
                  <p className="text-gray-600">Help us understand how visitors interact with our website</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-3">Marketing Cookies</h3>
                  <p className="text-gray-600">Used to deliver personalized advertisements</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Third Party Sharing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Information Sharing</h2>
            <p className="text-lg text-gray-600">
              We do not sell your personal information to third parties
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">When We May Share Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>• With service providers who assist in business operations</li>
                  <li>• When required by law or legal process</li>
                  <li>• To protect our rights and prevent fraud</li>
                  <li>• In connection with a business transaction</li>
                  <li>• With your explicit consent</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Data Retention</h2>
            <p className="text-lg text-gray-600">
              How long we keep your information
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              We retain your personal information only as long as necessary to provide our services, 
              comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Account Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Retained while account is active plus 3 years</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Transaction Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Retained for 7 years for legal compliance</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Marketing Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Until you unsubscribe or opt-out</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-orange text-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Our Privacy Team</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions about our privacy practices? We're here to help.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p>privacy@shopmart.com</p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p>+1-234-567-8900</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mail Us</h3>
              <p>123 Commerce St, NYC</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" className="bg-white text-orange hover:bg-gray-100">
              Contact Privacy Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
