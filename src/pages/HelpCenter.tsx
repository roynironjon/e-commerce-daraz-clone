
import React from 'react';
import { Search, MessageCircle, Phone, Mail, Clock, ArrowRight, HelpCircle, Book, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const HelpCenter = () => {
  const quickHelp = [
    { title: "Track Your Order", description: "Find your order status and tracking information", icon: "📦" },
    { title: "Return Policy", description: "Learn about our 30-day return policy", icon: "↩️" },
    { title: "Payment Methods", description: "Accepted payment options and security", icon: "💳" },
    { title: "Shipping Info", description: "Delivery times and shipping options", icon: "🚚" },
    { title: "Account Help", description: "Manage your account and preferences", icon: "👤" },
    { title: "Technical Support", description: "Website and app technical issues", icon: "⚙️" }
  ];

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order by visiting the 'Track Your Order' page and entering your order number and email address."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be in original condition with tags attached."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-7 business days. Express shipping takes 1-2 business days."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 100 countries worldwide. International shipping times vary by location."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-blue to-blue-dark text-white py-20">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">How Can We Help You?</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Find answers to your questions, get support, and learn how to make the most of N ShopMart.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for help..."
                className="bg-white text-gray-900 flex-1"
              />
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Help Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Help Topics</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickHelp.map((topic, index) => (
              <Card key={index} className="p-6 hover-glow cursor-pointer">
                <CardContent>
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="font-semibold mb-2">{topic.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{topic.description}</p>
                  <Button variant="outline" size="sm">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">Multiple ways to reach our support team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-blue" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Chat with our support team instantly</p>
                <p className="text-sm text-gray-500 mb-4">Available 24/7</p>
                <Button className="bg-blue hover:bg-blue-dark">Start Chat</Button>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <div className="bg-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green" />
                </div>
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600 text-sm mb-4">Speak directly with our team</p>
                <p className="text-sm text-gray-500 mb-4">Mon-Fri 9AM-6PM EST</p>
                <Button className="bg-green hover:bg-green-dark">Call Now</Button>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-orange" />
                </div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">Get detailed help via email</p>
                <p className="text-sm text-gray-500 mb-4">Response within 24 hours</p>
                <Button className="bg-orange hover:bg-orange-dark">Send Email</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 pl-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All FAQs</Button>
          </div>
        </div>
      </section>

      {/* 5. Video Tutorials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Video Tutorials</h2>
            <p className="text-gray-600">Learn with step-by-step video guides</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover-glow">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop"
                  alt="How to place an order"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">How to Place an Order</h3>
                  <p className="text-gray-600 text-sm">Step-by-step guide to ordering products</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover-glow">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop"
                  alt="Account management"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Managing Your Account</h3>
                  <p className="text-gray-600 text-sm">Learn about account settings and preferences</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover-glow">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop"
                  alt="Returns and exchanges"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Returns & Exchanges</h3>
                  <p className="text-gray-600 text-sm">How to return or exchange your items</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Community */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Users className="mr-2 h-8 w-8 text-blue" />
              Community Forum
            </h2>
            <p className="text-gray-600">Connect with other customers and share experiences</p>
          </div>
          <Card className="p-8 text-center">
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
              <p className="text-gray-600 mb-6">
                Get help from other customers, share tips, and discover new products
              </p>
              <Button className="bg-blue hover:bg-blue-dark">
                Visit Forum
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 7. Service Status */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Status</h2>
            <p className="text-gray-600">Current status of our services</p>
          </div>
          <Card className="p-6">
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green rounded-full mr-3"></div>
                  <span className="font-semibold">Website</span>
                </div>
                <span className="text-green text-sm">Operational</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green rounded-full mr-3"></div>
                  <span className="font-semibold">Mobile App</span>
                </div>
                <span className="text-green text-sm">Operational</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green rounded-full mr-3"></div>
                  <span className="font-semibold">Payment Processing</span>
                </div>
                <span className="text-green text-sm">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="font-semibold">Order Processing</span>
                </div>
                <span className="text-yellow-600 text-sm">Minor Delays</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8. Knowledge Base */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Book className="mr-2 h-8 w-8 text-purple-600" />
              Knowledge Base
            </h2>
            <p className="text-gray-600">Comprehensive guides and documentation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-4 hover-glow cursor-pointer">
              <CardContent>
                <h3 className="font-semibold mb-2">Getting Started</h3>
                <p className="text-gray-600 text-sm">15 articles</p>
              </CardContent>
            </Card>
            <Card className="p-4 hover-glow cursor-pointer">
              <CardContent>
                <h3 className="font-semibold mb-2">Orders & Shipping</h3>
                <p className="text-gray-600 text-sm">22 articles</p>
              </CardContent>
            </Card>
            <Card className="p-4 hover-glow cursor-pointer">
              <CardContent>
                <h3 className="font-semibold mb-2">Returns & Refunds</h3>
                <p className="text-gray-600 text-sm">12 articles</p>
              </CardContent>
            </Card>
            <Card className="p-4 hover-glow cursor-pointer">
              <CardContent>
                <h3 className="font-semibold mb-2">Account & Security</h3>
                <p className="text-gray-600 text-sm">18 articles</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. Still Need Help CTA */}
      <section className="py-16 bg-gradient-to-r from-blue to-blue-dark text-white">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl opacity-90 mb-8">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue hover:bg-gray-100">
              Contact Support
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
