import React from 'react';
import { Shield, Lock, Clock, AlertCircle, Server, UserCheck } from 'lucide-react';

// Define the type for the FeatureCard props
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  return (
    <div className="bg-slate-900 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Enterprise Security Platform
          </h2>
          <p className="text-slate-400 text-lg">
            Our comprehensive security solution combines cutting-edge technology with expert human intelligence to protect your organization 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-blue-400" />}
            title="Zero-Trust Architecture"
            description="Implement complete verification at every stage of digital interaction, ensuring maximum security across your organization."
          />
          <FeatureCard
            icon={<Clock className="w-12 h-12 text-green-400" />}
            title="15-Minute Response"
            description="Our expert team responds to and contains security incidents within 15 minutes, minimizing potential damage."
          />
          <FeatureCard
            icon={<Lock className="w-12 h-12 text-purple-400" />}
            title="Military-Grade Encryption"
            description="Protect your data with the same encryption standards used by military organizations worldwide."
          />
          <FeatureCard
            icon={<AlertCircle className="w-12 h-12 text-red-400" />}
            title="Threat Detection"
            description="Advanced AI-powered system that identifies and blocks over 1 million threats daily before they reach your network."
          />
          <FeatureCard
            icon={<Server className="w-12 h-12 text-yellow-400" />}
            title="24/7 Monitoring"
            description="Continuous monitoring of your systems with real-time alerts and automated response protocols."
          />
          <FeatureCard
            icon={<UserCheck className="w-12 h-12 text-teal-400" />}
            title="Access Control"
            description="Granular access controls and user authentication ensuring only authorized personnel can access sensitive resources."
          />
        </div>
      </div>
    </div>
  );
};

// Define the FeatureCard component with TypeScript props
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:transform hover:-translate-y-2">
      <div className="bg-slate-900/50 p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

export default Features;