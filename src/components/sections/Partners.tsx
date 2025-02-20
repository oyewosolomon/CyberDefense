import React, { useState } from 'react';
import { Building2, ArrowRight, Shield, ChevronRight, ExternalLink, Check } from 'lucide-react';

const Partnerships = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      company: "Global Financial Corp",
      industry: "Financial Services",
      logo: "/images/giant.png",
      metrics: {
        "Threats Blocked": "500K+",
        "Response Time": "< 10 min",
        "Cost Savings": "45%"
      },
      quote: "CyberDefense Solutions transformed our security infrastructure, providing enterprise-grade protection that scales with our needs.",
      author: "John Smith",
      role: "Chief Information Security Officer"
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      logo: "/images/giant.png",
      metrics: {
        "HIPAA Compliance": "100%",
        "Data Protected": "50TB+",
        "Security Score": "99.9%"
      },
      quote: "Their zero-trust architecture and HIPAA compliance expertise have been crucial for our healthcare data protection requirements.",
      author: "Sarah Johnson",
      role: "VP of Technology"
    },
    {
      company: "TechGiant Corp",
      industry: "Technology",
      logo: "/images/giant.png",
      metrics: {
        "Uptime": "99.99%",
        "API Calls Secured": "1B+",
        "Incident Reduction": "85%"
      },
      quote: "The scalability and reliability of their platform have been exceptional. It's exactly what we needed for our global operations.",
      author: "Mike Chen",
      role: "Director of Security"
    }
  ];

  const partners = [
    {
      name: "Microsoft",
      logo: "https://logo.clearbit.com/microsoft.com",
      type: "Technology Partner"
    },
    {
      name: "AWS",
      logo: "https://logo.clearbit.com/amazonaws.com",
      type: "Cloud Partner"
    },
    {
      name: "Salesforce",
      logo: "https://logo.clearbit.com/salesforce.com",
      type: "Integration Partner"
    },
    {
      name: "Oracle",
      logo: "https://logo.clearbit.com/oracle.com",
      type: "Technology Partner"
    },
    {
      name: "ServiceNow",
      logo: "https://logo.clearbit.com/servicenow.com",
      type: "Integration Partner"
    },
    {
      name: "Google Cloud",
      logo: "https://logo.clearbit.com/cloud.google.com",
      type: "Cloud Partner"
    }
  ];

  const integrations = [
    {
      category: "Identity & Access",
      solutions: ["Okta", "Azure AD", "OneLogin", "Ping Identity"]
    },
    {
      category: "Cloud Platforms",
      solutions: ["AWS", "Azure", "GCP", "IBM Cloud"]
    },
    {
      category: "SIEM Solutions",
      solutions: ["Splunk", "IBM QRadar", "LogRhythm", "Exabeam"]
    },
    {
      category: "DevOps Tools",
      solutions: ["Jenkins", "GitLab", "Docker", "Kubernetes"]
    }
  ];

  return (
    <div className="bg-slate-900 py-24">
      <div className="container mx-auto px-6">
        {/* Success Stories */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 rounded-full text-blue-400 mb-6">
              <Building2 size={16} className="mr-2" />
              <span>Success Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-slate-400 text-lg">
              See how leading organizations strengthen their security posture with CyberDefense Solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {successStories.map((story, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`text-left p-6 rounded-xl transition-all ${
                  activeStory === index
                    ? 'bg-blue-600 border-2 border-blue-400'
                    : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
                }`}
              >
                <img
                  src={story.logo}
                  alt={story.company}
                  className="mb-4"
                />
                <h3 className={`text-xl font-semibold mb-2 ${
                  activeStory === index ? 'text-white' : 'text-white'
                }`}>
                  {story.company}
                </h3>
                <p className={
                  activeStory === index ? 'text-blue-100' : 'text-slate-400'
                }>
                  {story.industry}
                </p>
              </button>
            ))}
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <blockquote className="text-xl text-white italic mb-6">
                  "{successStories[activeStory].quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">
                    {successStories[activeStory].author}
                  </div>
                  <div className="text-slate-400">
                    {successStories[activeStory].role}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(successStories[activeStory].metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">
                      {value}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Strategic Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <div className="text-center">
                  <div className="text-white font-medium mb-1">{partner.name}</div>
                  <div className="text-slate-400 text-sm">{partner.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Enterprise Integrations
            </h2>
            <p className="text-slate-400">
              Seamlessly integrate with your existing security and business tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-xl font-semibold text-white mb-6">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Integration CTA */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all">
              View All Integrations
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;