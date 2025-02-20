import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// Define the type for the AnimatedStat props
interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
  isVisible: boolean;
}

const StatsAndCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-24">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div id="stats-section" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <AnimatedStat
            value={1000000}
            suffix="+"
            label="Threats Blocked Daily"
            isVisible={isVisible}
          />
          <AnimatedStat
            value={500}
            suffix="+"
            label="Enterprise Clients"
            isVisible={isVisible}
          />
          <AnimatedStat
            value={99.99}
            suffix="%"
            label="System Uptime"
            isVisible={isVisible}
          />
          <AnimatedStat
            value={15}
            suffix="min"
            label="Response Time"
            isVisible={isVisible}
          />
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ enterprises that trust CyberDefense Solutions for their security needs. Schedule a demo today and see our platform in action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium flex items-center hover:bg-blue-50 transition-colors">
              Schedule Demo
              <ArrowRight size={20} className="ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define the AnimatedStat component with TypeScript props
const AnimatedStat: React.FC<AnimatedStatProps> = ({ value, suffix = '', label, isVisible }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
      <div className="text-4xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-400">{label}</div>
    </div>
  );
};

export default StatsAndCTA;