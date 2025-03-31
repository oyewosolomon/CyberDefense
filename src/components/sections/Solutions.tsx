import React from 'react';
import {
  ShieldCheck,
  BadgeCheck,
  HeartPulse,
  FileLock,
  CreditCard,
  Lock,
  Shield,
  Award
} from 'lucide-react';

const SolutionsSection = () => {
  const certifications = [
    {
      name: "ISO 27001",
      category: "Information Security",
      icon: <ShieldCheck className="w-12 h-12 text-blue-400" />,
      year: "2024"
    },
    {
      name: "SOC 2 Type II",
      category: "Security Controls",
      icon: <BadgeCheck className="w-12 h-12 text-blue-400" />,
      year: "2024"
    },
    {
      name: "HIPAA",
      category: "Healthcare",
      icon: <HeartPulse className="w-12 h-12 text-blue-400" />,
      year: "2024"
    },
    {
      name: "GDPR",
      category: "Data Protection",
      icon: <FileLock className="w-12 h-12 text-blue-400" />,
      year: "2024"
    },
    {
      name: "PCI DSS",
      category: "Payment Security",
      icon: <CreditCard className="w-12 h-12 text-blue-400" />,
      year: "2024"
    },
    {
      name: "NIST",
      category: "Cybersecurity",
      icon: <Lock className="w-12 h-12 text-blue-400" />,
      year: "2024"
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
            Our platform maintains the highest level of security certifications and compliance standards in the industry.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-500 transition-all text-center"
            >
              <div className="flex justify-center mb-4">{cert.icon}</div>
              <h3 className="text-white font-semibold mb-2">{cert.name}</h3>
              <p className="text-slate-400 text-sm mb-2">{cert.category}</p>
              <p className="text-blue-400 text-sm">Verified {cert.year}</p>
            </div>
          ))}
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
