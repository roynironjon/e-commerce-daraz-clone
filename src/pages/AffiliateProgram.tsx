
import React from 'react';
import { DollarSign, Users, TrendingUp, Award, Calculator, Target, Gift, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AffiliateProgram = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "High Commissions",
      description: "Earn up to 10% commission on every sale you generate"
    },
    {
      icon: Users,
      title: "Large Product Range",
      description: "Promote from over 50,000 products across all categories"
    },
    {
      icon: TrendingUp,
      title: "Real-time Tracking",
      description: "Monitor your performance with detailed analytics"
    },
    {
      icon: Award,
      title: "Bonus Rewards",
      description: "Additional bonuses for top-performing affiliates"
    }
  ];

  const commissionTiers = [
    { tier: "Bronze", sales: "0-50", commission: "5%", perks: "Basic dashboard" },
    { tier: "Silver", sales: "51-200", commission: "7%", perks: "Priority support" },
    { tier: "Gold", sales: "201-500", commission: "8%", perks: "Custom banners" },
    { tier: "Platinum", sales: "500+", commission: "10%", perks: "Dedicated manager" }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-orange text-white py-20">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Affiliate Program</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Partner with N ShopMart and earn generous commissions by promoting 
            our products to your audience.
          </p>
          <Button size="lg" className="bg-black text-green hover:bg-gray-100 mr-4 hover:text-black">
            Join Now - It's Free
          </Button>
          <Button variant="outline" size="lg" className="border-white text-black hover:bg-black hover:text-white">
            Learn More
          </Button>
        </div>
      </section>

      {/* 2. Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Program?</h2>
            <p className="text-gray-600">Everything you need to succeed as our affiliate partner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover-glow">
                <CardContent>
                  <div className="bg-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-green" />
                  </div>
                  <h3 className="font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Commission Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Commission Tiers</h2>
            <p className="text-gray-600">Higher sales volume means higher commission rates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commissionTiers.map((tier, index) => (
              <Card key={index} className={`p-6 hover-glow ${tier.tier === 'Gold' ? 'ring-2 ring-green' : ''}`}>
                <CardContent className="text-center">
                  {tier.tier === 'Gold' && (
                    <Badge className="bg-green text-white mb-4">Most Popular</Badge>
                  )}
                  <h3 className="text-xl font-bold mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-bold text-green mb-2">{tier.commission}</div>
                  <p className="text-gray-600 text-sm mb-4">{tier.sales} sales/month</p>
                  <p className="text-gray-700 text-sm">{tier.perks}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">Get started in just 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-semibold mb-3">Sign Up</h3>
                <p className="text-gray-600 text-sm">Create your free affiliate account and get approved</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-semibold mb-3">Promote</h3>
                <p className="text-gray-600 text-sm">Share your unique links and promote our products</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-semibold mb-3">Earn</h3>
                <p className="text-gray-600 text-sm">Get paid commissions for every successful sale</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Earnings Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Calculator className="mr-2 h-8 w-8 text-green" />
              Earnings Calculator
            </h2>
            <p className="text-gray-600">See your earning potential</p>
          </div>
          <Card className="max-w-2xl mx-auto p-8">
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="font-semibold mb-2">Monthly Sales</h3>
                  <div className="text-3xl font-bold text-green">100</div>
                  <p className="text-sm text-gray-600">Average order: $75</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Commission Rate</h3>
                  <div className="text-3xl font-bold text-orange">8%</div>
                  <p className="text-sm text-gray-600">Gold tier</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Monthly Earnings</h3>
                  <div className="text-3xl font-bold text-blue">$600</div>
                  <p className="text-sm text-gray-600">Potential income</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button className="bg-green hover:bg-green-dark">
                  Start Earning Today
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 6. Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600">Hear from our top-performing affiliates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "I've been earning $2,000+ monthly with N ShopMart's affiliate program. 
                  Their high-quality products and excellent conversion rates make it easy to succeed."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
                    alt="Jennifer Lee"
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Jennifer Lee</p>
                    <p className="text-sm text-gray-600">Lifestyle Blogger • Platinum Affiliate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "The support team is amazing and the tracking tools are top-notch. 
                  I can see exactly which products my audience loves most."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                    alt="Mark Thompson"
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Mark Thompson</p>
                    <p className="text-sm text-gray-600">Tech Reviewer • Gold Affiliate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Marketing Materials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Marketing Resources</h2>
            <p className="text-gray-600">Everything you need to promote effectively</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover-glow">
              <CardContent className="text-center">
                <Target className="h-12 w-12 text-green mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Banners & Ads</h3>
                <p className="text-gray-600 text-sm mb-4">Professional banner ads in all sizes</p>
                <Button variant="outline" size="sm">View Gallery</Button>
              </CardContent>
            </Card>
            <Card className="p-6 hover-glow">
              <CardContent className="text-center">
                <Gift className="h-12 w-12 text-green mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Product Catalogs</h3>
                <p className="text-gray-600 text-sm mb-4">Detailed product information and images</p>
                <Button variant="outline" size="sm">Download</Button>
              </CardContent>
            </Card>
            <Card className="p-6 hover-glow">
              <CardContent className="text-center">
                <TrendingUp className="h-12 w-12 text-green mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Analytics Tools</h3>
                <p className="text-gray-600 text-sm mb-4">Track clicks, conversions, and earnings</p>
                <Button variant="outline" size="sm">Access Dashboard</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Requirements</h2>
            <p className="text-gray-600">Simple requirements to join our program</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green mr-3" />
                <span>Have an active website, blog, or social media presence</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green mr-3" />
                <span>Comply with our promotional guidelines</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green mr-3" />
                <span>Generate quality traffic (no paid search on brand terms)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green mr-3" />
                <span>Be 18 years or older</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green mr-3" />
                <span>Provide accurate tax information (US affiliates)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Join Now CTA */}
      <section className="py-16 bg-gray-50 text-black">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of successful affiliates earning with N ShopMart
          </p>
          <Button size="lg" className="bg-orange text-green hover:bg-black-100 mr-4 hover:text-white">
            Apply Now - Free
          </Button>
          <Button variant="outline" size="lg" className="border-white bg-black text-white hover:bg-orange hover:text-green">
            Contact Us
          </Button>
          <div className="mt-8 text-sm opacity-80">
            <p>Questions? Email us at affiliates@nshopmart.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliateProgram;
