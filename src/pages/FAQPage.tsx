
import React, { useState } from 'react';
import { Search, HelpCircle, ChevronDown, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: "Orders & Shopping",
      faqs: [
        {
          question: "How do I place an order?",
          answer: "To place an order, browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping information and payment details to complete your purchase."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "You can modify or cancel your order within 1 hour of placing it. After that, if the order hasn't shipped yet, contact our customer service team for assistance."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers."
        },
        {
          question: "Do you offer price matching?",
          answer: "Yes, we offer price matching on identical items from eligible competitors. Contact our customer service with the competitor's price and we'll match it."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      faqs: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Overnight shipping delivers the next business day."
        },
        {
          question: "Do you offer free shipping?",
          answer: "Yes, we offer free standard shipping on orders over $35. Prime members get free 2-day shipping on eligible items."
        },
        {
          question: "Can I track my order?",
          answer: "Yes, you'll receive a tracking number via email once your order ships. You can track your package on our website or the carrier's website."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some items like personalized products cannot be returned."
        },
        {
          question: "How do I return an item?",
          answer: "Start a return online by visiting our Returns page, print the free return label, pack the item securely, and drop it off at any carrier location."
        },
        {
          question: "How long do refunds take?",
          answer: "Refunds are processed within 5-7 business days after we receive your return. The refund will appear on your original payment method."
        },
        {
          question: "Can I exchange an item for a different size or color?",
          answer: "Yes, we offer free exchanges for the same item in a different size or color, subject to availability. The process is similar to returns."
        }
      ]
    },
    {
      category: "Account & Membership",
      faqs: [
        {
          question: "How do I create an account?",
          answer: "Click 'Sign Up' at the top of any page, enter your email and create a password. You can also sign up with your Google or Facebook account."
        },
        {
          question: "What are the benefits of creating an account?",
          answer: "Account holders can track orders, save items to wishlists, store multiple addresses, view order history, and receive exclusive offers."
        },
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the sign-in page, enter your email address, and we'll send you a link to reset your password."
        },
        {
          question: "What is Prime membership?",
          answer: "Prime membership includes free 2-day shipping, exclusive deals, early access to sales, and other premium benefits for a yearly fee."
        }
      ]
    },
    {
      category: "Products & Availability",
      faqs: [
        {
          question: "How do I find specific products?",
          answer: "Use our search bar at the top of the page, browse by category, or use filters to narrow down your search by price, brand, ratings, and more."
        },
        {
          question: "What if an item is out of stock?",
          answer: "You can sign up for restock notifications to be alerted when the item becomes available again. We'll send you an email as soon as it's back in stock."
        },
        {
          question: "Are your product reviews authentic?",
          answer: "Yes, all reviews are from verified purchasers. We have strict policies against fake reviews and use advanced detection systems to maintain authenticity."
        },
        {
          question: "Do you offer product warranties?",
          answer: "Yes, most products come with manufacturer warranties. We also offer extended warranty options for additional protection on eligible items."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Find quick answers to common questions about shopping, shipping, returns, and more
          </p>
        </div>
      </section>

      {/* 2. Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Search FAQ</h2>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {faqCategories.map((category, index) => (
              <Card key={index} className="p-6 hover-glow cursor-pointer">
                <CardContent>
                  <HelpCircle className="h-8 w-8 text-indigo-600 mb-3" />
                  <h3 className="font-semibold mb-2">{category.category}</h3>
                  <p className="text-gray-600 text-sm">{category.faqs.length} questions</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-indigo-600">{category.category}</h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border rounded-lg">
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Popular Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Most Popular Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-2">How do I track my order?</h3>
                <p className="text-gray-600 text-sm mb-3">Visit our Track Your Order page and enter your order number and email address.</p>
                <Button variant="outline" size="sm">View Details</Button>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-2">What is your return policy?</h3>
                <p className="text-gray-600 text-sm mb-3">We offer 30-day returns on most items in original condition.</p>
                <Button variant="outline" size="sm">View Details</Button>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-2">Do you offer free shipping?</h3>
                <p className="text-gray-600 text-sm mb-3">Yes, free standard shipping on orders over $35.</p>
                <Button variant="outline" size="sm">View Details</Button>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-2">How do I contact customer service?</h3>
                <p className="text-gray-600 text-sm mb-3">Call 1-800-SHOPMART, email support@nshopmart.com, or use live chat.</p>
                <Button variant="outline" size="sm">View Details</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Video Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Video Tutorials</h2>
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
                  alt="Returns process"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">How to Return Items</h3>
                  <p className="text-gray-600 text-sm">Learn about our easy return process</p>
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
                  <p className="text-gray-600 text-sm">Account settings and preferences guide</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get More Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <MessageCircle className="h-12 w-12 text-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Chat with support agents 24/7</p>
                <Button className="bg-blue hover:bg-blue-dark">Start Chat</Button>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <Phone className="h-12 w-12 text-green mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600 text-sm mb-4">Call 1-800-SHOPMART</p>
                <Button className="bg-green hover:bg-green-dark">Call Now</Button>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover-glow">
              <CardContent>
                <Mail className="h-12 w-12 text-orange mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">support@nshopmart.com</p>
                <Button className="bg-orange hover:bg-orange-dark">Send Email</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Feedback Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Help Us Improve</h2>
          <Card className="max-w-2xl mx-auto p-8">
            <CardContent>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Was this helpful?</h3>
                <p className="text-gray-600 mb-6">Let us know how we can improve our FAQ section</p>
                <div className="flex gap-4 justify-center">
                  <Button variant="outline">👍 Yes, helpful</Button>
                  <Button variant="outline">👎 No, needs work</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8. Related Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-4 hover-glow cursor-pointer">
              <CardContent>
                <h3 className="font-semibold mb-2">Help Center</h3>
                <p className="text-gray-600 text-sm">Comprehensive help articles</p>
              </CardContent>
            </Card>
            <Card className="p-4 hover-glow cursor-pointer">
              <CardContent>
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">Get in touch with support</p>
              </CardContent>
            </Card>
            <Card className="p-4 hover-glow cursor-pointer">
              <CardContent>
                <h3 className="font-semibold mb-2">Order Status</h3>
                <p className="text-gray-600 text-sm">Track your orders</p>
              </CardContent>
            </Card>
            <Card className="p-4 hover-glow cursor-pointer">
              <CardContent>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-gray-600 text-sm">Connect with other customers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. Still Need Help CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl opacity-90 mb-8">
            Our customer support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              Contact Support
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-600">
              Browse Help Center
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
