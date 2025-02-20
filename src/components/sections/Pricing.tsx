import React, { useState } from 'react';
import { Check, ChevronRight, Shield, Building, Building2 } from 'lucide-react';

// Define the type for the Plan object
interface Plan {
  name: string;
  icon: React.ReactNode;
  description: string;
  price: {
    annual: string;
    monthly: string;
  };
  features: string[];
  highlighted: boolean;
}

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [showDemoForm, setShowDemoForm] = useState<boolean>(false);

  const plans: Plan[] = [
    {
      name: "Enterprise",
      icon: <Building className="w-6 h-6" />,
      description: "For growing enterprises needing advanced security",
      price: {
        annual: "Contact Us",
        monthly: "Contact Us"
      },
      features: [
        "Up to 1000 endpoints",
        "24/7 threat monitoring",
        "Basic incident response",
        "Email support",
        "99.9% uptime SLA",
        "Basic compliance reporting"
      ],
      highlighted: false
    },
    {
      name: "Enterprise Plus",
      icon: <Building2 className="w-6 h-6" />,
      description: "Complete security solution for large organizations",
      price: {
        annual: "Contact Us",
        monthly: "Contact Us"
      },
      features: [
        "Unlimited endpoints",
        "24/7 threat monitoring & response",
        "15-min incident response",
        "Dedicated support team",
        "99.99% uptime SLA",
        "Advanced compliance suite",
        "Custom security policies",
        "API access"
      ],
      highlighted: true
    }
  ];

  return (
    <div className="bg-slate-900 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Enterprise Security Pricing
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Flexible security solutions tailored to your organization's needs
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-slate-800 p-1 rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md transition-all ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Annual (20% off)
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 transition-all ${
                plan.highlighted
                  ? 'bg-blue-600 border-2 border-blue-400'
                  : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                {plan.icon}
                <h3 className={`text-xl font-bold ${
                  plan.highlighted ? 'text-white' : 'text-white'
                }`}>
                  {plan.name}
                </h3>
              </div>
              
              <p className={`mb-6 ${
                plan.highlighted ? 'text-blue-100' : 'text-slate-400'
              }`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <div className="text-3xl font-bold text-white">
                  {plan.price[billingCycle]}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${
                      plan.highlighted ? 'text-blue-200' : 'text-green-400'
                    }`} />
                    <span className={
                      plan.highlighted ? 'text-blue-100' : 'text-slate-300'
                    }>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowDemoForm(true)}
                className={`w-full py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Request Demo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise Notice */}
        <div className="max-w-3xl mx-auto text-center bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-slate-400 mb-6">
            Our enterprise solutions are tailored to your organization's specific security needs. Contact our sales team for a custom quote.
          </p>
          <button
            onClick={() => setShowDemoForm(true)}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
          >
            Contact Enterprise Sales
          </button>
        </div>

        {/* Demo Request Form Modal */}
        {showDemoForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-900 rounded-xl p-8 max-w-xl w-full border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Request a Demo
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 text-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 text-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-2">Work Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 text-white"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 text-white"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 text-white"
                    rows={4}
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
                  >
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDemoForm(false)}
                    className="px-6 py-4 border border-slate-700 hover:border-slate-600 text-white rounded-lg font-medium transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingSection;