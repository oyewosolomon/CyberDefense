import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const ComplianceSection = () => {
  const certifications = [
    {
      name: "ISO 27001",
      description: "Information Security Management",
      icon: "/api/placeholder/48/48"
    },
    {
      name: "SOC 2 Type II",
      description: "Security & Privacy Controls",
      icon: "/api/placeholder/48/48"
    },
    {
      name: "HIPAA",
      description: "Healthcare Data Protection",
      icon: "/api/placeholder/48/48"
    },
    {
      name: "GDPR",
      description: "EU Data Protection",
      icon: "/api/placeholder/48/48"
    }
  ];

  const standards = [
    "AES-256 Encryption",
    "Zero Trust Network",
    "24/7 SOC Monitoring",
    "Multi-Factor Authentication",
    "Regular Penetration Testing",
    "Automated Threat Detection"
  ];

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Certifications */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 rounded-full text-blue-400 mb-6">
              <Shield size={16} className="mr-2" />
              <span>Industry-Leading Compliance</span>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Meeting the Highest Security Standards
            </h2>
            
            <p className="text-slate-400 mb-12">
              Our platform adheres to international security standards and maintains compliance with major regulatory frameworks.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all"
                >
                  <img
                    src={cert.icon}
                    alt={cert.name}
                    className="mb-4"
                  />
                  <h3 className="text-white font-semibold mb-2">{cert.name}</h3>
                  <p className="text-slate-400 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Standards */}
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Security Standards & Protocols
            </h3>
            
            <div className="space-y-6">
              {standards.map((standard, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                  <span className="text-slate-300">{standard}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Download Security Whitepaper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;