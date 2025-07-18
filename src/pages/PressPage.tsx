
import React from 'react';
import { Calendar, Download, ExternalLink, Award, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PressPage = () => {
  const pressReleases = [
    {
      title: "N ShopMart Reaches 10 Million Active Users Milestone",
      date: "January 15, 2024",
      category: "Company News",
      excerpt: "Leading e-commerce platform celebrates significant growth achievement with expanded global presence.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "Partnership with Major Brands Expands Product Selection",
      date: "December 8, 2023",
      category: "Partnership",
      excerpt: "Strategic partnerships with leading brands to offer customers more choice and better prices.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "N ShopMart Wins E-commerce Innovation Award 2023",
      date: "November 22, 2023",
      category: "Awards",
      excerpt: "Recognition for outstanding innovation in customer experience and technology advancement.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats",
      fileSize: "2.5 MB",
      format: "ZIP"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity guidelines",
      fileSize: "4.1 MB",
      format: "PDF"
    },
    {
      title: "Product Screenshots",
      description: "High-quality product and interface screenshots",
      fileSize: "8.3 MB",
      format: "ZIP"
    }
  ];

  const awards = [
    {
      title: "Best E-commerce Platform 2024",
      organization: "Digital Commerce Awards",
      year: "2024"
    },
    {
      title: "Customer Choice Award",
      organization: "Tech Excellence Awards",
      year: "2023"
    },
    {
      title: "Innovation in Retail Technology",
      organization: "Retail Tech Summit",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Latest news, press releases, and media resources about N ShopMart's 
              journey in revolutionizing e-commerce.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10M+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green mb-2">50K+</div>
              <p className="text-gray-600">Products</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue mb-2">100+</div>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">500+</div>
              <p className="text-gray-600">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Latest Press Releases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Press Releases</h2>
            <p className="text-gray-600">Stay updated with our latest company news and announcements</p>
          </div>
          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <Card key={index} className="hover-glow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <img
                      src={release.image}
                      alt={release.title}
                      className="w-full md:w-80 h-48 md:h-auto object-cover"
                    />
                    <div className="p-6 flex-1">
                      <div className="flex items-center mb-3">
                        <Badge className="bg-purple-100 text-purple-700 mr-3">
                          {release.category}
                        </Badge>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {release.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{release.title}</h3>
                      <p className="text-gray-600 mb-4">{release.excerpt}</p>
                      <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                        Read Full Release
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-gray-600">Celebrating our achievements and industry recognition</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="text-center p-6 hover-glow">
                <CardContent>
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{award.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{award.organization}</p>
                  <p className="text-purple-600 font-medium">{award.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Media Kit */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Media Kit</h2>
            <p className="text-gray-600">Download our brand assets and media resources</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaKit.map((item, index) => (
              <Card key={index} className="p-6 hover-glow">
                <CardContent>
                  <h3 className="font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{item.fileSize}</span>
                    <Badge className="bg-gray-100 text-gray-700">{item.format}</Badge>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Company Milestones */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Company Milestones</h2>
            <p className="text-gray-600">Key achievements in our journey</p>
          </div>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">
                2024
              </div>
              <div>
                <h3 className="font-semibold">10 Million Users Milestone</h3>
                <p className="text-gray-600">Reached 10 million active users globally</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">
                2023
              </div>
              <div>
                <h3 className="font-semibold">Global Expansion</h3>
                <p className="text-gray-600">Expanded to 50+ countries worldwide</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">
                2022
              </div>
              <div>
                <h3 className="font-semibold">Series C Funding</h3>
                <p className="text-gray-600">Raised $100M in Series C funding round</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Media Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">In the News</h2>
            <p className="text-gray-600">Recent media coverage and mentions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover-glow">
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop"
                  alt="TechCrunch"
                  className="h-12 w-auto mb-4"
                />
                <h3 className="font-semibold mb-2">"The Future of E-commerce"</h3>
                <p className="text-gray-600 text-sm">Featured article about N ShopMart's innovative approach</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover-glow">
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop"
                  alt="Forbes"
                  className="h-12 w-auto mb-4"
                />
                <h3 className="font-semibold mb-2">"Top Startups to Watch"</h3>
                <p className="text-gray-600 text-sm">Listed among the most promising tech companies</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover-glow">
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop"
                  alt="Wired"
                  className="h-12 w-auto mb-4"
                />
                <h3 className="font-semibold mb-2">"Retail Revolution"</h3>
                <p className="text-gray-600 text-sm">How N ShopMart is changing online shopping</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. Executive Team */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-600">Meet the leaders driving our vision forward</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  alt="John Smith"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold mb-1">John Smith</h3>
                <p className="text-purple-600 text-sm mb-2">CEO & Founder</p>
                <p className="text-gray-600 text-sm">15+ years in e-commerce and technology</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                  alt="Sarah Johnson"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-purple-600 text-sm mb-2">CTO</p>
                <p className="text-gray-600 text-sm">Former tech lead at major Silicon Valley companies</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  alt="Mike Chen"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold mb-1">Mike Chen</h3>
                <p className="text-purple-600 text-sm mb-2">VP of Marketing</p>
                <p className="text-gray-600 text-sm">Growth expert with proven track record</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. Contact for Media */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-xl opacity-90 mb-8">
            For press inquiries, interviews, or additional information
          </p>
          <div className="max-w-md mx-auto">
            <p className="mb-4">
              <strong>Press Contact:</strong><br />
              Sarah Miller, PR Manager<br />
              <a href="mailto:press@nshopmart.com" className="text-yellow-300 hover:underline">
                press@nshopmart.com
              </a><br />
              +1 (555) 123-4567
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Contact Media Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;
