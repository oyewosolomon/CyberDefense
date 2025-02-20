import React, { useState } from 'react';
import { Shield, Users, Award, Briefcase, Globe, ChevronRight, Linkedin, Mail, Building2 } from 'lucide-react';

const AboutTeamSection = () => {
  const [activeTab, setActiveTab] = useState('about');

  const stats = [
    {
      number: "10+",
      label: "Years Experience",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      number: "500+",
      label: "Enterprise Clients",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      number: "250+",
      label: "Security Experts",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: "24/7",
      label: "Global Coverage",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      bio: "Former Head of Cybersecurity at Fortune 500 company with 15+ years of experience in enterprise security.",
      linkedIn: "#"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      bio: "Security architecture expert with background in zero-trust implementation and AI-driven threat detection.",
      linkedIn: "#"
    },
    {
      name: "Dr. Emma Thompson",
      role: "Chief Security Officer",
      image: "https://randomuser.me/api/portraits/men/79.jpg",
      bio: "Ph.D. in Computer Science, specializing in AI-driven security systems and threat intelligence.",
      linkedIn: "#"
    },
    {
      name: "James Wilson",
      role: "VP of Engineering",
      image: "https://randomuser.me/api/portraits/men/80.jpg",
      bio: "20+ years experience in building scalable security solutions for enterprise organizations.",
      linkedIn: "#"
    }
  ];

  return (
    <div className="bg-slate-900 py-24">
      <div className="container mx-auto px-6">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-lg bg-slate-800 p-1">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'about'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'team'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Our Team
            </button>
          </div>
        </div>

        {/* About Section */}
        {activeTab === 'about' && (
          <div className="space-y-16">
            {/* Mission & Vision */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 rounded-full text-blue-400 mb-6">
                  <Shield size={16} className="mr-2" />
                  <span>Our Mission</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Securing the Digital Future of Enterprises Worldwide
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  At CyberDefense Solutions, we're committed to providing enterprise-grade security solutions that protect organizations from evolving cyber threats. Our mission is to enable businesses to operate securely in an increasingly complex digital landscape.
                </p>
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition-all">
                  Learn More
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="relative">
                <img
                  src="/images/about.jpg"
                  alt="CyberDefense Solutions Office"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50 rounded-xl" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all"
                >
                  <div className="text-blue-400 mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Our Core Values
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Uncompromising Security
                  </h4>
                  <p className="text-slate-400">
                    We maintain the highest security standards in everything we do.
                  </p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Excellence
                  </h4>
                  <p className="text-slate-400">
                    We strive for excellence in our solutions and service delivery.
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Client Success
                  </h4>
                  <p className="text-slate-400">
                    Your security success is our top priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeTab === 'team' && (
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Meet Our Leadership Team
              </h2>
              <p className="text-slate-400 text-lg">
                Industry experts committed to advancing enterprise security through innovation and excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all"
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-xl w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-50 transition-opacity rounded-xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-slate-400 mb-6">{member.bio}</p>
                  <div className="flex items-center gap-4">
                    <a
                      href={member.linkedIn}
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <button className="text-slate-400 hover:text-blue-400 transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Join the Team CTA */}
            <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Join Our Team
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented security professionals to join our mission of securing enterprise organizations worldwide.
              </p>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all">
                View Open Positions
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutTeamSection;