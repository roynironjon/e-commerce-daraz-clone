
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cookie, Settings, Eye, BarChart3, Target, Shield, Trash2, RefreshCw } from 'lucide-react';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-orange text-white py-20">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center">
            <Cookie className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your shopping experience.
            </p>
            <p className="mt-4 text-lg opacity-90">Last updated: January 18, 2025</p>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Are Cookies?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cookies are small text files stored on your device when you visit our website
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cookie className="h-12 w-12 text-orange mx-auto mb-4" />
                <CardTitle>Text Files</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Small data files stored on your device</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="h-12 w-12 text-orange mx-auto mb-4" />
                <CardTitle>Functionality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Help websites remember your preferences</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="h-12 w-12 text-orange mx-auto mb-4" />
                <CardTitle>Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Monitor website usage and behavior</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-orange mx-auto mb-4" />
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Maintain secure sessions and prevent fraud</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Cookies We Use</h2>
            <p className="text-lg text-gray-600">
              Different categories of cookies serve different purposes on our website
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-orange mb-4" />
                <CardTitle className="text-xl">Essential Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Required for basic website functionality and cannot be disabled.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Shopping cart functionality</li>
                  <li>• User authentication</li>
                  <li>• Security features</li>
                  <li>• Load balancing</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-orange mb-4" />
                <CardTitle className="text-xl">Analytics Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Help us understand how visitors interact with our website.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Google Analytics</li>
                  <li>• Page view tracking</li>
                  <li>• User behavior analysis</li>
                  <li>• Performance monitoring</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-orange mb-4" />
                <CardTitle className="text-xl">Marketing Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Used to deliver personalized advertisements and track campaigns.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Facebook Pixel</li>
                  <li>• Google Ads</li>
                  <li>• Retargeting campaigns</li>
                  <li>• Social media integration</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="h-12 w-12 text-orange mb-4" />
                <CardTitle className="text-xl">Functional Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Remember your preferences and enhance functionality.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Language preferences</li>
                  <li>• Theme settings</li>
                  <li>• Recently viewed items</li>
                  <li>• Wishlist items</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="h-12 w-12 text-orange mb-4" />
                <CardTitle className="text-xl">Performance Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Collect information about website performance and usage.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Page load times</li>
                  <li>• Error tracking</li>
                  <li>• Traffic analysis</li>
                  <li>• Feature usage</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <RefreshCw className="h-12 w-12 text-orange mb-4" />
                <CardTitle className="text-xl">Session Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Temporary cookies deleted when you close your browser.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Login sessions</li>
                  <li>• Form data</li>
                  <li>• Navigation state</li>
                  <li>• Shopping progress</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Use Cookies */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Use Cookies</h2>
            <p className="text-lg text-gray-600">
              We use cookies to improve your experience and provide better services
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Website Functionality</h3>
                  <p className="text-gray-600">Enable core features like shopping cart, user login, and secure checkout process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalization</h3>
                  <p className="text-gray-600">Remember your preferences, recently viewed items, and customize your shopping experience.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analytics & Insights</h3>
                  <p className="text-gray-600">Understand how visitors use our website to improve performance and user experience.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advertising</h3>
                  <p className="text-gray-600">Show relevant ads and measure the effectiveness of our marketing campaigns.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full flex-shrink-0">
                  <span className="font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Security</h3>
                  <p className="text-gray-600">Protect against fraud, ensure secure transactions, and maintain account safety.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange text-white p-3 rounded-full flex-shrink-0">
                  <span className="font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Communication</h3>
                  <p className="text-gray-600">Enable live chat, support features, and other communication tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Third-Party Cookies</h2>
            <p className="text-lg text-gray-600">
              Some cookies are set by third-party services we use
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-500 text-white p-3 rounded-full w-fit mx-auto mb-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Google Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Website analytics and user behavior tracking</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-600 text-white p-3 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Facebook Pixel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Social media advertising and retargeting</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-red-500 text-white p-3 rounded-full w-fit mx-auto mb-4">
                  <Eye className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Google Ads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Search and display advertising campaigns</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-500 text-white p-3 rounded-full w-fit mx-auto mb-4">
                  <Settings className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Other Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Payment processors, chat tools, and integrations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <Settings className="h-16 w-16 text-orange mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You have control over which cookies you accept and can change your preferences at any time
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-orange">Browser Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Most browsers allow you to control cookies through their settings.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Block all cookies</li>
                  <li>• Block third-party cookies</li>
                  <li>• Delete existing cookies</li>
                  <li>• Set cookie preferences</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-orange">Cookie Banner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Use our cookie banner to customize your preferences.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Accept all cookies</li>
                  <li>• Reject non-essential</li>
                  <li>• Customize categories</li>
                  <li>• Update anytime</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-orange">Opt-Out Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Use industry opt-out tools for advertising cookies.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Digital Advertising Alliance</li>
                  <li>• Network Advertising Initiative</li>
                  <li>• Google Ad Settings</li>
                  <li>• Facebook Ad Preferences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact of Disabling Cookies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Impact of Disabling Cookies</h2>
            <p className="text-lg text-gray-600">
              Disabling certain cookies may affect your website experience
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-orange border-2">
                <CardHeader>
                  <CardTitle className="text-xl text-orange">Essential Cookies Disabled</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Shopping cart may not work</li>
                    <li>• Cannot stay logged in</li>
                    <li>• Checkout process may fail</li>
                    <li>• Security features disabled</li>
                    <li>• Site may not function properly</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange">Non-Essential Cookies Disabled</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Less personalized experience</li>
                    <li>• Generic advertisements</li>
                    <li>• Preferences not remembered</li>
                    <li>• Limited analytics data</li>
                    <li>• Reduced functionality</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Lifespan */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cookie Lifespan</h2>
            <p className="text-lg text-gray-600">
              Different cookies have different expiration times
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <RefreshCw className="h-12 w-12 text-orange mx-auto mb-4" />
                <CardTitle>Session Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Expire when you close your browser</p>
                <p className="text-sm text-gray-500">Used for temporary data during your visit</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cookie className="h-12 w-12 text-orange mx-auto mb-4" />
                <CardTitle>Persistent Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Remain until expiration date</p>
                <p className="text-sm text-gray-500">Can last from days to years depending on purpose</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trash2 className="h-12 w-12 text-orange mx-auto mb-4" />
                <CardTitle>Manual Deletion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Removed when you clear browser data</p>
                <p className="text-sm text-gray-500">You can delete cookies anytime through browser settings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Updates to Policy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Updates to This Policy</h2>
            <p className="text-lg text-gray-600">
              We may update this cookie policy from time to time
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6">
                  We will notify you of any significant changes to our cookie policy by posting 
                  the updated policy on this page and updating the "Last updated" date at the top.
                </p>
                <p className="text-gray-600 mb-6">
                  We encourage you to review this policy periodically to stay informed about 
                  how we use cookies and similar technologies.
                </p>
                <Button className="bg-orange hover:bg-orange-dark">
                  Subscribe to Policy Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-orange text-white">
        <div className="container mx-auto px-4 max-w-[1160px]">
          <div className="text-center">
            <Cookie className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              If you have any questions about our use of cookies, please don't hesitate to contact us.
            </p>
            <div className="space-y-4">
              <p className="text-lg">Email: cookies@shopmart.com</p>
              <p className="text-lg mb-8">Phone: +1-234-567-8900</p>
              <Button variant="secondary" size="lg" className="bg-white text-orange hover:bg-gray-100">
                Contact Cookie Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
