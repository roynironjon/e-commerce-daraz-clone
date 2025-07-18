
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag, TrendingUp, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const BlogPage = () => {
  const featuredPost = {
    title: "The Future of E-commerce: Trends to Watch in 2024",
    excerpt: "Discover the latest trends shaping the e-commerce landscape and how they'll impact online shopping experiences.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
    author: "Sarah Johnson",
    date: "January 15, 2024",
    category: "Industry Insights",
    readTime: "8 min read"
  };

  const blogPosts = [
    {
      title: "10 Tips for Successful Online Shopping",
      excerpt: "Make your online shopping experience safer and more enjoyable with these expert tips.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      author: "Mike Chen",
      date: "January 12, 2024",
      category: "Shopping Tips",
      readTime: "5 min read"
    },
    {
      title: "How to Find the Best Deals and Discounts",
      excerpt: "Learn insider secrets to finding the best deals and maximizing your savings.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      author: "Emily Davis",
      date: "January 10, 2024",
      category: "Money Saving",
      readTime: "6 min read"
    },
    {
      title: "Mobile Shopping: The Complete Guide",
      excerpt: "Everything you need to know about shopping on mobile devices safely and efficiently.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      author: "David Wilson",
      date: "January 8, 2024",
      category: "Technology",
      readTime: "7 min read"
    },
    {
      title: "Sustainable Shopping: Making Eco-Friendly Choices",
      excerpt: "How to make environmentally conscious purchasing decisions without compromising quality.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      author: "Lisa Brown",
      date: "January 5, 2024",
      category: "Sustainability",
      readTime: "9 min read"
    }
  ];

  const categories = [
    { name: "Industry Insights", count: 15 },
    { name: "Shopping Tips", count: 23 },
    { name: "Technology", count: 12 },
    { name: "Money Saving", count: 18 },
    { name: "Sustainability", count: 8 },
    { name: "Product Reviews", count: 31 }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-green to-green-dark text-white py-20">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">N ShopMart Blog</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Stay updated with the latest shopping tips, industry insights, and product reviews 
              from our expert team.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search articles..."
                className="bg-white text-gray-900"
              />
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
            <p className="text-gray-600">Don't miss our latest featured content</p>
          </div>
          <Card className="overflow-hidden hover-glow">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-auto object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-green text-white mr-3">
                      {featuredPost.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-600 mr-4">{featuredPost.author}</span>
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-600">{featuredPost.date}</span>
                    </div>
                    <Button className="bg-green hover:bg-green-dark">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-gray-600">Find articles that interest you most</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="text-center p-4 hover-glow cursor-pointer">
                <CardContent>
                  <div className="bg-green/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Tag className="h-6 w-6 text-green" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-gray-600">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Latest Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with our newest content</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover-glow">
                <CardContent className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Badge className="bg-gray-100 text-gray-700 text-xs mr-2">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <User className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Popular Tags */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Tags</h2>
            <p className="text-gray-600">Explore content by popular topics</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['shopping tips', 'deals', 'technology', 'mobile', 'fashion', 'electronics', 'home', 'beauty', 'gadgets', 'reviews', 'savings', 'trends'].map((tag, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-green hover:text-white hover:border-green">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Author Spotlight */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Authors</h2>
            <p className="text-gray-600">Expert writers sharing valuable insights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                  alt="Sarah Johnson"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-green text-sm mb-2">E-commerce Expert</p>
                <p className="text-gray-600 text-sm">10+ years in retail and e-commerce strategy</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                  alt="Mike Chen"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2">Mike Chen</h3>
                <p className="text-green text-sm mb-2">Technology Specialist</p>
                <p className="text-gray-600 text-sm">Tech trends and product review expert</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
                  alt="Emily Davis"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2">Emily Davis</h3>
                <p className="text-green text-sm mb-2">Shopping Advisor</p>
                <p className="text-gray-600 text-sm">Consumer savings and deal-finding specialist</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Trending Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <TrendingUp className="mr-2 h-8 w-8 text-green" />
              Trending Now
            </h2>
            <p className="text-gray-600">Most popular articles this week</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover-glow">
              <CardContent>
                <div className="flex items-start">
                  <div className="bg-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Black Friday Shopping Guide 2024</h3>
                    <p className="text-gray-600 text-sm">Complete guide to maximize your Black Friday savings</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 hover-glow">
              <CardContent>
                <div className="flex items-start">
                  <div className="bg-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Best Tech Gadgets of 2024</h3>
                    <p className="text-gray-600 text-sm">Top tech products you need to know about this year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <Card className="bg-gradient-to-r from-green/10 to-green-dark/10 p-8">
            <CardContent className="text-center">
              <h2 className="text-3xl font-bold mb-4">Never Miss an Article</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter and get the latest articles delivered to your inbox
              </p>
              <div className="max-w-md mx-auto flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="bg-green hover:bg-green-dark">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Join 50,000+ readers. No spam, unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 9. Archive & Resources */}
      <section className="py-16 bg-gradient-to-r from-green to-green-dark text-white">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Our Archive</h2>
          <p className="text-xl opacity-90 mb-8">
            Browse through hundreds of articles and resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green hover:bg-gray-100">
              Browse All Articles
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green">
              Popular This Month
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
