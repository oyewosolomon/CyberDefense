import React, { useState, useEffect } from 'react';
import { Shield, Lock, Clock, Building, ChevronRight } from 'lucide-react';

// Define the type for the StatsCard props
interface StatsCardProps {
  icon: React.ReactNode;
  number: string | number;
  label: string;
}

const Hero: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  
  // Animate threat counter
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev + 17) % 1000000);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="aspect-square border border-slate-600" />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 rounded-full text-blue-400">
              <Shield size={16} className="mr-2" />
              <span>Trusted by 500+ Enterprise Organizations</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Enterprise-Grade Security For The Modern Age
            </h1>
            
            <p className="text-xl text-slate-300">
              Protecting your digital assets with military-grade encryption and zero-trust architecture. Respond to threats in minutes, not hours.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center transition-all transform hover:scale-105">
                Get Started
                <ChevronRight size={20} className="ml-2" />
              </button>
              <button className="px-8 py-4 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium flex items-center transition-all">
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <StatsCard 
              icon={<Lock className="w-8 h-8 text-blue-400" />}
              number={counter.toLocaleString()}
              label="Threats Blocked Today"
            />
            <StatsCard 
              icon={<Clock className="w-8 h-8 text-green-400" />}
              number="15"
              label="Minute Response Time"
            />
            <StatsCard 
              icon={<Building className="w-8 h-8 text-purple-400" />}
              number="500+"
              label="Enterprise Clients"
            />
            <StatsCard 
              icon={<Shield className="w-8 h-8 text-yellow-400" />}
              number="99.99%"
              label="Uptime Guaranteed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Define the StatsCard component with TypeScript props
const StatsCard: React.FC<StatsCardProps> = ({ icon, number, label }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all">
    {icon}
    <div className="mt-4">
      <div className="text-3xl font-bold text-white">{number}</div>
      <div className="text-slate-400 mt-1">{label}</div>
    </div>
  </div>
);

export default Hero;