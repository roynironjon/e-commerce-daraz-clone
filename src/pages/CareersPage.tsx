
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MapPin, Clock, Heart, TrendingUp, Award, Coffee, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CareersPage = () => {
  const openPositions = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      level: "Mid-Senior",
      description: "Join our engineering team to build amazing user experiences with React and TypeScript."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco",
      type: "Full-time",
      level: "Senior",
      description: "Lead product strategy and work with cross-functional teams to deliver innovative solutions."
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      level: "Mid-Level",
      description: "Design intuitive and delightful user experiences for millions of customers worldwide."
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Austin",
      type: "Full-time",
      level: "Senior",
      description: "Analyze customer behavior and business metrics to drive data-driven decisions."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work-life balance with flexible schedules and remote work options"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Professional development budget and clear advancement opportunities"
    },
    {
      icon: Coffee,
      title: "Great Perks",
      description: "Free meals, gym membership, and amazing office spaces"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push boundaries and embrace new technologies to stay ahead."
    },
    {
      title: "Customer Obsession",
      description: "Every decision we make is centered around delivering value to our customers."
    },
    {
      title: "Team Collaboration",
      description: "We believe in the power of diverse teams working together towards common goals."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our people's growth and encourage lifelong learning."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-orange text-white py-20">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Amazing Team</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Be part of a company that's revolutionizing e-commerce and making shopping 
            better for millions of customers worldwide.
          </p>
          <Button size="lg" className="bg-white text-blue hover:bg-gray-100">
            View Open Positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* 2. Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue mb-2">500+</div>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green mb-2">15+</div>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">4.8/5</div>
              <p className="text-gray-600">Employee Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-gray-600">Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-gray-600">Discover what makes N ShopMart a great place to work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover-glow">
                <CardContent>
                  <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue" />
                  </div>
                  <h3 className="font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover-glow">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-3 text-blue">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-600">Find your next career opportunity</p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="p-6 hover-glow">
                <CardContent className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold mr-3">{position.title}</h3>
                      <Badge className="bg-blue text-white">{position.type}</Badge>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2 space-x-4">
                      <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="text-sm">{position.level}</span>
                    </div>
                    <p className="text-gray-700">{position.description}</p>
                  </div>
                  <Button className="bg-blue hover:bg-blue-dark text-white">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Life at N ShopMart */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Life at N ShopMart</h2>
            <p className="text-gray-600">Take a peek into our vibrant workplace culture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                alt="Team collaboration"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="text-white p-4 font-semibold">Team Collaboration</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=300&fit=crop"
                alt="Modern workspace"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="text-white p-4 font-semibold">Modern Workspace</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
                alt="Team events"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="text-white p-4 font-semibold">Team Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Employee Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Team Says</h2>
            <p className="text-gray-600">Hear from our amazing team members</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "Working at N ShopMart has been incredible. The team is supportive, 
                  the work is challenging, and I've grown so much professionally."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
                    alt="Sarah Chen"
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-gray-600">Senior Frontend Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "The culture here is amazing. Everyone is passionate about what they do, 
                  and there's always room to learn and grow."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                    alt="Michael Rodriguez"
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Michael Rodriguez</p>
                    <p className="text-sm text-gray-600">Product Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Hiring Process</h2>
            <p className="text-gray-600">Simple, transparent, and designed to find the best fit</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue">1</span>
              </div>
              <h3 className="font-semibold mb-2">Apply Online</h3>
              <p className="text-sm text-gray-600">Submit your application through our careers page</p>
            </div>
            <div className="text-center">
              <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue">2</span>
              </div>
              <h3 className="font-semibold mb-2">Initial Screening</h3>
              <p className="text-sm text-gray-600">Phone or video call with our recruiting team</p>
            </div>
            <div className="text-center">
              <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue">3</span>
              </div>
              <h3 className="font-semibold mb-2">Technical Interview</h3>
              <p className="text-sm text-gray-600">Skills assessment with the hiring team</p>
            </div>
            <div className="text-center">
              <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue">4</span>
              </div>
              <h3 className="font-semibold mb-2">Final Interview</h3>
              <p className="text-sm text-gray-600">Meet the team and discuss culture fit</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue to-blue-dark text-white">
        <div className="max-w-[1160px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl opacity-90 mb-8">
            Take the next step in your career and be part of something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue hover:bg-orange hover:text-white">
              Browse Open Positions
            </Button>
            <Button variant="outline" size="lg" className="bg-orange border-white text-white hover:bg-white hover:text-black">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
