import React, { useState } from 'react';
import { Star, ChevronRight, Building2, Shield, Lock } from 'lucide-react';

// Define the type for the Testimonial object
interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

// Define the type for the CaseStudy object
interface CaseStudy {
  title: string;
  company: string;
  metrics: { label: string; value: string }[];
  icon: React.ReactNode;
}

const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'testimonials' | 'cases'>('testimonials');

  return (
    <div className="bg-slate-900 py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-400 text-lg">
            See how leading organizations strengthen their security posture with CyberDefense Solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-slate-800 p-1">
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'testimonials'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Client Testimonials
            </button>
            <button
              onClick={() => setActiveTab('cases')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'cases'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Case Studies
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8">
          {activeTab === 'testimonials' ? (
            <TestimonialsGrid />
          ) : (
            <CaseStudiesGrid />
          )}
        </div>
      </div>
    </div>
  );
};

const TestimonialsGrid: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "CISO at TechCorp Global",
      company: "TechCorp Global",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      content: "CyberDefense Solutions has transformed our security infrastructure. Their 15-minute response time has saved us countless times from potential breaches.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Head of IT Security",
      company: "FinanceStream",
      image: "https://randomuser.me/api/portraits/men/58.jpg",
      content: "The zero-trust architecture implementation was seamless. We've seen a 75% reduction in security incidents since partnering with them.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "CTO",
      company: "HealthTech Solutions",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      content: "Their military-grade encryption and compliance expertise have been crucial for our healthcare data protection requirements.",
      rating: 5
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all"
        >
          <div className="flex items-center mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="text-white font-medium">{testimonial.name}</h4>
              <p className="text-slate-400 text-sm">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-slate-300 mb-4">{testimonial.content}</p>
          <div className="flex items-center text-blue-400 text-sm">
            <Building2 className="w-4 h-4 mr-2" />
            {testimonial.company}
          </div>
        </div>
      ))}
    </div>
  );
};

const CaseStudiesGrid: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      title: "Financial Services Security Transformation",
      company: "Major European Bank",
      metrics: [
        { label: "Threat Detection Rate", value: "99.99%" },
        { label: "Response Time", value: "< 15 min" },
        { label: "Security Incidents", value: "-85%" }
      ],
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Healthcare Data Protection Protocol",
      company: "US Healthcare Network",
      metrics: [
        { label: "Compliance Rate", value: "100%" },
        { label: "Data Encryption", value: "256-bit" },
        { label: "Access Control", value: "Zero-Trust" }
      ],
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: "Tech Enterprise Security Scale-up",
      company: "Global SaaS Provider",
      metrics: [
        { label: "Coverage", value: "100%" },
        { label: "Uptime", value: "99.99%" },
        { label: "Cost Savings", value: "45%" }
      ],
      icon: <Building2 className="w-8 h-8" />
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map((study, index) => (
        <div
          key={index}
          className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all group"
        >
          <div className="text-blue-400 mb-6">{study.icon}</div>
          <h4 className="text-xl font-semibold text-white mb-2">{study.title}</h4>
          <p className="text-slate-400 mb-6">{study.company}</p>
          
          <div className="space-y-4">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className="text-slate-400">{metric.label}</span>
                <span className="text-white font-medium">{metric.value}</span>
              </div>
            ))}
          </div>
          
          <button className="mt-8 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
            Read Full Case Study
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;