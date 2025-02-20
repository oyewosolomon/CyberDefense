import React from 'react';
import { Shield, CheckCircle, Award } from 'lucide-react';

const SolutionsSection = () => {
  const certifications = [
    {
      name: "ISO 27001",
      category: "Information Security",
      icon: "/api/placeholder/80/80",
      year: "2024"
    },
    {
      name: "SOC 2 Type II",
      category: "Security Controls",
      icon: "/api/placeholder/80/80",
      year: "2024"
    },
    {
      name: "HIPAA",
      category: "Healthcare",
      icon: "/api/placeholder/80/80",
      year: "2024"
    },
    {
      name: "GDPR",
      category: "Data Protection",
      icon: "/api/placeholder/80/80",
      year: "2024"
    },
    {
      name: "PCI DSS",
      category: "Payment Security",
      icon: "/api/placeholder/80/80",
      year: "2024"
    },
    {
      name: "NIST",
      category: "Cybersecurity",
      icon: "/api/placeholder/80/80",
      year: "2024"
    }
  ];

  const complianceStats = [
    {
      label: "Security Controls",
      value: "500+"
    },
    {
      label: "Compliance Rate",
      value: "100%"
    },
    {
      label: "Annual Audits",
      value: "12+"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 rounded-full text-blue-400 mb-6">
            <Shield size={16} className="mr-2" />
            <span>Industry Certifications</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Compliance & Security Certifications
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our platform maintains the highest level of security certifications and compliance standards in the industry
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-500 transition-all text-center"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={cert.icon}
                  alt={cert.name}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-white font-semibold mb-2">{cert.name}</h3>
              <p className="text-slate-400 text-sm mb-2">{cert.category}</p>
              <p className="text-blue-400 text-sm">Verified {cert.year}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <div className="grid md:grid-cols-3 gap-8">
            {complianceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all">
            <Award className="w-5 h-5 mr-2" />
            Download Security Whitepaper
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;